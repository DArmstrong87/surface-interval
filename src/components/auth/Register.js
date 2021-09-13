import React, { useRef, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Register.css"

export const Register = (props) => {
    const [user, setUser] = useState({})
    const conflictDialog = useRef()

    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${user.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }
    const handleRegister = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(user)
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                localStorage.setItem("si_user", createdUser.id)
                                history.push("/")
                            }
                        })
                }
                else {
                    conflictDialog.current.showModal()
                }
            })
    }

    const updateuser = (evt) => {
        const copy = { ...user }
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main className="register" style={{ textAlign: "center" }}>
            <div className="h1-div"><h1 className="h3 mb-3 font-weight-normal">Please Register for Surface Interval</h1></div>
            <dialog className="dialog dialog--password" ref={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
            </dialog>

            <section className="login--field">
                <form className="form--login" onSubmit={handleRegister}>
                    <fieldset>
                        <label htmlFor="name"> Full Name </label>
                        <input onChange={updateuser}
                            type="text" id="name" className="form-control"
                            placeholder="Enter your name" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="email"> Email address </label>
                        <input onChange={updateuser} type="email" id="email" className="form-control" placeholder="Email address" required />
                    </fieldset>
                    <fieldset>
                        <button type="submit"> Register </button>
                        <button onClick={()=> {history.push("/login")}}> Cancel</button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}