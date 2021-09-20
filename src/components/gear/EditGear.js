import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { getCurrentGearSet } from "../application/ApiManager";
import "../diveLog/LogNewDive.css";
import "./CreateGear.css"
import { EditBackups } from "./editGear/EditBackups";
import { EditDocuments } from "./editGear/EditDocuments";
import { EditEssentials } from "./editGear/EditEssentials";
import { EditMisc } from "./editGear/EditMisc";
import { EditSafety } from "./editGear/EditSafety";
import { EditTech } from "./editGear/EditTech";

export const EditGearSet = () => {
    const history = useHistory()
    const { gearId } = useParams()

    const [currentGear, updateGear] = useState({
        userId: parseInt(localStorage.getItem('si_user')),
        // name: "",
        // bcd: "",
        // regulator: "",
        // octopus: "",
        // mask: "",
        // fins: "",
        // boots: "",
        // console: "",
        // computer: "",
        // exposureSuit: "",
        // weight: "",
        // tank: ""
    })

    useEffect(
        () => {
            getCurrentGearSet(gearId)
                .then(currentGear => {
                    updateGear(currentGear)
                })
        },
        [gearId]
    )

    const saveGear = (event) => {
        event.preventDefault()
        const updatedGear = {
            userId: currentGear.userId,
            name: currentGear.name,
            bcd: currentGear.bcd,
            regulator: currentGear.regulator,
            octopus: currentGear.octopus,
            mask: currentGear.mask,
            fins: currentGear.fins,
            boots: currentGear.boots,
            console: currentGear.console,
            computer: currentGear.computer,
            exposureSuit: currentGear.exposureSuit,
            weight: parseInt(currentGear.weight),
            tank: currentGear.tank,
            gloves: currentGear.gloves,
            hood: currentGear.hood,
            batteries: currentGear.batteries,
            camera: currentGear.camera,
            cameraAcc: currentGear.cameraAcc,
            chargers: currentGear.chargers,
            o2Analyzer: currentGear.o2Analyzer,
            power: currentGear.power,
            strobe: currentGear.strobe,
            torch: currentGear.torch,
            torchBackup: currentGear.torchBackup,
            finStrap: currentGear.finStrap,
            maskBackup: currentGear.maskBackup,
            maskStrap: currentGear.maskStrap,
            mouthpiece: currentGear.mouthpiece,
            oRings: currentGear.oRings,
            zipTies: currentGear.zipTies,
            itinerary: currentGear.itinerary,
            maps: currentGear.maps,
            passport: currentGear.passport,
            logbook: currentGear.logbook,
            planeTicket: currentGear.planeTicket,
            travelIns: currentGear.travelIns,
            vaxRec: currentGear.vaxRec,
            audSignal: currentGear.audSignal,
            firstAid: currentGear.firstAid,
            knife: currentGear.knife,
            meds: currentGear.meds,
            o2Kit: currentGear.o2Kit,
            sunscreen: currentGear.sunscreen,
            vizSignal: currentGear.vizSignal,
            wreckReel: currentGear.wreckReel,
            dryBag: currentGear.dryBag,
            defog: currentGear.defog,
            sunglasses: currentGear.sunglasses,
            toolKit: currentGear.toolKit,
            towel: currentGear.towel,
            waterBottle: currentGear.waterBottle
        }

        const fetchOption = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updatedGear)
        }

        return fetch(`http://localhost:8088/gear/${gearId}`, fetchOption)
            .then(
                () => {
                    history.push("/gear")
                }
            )
    }



    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Edit Gear Set</h2>
            </section>
        </article>

        <article className='diveFormContainer'>
            <section className='diveForm'>
                <fieldset className="gearName">
                    <input type="name" value={currentGear.name} placeholder={"Name Gear Set"} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.name = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>

                <EditEssentials currentGear={currentGear} updateGear={updateGear} />
                <EditTech currentGear={currentGear} updateGear={updateGear} />
                <EditBackups currentGear={currentGear} updateGear={updateGear} />
                <EditDocuments currentGear={currentGear} updateGear={updateGear} />
                <EditSafety currentGear={currentGear} updateGear={updateGear} />
                <EditMisc currentGear={currentGear} updateGear={updateGear} />

                <fieldset className="submit-cancel-buttons">
                    <button className="submitButton" type="submit" onClick={saveGear}>
                        Save Changes
                    </button>
                    <button className="cancelButton" onClick={() => {
                        history.push('/gear')
                    }}>
                        Cancel
                    </button>
                </fieldset>
            </section>
        </article>
    </>)
}