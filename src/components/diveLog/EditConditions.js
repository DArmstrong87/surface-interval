import React from "react";

export const EditConditions = ({ currentDive, setDive }) => {
    return (<>
        <h2 className="diveNumber">Dive & Water Conditions</h2>
        <section className="specialties">
            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" value="false"
                            checked={currentDive.isBoat ? true : false} className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...currentDive }
                                copy.isBoat = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Boat</label>
                    </li>
                    <li>
                        <input type="checkbox" value="false"
                            checked={currentDive.isSurge ? true : false} className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...currentDive }
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
                        <input type="checkbox" checked={currentDive.isCurrent ? true : false} className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...currentDive }
                                copy.isCurrent = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Current/Drift</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isWaves ? true : false} className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...currentDive }
                                copy.isWaves = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Waves</label>
                    </li>
                </ul>
            </div>

            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" checked={currentDive.isShore ? true : false} className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...currentDive }
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
            <input type="number" width="20px" value={currentDive.waterTemp}
                onChange={(event) => {
                    const copy = { ...currentDive }
                    copy.waterTemp = event.target.value
                    setDive(copy)
                }} />°F
        </fieldset>
    </>)
}