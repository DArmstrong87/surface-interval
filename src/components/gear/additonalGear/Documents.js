import React, { useState } from "react";

export const Documents = ({ gearCopy, setNewGear }) => {
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
                                    <input type="checkbox" checked={gearCopy.itinerary} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.itinerary = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Itinerary</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.logbook} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.logbook = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Log book</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.vaxRec} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.vaxRec = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Vaccination Record</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={gearCopy.maps} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.maps = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Maps</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.planeTicket} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.planeTicket = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Plane ticket</label>
                                </li>
                            </ul>
                        </div>

                        <div className="specialtyColumn">
                            <ul className="specialtyList">
                                <li>
                                    <input type="checkbox" checked={gearCopy.passport} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.passport = event.target.checked
                                        setNewGear(copy)
                                    }} />
                                    <label className="checkboxLabel">Passport</label>
                                </li>
                                <li>
                                    <input type="checkbox" checked={gearCopy.travelIns} className="logCheckbox" onChange={(event) => {
                                        const copy = { ...gearCopy }
                                        copy.travelIns = event.target.checked
                                        setNewGear(copy)
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