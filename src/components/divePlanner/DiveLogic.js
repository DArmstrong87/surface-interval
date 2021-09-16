import React, { useState } from "react";
import { Dive } from "./Dive";
/* 
pg = pressure group ('A')
rnt = residual nitrogen time (min)
abt = actual bottom time (min)
tbt = total bottom time (min)
si = surface interval (min)
spg = starting pressure group, pg of next dive at the end of the surface interval ('B')
*/

export const DiveStates = () => {
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

    console.log('dive1', dive1)
    console.log('dive2', dive2)
    console.log('dive3', dive3)

    // Function to set the dive state's pressure group, ss boolean, no deco limit boolean, and minutes over deco. This funciton also scrolls the results into view.
    const setAndUpdate = (pg, ss, ndl, mod, dive, step, pgAfterSi) => {
        const setPG = (letter) => dive.pg = letter;
        const setSS = (boolean) => dive.ssRequired = boolean;
        const setNDL = (boolean) => dive.noDecoLimit = boolean;
        const minOverDeco = (num) => dive.minOverDeco = num;
        const setPgAfterSi = (letter) => dive.pgAfterSi = letter
        const setDive = (pg, ss, ndl, mod, pgAfterSi) => { setPG(pg); setSS(ss); setNDL(ndl); minOverDeco(mod); setPgAfterSi(pgAfterSi) };
        setDive(pg, ss, ndl, mod, pgAfterSi);
        if (step === 1) { updateDive1(dive) }
        else if (step === 2) { updateDive2(dive) }
        else if (step === 3) { updateDive3(dive) }
    }

    const resetDives = (updateDiveInput) => {
        updateDiveInput({ depth: 0, abt: 0, rnt: 0, pg: '' });
        updateDive1({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        updateDive2({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        updateDive3({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
    }

    // Sets Pressure Group, safety stop boolean, no deco limit boolean, minutes to no deco time, and specifies which dive to update.
    const getPressureGroup = (input, step) => {
        const tbt = (input.abt + input.rnt)
        const depth = input.depth
        console.log(input)
        console.log('getPressureGroup runs')
        const newPg = setPgAfterSi(input, step)
        // Depth <= 35
        if (tbt <= 10 && depth <= 35) { setAndUpdate('A', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 19 && depth <= 35) { setAndUpdate('B', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 25 && depth <= 35) { setAndUpdate('C', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 29 && depth <= 35) { setAndUpdate('D', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 32 && depth <= 35) { setAndUpdate('E', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 36 && depth <= 35) { setAndUpdate('F', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 40 && depth <= 35) { setAndUpdate('G', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 44 && depth <= 35) { setAndUpdate('H', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 48 && depth <= 35) { setAndUpdate('I', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 52 && depth <= 35) { setAndUpdate('J', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 57 && depth <= 35) { setAndUpdate('K', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 62 && depth <= 35) { setAndUpdate('L', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 67 && depth <= 35) { setAndUpdate('M', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 73 && depth <= 35) { setAndUpdate('N', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 79 && depth <= 35) { setAndUpdate('O', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 85 && depth <= 35) { setAndUpdate('P', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 92 && depth <= 35) { setAndUpdate('Q', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 100 && depth <= 35) { setAndUpdate('R', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 108 && depth <= 35) { setAndUpdate('S', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 117 && depth <= 35) { setAndUpdate('T', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 127 && depth <= 35) { setAndUpdate('U', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 139 && depth <= 35) { setAndUpdate('V', false, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 152 && depth <= 35) { setAndUpdate('W', true, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 168 && depth <= 35) { setAndUpdate('X', true, false, (tbt - 205), input, step, newPg) }
        else if (tbt <= 188 && depth <= 35) { setAndUpdate('Y', true, false, (tbt - 205), input, step, newPg) }
        else if (tbt > 188 && depth <= 35) { setAndUpdate('Z', true, true, (tbt - 205), input, step, newPg) }
        // Depth <= 40
        else if (tbt <= 9 && depth <= 40) { setAndUpdate('A', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 16 && depth <= 40) { setAndUpdate('B', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 22 && depth <= 40) { setAndUpdate('C', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 25 && depth <= 40) { setAndUpdate('D', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 27 && depth <= 40) { setAndUpdate('E', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 31 && depth <= 40) { setAndUpdate('F', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 34 && depth <= 40) { setAndUpdate('G', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 37 && depth <= 40) { setAndUpdate('H', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 40 && depth <= 40) { setAndUpdate('I', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 44 && depth <= 40) { setAndUpdate('J', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 48 && depth <= 40) { setAndUpdate('K', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 51 && depth <= 40) { setAndUpdate('L', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 55 && depth <= 40) { setAndUpdate('M', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 60 && depth <= 40) { setAndUpdate('N', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 64 && depth <= 40) { setAndUpdate('O', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 69 && depth <= 40) { setAndUpdate('P', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 74 && depth <= 40) { setAndUpdate('Q', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 79 && depth <= 40) { setAndUpdate('R', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 85 && depth <= 40) { setAndUpdate('S', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 91 && depth <= 40) { setAndUpdate('T', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 97 && depth <= 40) { setAndUpdate('U', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 104 && depth <= 40) { setAndUpdate('V', false, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 111 && depth <= 40) { setAndUpdate('W', true, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 120 && depth <= 40) { setAndUpdate('X', true, false, (tbt - 140), input, step, newPg) }
        else if (tbt <= 129 && depth <= 40) { setAndUpdate('Y', true, false, (tbt - 140), input, step, newPg) }
        else if (tbt > 129 && depth <= 40) { setAndUpdate('Z', true, true, (tbt - 140), input, step, newPg) }
        // Depth <= 50
        else if (tbt <= 7 && depth <= 50) { setAndUpdate('A', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 13 && depth <= 50) { setAndUpdate('B', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 17 && depth <= 50) { setAndUpdate('C', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 19 && depth <= 50) { setAndUpdate('D', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 21 && depth <= 50) { setAndUpdate('E', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 24 && depth <= 50) { setAndUpdate('F', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 26 && depth <= 50) { setAndUpdate('G', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 28 && depth <= 50) { setAndUpdate('H', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 31 && depth <= 50) { setAndUpdate('I', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 33 && depth <= 50) { setAndUpdate('J', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 36 && depth <= 50) { setAndUpdate('K', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 39 && depth <= 50) { setAndUpdate('L', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 41 && depth <= 50) { setAndUpdate('M', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 44 && depth <= 50) { setAndUpdate('N', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 47 && depth <= 50) { setAndUpdate('O', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 50 && depth <= 50) { setAndUpdate('P', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 53 && depth <= 50) { setAndUpdate('Q', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 57 && depth <= 50) { setAndUpdate('R', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 60 && depth <= 50) { setAndUpdate('S', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 63 && depth <= 50) { setAndUpdate('T', false, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 67 && depth <= 50) { setAndUpdate('U', true, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 71 && depth <= 50) { setAndUpdate('V', true, false, (tbt - 80), input, step, newPg) }
        else if (tbt <= 75 && depth <= 50) { setAndUpdate('W', true, false, (tbt - 80), input, step, newPg) }
        else if (tbt > 75 && depth <= 50) { setAndUpdate('X', true, true, (tbt - 80), input, step, newPg) }
        // Depth <= 60
        else if (tbt <= 6 && depth <= 60) { setAndUpdate('A', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 11 && depth <= 60) { setAndUpdate('B', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 14 && depth <= 60) { setAndUpdate('C', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 16 && depth <= 60) { setAndUpdate('D', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 17 && depth <= 60) { setAndUpdate('E', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 19 && depth <= 60) { setAndUpdate('F', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 21 && depth <= 60) { setAndUpdate('G', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 23 && depth <= 60) { setAndUpdate('H', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 25 && depth <= 60) { setAndUpdate('I', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 27 && depth <= 60) { setAndUpdate('J', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 29 && depth <= 60) { setAndUpdate('K', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 31 && depth <= 60) { setAndUpdate('L', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 33 && depth <= 60) { setAndUpdate('M', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 35 && depth <= 60) { setAndUpdate('N', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 37 && depth <= 60) { setAndUpdate('O', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 39 && depth <= 60) { setAndUpdate('P', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 42 && depth <= 60) { setAndUpdate('Q', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 44 && depth <= 60) { setAndUpdate('R', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 47 && depth <= 60) { setAndUpdate('S', false, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 49 && depth <= 60) { setAndUpdate('T', true, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 52 && depth <= 60) { setAndUpdate('U', true, false, (tbt - 55), input, step, newPg) }
        else if (tbt <= 54 && depth <= 60) { setAndUpdate('V', true, false, (tbt - 55), input, step, newPg) }
        else if (tbt > 54 && depth <= 60) { setAndUpdate('W', true, true, (tbt - 55), input, step, newPg) }
        // Depth <= 70
        else if (tbt <= 5 && depth <= 70) { setAndUpdate('A', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 9 && depth <= 70) { setAndUpdate('B', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 12 && depth <= 70) { setAndUpdate('C', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 13 && depth <= 70) { setAndUpdate('D', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 15 && depth <= 70) { setAndUpdate('E', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 16 && depth <= 70) { setAndUpdate('F', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 18 && depth <= 70) { setAndUpdate('G', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 19 && depth <= 70) { setAndUpdate('H', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 21 && depth <= 70) { setAndUpdate('I', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 22 && depth <= 70) { setAndUpdate('J', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 24 && depth <= 70) { setAndUpdate('K', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 26 && depth <= 70) { setAndUpdate('L', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 27 && depth <= 70) { setAndUpdate('M', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 29 && depth <= 70) { setAndUpdate('N', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 31 && depth <= 70) { setAndUpdate('O', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 33 && depth <= 70) { setAndUpdate('P', false, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 35 && depth <= 70) { setAndUpdate('Q', true, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 36 && depth <= 70) { setAndUpdate('R', true, false, (tbt - 40), input, step, newPg) }
        else if (tbt <= 38 && depth <= 70) { setAndUpdate('S', true, false, (tbt - 40), input, step, newPg) }
        else if (tbt > 38 && depth <= 70) { setAndUpdate('T', true, true, (tbt - 40), input, step, newPg) }
        // Depth <= 80
        else if (tbt <= 4 && depth <= 80) { setAndUpdate('A', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 8 && depth <= 80) { setAndUpdate('B', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 10 && depth <= 80) { setAndUpdate('C', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 11 && depth <= 80) { setAndUpdate('D', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 13 && depth <= 80) { setAndUpdate('E', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 14 && depth <= 80) { setAndUpdate('F', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 15 && depth <= 80) { setAndUpdate('G', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 17 && depth <= 80) { setAndUpdate('H', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 18 && depth <= 80) { setAndUpdate('I', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 19 && depth <= 80) { setAndUpdate('J', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 21 && depth <= 80) { setAndUpdate('K', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 22 && depth <= 80) { setAndUpdate('L', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 23 && depth <= 80) { setAndUpdate('M', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 25 && depth <= 80) { setAndUpdate('N', false, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 26 && depth <= 80) { setAndUpdate('O', true, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 28 && depth <= 80) { setAndUpdate('P', true, false, (tbt - 30), input, step, newPg) }
        else if (tbt <= 29 && depth <= 80) { setAndUpdate('Q', true, false, (tbt - 30), input, step, newPg) }
        else if (tbt > 29 && depth <= 80) { setAndUpdate('R', true, true, (tbt - 30), input, step, newPg) }
        // Depth <= 90
        else if (tbt <= 4 && depth <= 90) { setAndUpdate('A', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 7 && depth <= 90) { setAndUpdate('B', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 9 && depth <= 90) { setAndUpdate('C', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 10 && depth <= 90) { setAndUpdate('D', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 11 && depth <= 90) { setAndUpdate('E', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 12 && depth <= 90) { setAndUpdate('F', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 13 && depth <= 90) { setAndUpdate('G', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 15 && depth <= 90) { setAndUpdate('H', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 16 && depth <= 90) { setAndUpdate('I', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 17 && depth <= 90) { setAndUpdate('J', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 18 && depth <= 90) { setAndUpdate('K', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 19 && depth <= 90) { setAndUpdate('L', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 21 && depth <= 90) { setAndUpdate('M', false, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 22 && depth <= 90) { setAndUpdate('N', true, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 23 && depth <= 90) { setAndUpdate('O', true, false, (tbt - 25), input, step, newPg) }
        else if (tbt <= 24 && depth <= 90) { setAndUpdate('P', true, false, (tbt - 25), input, step, newPg) }
        else if (tbt > 24 && depth <= 90) { setAndUpdate('Q', true, true, (tbt - 25), input, step, newPg) }
        // Depth <= 100
        else if (tbt <= 3 && depth <= 100) { setAndUpdate('A', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 6 && depth <= 100) { setAndUpdate('B', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 8 && depth <= 100) { setAndUpdate('C', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 9 && depth <= 100) { setAndUpdate('D', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 10 && depth <= 100) { setAndUpdate('E', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 11 && depth <= 100) { setAndUpdate('F', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 12 && depth <= 100) { setAndUpdate('G', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 13 && depth <= 100) { setAndUpdate('H', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 14 && depth <= 100) { setAndUpdate('I', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 15 && depth <= 100) { setAndUpdate('J', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 16 && depth <= 100) { setAndUpdate('K', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 17 && depth <= 100) { setAndUpdate('L', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 18 && depth <= 100) { setAndUpdate('M', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt <= 19 && depth <= 100) { setAndUpdate('N', true, false, (tbt - 20), input, step, newPg) }
        else if (tbt > 19 && depth <= 100) { setAndUpdate('O', true, true, input, step, newPg) }
        // Depth <= 110
        else if (tbt <= 3 && depth <= 110) { setAndUpdate('A', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 6 && depth <= 110) { setAndUpdate('B', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 7 && depth <= 110) { setAndUpdate('C', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 8 && depth <= 110) { setAndUpdate('D', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 9 && depth <= 110) { setAndUpdate('E', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 10 && depth <= 110) { setAndUpdate('F', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 11 && depth <= 110) { setAndUpdate('G', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 12 && depth <= 110) { setAndUpdate('H', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 13 && depth <= 110) { setAndUpdate('I', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 13 && depth <= 110) { setAndUpdate('J', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 14 && depth <= 110) { setAndUpdate('K', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt <= 15 && depth <= 110) { setAndUpdate('L', true, false, (tbt - 16), input, step, newPg) }
        else if (tbt > 15 && depth <= 110) { setAndUpdate('M', true, true, (tbt - 16), input, step, newPg) }
        // Depth <= 120
        else if (tbt <= 3 && depth <= 120) { setAndUpdate('A', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt <= 5 && depth <= 120) { setAndUpdate('B', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt <= 6 && depth <= 120) { setAndUpdate('C', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt <= 7 && depth <= 120) { setAndUpdate('D', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt <= 8 && depth <= 120) { setAndUpdate('E', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt <= 9 && depth <= 120) { setAndUpdate('F', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt <= 10 && depth <= 120) { setAndUpdate('G', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt <= 11 && depth <= 120) { setAndUpdate('H', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt <= 11 && depth <= 120) { setAndUpdate('I', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt <= 12 && depth <= 120) { setAndUpdate('J', true, false, (tbt - 13), input, step, newPg) }
        else if (tbt > 12 && depth <= 120) { setAndUpdate('K', true, true, (tbt - 13), input, step, newPg) }
        // Depth <= 130
        else if (tbt <= 3 && depth <= 130) { setAndUpdate('A', true, false, (tbt - 10), input, step, newPg) }
        else if (tbt <= 5 && depth <= 130) { setAndUpdate('B', true, false, (tbt - 10), input, step, newPg) }
        else if (tbt <= 6 && depth <= 130) { setAndUpdate('C', true, false, (tbt - 10), input, step, newPg) }
        else if (tbt <= 7 && depth <= 130) { setAndUpdate('D', true, false, (tbt - 10), input, step, newPg) }
        else if (tbt <= 7 && depth <= 130) { setAndUpdate('E', true, false, (tbt - 10), input, step, newPg) }
        else if (tbt <= 8 && depth <= 130) { setAndUpdate('F', true, false, (tbt - 10), input, step, newPg) }
        else if (tbt <= 9 && depth <= 130) { setAndUpdate('G', true, false, (tbt - 10), input, step, newPg) }
        else if (tbt > 9 && depth <= 130) { setAndUpdate('H', true, true, (tbt - 10), input, step, newPg) }
        // Depth <= 140
        else if (tbt <= 0 && depth <= 130) { setAndUpdate('A', true, false, (tbt - 8), input, step, newPg) }
        else if (tbt <= 4 && depth <= 130) { setAndUpdate('B', true, false, (tbt - 8), input, step, newPg) }
        else if (tbt <= 5 && depth <= 130) { setAndUpdate('C', true, false, (tbt - 8), input, step, newPg) }
        else if (tbt <= 6 && depth <= 130) { setAndUpdate('D', true, false, (tbt - 8), input, step, newPg) }
        else if (tbt <= 7 && depth <= 130) { setAndUpdate('E', true, false, (tbt - 8), input, step, newPg) }
        else if (tbt > 6 && depth > 130) { setAndUpdate('F', true, true, (tbt - 8), input, step, newPg) }
    }


    const setPgAfterSi = (input, step) => {
        let pg = ''
        let si = ''

        if (step === 2) {
            pg = dive1.pg //Previous dive's PG
            si = dive2.si
        } else if (step === 3) {
            pg = dive2.pg
            si = dive3.si
        }

        if (step === 1) {
            return ''
        } else if (pg === 'A' && si >= 0) { return 'A' }
        else if (pg === 'B' && si >= 48 && si <= 228) { return 'A' }
        else if (pg === 'B' && si <= 47 && si >= 0) { return 'B' }
    }

    return (<>
        <Dive step={1} dives={dives} getPressureGroup={getPressureGroup} resetDives={resetDives} setAndUpdate={setAndUpdate} setPgAfterSi={setPgAfterSi} />
        {dive1.pg !== '' ?
            <Dive step={2} dives={dives} getPressureGroup={getPressureGroup} resetDives={resetDives} setPgAfterSi={setPgAfterSi} />
            : ''}
        {dive2.pg !== '' ?
            <Dive step={3} dives={dives} getPressureGroup={getPressureGroup} setPgAfterSi={setPgAfterSi} resetDives={resetDives} />
            : ''}
    </>
    )
}