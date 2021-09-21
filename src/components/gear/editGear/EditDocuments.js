import React, { useState } from "react";

export const EditDocuments = ({ currentGear, updateGear }) => {
    const [toggle, setToggle] = useState(false)
    const toggleList = () => toggle !== true ? true : false
    const toggled = toggleList()

    return (
        <>
            <h2 className="gearCat">Documents
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
                                    <input type="checkbox" checked={currentGear.itinerary} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.itinerary = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Itinerary</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.logbook} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.logbook = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Log book</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.vaxRec} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.vaxRec = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Vaccination Record</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={currentGear.maps} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.maps = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Maps</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.planeTicket} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.planeTicket = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Plane ticket</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={currentGear.passport} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.passport = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Passport</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={currentGear.travelIns} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...currentGear }
                                        copy.travelIns = event.target.checked
                                        updateGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Travel Insurance</label>
                                </li>
                            </ul>
                        </div>
                    </section>
                </>
            }
        </>
    )
}