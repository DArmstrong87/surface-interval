import React from "react";
import "./Login.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const LoginForm = () => {
    MySwal.fire({
        title: "Login",
        didOpen: () => {
            MySwal.clickConfirm()
        }
    }).then(() => {
        return MySwal.fire(<><h2>Login</h2>
            <input type="text" placeholder="username"></input>
            <input type="text" placeholder="password"></input>
            </>)
    })
}

export const Login = () => {
    return (<>
        <section className="loginForm">
            <h1>Surface Interval</h1>
            <div className="loginDiv">
                <button className="loginButton" onClick={LoginForm}>Login</button>
                <button className="createUserButton">Create User</button>
            </div>
        </section>
    </>
    )
}