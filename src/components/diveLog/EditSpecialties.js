import React from "react";

export const EditSpecialties = ({ currentDive, setDive }) => {
    return (<>
        <h2 className="diveNumber">Specialties</h2>
        <section className="specialties">
            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" value="false" checked={currentDive.isAltitude ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isAltitude = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Altitude</label>
                    </li>
                    <li>
                        <input type="checkbox" value="false" checked={currentDive.isDrift ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isDrift = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Drift</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isNav ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isNav = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Navigation</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isN36 ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isN36 = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Nitrox 36</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isSidemount ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isSidemount = event.target.checked
                            setDive(copy)
                        }} />

                        <label className="checkboxLabel">Sidemount</label>
                    </li>
                </ul>
            </div>

            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" checked={currentDive.isCave ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isCave = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Cave</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isDry ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isDry = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Drysuit</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isNight ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isNight = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Night</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isRebreather ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isRebreather = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Rebreather</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isWreck ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isWreck = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Wreck</label>
                    </li>
                </ul>
            </div>

            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" checked={currentDive.isDeep || currentDive.depth > 60 ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isDeep = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Deep</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isFFM ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isFFM = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Full Face Mask</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isN32 ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isN32 = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Nitrox 32</label>
                    </li>
                    <li>
                        <input type="checkbox" checked={currentDive.isSearch ? true : false} className="logCheckbox" onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.isSearch = event.target.checked
                            setDive(copy)
                        }} />
                        <label className="checkboxLabel">Search & Recovery</label>
                    </li>
                </ul>
            </div>
        </section>
    </>)
}