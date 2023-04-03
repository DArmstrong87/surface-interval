import React from "react"
import { Navigate, Route, Routes } from "react-router"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { NavBar } from "./components/nav/NavBar"
import { BrowserRouter } from "react-router-dom"
import { Dive } from "./components/diveLog/Dive"
import { DiveLog } from "./components/diveLog/DiveLog"
import { EditDive } from "./components/diveLog/EditDive"
import { PhotoGallery } from "./components/diveLog/imageGallery/PhotoGallery"
import { LogNewDive } from "./components/diveLog/LogNewDive"
import { DivePlanner } from "./components/divePlanner/DivePlanner"
import { CreateGearSet } from "./components/gear/CreateGear"
import { EditGearSet } from "./components/gear/EditGear"
import { Gear } from "./components/gear/Gear"
import { Gearset } from "./components/gear/Gearset"
import { DiverProfile } from "./components/profile/DiverProfile"
import { Home } from "./components/application/Home"

export const SurfaceInterval = () => (
    <>
        <BrowserRouter>
            {localStorage.getItem("si_user") ? "" : <Navigate to="/login" />}
            {localStorage.getItem("si_user") ? <NavBar /> : ""}

            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="divelog" element={<DiveLog />} />

                <Route path="logdive" element={<LogNewDive />} />

                <Route path="dives/edit/:diveId" element={<EditDive />} />

                <Route path="dives/:diveId" element={<Dive />} />

                <Route path="diveplanner" element={<DivePlanner />} />

                <Route exact path="gear" element={<Gear />} />

                <Route exact path="gear/:gearId" element={<Gearset />} />

                <Route path="/addgear" element={<CreateGearSet />} />

                <Route path="/gear/edit/:gearId" element={<EditGearSet />} />

                <Route path="/profile" element={<DiverProfile />} />

                <Route path="/photoGallery" element={<PhotoGallery />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    </>
)