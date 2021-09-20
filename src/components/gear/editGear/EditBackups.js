import React, { useState } from "react";

export const EditBackups = ({ currentGear, updateGear }) => {
    const [toggle, setToggle] = useState(false)

    const toggleList = () => toggle !== true ? true : false
    const toggled = toggleList()

    return (
        <>
            <h2 className="gearCat">Backups
                <button className="toggleButton" onClick={() => setToggle(toggled)}>
                    {toggle === true ? '-' : '+'}
                </button>
            </h2>
            {toggle !== true ? '' :
                <>
                    <section className="specialties">
                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={currentGear.finStrap} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.finStrap = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Fin strap</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.mouthpiece} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.mouthpiece = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Reg mouthpiece</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={currentGear.maskBackup} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.maskBackup = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Mask</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.oRings} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.oRings = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">O-Rings</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={currentGear.maskStrap} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.maskStrap = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Mask strap</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.zipTies} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.zipTies = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Zip ties</label>
                                </li>
                            </ul>
                        </div>
                    </section>
                </>
            }
        </>
    )
}