import React from "react"
import { DiveStates } from "./DiveLogic"
import "./DivePlanForm.css"

export const DivePlannerForm = () => {

    return (
        <article className="divePlannerContainer">
            <section >
                <div>
                    <h2>Dive 1</h2>
                </div>
            </section>
            <DiveStates />
            {/* <section className="inputs-flag">
                <div>
                    <fieldset>
                        <label>Depth</label>
                        <input type="number" />ft
                    </fieldset>
                    <fieldset>
                        <label>Time</label>
                        <input type="number" />min
                    </fieldset>
                    <button>Dive</button>
                </div>
                <div className="diveFlagGreen">
                    <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
                </div>
            </section> */}
        </article>
    )
}