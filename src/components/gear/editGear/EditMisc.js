import React, { useState } from "react";

export const EditMisc = ({ currentGear, updateGear }) => {
    const [toggle, setToggle] = useState(false)
    const toggleList = () => toggle !== true ? true : false
    const toggled = toggleList()

    return (
        <>
            <h2 className="gearCat">Misc
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
                                    <input type="checkbox" checked={currentGear.dryBag} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.dryBag = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Dry Bag</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.toolKit} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.toolKit = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Tool Kit</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={currentGear.defog} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.defog = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Mask Defogger</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.towel} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.towel = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Towel</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={currentGear.sunglasses} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.sunglasses = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Sunglasses</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.waterBottle} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.waterBottle = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Water Bottle</label>
                                </li>
                            </ul>
                        </div>
                    </section>
                </>
            }
        </>
    )
}