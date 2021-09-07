import React from "react"
import { Route } from "react-router-dom"
import { DiveLog } from "../diveLog/DiveLog"
import { LogNewDive } from "../diveLog/LogNewDive"
import { Gear } from "../gear/Gear"
import { DiverProfile } from "../profile/DiverProfile"
import { Home } from "./Home"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/divelog">
                <DiveLog />
            </Route>
            <Route path="/gear">
                <Gear />
            </Route>
            <Route path="/profile">
                <DiverProfile />
            </Route>
            <Route path="/logdive">
                <LogNewDive />
            </Route>
        </>)
}
