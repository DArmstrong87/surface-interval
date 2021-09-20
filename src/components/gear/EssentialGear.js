import React, { useState } from "react";

export const EssentialGear = ({ gearCopy, setNewGear }) => {
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
                        <input type="BCD" value={gearCopy.bcd} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.bcd = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Regulator</label>
                        <input type="Regulator" value={gearCopy.regulator} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.regulator = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Octopus</label>
                        <input type="Octopus" value={gearCopy.octopus} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.octopus = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Mask</label>
                        <input type="Mask" value={gearCopy.mask} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.mask = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Fins</label>
                        <input type="Fins" value={gearCopy.fins} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.fins = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Boots</label>
                        <input type="Boots" value={gearCopy.boots} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.boots = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Computer</label>
                        <input type="Computer" value={gearCopy.computer} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.computer = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Console</label>
                        <input type="Console" value={gearCopy.console} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.console = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Exposure Suit</label>
                        <input type="Exposure-Suit" value={gearCopy.exposureSuit} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.exposureSuit = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Weight</label>
                        <input type="number" value={gearCopy.weight} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.weight = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Tank</label>
                        <input type="Tank" value={gearCopy.tank} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.tank = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                </>
            }
        </>
    )
}