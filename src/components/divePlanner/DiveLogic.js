import React, { useState } from "react";

export const DiveStates = () => {
    const [dive0, setDive0] = useState({})
    const [dive1, updateDive1] = useState()

    const [dive2, setDive2] = useState({
        surfInt: 0,
        resNitroTime: 0,
        depth: 0,
        abt: 0,
        tbt: 0,
        pg: '',
        ssRequired: false,
        noDecoLimit: false
    })
    const [dive3, setDive3] = useState({
        surfInt: 0,
        resNitroTime: 0,
        depth: 0,
        abt: 0,
        tbt: 0,
        pg: '',
        ssRequired: false,
        noDecoLimit: false
    })

    console.log('dive0', dive0)
    console.log('dive1', dive1)
    const dive = { ...dive0 }
    const abt = dive.abt
    const depth = dive.depth
    const setAndUpdate = (pg, ss, ndl, dive) => {
        const setPG = (letter) => dive.pg = letter;
        const setSS = (boolean) => dive.ssRequired = boolean;
        const setNDL = (boolean) => dive.noDecoLimit = boolean;
        const setDive = (pg, ss, ndl) => { setPG(pg); setSS(ss); setNDL(ndl) };
        setDive(pg, ss, ndl); updateDive1(dive)
    }


    const getPressureGroup = () => {
        // Depth <= 35
        if (abt <= 10 && depth <= 35) { setAndUpdate('A', false, false, dive)}
        else if (abt <= 19 && depth <= 35) { setAndUpdate('B', false, false, dive)}
        else if (abt <= 25 && depth <= 35) { setAndUpdate('C', false, false, dive)}
        else if (abt <= 29 && depth <= 35) { setAndUpdate('D', false, false, dive)}
        else if (abt <= 32 && depth <= 35) { setAndUpdate('E', false, false, dive)}
        else if (abt <= 36 && depth <= 35) { setAndUpdate('F', false, false, dive)}
        else if (abt <= 40 && depth <= 35) { setAndUpdate('G', false, false, dive)}
        else if (abt <= 44 && depth <= 35) { setAndUpdate('H', false, false, dive)}
        else if (abt <= 48 && depth <= 35) { setAndUpdate('I', false, false, dive)}
        else if (abt <= 52 && depth <= 35) { setAndUpdate('J', false, false, dive)}
        else if (abt <= 57 && depth <= 35) { setAndUpdate('K', false, false, dive)}
        else if (abt <= 62 && depth <= 35) { setAndUpdate('L', false, false, dive)}
        else if (abt <= 67 && depth <= 35) { setAndUpdate('M', false, false, dive)}
        else if (abt <= 73 && depth <= 35) { setAndUpdate('N', false, false, dive)}
        else if (abt <= 79 && depth <= 35) { setAndUpdate('O', false, false, dive)}
        else if (abt <= 85 && depth <= 35) { setAndUpdate('P', false, false, dive)}
        else if (abt <= 92 && depth <= 35) { setAndUpdate('Q', false, false, dive)}
        else if (abt <= 100 && depth <= 35) { setAndUpdate('R', false, false, dive)}
        else if (abt <= 108 && depth <= 35) { setAndUpdate('S', false, false, dive)}
        else if (abt <= 117 && depth <= 35) { setAndUpdate('T', false, false, dive)}
        else if (abt <= 127 && depth <= 35) { setAndUpdate('U', false, false, dive)}
        else if (abt <= 139 && depth <= 35) { setAndUpdate('V', false, false, dive)}
        else if (abt <= 152 && depth <= 35) { setAndUpdate('W', true, false, dive)}
        else if (abt <= 168 && depth <= 35) { setAndUpdate('X', true, false, dive)}
        else if (abt <= 188 && depth <= 35) { setAndUpdate('Y', true, false, dive)}
        else if (abt <= 205 && depth <= 35) { setAndUpdate('Z', true, true, dive)}
        // Depth <= 40
        else if (abt <= 9 && depth <= 40) { setAndUpdate('A', false, false, dive)}
        else if (abt <= 16 && depth <= 40) { setAndUpdate('B', false, false, dive)}
        else if (abt <= 22 && depth <= 40) { setAndUpdate('C', false, false, dive)}
        else if (abt <= 25 && depth <= 40) { setAndUpdate('D', false, false, dive)}
        else if (abt <= 27 && depth <= 40) { setAndUpdate('E', false, false, dive)}
        else if (abt <= 31 && depth <= 40) { setAndUpdate('F', false, false, dive)}
        else if (abt <= 34 && depth <= 40) { setAndUpdate('G', false, false, dive)}
        else if (abt <= 37 && depth <= 40) { setAndUpdate('H', false, false, dive)}
        else if (abt <= 40 && depth <= 40) { setAndUpdate('I', false, false, dive)}
        else if (abt <= 44 && depth <= 40) { setAndUpdate('J', false, false, dive)}
        else if (abt <= 48 && depth <= 40) { setAndUpdate('K', false, false, dive)}
        else if (abt <= 51 && depth <= 40) { setAndUpdate('L', false, false, dive)}
        else if (abt <= 55 && depth <= 40) { setAndUpdate('M', false, false, dive)}
        else if (abt <= 60 && depth <= 40) { setAndUpdate('N', false, false, dive)}
        else if (abt <= 64 && depth <= 40) { setAndUpdate('O', false, false, dive)}
        else if (abt <= 69 && depth <= 40) { setAndUpdate('P', false, false, dive)}
        else if (abt <= 74 && depth <= 40) { setAndUpdate('Q', false, false, dive)}
        else if (abt <= 79 && depth <= 40) { setAndUpdate('R', false, false, dive)}
        else if (abt <= 85 && depth <= 40) { setAndUpdate('S', false, false, dive)}
        else if (abt <= 91 && depth <= 40) { setAndUpdate('T', false, false, dive)}
        else if (abt <= 97 && depth <= 40) { setAndUpdate('U', false, false, dive)}
        else if (abt <= 104 && depth <= 40) { setAndUpdate('V', false, false, dive)}
        else if (abt <= 111 && depth <= 40) { setAndUpdate('W', true, false, dive)}
        else if (abt <= 120 && depth <= 40) { setAndUpdate('X', true, false, dive)}
        else if (abt <= 129 && depth <= 40) { setAndUpdate('Y', true, false, dive)}
        else if (abt <= 140 && depth <= 40) { setAndUpdate('Z', true, true, dive)}
        // Depth <= 50
        else if (abt <= 7 && depth <= 50) { setAndUpdate('A', false, false, dive)}
        else if (abt <= 13 && depth <= 50) { setAndUpdate('B', false, false, dive)}
        else if (abt <= 17 && depth <= 50) { setAndUpdate('C', false, false, dive)}
        else if (abt <= 19 && depth <= 50) { setAndUpdate('D', false, false, dive)}
        else if (abt <= 21 && depth <= 50) { setAndUpdate('E', false, false, dive)}
        else if (abt <= 24 && depth <= 50) { setAndUpdate('F', false, false, dive)}
        else if (abt <= 26 && depth <= 50) { setAndUpdate('G', false, false, dive)}
        else if (abt <= 28 && depth <= 50) { setAndUpdate('H', false, false, dive)}
        else if (abt <= 31 && depth <= 50) { setAndUpdate('I', false, false, dive)}
        else if (abt <= 33 && depth <= 50) { setAndUpdate('J', false, false, dive)}
        else if (abt <= 36 && depth <= 50) { setAndUpdate('K', false, false, dive)}
        else if (abt <= 39 && depth <= 50) { setAndUpdate('L', false, false, dive)}
        else if (abt <= 41 && depth <= 50) { setAndUpdate('M', false, false, dive)}
        else if (abt <= 44 && depth <= 50) { setAndUpdate('N', false, false, dive)}
        else if (abt <= 47 && depth <= 50) { setAndUpdate('O', false, false, dive)}
        else if (abt <= 50 && depth <= 50) { setAndUpdate('P', false, false, dive)}
        else if (abt <= 53 && depth <= 50) { setAndUpdate('Q', false, false, dive)}
        else if (abt <= 57 && depth <= 50) { setAndUpdate('R', false, false, dive)}
        else if (abt <= 60 && depth <= 50) { setAndUpdate('S', false, false, dive)}
        else if (abt <= 63 && depth <= 50) { setAndUpdate('T', false, false, dive)}
        else if (abt <= 67 && depth <= 50) { setAndUpdate('U', false, false, dive)}
        else if (abt <= 71 && depth <= 50) { setAndUpdate('V', false, false, dive)}
        else if (abt <= 75 && depth <= 50) { setAndUpdate('W', true, false, dive)}
        else if (abt <= 80 && depth <= 50) { setAndUpdate('X', true, false, dive)}
    }


    return (<section className="inputs-flag">
        <div>
            <fieldset>
                <label>Depth</label>
                <input type="number" value={dive0.depth} onChange={(event) => {
                    const dive = { ...dive0 }
                    dive.depth = parseInt(event.target.value)
                    setDive0(dive)
                }} />ft
            </fieldset>
            <fieldset>
                <label>Time</label>
                <input type="number" value={dive0.abt} onChange={(event) => {
                    const dive = { ...dive0 }
                    dive.abt = parseInt(event.target.value)
                    setDive0(dive)
                }} />min
            </fieldset>
            <button onClick={getPressureGroup}>Dive</button>
            <button onClick={() => setDive0({ depth: 0, abt: 0 })}>Reset</button>
        </div>
        <div className="diveFlagGreen">
            <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
        </div>
    </section>)

}