import React from "react";

export const EssentialGear = ({gearCopy, setNewGear}) => {
    return (
        <>
            <h2 className="gearCat">Essentials</h2>
            <fieldset>
                <label>BCD</label>
                <input type="BCD" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.bcd = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Regulator</label>
                <input type="Regulator" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.regulator = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Octopus</label>
                <input type="Octopus" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.octopus = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Mask</label>
                <input type="Mask" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.mask = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Fins</label>
                <input type="Fins" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.fins = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Boots</label>
                <input type="Boots" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.boots = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Computer</label>
                <input type="Computer" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.computer = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Console</label>
                <input type="Console" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.console = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Exposure Suit</label>
                <input type="Exposure-Suit" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.exposureSuit = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Weight</label>
                <input type="number" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.weight = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Tank</label>
                <input type="Tank" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.tank = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
        </>
    )
}