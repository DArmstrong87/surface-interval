import React, { useState } from "react";
import { useHistory } from "react-router";
import { submitGear } from "../application/ApiManager";
import "../diveLog/LogNewDive.css";
import { Backups } from "./additonalGear/Backups";
import { Documents } from "./additonalGear/Documents";
import { Exposure } from "./additonalGear/Exposure";
import { Misc } from "./additonalGear/Misc";
import { Safety } from "./additonalGear/Safety";
import { Tech } from "./additonalGear/Tech";
import "./CreateGear.css"
import { EssentialGear } from "./EssentialGear";

export const CreateGearSet = () => {
    const history = useHistory()
    const [gearCopy, setNewGear] = useState({ 
        userId: parseInt(localStorage.getItem('si_user')),
        name: "Cold Water",
        bcd: "TUSA Soverin Alpha BC",
        regulator: "Sherwood Oasis",
        octopus: "Sherwood",
        mask: "Genesis Triview",
        fins: "Sherwood Triton Pro",
        boots: "",
        console: "",
        computer: "Amphos Air",
        camera: "Insta360",
        camAcc: "Dive case, selfie stick",
        chargers: "Phone, camera",
        exposureSuit: "Waterproof D9 Drysuit",
        weight: 24,
        tank: "TO RENT",
        gloves: "Waterproof G1 5mm",
        hood: "Waterproof H1 7mm Lavacore",
        batteries: "CR2450",
        strobe: "Trident Glo-Toob",
        torch: "Sherwood ST1000",
        torchBackup: "Sherwood ST1000",
        finStrap: true,
        mouthpiece: true,
        maskBackup: true,
        maskStrap: true,
        oRings: true,
        zipTies: true,
        audSignal: "Whistle on BCD",
        firstAid: true,
        knife: "Sea Elite Voyager",
        meds: "Excedrin, Salt Stick, Rizatriptan",
        sunscreen: "Sun Bum SPF50",
        vizSignal: "Surface sausage",
        wreckReel: ""
    })

    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Create Gear Set</h2>
            </section>
        </article>

        <article className='diveFormContainer'>
            <section className='diveForm'>
                <fieldset className="gearName">
                    <input type="name" 
                    value={gearCopy.name}
                    placeholder={"Name Gear Set"} onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.name = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>

                <EssentialGear gearCopy={gearCopy} setNewGear={setNewGear} />
                <Exposure gearCopy={gearCopy} setNewGear={setNewGear} />
                <Tech gearCopy={gearCopy} setNewGear={setNewGear} />
                <Backups gearCopy={gearCopy} setNewGear={setNewGear} />
                <Documents gearCopy={gearCopy} setNewGear={setNewGear} />
                <Safety gearCopy={gearCopy} setNewGear={setNewGear} />
                <Misc gearCopy={gearCopy} setNewGear={setNewGear} />

                <fieldset className="submit-cancel-buttons">
                    <button className="submitButton" type="submit"
                        onClick={(event) => submitGear(event, gearCopy)
                            .then(history.push("/gear"))
                        }>
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