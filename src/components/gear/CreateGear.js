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
    const [gearCopy, setNewGear] = useState({ userId: parseInt(localStorage.getItem('si_user')), })

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