import React from "react";

export const Specialties = ({ diveCopy, setDive }) => {
    return (<>
        <h2 className="diveNumber">Specialties</h2>
        <section className="specialties">
            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isAltitude = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Altitude</label>
                    </li>
                    <li>
                        <input type="checkbox" value="false"
                            checked={diveCopy.isCurrent ? true : false} className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isDrift = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Drift</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isNav = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Navigation</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isN36 = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Nitrox 36</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
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
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isCave = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Cave</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isDry = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Drysuit</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isNight = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Night</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isRebreather = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Rebreather</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
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
                        <input type="checkbox" checked={diveCopy.depth > 60 ? true : false} className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isDeep = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Deep</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isFFM = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Full Face Mask</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isN32 = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Nitrox 32</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox"
                            onChange={(event) => {
                                const copy = { ...diveCopy }
                                copy.isSearch = event.target.checked
                                setDive(copy)
                            }} />
                        <label className="checkboxLabel">Search & Recovery</label>
                    </li>
                </ul>


            </div>
        </section>
    </>
    )
}