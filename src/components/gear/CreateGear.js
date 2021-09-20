import React, { useState } from "react";
import { useHistory } from "react-router";
import "../diveLog/LogNewDive.css";
import { Backups } from "./additonalGear/Backups";
import { Documents } from "./additonalGear/Documents";
import { Exposure } from "./additonalGear/Exposure";
import { Safety } from "./additonalGear/Safety";
import { Tech } from "./additonalGear/Tech";
import "./CreateGear.css"
import { EssentialGear } from "./EssentialGear";

export const CreateGearSet = () => {
    const history = useHistory()

    const [gearCopy, setNewGear] = useState({
        //Essential
        userId: parseInt(localStorage.getItem('si_user')),
        name: '',
        bcd: '',
        regulator: '',
        octopus: '',
        mask: '',
        fins: '',
        boots: '',
        console: '',
        computer: '',
        exposureSuit: '',
        weight: 0,
        tank: '',
        // Exposure
        gloves: '',
        hood: '',
        // Tech
        batteries: '',
        camera: '',
        cameraAcc: '',
        chargers: '',
        o2Analyzer: '',
        power: '',
        strobe: '',
        torch: '',
        torchBackup: '',
        // Backups
        finStrap: '',
        maskBackup: '',
        maskStrap: '',
        mouthpiece: '',
        oRings: '',
        zipTies: '',
        // Documents
        itinerary: '',
        maps: '',
        passport: '',
        logbook: '',
        planeTicket: '',
        travelIns: '',
        vaxRec: '',
        // Safety
        audSignal: '',
        firstAid: '',
        knife: '',
        meds: '',
        o2Kit: '',
        sunscreen: '',
        vizSignal: '',
        wreckReel: ''
    })

    const submitGear = (event) => {
        event.preventDefault()
        const newGear = {
            userId: gearCopy.userId,
            name: gearCopy.name,
            bcd: gearCopy.bcd,
            regulator: gearCopy.regulator,
            octopus: gearCopy.octopus,
            mask: gearCopy.mask,
            fins: gearCopy.fins,
            boots: gearCopy.boots,
            console: gearCopy.console,
            computer: gearCopy.computer,
            exposureSuit: gearCopy.exposureSuit,
            weight: parseInt(gearCopy.weight),
            tank: gearCopy.tank,
            gloves: gearCopy.gloves,
            hood: gearCopy.hood,
            batteries: gearCopy.batteries,
            camera: gearCopy.camera,
            cameraAcc: gearCopy.cameraAcc,
            chargers: gearCopy.chargers,
            o2Analyzer: gearCopy.o2Analyzer,
            power: gearCopy.power,
            strobe: gearCopy.strobe,
            torch: gearCopy.torch,
            torchBackup: gearCopy.torchBackup,
            finStrap: gearCopy.finStrap,
            maskBackup: gearCopy.maskBackup,
            maskStrap: gearCopy.maskStrap,
            mouthpiece: gearCopy.mouthpiece,
            oRings: gearCopy.oRings,
            zipTies: gearCopy.zipTies,
            itinerary: gearCopy.itinerary,
            maps: gearCopy.maps,
            passport: gearCopy.passport,
            logbook: gearCopy.logbook,
            planeTicket: gearCopy.planeTicket,
            travelIns: gearCopy.travelIns,
            vaxRec: gearCopy.vaxRec,
            audSignal: gearCopy.audSignal,
            firstAid: gearCopy.firstAid,
            knife: gearCopy.knife,
            meds: gearCopy.meds,
            o2Kit: gearCopy.o2Kit,
            sunscreen: gearCopy.sunscreen,
            vizSignal: gearCopy.vizSignal,
            wreckReel: gearCopy.wreckReel
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newGear)
        }

        return fetch("http://localhost:8088/gear", fetchOption)
            .then(
                () => {
                    history.push("/gear")
                }
            )
    }



    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Create Gear Set</h2>
            </section>
        </article>

        <article className='diveFormContainer'>
            <section className='diveForm'>
                <fieldset className="gearName">
                    <input type="name" placeholder={"Name Gear Set"} onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.name = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>

                <EssentialGear gearCopy={gearCopy} setNewGear={setNewGear} />
                <Exposure gearCopy={gearCopy} setNewGear={setNewGear} />
                <Tech gearCopy={gearCopy} setNewGear={setNewGear} />
                <Backups gearCopy={gearCopy} setNewGear={setNewGear} />
                <Documents gearCopy={gearCopy} setNewGear={setNewGear}/>
                <Safety gearCopy={gearCopy} setNewGear={setNewGear}/>

                <fieldset className="submit-cancel-buttons">
                    <button className="submitButton" type="submit" onClick={submitGear}>
                        Submit
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