import React from "react";

export const Conditions = ({ diveCopy, setDive }) => {
    return (<>
        <h2 className="diveNumber">Dive & Water Conditions</h2>
        <section className="specialties">

            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isBoat = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Boat</label>
                    </li>
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isSurge = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Surge</label>
                    </li>
                </ul>
            </div>

            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isCurrent = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Current/Drift</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isDry = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Waves</label>
                    </li>
                </ul>
            </div>

            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isShore = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Shore</label>
                    </li>
                </ul>
            </div>
        </section>

        <fieldset>
            <label className="">Water Temperature</label>
            <input type="number" width="20px"
                onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.waterTemp = event.target.value
                    setDive(copy)
                }} />°F
        </fieldset>
    </>
    )
}