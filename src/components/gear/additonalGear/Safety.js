import React from "react";

export const Safety = ({ gearCopy, setNewGear }) => {
    return (
        <>
            <h2 className="gearCat">Safety</h2>
            <fieldset>
                <label>Audible surface signal</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.audSignal = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>First Aid Kit</label>
                <input type="checkbox" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.firstAid = event.target.checked
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Knife</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.knife = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Medications</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.meds = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Oxygen Rescue Kit</label>
                <input type="checkbox" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.o2Kit = event.target.checked
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Reef Safe Sunscreen</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.sunscreen = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Visual Surface Signal</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.vizSignal = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Wreck Reel</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.wreckReel = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
        </>
    )
}