import React from "react";
import './DivePlanner.css';

export const DivePlanner = () => {
    return (<>
        <article>
            <section className="divePlannerHeading">
                <h1>Plan the dive, dive the plan.</h1>
                <p>This dive planner uses the PADI Dive Table. It is designed for new Open Water students to practice their dive planning skills as well as anyone planning a single dive or multiple dives. The dive planner informs the diver if a planned dive is safe regarding nitrogen exposure. It can NOT predict diver behavior, dive conditions or in any way ensure dive safety prior to or during a dive. Remember to use a reliable dive computer and always dive within your limits.</p>
            </section>
        </article>

        <article className="divePlannerContainer">
            <section >
                <div>
                    <h2>Dive 1</h2>
                </div>
            </section>
            <section className="inputs-flag">
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
                <div>
                    <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
                </div>
            </section>
        </article>
    </>)
}