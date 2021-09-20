import React from "react";

export const Documents = ({gearCopy, setNewGear}) => {
    return (
        <>
            <h2 className="gearCat">Documents</h2>
            <section className="specialties">
            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.itinerary = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Itinerary</label>
                    </li>
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.logbook = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Log book</label>
                    </li>
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox" onChange={(event) => {
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
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.maps = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Maps</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
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
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.passport = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Passport</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
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
    )
}