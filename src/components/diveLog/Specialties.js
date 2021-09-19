import React from "react";


export const Specialties = ({ diveCopy, setDive }) => {
    return (<>
        <h2>Specialties</h2>
        <div className="specialties">
            <input type="checkbox" className="logCheckbox" onChange={(event) => {
                const copy = { ...diveCopy }
                copy.isAltitude = event.target.checked
                setDive(copy)
            }} />
            <label className="checkboxLabel">Altitude</label>
            <input type="checkbox" className="logCheckbox" onChange={(event) => {
                const copy = { ...diveCopy }
                copy.isCave = event.target.checked
                setDive(copy)
            }} />
            <label className="checkboxLabel">Cave</label>

            <input type="checkbox" checked={diveCopy.depth > 60 ? true : false} className="logCheckbox" onChange={(event) => {
                const copy = { ...diveCopy }
                copy.isDeep = event.target.checked
                setDive(copy)
            }} />
            <label className="checkboxLabel">Deep</label>

            <input type="checkbox" className="logCheckbox" onChange={(event) => {
                const copy = { ...diveCopy }
                copy.isDrift = event.target.checked
                setDive(copy)
            }} />
            <label className="checkboxLabel">Drift</label>
            <div>

                <input type="checkbox" className="logCheckbox" onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.isFFM = event.target.checked
                    setDive(copy)
                }} />
                <label className="checkboxLabel">Full Face Mask</label>

                <input type="checkbox" className="logCheckbox" onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.isNav = event.target.checked
                    setDive(copy)
                }} />
                <label className="checkboxLabel">Navigation</label>

                <input type="checkbox" className="logCheckbox" onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.isNight = event.target.checked
                    setDive(copy)
                }} />
                <label className="checkboxLabel">Night</label>
            </div>

            <div>
                <input type="checkbox" className="logCheckbox" onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.isN32 = event.target.checked
                    setDive(copy)
                }} />
                <label className="checkboxLabel">Nitrox 32</label>

                <input type="checkbox" className="logCheckbox" onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.isN36 = event.target.checked
                    setDive(copy)
                }} />
                <label className="checkboxLabel">Nitrox 36</label>

                <input type="checkbox" className="logCheckbox" onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.isRebreather = event.target.checked
                    setDive(copy)
                }} />
                <label className="checkboxLabel">Rebreather</label>
            </div>

            <div>
                <input type="checkbox" className="logCheckbox" onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.isSearch = event.target.checked
                    setDive(copy)
                }} />
                <label className="checkboxLabel">Search & Recovery</label>

                <input type="checkbox" className="logCheckbox" onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.isSidemount = event.target.checked
                    setDive(copy)
                }} />
                <label className="checkboxLabel">Sidemount</label>

                <input type="checkbox" className="logCheckbox" onChange={(event) => {
                    const copy = { ...diveCopy }
                    copy.isWreck = event.target.checked
                    setDive(copy)
                }} />
                <label className="checkboxLabel">Wreck</label>
            </div>

        </div>
    </>
    )
}