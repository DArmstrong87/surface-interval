import React from "react";

export const Tech = ({gearCopy, setNewGear}) => {
    return (
        <>
            <h2 className="gearCat">Tech</h2>
            <fieldset>
                <label>Batteries</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.batteries = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Camera</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.camera = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Camera Accessories</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.camAcc = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Chargers</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.chargers = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>O2 Analyzer</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.o2Analyzer = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Power Bank</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.power = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Tank Strobe</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.strobe = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Torch</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.torch = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
            <fieldset>
                <label>Torch (Backup)</label>
                <input type="text" onChange={(event) => {
                    const copy = { ...gearCopy }
                    copy.torchBackup = event.target.value
                    setNewGear(copy)
                }} />
            </fieldset>
        </>
    )
}