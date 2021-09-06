import React from "react"
import { Redirect, Route } from "react-router"
import { ApplicationViews } from "./components/application/ApplicationViews"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { NavBar } from "./components/nav/NavBar"

export const SurfaceInterval = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("si_user")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)