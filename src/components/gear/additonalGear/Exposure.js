import React, { useState } from "react";

export const Exposure = ({ gearCopy, setNewGear }) => {
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
                        <input type="text" value={gearCopy.gloves} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.gloves = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                    <fieldset>
                        <label>Hood</label>
                        <input type="text" value={gearCopy.hood} onChange={(event) => {
                            const copy = { ...gearCopy }
                            copy.hood = event.target.value
                            setNewGear(copy)
                        }} />
                    </fieldset>
                </>
            }
        </>
    )
}