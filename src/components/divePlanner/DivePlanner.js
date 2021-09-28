import React, { useState } from "react";
import './DivePlanner.css';
import { DiveStates } from "./DiveStates";
import "./DivePlanForm.css"
import "./DivePlanFormN32.css"
import "./DivePlanFormN36.css"
import rdpFront from '../../images/RDPFront.jpg';
import rdpBack from '../../images/RDPBack.jpg';
import { DiveStatesN32 } from "./EANx32/DiveStatesN32";
import { DiveStatesN36 } from "./EANx36/DiveStatesN36";

export const DivePlanner = () => {
    const [air, setAir] = useState('air')

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

        <section className="air-selectors">
            <input type="radio" onClick={() => setAir('air')} checked={air === 'air'} />
            <label>Air</label>
            <input type="radio" onClick={() => setAir('EANx32')} checked={air === 'EANx32'} />
            <label>EANx32</label>
            <input type="radio" onClick={() => setAir('EANx36')} checked={air === 'EANx36'} />
            <label>EANx36</label>
        </section>


        {air === 'air' ? <article className="divePlannerContainer"><DiveStates /></article>
            : air === 'EANx32' ?
                <article className="divePlannerContainerN32"><DiveStatesN32 /></article>
                : air === 'EANx36' ?
                    <article className="divePlannerContainerN36"><DiveStatesN36 /></article> : ''}
    </>)
}