import React, { useState } from "react";
import { useHistory } from "react-router";
import "../diveLog/LogNewDive.css";
import "./CreateGear.css"

export const CreateGearSet = () => {
    const history = useHistory()

    const [gearCopy, setNewGear] = useState({
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
        weight: 0,
        tank: ""
    })

    const submitGear = (event) => {
        event.preventDefault()
        const newDive = {
            userId: localStorage.getItem('si_user'),
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
            tank: gearCopy.tank
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newDive)
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
                    <h3>Essentials</h3>
                <fieldset>
                    <label>BCD</label>
                    <input type="BCD" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.bcd = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Regulator</label>
                    <input type="Regulator" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.regulator = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Octopus</label>
                    <input type="Octopus" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.octopus = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Mask</label>
                    <input type="Mask" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.mask = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Fins</label>
                    <input type="Fins" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.fins = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Boots</label>
                    <input type="Boots" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.boots = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Computer</label>
                    <input type="Computer" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.computer = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Console</label>
                    <input type="Console" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.console = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Exposure Suit</label>
                    <input type="Exposure-Suit" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.exposureSuit = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Weight</label>
                    <input type="number" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.weight = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label>Tank</label>
                    <input type="Tank" onChange={(event) => {
                        const copy = { ...gearCopy }
                        copy.tank = event.target.value
                        setNewGear(copy)
                    }} />
                </fieldset>

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