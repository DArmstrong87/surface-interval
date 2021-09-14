import React from "react";
import './DivePlanner.css';
import { DivePlannerForm } from "./DivePlanForm";

export const DivePlanner = () => {
    return (<>
        <article>
            <section className="divePlannerHeading">
                <h1>Plan the dive, dive the plan.</h1>
                <p>This dive planner uses the PADI Dive Table. It is designed for new Open Water students to practice their dive planning skills as well as anyone planning a single dive or multiple dives. The dive planner informs the diver if a planned dive is safe regarding nitrogen exposure. It can NOT predict diver behavior, dive conditions or in any way ensure dive safety prior to or during a dive. Remember to use a reliable dive computer and always dive within your limits.</p>
            </section>
        </article>

        <DivePlannerForm />
    </>)
}