import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { getCurrentGearSet, saveGear } from "../application/ApiManager";
import "../diveLog/LogNewDive.css";
import "./CreateGear.css"
import { EditBackups } from "./editGear/EditBackups";
import { EditDocuments } from "./editGear/EditDocuments";
import { EditEssentials } from "./editGear/EditEssentials";
import { EditExposure } from "./editGear/EditExposure";
import { EditMisc } from "./editGear/EditMisc";
import { EditSafety } from "./editGear/EditSafety";
import { EditTech } from "./editGear/EditTech";

export const EditGearSet = () => {
    const history = useHistory()
    const { gearId } = useParams()
    const [currentGear, updateGear] = useState({})

    useEffect(
        () => {
            getCurrentGearSet(gearId)
                .then(currentGear => {
                    updateGear(currentGear)
                })
        },
        [gearId]
    )

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
                <EditExposure currentGear={currentGear} updateGear={updateGear} />
                <EditTech currentGear={currentGear} updateGear={updateGear} />
                <EditBackups currentGear={currentGear} updateGear={updateGear} />
                <EditDocuments currentGear={currentGear} updateGear={updateGear} />
                <EditSafety currentGear={currentGear} updateGear={updateGear} />
                <EditMisc currentGear={currentGear} updateGear={updateGear} />

                <fieldset className="submit-cancel-buttons">
                    <button className="submitButton" type="submit"
                        onClick={(event) => saveGear(event, currentGear, gearId).then(history.goBack())}>
                        Save Changes
                    </button>
                    <button className="cancelButton" onClick={() => {
                        history.goBack()
                    }}>Cancel
                    </button>
                </fieldset>
            </section>
        </article>
    </>)
}