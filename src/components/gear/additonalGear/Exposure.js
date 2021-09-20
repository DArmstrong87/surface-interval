import React from "react";

export const Exposure = ({gearCopy, setNewGear}) => {
    return (
        <>
            <h2 className="gearCat">Exposure Protection</h2>
            <fieldset>
                <label>Gloves</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.gloves = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Hood</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.hood = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
        </>
    )
}