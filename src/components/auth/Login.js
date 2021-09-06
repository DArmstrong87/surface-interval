import React from "react";
import "./Login.css"

export const Login = () => {
    return (<>
        <section className="loginForm">
            <h1>Surface Interval</h1>
            <div className="loginDiv">
                <button className="loginButton">Login</button>
                <button className="createUserButton">Create User</button>
            </div>
        </section>
    </>
    )
}