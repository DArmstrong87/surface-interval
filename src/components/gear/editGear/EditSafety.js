import React, { useState } from "react";

export const EditSafety = ({ currentGear, updateGear }) => {
    const [toggle, setToggle] = useState(false)
    const toggleList = () => toggle !== true ? true : false
    const toggled = toggleList()

    return (
        <>
            <h2 className="gearCat">Safety
                <button className="toggleButton" onClick={() => setToggle(toggled)}>
                    {toggle === true ? '-' : '+'}
                </button>
            </h2>
            {toggle !== true ? '' :
                <>
                    <fieldset>
                        <label>Audible surface signal</label>
                        <input type="text" value={currentGear.audSignal} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.audSignal = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>First Aid Kit</label>
                        <input type="checkbox" checked={currentGear.firstAid} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.firstAid = event.target.checked
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Knife</label>
                        <input type="text" value={currentGear.knife} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.knife = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Medications</label>
                        <input type="text" value={currentGear.meds} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.meds = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Oxygen Rescue Kit</label>
                        <input type="checkbox" checked={currentGear.o2Kit} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.o2Kit = event.target.checked
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Reef Safe Sunscreen</label>
                        <input type="text" value={currentGear.sunscreen} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.sunscreen = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Visual Surface Signal</label>
                        <input type="text" value={currentGear.vizSignal} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.vizSignal = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Wreck Reel</label>
                        <input type="text" value={currentGear.wreckReel} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.wreckReel = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                </>
            }
        </>
    )
}