import React, { useState } from "react";

export const EditEssentials = ({ currentGear, updateGear }) => {
    const [toggle, setToggle] = useState(false)

    const toggleList = () => toggle !== true ? true : false
    const toggled = toggleList()

    return (
        <>
            <h2 className="gearCat">Essentials
                <button className="toggleButton" onClick={() => setToggle(toggled)}>
                    {toggle === true ? '-' : '+'}
                </button>
            </h2>
            {toggle !== true ? '' :
                <>
                    <fieldset>
                        <label>BCD</label>
                        <input type="BCD" value={currentGear.bcd} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.bcd = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Regulator</label>
                        <input type="Regulator" value={currentGear.regulator} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.regulator = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Octopus</label>
                        <input type="Octopus" value={currentGear.octopus} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.octopus = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Mask</label>
                        <input type="Mask" value={currentGear.mask} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.mask = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Fins</label>
                        <input type="Fins" value={currentGear.fins} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.fins = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Boots</label>
                        <input type="Boots" value={currentGear.boots} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.boots = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Computer</label>
                        <input type="Computer" value={currentGear.computer} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.computer = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Console</label>
                        <input type="Console" value={currentGear.console} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.console = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Exposure Suit</label>
                        <input type="Exposure-Suit" value={currentGear.exposureSuit} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.exposureSuit = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Weight</label>
                        <input type="number" value={currentGear.weight} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.weight = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Tank</label>
                        <input type="Tank" value={currentGear.tank} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.tank = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                </>
            }
        </>
    )
}