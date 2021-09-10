import React from "react"
import { Route } from "react-router-dom"
import { DiveLog } from "../diveLog/DiveLog"
import { EditDive } from "../diveLog/EditDive"
import { LogNewDive } from "../diveLog/LogNewDive"
import { CreateGearSet } from "../gear/CreateGear"
import { EditGearSet } from "../gear/EditGear"
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
            <Route exact path="/gear">
                <Gear />
            </Route>
            <Route path="/addgear">
                <CreateGearSet />
            </Route>
            <Route path="/gear/edit/:gearId(\d+)">
                <EditGearSet />
            </Route>
            <Route path="/profile">
                <DiverProfile />
            </Route>
            <Route path="/logdive">
                <LogNewDive />
            </Route>
            <Route path="/dives/edit/:diveId(\d+)">
                <EditDive />
            </Route>
        </>)
}
