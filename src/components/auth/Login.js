import React, { useRef, useState } from "react";
import "./Login.css"
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css"


// const LoginForm = () => {
//     MySwal.fire({
//         title: "Login",
//         didOpen: () => {
//             MySwal.clickConfirm()
//         }
//     }).then(() => {
//         return MySwal.fire(<><h2>Login</h2>
//             <input type="text" placeholder="username"></input>
//             <input type="text" placeholder="password"></input>
//         </>)
//     })
// }

// export const Login = () => {
//     return (<>
//         <section className="loginForm">
//             <h1>Surface Interval</h1>
//             <div className="loginDiv">
//                 <button className="loginButton" onClick={LoginForm}>Login</button>
//                 <button className="createUserButton">Create User</button>
//             </div>
//         </section>
//     </>
//     )
// }

export const Login = () => {
    const [email, set] = useState("")
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("si_user", exists.id)
                    history.push("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Surface Interval</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}