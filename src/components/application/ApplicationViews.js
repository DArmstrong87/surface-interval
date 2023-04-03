import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dive } from "../diveLog/Dive"
import { DiveLog } from "../diveLog/DiveLog"
import { EditDive } from "../diveLog/EditDive"
import { PhotoGallery } from "../diveLog/imageGallery/PhotoGallery"
import { LogNewDive } from "../diveLog/LogNewDive"
import { DivePlanner } from "../divePlanner/DivePlanner"
import { CreateGearSet } from "../gear/CreateGear"
import { EditGearSet } from "../gear/EditGear"
import { Gear } from "../gear/Gear"
import { Gearset } from "../gear/Gearset"
import { DiverProfile } from "../profile/DiverProfile"
import { Home } from "./Home"


export const ApplicationViews = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/divelog" element={<DiveLog />} />

                    <Route path="/logdive" element={<LogNewDive />} />

                    <Route path="/dives/edit/:diveId(\d+)" element={<EditDive />} />

                    <Route path="/dives/:diveId(\d+)" element={<Dive />} />

                    <Route path="/diveplanner" element={<DivePlanner />} />

                    <Route exact path="/gear" element={<Gear />} />

                    <Route exact path="/gear/:gearId(\d+)" element={<Gearset />} />

                    <Route path="/addgear" element={<CreateGearSet />} />

                    <Route path="/gear/edit/:gearId(\d+)" element={<EditGearSet />} />

                    <Route path="/profile" element={<DiverProfile />} />

                    <Route path="/photoGallery" element={<PhotoGallery />} />

                </Routes>
            </BrowserRouter>
        </>)
}
