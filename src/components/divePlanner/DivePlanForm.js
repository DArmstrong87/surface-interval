import React from "react"
import { DiveStates } from "./DiveLogic"
import "./DivePlanForm.css"

export const DivePlannerForm = () => {

    return (
        <article className="divePlannerContainer">

            <DiveStates />
        </article>
    )
}