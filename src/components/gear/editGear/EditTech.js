import React, { useState } from "react";

export const EditTech = ({ currentGear, updateGear }) => {
    const [toggle, setToggle] = useState(false)
    const toggleList = () => toggle !== true ? true : false
    const toggled = toggleList()

    return (
        <>
            <h2 className="gearCat">Tech
                <button className="toggleButton" onClick={() => setToggle(toggled)}>
                    {toggle === true ? '-' : '+'}
                </button>
            </h2>
            {toggle !== true ? '' :
                <>
                    <fieldset>
                        <label>Batteries</label>
                        <input type="text" value={currentGear.batteries} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.batteries = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Camera</label>
                        <input type="text" value={currentGear.camera} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.camera = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Camera Accessories</label>
                        <input type="text" value={currentGear.camAcc} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.camAcc = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Chargers</label>
                        <input type="text" value={currentGear.chargers} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.chargers = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>O2 Analyzer</label>
                        <input type="text" value={currentGear.o2Analyzer} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.o2Analyzer = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Power Bank</label>
                        <input type="text" value={currentGear.power} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.power = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Tank Strobe</label>
                        <input type="text" value={currentGear.strobe} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.strobe = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Torch</label>
                        <input type="text" value={currentGear.torch} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.torch = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Torch (Backup)</label>
                        <input type="text" value={currentGear.torchBackup} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.torchBackup = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                </>
            }
        </>
    )
}