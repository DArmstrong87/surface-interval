import React from "react";

export const Misc = ({gearCopy, setNewGear}) => {
    return (
        <>
            <h2 className="gearCat">Misc</h2>
            <section className="specialties">
            <div className="specialtyColumn">
                <ul className="specialtyList">
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.dryBag = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Dry Bag</label>
                    </li>
                    <li>
                        <input type="checkbox" value="false" className="logCheckbox" onChange={(event) => {
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
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.defog = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Mask Defogger</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
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
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.sunglasses = event.target.checked
                            setNewGear(copy)
                        }} />
                        <label className="checkboxLabel">Sunglasses</label>
                    </li>
                    <li>
                        <input type="checkbox" className="logCheckbox" onChange={(event) => {
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
    )
}