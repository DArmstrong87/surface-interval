import React, { useState } from "react";

export const Backups = ({ gearCopy, setNewGear }) => {
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
                                    <input type="checkbox" checked={gearCopy.finStrap} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.finStrap = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Fin strap</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.mouthpiece} className="logCheckbox" onChange={(event) => {
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
                                    <input type="checkbox" checked={gearCopy.maskBackup} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.maskBackup = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Mask</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.oRings} className="logCheckbox" onChange={(event) => {
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
                                    <input type="checkbox" checked={gearCopy.maskStrap} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.maskStrap = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Mask strap</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.zipTies} className="logCheckbox" onChange={(event) => {
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
            }
        </>
    )
}