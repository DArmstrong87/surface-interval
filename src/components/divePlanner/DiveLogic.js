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
    const setPG = (letter) => dive.pg = letter;
    const setSS = (boolean) => dive.ssRequired = boolean;
    const setNDL = (boolean) => dive.noDecoLimit = boolean;
    const setDive = (pg, ss, ndl) => { setPG(pg); setSS(ss); setNDL(ndl) };

    const getPressureGroup = () => {
        // Depth <= 35
        if (abt <= 10 && depth <= 35) { setDive('A', false, false); updateDive1(dive) }
        else if (abt <= 19 && depth <= 35) { setDive('B', false, false); updateDive1(dive) }
        else if (abt <= 25 && depth <= 35) { setDive('C', false, false); updateDive1(dive) }
        else if (abt <= 29 && depth <= 35) { setDive('D', false, false); updateDive1(dive) }
        else if (abt <= 32 && depth <= 35) { setDive('E', false, false); updateDive1(dive) }
        else if (abt <= 36 && depth <= 35) { setDive('F', false, false); updateDive1(dive) }
        else if (abt <= 40 && depth <= 35) { setDive('G', false, false); updateDive1(dive) }
        else if (abt <= 44 && depth <= 35) { setDive('H', false, false); updateDive1(dive) }
        else if (abt <= 48 && depth <= 35) { setDive('I', false, false); updateDive1(dive) }
        else if (abt <= 52 && depth <= 35) { setDive('J', false, false); updateDive1(dive) }
        else if (abt <= 57 && depth <= 35) { setDive('K', false, false); updateDive1(dive) }
        else if (abt <= 62 && depth <= 35) { setDive('L', false, false); updateDive1(dive) }
        else if (abt <= 67 && depth <= 35) { setDive('M', false, false); updateDive1(dive) }
        else if (abt <= 73 && depth <= 35) { setDive('N', false, false); updateDive1(dive) }
        else if (abt <= 79 && depth <= 35) { setDive('O', false, false); updateDive1(dive) }
        else if (abt <= 85 && depth <= 35) { setDive('P', false, false); updateDive1(dive) }
        else if (abt <= 92 && depth <= 35) { setDive('Q', false, false); updateDive1(dive) }
        else if (abt <= 100 && depth <= 35) { setDive('R', false, false); updateDive1(dive) }
        else if (abt <= 108 && depth <= 35) { setDive('S', false, false); updateDive1(dive) }
        else if (abt <= 117 && depth <= 35) { setDive('T', false, false); updateDive1(dive) }
        else if (abt <= 127 && depth <= 35) { setDive('U', false, false); updateDive1(dive) }
        else if (abt <= 139 && depth <= 35) { setDive('V', false, false); updateDive1(dive) }
        else if (abt <= 152 && depth <= 35) { setDive('W', true, false); updateDive1(dive) }
        else if (abt <= 168 && depth <= 35) { setDive('X', true, false); updateDive1(dive) }
        else if (abt <= 188 && depth <= 35) { setDive('Y', true, false); updateDive1(dive) }
        else if (abt <= 205 && depth <= 35) { setDive('Z', true, true); updateDive1(dive) }
        // Depth <= 40
        else if (abt <= 9 && depth <= 40) { setDive('A', false, false); updateDive1(dive) }
        else if (abt <= 16 && depth <= 40) { setDive('B', false, false); updateDive1(dive) }
        else if (abt <= 22 && depth <= 40) { setDive('C', false, false); updateDive1(dive) }
        else if (abt <= 25 && depth <= 40) { setDive('D', false, false); updateDive1(dive) }
        else if (abt <= 27 && depth <= 40) { setDive('E', false, false); updateDive1(dive) }
        else if (abt <= 31 && depth <= 40) { setDive('F', false, false); updateDive1(dive) }
        else if (abt <= 34 && depth <= 40) { setDive('G', false, false); updateDive1(dive) }
        else if (abt <= 37 && depth <= 40) { setDive('H', false, false); updateDive1(dive) }
        else if (abt <= 40 && depth <= 40) { setDive('I', false, false); updateDive1(dive) }
        else if (abt <= 44 && depth <= 40) { setDive('J', false, false); updateDive1(dive) }
        else if (abt <= 48 && depth <= 40) { setDive('K', false, false); updateDive1(dive) }
        else if (abt <= 51 && depth <= 40) { setDive('L', false, false); updateDive1(dive) }
        else if (abt <= 55 && depth <= 40) { setDive('M', false, false); updateDive1(dive) }
        else if (abt <= 60 && depth <= 40) { setDive('N', false, false); updateDive1(dive) }
        else if (abt <= 64 && depth <= 40) { setDive('O', false, false); updateDive1(dive) }
        else if (abt <= 69 && depth <= 40) { setDive('P', false, false); updateDive1(dive) }
        else if (abt <= 74 && depth <= 40) { setDive('Q', false, false); updateDive1(dive) }
        else if (abt <= 79 && depth <= 40) { setDive('R', false, false); updateDive1(dive) }
        else if (abt <= 85 && depth <= 40) { setDive('S', false, false); updateDive1(dive) }
        else if (abt <= 91 && depth <= 40) { setDive('T', false, false); updateDive1(dive) }
        else if (abt <= 97 && depth <= 40) { setDive('U', false, false); updateDive1(dive) }
        else if (abt <= 104 && depth <= 40) { setDive('V', false, false); updateDive1(dive) }
        else if (abt <= 111 && depth <= 40) { setDive('W', true, false); updateDive1(dive) }
        else if (abt <= 120 && depth <= 40) { setDive('X', true, false); updateDive1(dive) }
        else if (abt <= 129 && depth <= 40) { setDive('Y', true, false); updateDive1(dive) }
        else if (abt <= 140 && depth <= 40) { setDive('Z', true, true); updateDive1(dive) }
        // Depth <= 50
        else if (abt <= 7 && depth <= 50) { setDive('A', false, false); updateDive1(dive) }
        else if (abt <= 13 && depth <= 50) { setDive('B', false, false); updateDive1(dive) }
        else if (abt <= 17 && depth <= 50) { setDive('C', false, false); updateDive1(dive) }
        else if (abt <= 19 && depth <= 50) { setDive('D', false, false); updateDive1(dive) }
        else if (abt <= 21 && depth <= 50) { setDive('E', false, false); updateDive1(dive) }
        else if (abt <= 24 && depth <= 50) { setDive('F', false, false); updateDive1(dive) }
        else if (abt <= 26 && depth <= 50) { setDive('G', false, false); updateDive1(dive) }
        else if (abt <= 28 && depth <= 50) { setDive('H', false, false); updateDive1(dive) }
        else if (abt <= 31 && depth <= 50) { setDive('I', false, false); updateDive1(dive) }
        else if (abt <= 33 && depth <= 50) { setDive('J', false, false); updateDive1(dive) }
        else if (abt <= 36 && depth <= 50) { setDive('K', false, false); updateDive1(dive) }
        else if (abt <= 39 && depth <= 50) { setDive('L', false, false); updateDive1(dive) }
        else if (abt <= 41 && depth <= 50) { setDive('M', false, false); updateDive1(dive) }
        else if (abt <= 44 && depth <= 50) { setDive('N', false, false); updateDive1(dive) }
        else if (abt <= 47 && depth <= 50) { setDive('O', false, false); updateDive1(dive) }
        else if (abt <= 50 && depth <= 50) { setDive('P', false, false); updateDive1(dive) }
        else if (abt <= 53 && depth <= 50) { setDive('Q', false, false); updateDive1(dive) }
        else if (abt <= 57 && depth <= 50) { setDive('R', false, false); updateDive1(dive) }
        else if (abt <= 60 && depth <= 50) { setDive('S', false, false); updateDive1(dive) }
        else if (abt <= 63 && depth <= 50) { setDive('T', false, false); updateDive1(dive) }
        else if (abt <= 67 && depth <= 50) { setDive('U', false, false); updateDive1(dive) }
        else if (abt <= 71 && depth <= 50) { setDive('V', false, false); updateDive1(dive) }
        else if (abt <= 75 && depth <= 50) { setDive('W', true, false); updateDive1(dive) }
        else if (abt <= 80 && depth <= 50) { setDive('X', true, false); updateDive1(dive) }
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