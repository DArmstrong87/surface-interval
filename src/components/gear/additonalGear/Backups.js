import React from "react";

export const Backups = ({gearCopy, setNewGear}) => {
    return (
        <>
            <h2 className="gearCat">Backups</h2>
            <section className="specialties">
            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.finStrap = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Fin strap</label>
                    </li>
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.mouthpiece = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Reg mouthpiece</label>
                    </li>
                </ul>
            </div>

            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.maskBackup = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Mask</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.oRings = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">O-Rings</label>
                    </li>
                </ul>
            </div>

            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.maskStrap = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Mask strap</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.zipTies = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Zip ties</label>
                    </li>
                </ul>
            </div>
        </section>
        </>
    )
}