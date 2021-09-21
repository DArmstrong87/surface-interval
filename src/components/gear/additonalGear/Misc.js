import React, { useState } from "react";

export const Misc = ({ gearCopy, setNewGear }) => {
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
                                    <input type="checkbox" checked={gearCopy.dryBag} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.dryBag = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Dry Bag</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.toolKit} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.toolKit = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Tool Kit</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={gearCopy.defog} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.defog = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Mask Defogger</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.towel} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.towel = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Towel</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={gearCopy.sunglasses} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.sunglasses = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Sunglasses</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.waterBottle} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.waterBottle = event.target.checked
                                        setNewGear(copy)
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