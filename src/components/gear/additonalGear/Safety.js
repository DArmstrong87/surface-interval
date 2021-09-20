import React, { useState } from "react";

export const Safety = ({ gearCopy, setNewGear }) => {
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
                        <input type="text" value={gearCopy.audSignal} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.audSignal = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>First Aid Kit</label>
                        <input type="checkbox" checked={gearCopy.firstAid} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.firstAid = event.target.checked
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Knife</label>
                        <input type="text" value={gearCopy.knife} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.knife = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Medications</label>
                        <input type="text" value={gearCopy.meds} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.meds = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Oxygen Rescue Kit</label>
                        <input type="checkbox" checked={gearCopy.o2Kit} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.o2Kit = event.target.checked
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Reef Safe Sunscreen</label>
                        <input type="text" value={gearCopy.sunscreen} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.sunscreen = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Visual Surface Signal</label>
                        <input type="text" value={gearCopy.vizSignal} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.vizSignal = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Wreck Reel</label>
                        <input type="text" value={gearCopy.wreckReel} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.wreckReel = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                </>
            }
        </>
    )
}