import React, { useState } from "react";

export const EditExposure = ({ currentGear, updateGear }) => {
    const [toggle, setToggle] = useState(false)

    const toggleList = () => toggle !== true ? true : false
    const toggled = toggleList()

    return (
        <>
            <h2 className="gearCat">Exposure Protection
                <button className="toggleButton" onClick={() => setToggle(toggled)}>
                    {toggle === true ? '-' : '+'}
                </button>
            </h2>
            {toggle !== true ? '' :
                <>
                    <fieldset>
                        <label>Gloves</label>
                        <input type="BCD" value={currentGear.gloves} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.gloves = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Hood</label>
                        <input type="Regulator" value={currentGear.hood} onChange={(event) => {
                            const copy = { ...currentGear }
                            copy.hood = event.target.value
                            updateGear(copy)
                        }} />
                    </fieldset>

                </>
            }
        </>
    )
}