import React, { useState } from "react";

export const Tech = ({ gearCopy, setNewGear }) => {
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
                        <input type="text" value={gearCopy.batteries} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.batteries = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Camera</label>
                        <input type="text" value={gearCopy.camera} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.camera = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Camera Accessories</label>
                        <input type="text" value={gearCopy.camAcc} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.camAcc = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Chargers</label>
                        <input type="text" value={gearCopy.chargers} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.chargers = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>O2 Analyzer</label>
                        <input type="text" value={gearCopy.o2Analyzer} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.o2Analyzer = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Power Bank</label>
                        <input type="text" value={gearCopy.power} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.power = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Tank Strobe</label>
                        <input type="text" value={gearCopy.strobe} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.strobe = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Torch</label>
                        <input type="text" value={gearCopy.torch} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.torch = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Torch (Backup)</label>
                        <input type="text" value={gearCopy.torchBackup} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.torchBackup = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                </>
            }
        </>
    )
}