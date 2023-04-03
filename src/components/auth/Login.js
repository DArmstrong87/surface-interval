import React, { useRef, useState } from "react";
import "./Login.css"
import { Navigate } from "react-router";
import { existingUserCheck } from "../application/ApiManager";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {
    const [email, set] = useState("")
    const existDialog = useRef()
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        existingUserCheck(email)
            .then(exists => {
                if (exists !== null) {
                    console.log('user exists');
                    localStorage.setItem("si_user", exists.id);
                    return <Navigate to="/" replace={true} />
                    // navigate("/")
                } else {
                    existDialog.current.showModal()
                }
            })
    }


    return (
        <main className="container--login">
            <div className="h1-div"><h1>Surface Interval</h1></div>
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>

            <section className="login--field">
                <form className="form--login" onSubmit={handleLogin}>
                    <h2>Please sign in</h2>
                    <fieldset>
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
                    <div className="link--register">
                        <Link to="/register">Not a member yet?</Link>
                    </div>
                </form>
            </section>
        </main>
    )
}