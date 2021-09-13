import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { getCurrentGearSet } from "../application/ApiManager";
import "../diveLog/LogNewDive.css";
import "./CreateGear.css"

export const EditGearSet = () => {
    const history = useHistory()
    const { gearId } = useParams()

    const [currentGear, updateGear] = useState({
        userId: parseInt(localStorage.getItem('si_user')),
        name: "",
        bcd: "",
        regulator: "",
        octopus: "",
        mask: "",
        fins: "",
        boots: "",
        console: "",
        computer: "",
        exposureSuit: "",
        weight: "",
        tank: ""
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
            tank: currentGear.tank
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
                <h3>Essentials</h3>
                <fieldset>
                    <label>BCD</label>
                    <input type="BCD" value={currentGear.bcd} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.bcd = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Regulator</label>
                    <input type="Regulator" value={currentGear.regulator} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.regulator = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Octopus</label>
                    <input type="Octopus" value={currentGear.octopus} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.octopus = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Mask</label>
                    <input type="Mask" value={currentGear.mask} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.mask = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Fins</label>
                    <input type="Fins" value={currentGear.fins} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.fins = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Boots</label>
                    <input type="Boots" value={currentGear.boots} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.boots = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Computer</label>
                    <input type="Computer" value={currentGear.computer} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.computer = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Console</label>
                    <input type="Console" value={currentGear.console} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.console = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Exposure Suit</label>
                    <input type="Exposure-Suit" value={currentGear.exposureSuit} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.exposureSuit = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Weight</label>
                    <input type="number" value={currentGear.weight} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.weight = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Tank</label>
                    <input type="Tank" value={currentGear.tank} onChange={(event) => {
                        const copy = { ...currentGear }
                        copy.tank = event.target.value
                        updateGear(copy)
                    }} />
                </fieldset>

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