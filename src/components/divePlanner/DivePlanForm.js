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
        </article>
    )
}