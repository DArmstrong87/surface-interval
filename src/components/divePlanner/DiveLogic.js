import React, { useState } from "react";

export const DiveStates = () => {
    const [dive0, setDive0] = useState({})
    const diveZeroReset = ()=>{
        setDive0({})
    }

    // let dive1 = {
    //     depth: '',
    //     abt: 0,
    //     pg: '',
    //     ssRequired: false,
    //     noDecoLimit: false
    // }
    const [dive1, setDive1] = useState({
        depth: '',
        abt: 0,
        pg: '',
        ssRequired: false,
        noDecoLimit: false
    })
    console.log('dive1', dive1)
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

    const getPGdepth35 = () => {
        console.log('run getPGdepth35')
        const dive = { ...dive0 }
        const setPG = (letter) => dive.pg = letter;
        const setSS = (boolean) => dive.ssRequired = boolean;
        const setDeco = (boolean) => dive.noDecoLimit = boolean;
            if(dive0.abt <= 10){
                return setPG('A'), setSS(false), setDeco(false), setDive1(dive)}
            else if(dive0.abt <= 19){return setPG('B')}
            // (dive0.abt <= 10) ? (setPG('A'), setSS(false), setDeco(false))
            // : (dive0.abt <= 19) ? setPG('B') : ''
        // dive0.abt <= 19 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'B'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 25 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'C'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 29 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'D'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 32 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'E'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 36 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'F'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 40 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'G'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 44 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'H'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 48 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'I'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 52 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'J'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 57 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'K'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 62 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'L'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 67 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'M'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 73 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'N'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 79 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'O'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 85 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'P'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 92 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'Q'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 100 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'R'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 108 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'S'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 117 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'T'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 127 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'U'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 139 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'V'
        //     dive.ssRequired = false
        //     setDive1(dive)} :
        // dive0.abt <= 152 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'W'
        //     dive.ssRequired = true
        //     setDive1(dive)} :
        // dive0.abt <= 168 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'X'
        //     dive.ssRequired = true
        //     setDive1(dive)} :
        // dive0.abt <= 188 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'Y'
        //     dive.ssRequired = true
        //     setDive1(dive)} :
        // dive0.abt >= 205 ? () => {
        //     const dive = {...dive1}
        //     dive.pg = 'Z'
        //     dive.ssRequired = true
        //     dive.noDecoLimit = true
        //     setDive1(dive)} : ''

        setDive1(dive)
    };

    const getPressureGroup = () => {
        console.log('run getPressureGroup')
        return (
            dive0.depth <= 35 ? getPGdepth35()
                // :
                // dive1.depth <= 40 && dive1.depth > 35 ? getPGdepth40() :
                // dive1.depth <= 50 && dive1.depth > 40 ? getPGdepth50() :
                // dive1.depth <= 60 && dive1.depth > 50 ? getPGdepth60() :
                // dive1.depth <= 70 && dive1.depth > 60 ? getPGdepth70() :
                // dive1.depth <= 80 && dive1.depth > 70 ? getPGdepth80() :
                // dive1.depth <= 90 && dive1.depth > 80 ? getPGdepth90() :
                // dive1.depth <= 100 && dive1.depth > 90 ? getPGdepth100() :
                // dive1.depth <= 110 && dive1.depth > 100 ? getPGdepth110() :
                // dive1.depth <= 120 && dive1.depth > 110 ? getPGdepth120() :
                // dive1.depth <= 130 && dive1.depth > 120 ? getPGdepth130() :
                // dive1.depth > 140 ? depth40() 
                : ''
        )
    }


    return (<section className="inputs-flag">
        <div>
            <fieldset>
                <label>Depth</label>
                <input type="number" onChange={(event) => {
                    const dive = { ...dive0 }
                    dive.depth = parseInt(event.target.value)
                    setDive0(dive)
                }} />ft
            </fieldset>
            <fieldset>
                <label>Time</label>
                <input type="number" onChange={(event) => {
                    const dive = { ...dive0 }
                    dive.abt = parseInt(event.target.value)
                    setDive0(dive)
                }}/>min
            </fieldset>
            <button onClick={getPressureGroup}>Dive</button>
        </div>
        <div className="diveFlagGreen">
            <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
        </div>
    </section>)

}