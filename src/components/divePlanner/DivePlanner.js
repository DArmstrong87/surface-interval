import React from "react";
import './DivePlanner.css';
import { DiveStates } from "./DiveStates";
import "./DivePlanForm.css"
import rdpFront from '../../images/RDPFront.jpg';
import rdpBack from '../../images/RDPBack.jpg';

export const DivePlanner = () => {
    return (<>
        <article>
            <section className="divePlannerHeading">
                <h1>Plan the dive, dive the plan.</h1>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    This dive planner uses the PADI Dive Table. It is designed for new Open Water students to practice their dive planning skills as well as anyone planning a single dive or multiple dives. The dive planner informs the diver if a planned dive is relatively safe regarding nitrogen exposure only.
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    Other factors can increase risk of developing decompression illness beyond depth, time and ascent rate, including dehydration, thermal stress, exertion, general fitness, post-dive air travel, etc. It can NOT predict diver behavior, dive conditions or in any way ensure dive safety prior to or during a dive. Remember to use a reliable dive computer and always dive within your limits.
                </p>
            </section>
        </article>

        <section className="RDP-container">
            <div className="RDP">
                <a href="http://localhost:3000/static/media/RDPFront.9ed0326a.jpg">
                    <img src={rdpFront} alt="RDP Front" />
                </a>
            </div>
            <div className="RDP">
                <a href="http://localhost:3000/static/media/RDPBack.d0c2f2df.jpg">
                    <img src={rdpBack} alt="RDP Back" />
                </a>
            </div>
        </section>

        <article className="divePlannerContainer">
            <DiveStates />
        </article>
    </>)
}