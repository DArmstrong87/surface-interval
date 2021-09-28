import React, { useState } from "react";
import { DiveN32 } from "./DiveN32";

// Single responsibility is to set and update dive states.

export const DiveStatesN32 = () => {
    // Dive States
    const [dive1, updateDive1] = useState({
        noDecoLimit: false,
        ssRequired: false,
        depth: 0,
        rnt: 0,
        pg: '',
        num: 1
    })
    const [dive2, updateDive2] = useState({
        si: 0,
        rnt: 0,
        depth: 0,
        abt: 0,
        tbt: 0,
        ssRequired: false,
        noDecoLimit: false,
        pg: '',
        num: 2
    })
    const [dive3, updateDive3] = useState({
        si: 0,
        rnt: 0,
        depth: 0,
        abt: 0,
        tbt: 0,
        ssRequired: false,
        noDecoLimit: false,
        pg: '',
        num: 3
    })

    const dives = [dive1, dive2, dive3]

    // Function to set the dive state's pressure group, ss boolean, no deco limit boolean, and minutes over deco.
    // ***This is the only function that should set the new state of each dive!***
    const setAndUpdate = (pg, ss, ndl, mod, dive, step, rnt) => {
        const setPG = (letter) => dive.pg = letter;
        const setSS = (boolean) => dive.ssRequired = boolean;
        const setNDL = (boolean) => dive.noDecoLimit = boolean;
        const minOverDeco = (num) => dive.minOverDeco = num;
        const ppO2 = (dive) => {
            if (dive.depth <= 45) return 0.76
            if (dive.depth <= 50) return 0.8
            if (dive.depth <= 55) return 0.85
            if (dive.depth <= 60) return 0.9
            if (dive.depth <= 70) return 1
            if (dive.depth <= 80) return 1.1
            if (dive.depth <= 90) return 1.19
            if (dive.depth <= 100) return 1.29
            if (dive.depth <= 110) return 1.39
            if (dive.depth <= 120) return 1.48
            if (dive.depth > 120) return 1.58
        }
        const setPPO2 = (dive) => dive.ppO2 = ppO2(dive)
        const setNewPg = () => {
            if (step === 1) { dive.pgAfterSi = null }
            else if (step === 2) { dive.pgAfterSi = dive2.pgAfterSi }
            else if (step === 3) { dive.pgAfterSi = dive3.pgAfterSi }
        }
        const setRNT = (num) => dive.rnt = num
        const setDive = (pg, ss, ndl, mod, rnt) => { setPG(pg); setSS(ss); setNDL(ndl); minOverDeco(mod); setNewPg(); setRNT(rnt); setPPO2(dive) };
        setDive(pg, ss, ndl, mod, rnt);
        if (step === 1) updateDive1(dive)
        if (step === 2) updateDive2(dive)
        else if (step === 3) updateDive3(dive)
    }

    const resetDives = (step) => {
        if (step === 1) {
            updateDive1({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
            updateDive2({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
            updateDive3({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        } else if (step === 2) {
            updateDive2({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '', si: '' });
            updateDive3({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        } else if (step === 3) {
            updateDive3({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '', si: '' });
        }
    }

    const resetAllDives = () => {
        updateDive1({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        updateDive2({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        updateDive3({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
    }

    return (<>

        <DiveN32 step={1} dives={dives} resetDives={resetDives} setAndUpdate={setAndUpdate} />
        {dive1.pg !== '' && dive1.noDecoLimit !== true
            ? <DiveN32 step={2} dives={dives} updateDive2={updateDive2} resetDives={resetDives} setAndUpdate={setAndUpdate} />
            : ''}
        {dive2.pg !== '' && dive2.noDecoLimit !== true
            ? <DiveN32 step={3} dives={dives} updateDive3={updateDive3} resetDives={resetDives} setAndUpdate={setAndUpdate} resetAllDives={resetAllDives} />
            : ''}
    </>
    )
}