import React, { useState } from "react";
import { Dive } from "./Dive";
import { SI_Table } from "./SI_Table";
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
    // ***This is the only function that should set the new state of each dive!
    const setAndUpdate = (pg, ss, ndl, mod, dive, step) => {
        const setPG = (letter) => dive.pg = letter;
        const setSS = (boolean) => dive.ssRequired = boolean;
        const setNDL = (boolean) => dive.noDecoLimit = boolean;
        const minOverDeco = (num) => dive.minOverDeco = num;
        const newPg = setPgAfterSi(step, dive)
        const rnt = getRNT(step, dive, newPg)
        const setRNT = (num) => {dive.rnt = num}
        console.log('rnt', rnt)
        const setNewPg = (newPg) => dive.pgAfterSi = newPg
        const setDive = (pg, ss, ndl, mod, newPg, rnt) => { setPG(pg); setSS(ss); setNDL(ndl); minOverDeco(mod); setNewPg(newPg); setRNT(rnt) };
        setDive(pg, ss, ndl, mod, newPg, rnt);
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
        // Depth <= 35
        if (tbt <= 10 && depth <= 35) { setAndUpdate('A', false, false, (tbt - 205), input, step) }
        else if (tbt <= 19 && depth <= 35) { setAndUpdate('B', false, false, (tbt - 205), input, step) }
        else if (tbt <= 25 && depth <= 35) { setAndUpdate('C', false, false, (tbt - 205), input, step) }
        else if (tbt <= 29 && depth <= 35) { setAndUpdate('D', false, false, (tbt - 205), input, step) }
        else if (tbt <= 32 && depth <= 35) { setAndUpdate('E', false, false, (tbt - 205), input, step) }
        else if (tbt <= 36 && depth <= 35) { setAndUpdate('F', false, false, (tbt - 205), input, step) }
        else if (tbt <= 40 && depth <= 35) { setAndUpdate('G', false, false, (tbt - 205), input, step) }
        else if (tbt <= 44 && depth <= 35) { setAndUpdate('H', false, false, (tbt - 205), input, step) }
        else if (tbt <= 48 && depth <= 35) { setAndUpdate('I', false, false, (tbt - 205), input, step) }
        else if (tbt <= 52 && depth <= 35) { setAndUpdate('J', false, false, (tbt - 205), input, step) }
        else if (tbt <= 57 && depth <= 35) { setAndUpdate('K', false, false, (tbt - 205), input, step) }
        else if (tbt <= 62 && depth <= 35) { setAndUpdate('L', false, false, (tbt - 205), input, step) }
        else if (tbt <= 67 && depth <= 35) { setAndUpdate('M', false, false, (tbt - 205), input, step) }
        else if (tbt <= 73 && depth <= 35) { setAndUpdate('N', false, false, (tbt - 205), input, step) }
        else if (tbt <= 79 && depth <= 35) { setAndUpdate('O', false, false, (tbt - 205), input, step) }
        else if (tbt <= 85 && depth <= 35) { setAndUpdate('P', false, false, (tbt - 205), input, step) }
        else if (tbt <= 92 && depth <= 35) { setAndUpdate('Q', false, false, (tbt - 205), input, step) }
        else if (tbt <= 100 && depth <= 35) { setAndUpdate('R', false, false, (tbt - 205), input, step) }
        else if (tbt <= 108 && depth <= 35) { setAndUpdate('S', false, false, (tbt - 205), input, step) }
        else if (tbt <= 117 && depth <= 35) { setAndUpdate('T', false, false, (tbt - 205), input, step) }
        else if (tbt <= 127 && depth <= 35) { setAndUpdate('U', false, false, (tbt - 205), input, step) }
        else if (tbt <= 139 && depth <= 35) { setAndUpdate('V', false, false, (tbt - 205), input, step) }
        else if (tbt <= 152 && depth <= 35) { setAndUpdate('W', true, false, (tbt - 205), input, step) }
        else if (tbt <= 168 && depth <= 35) { setAndUpdate('X', true, false, (tbt - 205), input, step) }
        else if (tbt <= 188 && depth <= 35) { setAndUpdate('Y', true, false, (tbt - 205), input, step) }
        else if (tbt > 188 && depth <= 35) { setAndUpdate('Z', true, true, (tbt - 205), input, step) }
        // Depth <= 40
        else if (tbt <= 9 && depth <= 40) { setAndUpdate('A', false, false, (tbt - 140), input, step) }
        else if (tbt <= 16 && depth <= 40) { setAndUpdate('B', false, false, (tbt - 140), input, step) }
        else if (tbt <= 22 && depth <= 40) { setAndUpdate('C', false, false, (tbt - 140), input, step) }
        else if (tbt <= 25 && depth <= 40) { setAndUpdate('D', false, false, (tbt - 140), input, step) }
        else if (tbt <= 27 && depth <= 40) { setAndUpdate('E', false, false, (tbt - 140), input, step) }
        else if (tbt <= 31 && depth <= 40) { setAndUpdate('F', false, false, (tbt - 140), input, step) }
        else if (tbt <= 34 && depth <= 40) { setAndUpdate('G', false, false, (tbt - 140), input, step) }
        else if (tbt <= 37 && depth <= 40) { setAndUpdate('H', false, false, (tbt - 140), input, step) }
        else if (tbt <= 40 && depth <= 40) { setAndUpdate('I', false, false, (tbt - 140), input, step) }
        else if (tbt <= 44 && depth <= 40) { setAndUpdate('J', false, false, (tbt - 140), input, step) }
        else if (tbt <= 48 && depth <= 40) { setAndUpdate('K', false, false, (tbt - 140), input, step) }
        else if (tbt <= 51 && depth <= 40) { setAndUpdate('L', false, false, (tbt - 140), input, step) }
        else if (tbt <= 55 && depth <= 40) { setAndUpdate('M', false, false, (tbt - 140), input, step) }
        else if (tbt <= 60 && depth <= 40) { setAndUpdate('N', false, false, (tbt - 140), input, step) }
        else if (tbt <= 64 && depth <= 40) { setAndUpdate('O', false, false, (tbt - 140), input, step) }
        else if (tbt <= 69 && depth <= 40) { setAndUpdate('P', false, false, (tbt - 140), input, step) }
        else if (tbt <= 74 && depth <= 40) { setAndUpdate('Q', false, false, (tbt - 140), input, step) }
        else if (tbt <= 79 && depth <= 40) { setAndUpdate('R', false, false, (tbt - 140), input, step) }
        else if (tbt <= 85 && depth <= 40) { setAndUpdate('S', false, false, (tbt - 140), input, step) }
        else if (tbt <= 91 && depth <= 40) { setAndUpdate('T', false, false, (tbt - 140), input, step) }
        else if (tbt <= 97 && depth <= 40) { setAndUpdate('U', false, false, (tbt - 140), input, step) }
        else if (tbt <= 104 && depth <= 40) { setAndUpdate('V', false, false, (tbt - 140), input, step) }
        else if (tbt <= 111 && depth <= 40) { setAndUpdate('W', true, false, (tbt - 140), input, step) }
        else if (tbt <= 120 && depth <= 40) { setAndUpdate('X', true, false, (tbt - 140), input, step) }
        else if (tbt <= 129 && depth <= 40) { setAndUpdate('Y', true, false, (tbt - 140), input, step) }
        else if (tbt > 129 && depth <= 40) { setAndUpdate('Z', true, true, (tbt - 140), input, step) }
        // Depth <= 50
        else if (tbt <= 7 && depth <= 50) { setAndUpdate('A', false, false, (tbt - 80), input, step) }
        else if (tbt <= 13 && depth <= 50) { setAndUpdate('B', false, false, (tbt - 80), input, step) }
        else if (tbt <= 17 && depth <= 50) { setAndUpdate('C', false, false, (tbt - 80), input, step) }
        else if (tbt <= 19 && depth <= 50) { setAndUpdate('D', false, false, (tbt - 80), input, step) }
        else if (tbt <= 21 && depth <= 50) { setAndUpdate('E', false, false, (tbt - 80), input, step) }
        else if (tbt <= 24 && depth <= 50) { setAndUpdate('F', false, false, (tbt - 80), input, step) }
        else if (tbt <= 26 && depth <= 50) { setAndUpdate('G', false, false, (tbt - 80), input, step) }
        else if (tbt <= 28 && depth <= 50) { setAndUpdate('H', false, false, (tbt - 80), input, step) }
        else if (tbt <= 31 && depth <= 50) { setAndUpdate('I', false, false, (tbt - 80), input, step) }
        else if (tbt <= 33 && depth <= 50) { setAndUpdate('J', false, false, (tbt - 80), input, step) }
        else if (tbt <= 36 && depth <= 50) { setAndUpdate('K', false, false, (tbt - 80), input, step) }
        else if (tbt <= 39 && depth <= 50) { setAndUpdate('L', false, false, (tbt - 80), input, step) }
        else if (tbt <= 41 && depth <= 50) { setAndUpdate('M', false, false, (tbt - 80), input, step) }
        else if (tbt <= 44 && depth <= 50) { setAndUpdate('N', false, false, (tbt - 80), input, step) }
        else if (tbt <= 47 && depth <= 50) { setAndUpdate('O', false, false, (tbt - 80), input, step) }
        else if (tbt <= 50 && depth <= 50) { setAndUpdate('P', false, false, (tbt - 80), input, step) }
        else if (tbt <= 53 && depth <= 50) { setAndUpdate('Q', false, false, (tbt - 80), input, step) }
        else if (tbt <= 57 && depth <= 50) { setAndUpdate('R', false, false, (tbt - 80), input, step) }
        else if (tbt <= 60 && depth <= 50) { setAndUpdate('S', false, false, (tbt - 80), input, step) }
        else if (tbt <= 63 && depth <= 50) { setAndUpdate('T', false, false, (tbt - 80), input, step) }
        else if (tbt <= 67 && depth <= 50) { setAndUpdate('U', true, false, (tbt - 80), input, step) }
        else if (tbt <= 71 && depth <= 50) { setAndUpdate('V', true, false, (tbt - 80), input, step) }
        else if (tbt <= 75 && depth <= 50) { setAndUpdate('W', true, false, (tbt - 80), input, step) }
        else if (tbt > 75 && depth <= 50) { setAndUpdate('X', true, true, (tbt - 80), input, step) }
        // Depth <= 60
        else if (tbt <= 6 && depth <= 60) { setAndUpdate('A', false, false, (tbt - 55), input, step) }
        else if (tbt <= 11 && depth <= 60) { setAndUpdate('B', false, false, (tbt - 55), input, step) }
        else if (tbt <= 14 && depth <= 60) { setAndUpdate('C', false, false, (tbt - 55), input, step) }
        else if (tbt <= 16 && depth <= 60) { setAndUpdate('D', false, false, (tbt - 55), input, step) }
        else if (tbt <= 17 && depth <= 60) { setAndUpdate('E', false, false, (tbt - 55), input, step) }
        else if (tbt <= 19 && depth <= 60) { setAndUpdate('F', false, false, (tbt - 55), input, step) }
        else if (tbt <= 21 && depth <= 60) { setAndUpdate('G', false, false, (tbt - 55), input, step) }
        else if (tbt <= 23 && depth <= 60) { setAndUpdate('H', false, false, (tbt - 55), input, step) }
        else if (tbt <= 25 && depth <= 60) { setAndUpdate('I', false, false, (tbt - 55), input, step) }
        else if (tbt <= 27 && depth <= 60) { setAndUpdate('J', false, false, (tbt - 55), input, step) }
        else if (tbt <= 29 && depth <= 60) { setAndUpdate('K', false, false, (tbt - 55), input, step) }
        else if (tbt <= 31 && depth <= 60) { setAndUpdate('L', false, false, (tbt - 55), input, step) }
        else if (tbt <= 33 && depth <= 60) { setAndUpdate('M', false, false, (tbt - 55), input, step) }
        else if (tbt <= 35 && depth <= 60) { setAndUpdate('N', false, false, (tbt - 55), input, step) }
        else if (tbt <= 37 && depth <= 60) { setAndUpdate('O', false, false, (tbt - 55), input, step) }
        else if (tbt <= 39 && depth <= 60) { setAndUpdate('P', false, false, (tbt - 55), input, step) }
        else if (tbt <= 42 && depth <= 60) { setAndUpdate('Q', false, false, (tbt - 55), input, step) }
        else if (tbt <= 44 && depth <= 60) { setAndUpdate('R', false, false, (tbt - 55), input, step) }
        else if (tbt <= 47 && depth <= 60) { setAndUpdate('S', false, false, (tbt - 55), input, step) }
        else if (tbt <= 49 && depth <= 60) { setAndUpdate('T', true, false, (tbt - 55), input, step) }
        else if (tbt <= 52 && depth <= 60) { setAndUpdate('U', true, false, (tbt - 55), input, step) }
        else if (tbt <= 54 && depth <= 60) { setAndUpdate('V', true, false, (tbt - 55), input, step) }
        else if (tbt > 54 && depth <= 60) { setAndUpdate('W', true, true, (tbt - 55), input, step) }
        // Depth <= 70
        else if (tbt <= 5 && depth <= 70) { setAndUpdate('A', false, false, (tbt - 40), input, step) }
        else if (tbt <= 9 && depth <= 70) { setAndUpdate('B', false, false, (tbt - 40), input, step) }
        else if (tbt <= 12 && depth <= 70) { setAndUpdate('C', false, false, (tbt - 40), input, step) }
        else if (tbt <= 13 && depth <= 70) { setAndUpdate('D', false, false, (tbt - 40), input, step) }
        else if (tbt <= 15 && depth <= 70) { setAndUpdate('E', false, false, (tbt - 40), input, step) }
        else if (tbt <= 16 && depth <= 70) { setAndUpdate('F', false, false, (tbt - 40), input, step) }
        else if (tbt <= 18 && depth <= 70) { setAndUpdate('G', false, false, (tbt - 40), input, step) }
        else if (tbt <= 19 && depth <= 70) { setAndUpdate('H', false, false, (tbt - 40), input, step) }
        else if (tbt <= 21 && depth <= 70) { setAndUpdate('I', false, false, (tbt - 40), input, step) }
        else if (tbt <= 22 && depth <= 70) { setAndUpdate('J', false, false, (tbt - 40), input, step) }
        else if (tbt <= 24 && depth <= 70) { setAndUpdate('K', false, false, (tbt - 40), input, step) }
        else if (tbt <= 26 && depth <= 70) { setAndUpdate('L', false, false, (tbt - 40), input, step) }
        else if (tbt <= 27 && depth <= 70) { setAndUpdate('M', false, false, (tbt - 40), input, step) }
        else if (tbt <= 29 && depth <= 70) { setAndUpdate('N', false, false, (tbt - 40), input, step) }
        else if (tbt <= 31 && depth <= 70) { setAndUpdate('O', false, false, (tbt - 40), input, step) }
        else if (tbt <= 33 && depth <= 70) { setAndUpdate('P', false, false, (tbt - 40), input, step) }
        else if (tbt <= 35 && depth <= 70) { setAndUpdate('Q', true, false, (tbt - 40), input, step) }
        else if (tbt <= 36 && depth <= 70) { setAndUpdate('R', true, false, (tbt - 40), input, step) }
        else if (tbt <= 38 && depth <= 70) { setAndUpdate('S', true, false, (tbt - 40), input, step) }
        else if (tbt > 38 && depth <= 70) { setAndUpdate('T', true, true, (tbt - 40), input, step) }
        // Depth <= 80
        else if (tbt <= 4 && depth <= 80) { setAndUpdate('A', false, false, (tbt - 30), input, step) }
        else if (tbt <= 8 && depth <= 80) { setAndUpdate('B', false, false, (tbt - 30), input, step) }
        else if (tbt <= 10 && depth <= 80) { setAndUpdate('C', false, false, (tbt - 30), input, step) }
        else if (tbt <= 11 && depth <= 80) { setAndUpdate('D', false, false, (tbt - 30), input, step) }
        else if (tbt <= 13 && depth <= 80) { setAndUpdate('E', false, false, (tbt - 30), input, step) }
        else if (tbt <= 14 && depth <= 80) { setAndUpdate('F', false, false, (tbt - 30), input, step) }
        else if (tbt <= 15 && depth <= 80) { setAndUpdate('G', false, false, (tbt - 30), input, step) }
        else if (tbt <= 17 && depth <= 80) { setAndUpdate('H', false, false, (tbt - 30), input, step) }
        else if (tbt <= 18 && depth <= 80) { setAndUpdate('I', false, false, (tbt - 30), input, step) }
        else if (tbt <= 19 && depth <= 80) { setAndUpdate('J', false, false, (tbt - 30), input, step) }
        else if (tbt <= 21 && depth <= 80) { setAndUpdate('K', false, false, (tbt - 30), input, step) }
        else if (tbt <= 22 && depth <= 80) { setAndUpdate('L', false, false, (tbt - 30), input, step) }
        else if (tbt <= 23 && depth <= 80) { setAndUpdate('M', false, false, (tbt - 30), input, step) }
        else if (tbt <= 25 && depth <= 80) { setAndUpdate('N', false, false, (tbt - 30), input, step) }
        else if (tbt <= 26 && depth <= 80) { setAndUpdate('O', true, false, (tbt - 30), input, step) }
        else if (tbt <= 28 && depth <= 80) { setAndUpdate('P', true, false, (tbt - 30), input, step) }
        else if (tbt <= 29 && depth <= 80) { setAndUpdate('Q', true, false, (tbt - 30), input, step) }
        else if (tbt > 29 && depth <= 80) { setAndUpdate('R', true, true, (tbt - 30), input, step) }
        // Depth <= 90
        else if (tbt <= 4 && depth <= 90) { setAndUpdate('A', false, false, (tbt - 25), input, step) }
        else if (tbt <= 7 && depth <= 90) { setAndUpdate('B', false, false, (tbt - 25), input, step) }
        else if (tbt <= 9 && depth <= 90) { setAndUpdate('C', false, false, (tbt - 25), input, step) }
        else if (tbt <= 10 && depth <= 90) { setAndUpdate('D', false, false, (tbt - 25), input, step) }
        else if (tbt <= 11 && depth <= 90) { setAndUpdate('E', false, false, (tbt - 25), input, step) }
        else if (tbt <= 12 && depth <= 90) { setAndUpdate('F', false, false, (tbt - 25), input, step) }
        else if (tbt <= 13 && depth <= 90) { setAndUpdate('G', false, false, (tbt - 25), input, step) }
        else if (tbt <= 15 && depth <= 90) { setAndUpdate('H', false, false, (tbt - 25), input, step) }
        else if (tbt <= 16 && depth <= 90) { setAndUpdate('I', false, false, (tbt - 25), input, step) }
        else if (tbt <= 17 && depth <= 90) { setAndUpdate('J', false, false, (tbt - 25), input, step) }
        else if (tbt <= 18 && depth <= 90) { setAndUpdate('K', false, false, (tbt - 25), input, step) }
        else if (tbt <= 19 && depth <= 90) { setAndUpdate('L', false, false, (tbt - 25), input, step) }
        else if (tbt <= 21 && depth <= 90) { setAndUpdate('M', false, false, (tbt - 25), input, step) }
        else if (tbt <= 22 && depth <= 90) { setAndUpdate('N', true, false, (tbt - 25), input, step) }
        else if (tbt <= 23 && depth <= 90) { setAndUpdate('O', true, false, (tbt - 25), input, step) }
        else if (tbt <= 24 && depth <= 90) { setAndUpdate('P', true, false, (tbt - 25), input, step) }
        else if (tbt > 24 && depth <= 90) { setAndUpdate('Q', true, true, (tbt - 25), input, step) }
        // Depth <= 100
        else if (tbt <= 3 && depth <= 100) { setAndUpdate('A', true, false, (tbt - 20), input, step) }
        else if (tbt <= 6 && depth <= 100) { setAndUpdate('B', true, false, (tbt - 20), input, step) }
        else if (tbt <= 8 && depth <= 100) { setAndUpdate('C', true, false, (tbt - 20), input, step) }
        else if (tbt <= 9 && depth <= 100) { setAndUpdate('D', true, false, (tbt - 20), input, step) }
        else if (tbt <= 10 && depth <= 100) { setAndUpdate('E', true, false, (tbt - 20), input, step) }
        else if (tbt <= 11 && depth <= 100) { setAndUpdate('F', true, false, (tbt - 20), input, step) }
        else if (tbt <= 12 && depth <= 100) { setAndUpdate('G', true, false, (tbt - 20), input, step) }
        else if (tbt <= 13 && depth <= 100) { setAndUpdate('H', true, false, (tbt - 20), input, step) }
        else if (tbt <= 14 && depth <= 100) { setAndUpdate('I', true, false, (tbt - 20), input, step) }
        else if (tbt <= 15 && depth <= 100) { setAndUpdate('J', true, false, (tbt - 20), input, step) }
        else if (tbt <= 16 && depth <= 100) { setAndUpdate('K', true, false, (tbt - 20), input, step) }
        else if (tbt <= 17 && depth <= 100) { setAndUpdate('L', true, false, (tbt - 20), input, step) }
        else if (tbt <= 18 && depth <= 100) { setAndUpdate('M', true, false, (tbt - 20), input, step) }
        else if (tbt <= 19 && depth <= 100) { setAndUpdate('N', true, false, (tbt - 20), input, step) }
        else if (tbt > 19 && depth <= 100) { setAndUpdate('O', true, true, input, step) }
        // Depth <= 110
        else if (tbt <= 3 && depth <= 110) { setAndUpdate('A', true, false, (tbt - 16), input, step) }
        else if (tbt <= 6 && depth <= 110) { setAndUpdate('B', true, false, (tbt - 16), input, step) }
        else if (tbt <= 7 && depth <= 110) { setAndUpdate('C', true, false, (tbt - 16), input, step) }
        else if (tbt <= 8 && depth <= 110) { setAndUpdate('D', true, false, (tbt - 16), input, step) }
        else if (tbt <= 9 && depth <= 110) { setAndUpdate('E', true, false, (tbt - 16), input, step) }
        else if (tbt <= 10 && depth <= 110) { setAndUpdate('F', true, false, (tbt - 16), input, step) }
        else if (tbt <= 11 && depth <= 110) { setAndUpdate('G', true, false, (tbt - 16), input, step) }
        else if (tbt <= 12 && depth <= 110) { setAndUpdate('H', true, false, (tbt - 16), input, step) }
        else if (tbt <= 13 && depth <= 110) { setAndUpdate('I', true, false, (tbt - 16), input, step) }
        else if (tbt <= 13 && depth <= 110) { setAndUpdate('J', true, false, (tbt - 16), input, step) }
        else if (tbt <= 14 && depth <= 110) { setAndUpdate('K', true, false, (tbt - 16), input, step) }
        else if (tbt <= 15 && depth <= 110) { setAndUpdate('L', true, false, (tbt - 16), input, step) }
        else if (tbt > 15 && depth <= 110) { setAndUpdate('M', true, true, (tbt - 16), input, step) }
        // Depth <= 120
        else if (tbt <= 3 && depth <= 120) { setAndUpdate('A', true, false, (tbt - 13), input, step) }
        else if (tbt <= 5 && depth <= 120) { setAndUpdate('B', true, false, (tbt - 13), input, step) }
        else if (tbt <= 6 && depth <= 120) { setAndUpdate('C', true, false, (tbt - 13), input, step) }
        else if (tbt <= 7 && depth <= 120) { setAndUpdate('D', true, false, (tbt - 13), input, step) }
        else if (tbt <= 8 && depth <= 120) { setAndUpdate('E', true, false, (tbt - 13), input, step) }
        else if (tbt <= 9 && depth <= 120) { setAndUpdate('F', true, false, (tbt - 13), input, step) }
        else if (tbt <= 10 && depth <= 120) { setAndUpdate('G', true, false, (tbt - 13), input, step) }
        else if (tbt <= 11 && depth <= 120) { setAndUpdate('H', true, false, (tbt - 13), input, step) }
        else if (tbt <= 11 && depth <= 120) { setAndUpdate('I', true, false, (tbt - 13), input, step) }
        else if (tbt <= 12 && depth <= 120) { setAndUpdate('J', true, false, (tbt - 13), input, step) }
        else if (tbt > 12 && depth <= 120) { setAndUpdate('K', true, true, (tbt - 13), input, step) }
        // Depth <= 130
        else if (tbt <= 3 && depth <= 130) { setAndUpdate('A', true, false, (tbt - 10), input, step) }
        else if (tbt <= 5 && depth <= 130) { setAndUpdate('B', true, false, (tbt - 10), input, step) }
        else if (tbt <= 6 && depth <= 130) { setAndUpdate('C', true, false, (tbt - 10), input, step) }
        else if (tbt <= 7 && depth <= 130) { setAndUpdate('D', true, false, (tbt - 10), input, step) }
        else if (tbt <= 7 && depth <= 130) { setAndUpdate('E', true, false, (tbt - 10), input, step) }
        else if (tbt <= 8 && depth <= 130) { setAndUpdate('F', true, false, (tbt - 10), input, step) }
        else if (tbt <= 9 && depth <= 130) { setAndUpdate('G', true, false, (tbt - 10), input, step) }
        else if (tbt > 9 && depth <= 130) { setAndUpdate('H', true, true, (tbt - 10), input, step) }
        // Depth <= 140
        else if (tbt <= 0 && depth <= 130) { setAndUpdate('A', true, false, (tbt - 8), input, step) }
        else if (tbt <= 4 && depth <= 130) { setAndUpdate('B', true, false, (tbt - 8), input, step) }
        else if (tbt <= 5 && depth <= 130) { setAndUpdate('C', true, false, (tbt - 8), input, step) }
        else if (tbt <= 6 && depth <= 130) { setAndUpdate('D', true, false, (tbt - 8), input, step) }
        else if (tbt <= 7 && depth <= 130) { setAndUpdate('E', true, false, (tbt - 8), input, step) }
        else if (tbt > 6 && depth > 130) { setAndUpdate('F', true, true, (tbt - 8), input, step) }
    }


    const setPgAfterSi = (step, dive) => {
        const findPg = () => {
            if (step === 1) { return '' }
            else if (step === 2) { return dives[0]?.pg }
            else if (step === 3) { return dives[1]?.pg }
        }
        const findSi = () => {
            if (step === 1) { return '' }
            else if (step === 2) { return dive.si }
            else if (step === 3) { return dive.si }
        }

        const pg = findPg()
        const si = findSi()

        if (pg === 'A' && si >= 0) { return 'A' }
        else if (pg === 'B' && si >= 48) { return 'A' }
        else if (pg === 'B' && si <= 47 && si >= 0) { return 'B' }
        else if (pg === 'C' && si >= 70) { return 'A' }
        else if (pg === 'C' && si <= 69 && si >= 22) { return 'B' }
        else if (pg === 'C' && si <= 21 && si >= 0) { return 'C' }
        else if (pg === 'D' && si >= 79) { return 'A' }
        else if (pg === 'D' && si <= 78 && si >= 31) { return 'B' }
        else if (pg === 'D' && si <= 30 && si >= 9) { return 'C' }
        else if (pg === 'D' && si <= 8 && si >= 0) { return 'D' }
        else if (pg === 'E' && si >= 88) { return 'A' }
        else if (pg === 'E' && si <= 87 && si >= 39) { return 'B' }
        else if (pg === 'E' && si <= 38 && si >= 17) { return 'C' }
        else if (pg === 'E' && si <= 16 && si >= 8) { return 'D' }
        else if (pg === 'E' && si <= 7 && si >= 0) { return 'E' }
        else if (pg === 'F' && si >= 95) { return 'A' }
        else if (pg === 'F' && si <= 94 && si >= 47) { return 'B' }
        else if (pg === 'F' && si <= 46 && si >= 23) { return 'C' }
        else if (pg === 'F' && si <= 24 && si >= 16) { return 'D' }
        else if (pg === 'F' && si <= 15 && si >= 8) { return 'E' }
        else if (pg === 'F' && si <= 8 && si >= 0) { return 'F' }
        else if (pg === 'G' && si >= 102) { return 'A' }
        else if (pg === 'G' && si <= 101 && si >= 54) { return 'B' }
        else if (pg === 'G' && si <= 53 && si >= 32) { return 'C' }
        else if (pg === 'G' && si <= 31 && si >= 23) { return 'D' }
        else if (pg === 'G' && si <= 22 && si >= 14) { return 'E' }
        else if (pg === 'G' && si <= 13 && si >= 7) { return 'F' }
        else if (pg === 'G' && si <= 6 && si >= 0) { return 'G' }
        else if (pg === 'H' && si >= 108) { return 'A' }
        else if (pg === 'H' && si <= 107 && si >= 60) { return 'B' }
        else if (pg === 'H' && si <= 59 && si >= 38) { return 'C' }
        else if (pg === 'H' && si <= 37 && si >= 29) { return 'D' }
        else if (pg === 'H' && si <= 28 && si >= 21) { return 'E' }
        else if (pg === 'H' && si <= 20 && si >= 13) { return 'F' }
        else if (pg === 'H' && si <= 12 && si >= 6) { return 'G' }
        else if (pg === 'H' && si <= 5 && si >= 0) { return 'H' }
        else if (pg === 'I' && si >= 114) { return 'A' }
        else if (pg === 'I' && si <= 113 && si >= 66) { return 'B' }
        else if (pg === 'I' && si <= 65 && si >= 44) { return 'C' }
        else if (pg === 'I' && si <= 43 && si >= 35) { return 'D' }
        else if (pg === 'I' && si <= 34 && si >= 27) { return 'E' }
        else if (pg === 'I' && si <= 26 && si >= 19) { return 'F' }
        else if (pg === 'I' && si <= 18 && si >= 12) { return 'G' }
        else if (pg === 'I' && si <= 11 && si >= 6) { return 'H' }
        else if (pg === 'I' && si <= 5 && si >= 0) { return 'I' }
        else if (pg === 'J' && si >= 120) { return 'A' }
        else if (pg === 'J' && si <= 119 && si >= 72) { return 'B' }
        else if (pg === 'J' && si <= 71 && si >= 50) { return 'C' }
        else if (pg === 'J' && si <= 49 && si >= 41) { return 'D' }
        else if (pg === 'J' && si <= 40 && si >= 32) { return 'E' }
        else if (pg === 'J' && si <= 31 && si >= 25) { return 'F' }
        else if (pg === 'J' && si <= 24 && si >= 18) { return 'G' }
        else if (pg === 'J' && si <= 17 && si >= 12) { return 'H' }
        else if (pg === 'J' && si <= 11 && si >= 6) { return 'I' }
        else if (pg === 'J' && si <= 5 && si >= 0) { return 'J' }
        else if (pg === 'K' && si >= 125) { return 'A' }
        else if (pg === 'K' && si <= 124 && si >= 77) { return 'B' }
        else if (pg === 'K' && si <= 76 && si >= 55) { return 'C' }
        else if (pg === 'K' && si <= 54 && si >= 46) { return 'D' }
        else if (pg === 'K' && si <= 45 && si >= 38) { return 'E' }
        else if (pg === 'K' && si <= 37 && si >= 30) { return 'F' }
        else if (pg === 'K' && si <= 29 && si >= 23) { return 'G' }
        else if (pg === 'K' && si <= 22 && si >= 17) { return 'H' }
        else if (pg === 'K' && si <= 16 && si >= 11) { return 'I' }
        else if (pg === 'K' && si <= 10 && si >= 5) { return 'J' }
        else if (pg === 'K' && si <= 4 && si >= 0) { return 'K' }
        else if (pg === 'L' && si >= 130) { return 'A' }
        else if (pg === 'L' && si <= 129 && si >= 82) { return 'B' }
        else if (pg === 'L' && si <= 81 && si >= 60) { return 'C' }
        else if (pg === 'L' && si <= 59 && si >= 51) { return 'D' }
        else if (pg === 'L' && si <= 50 && si >= 43) { return 'E' }
        else if (pg === 'L' && si <= 42 && si >= 35) { return 'F' }
        else if (pg === 'L' && si <= 34 && si >= 28) { return 'G' }
        else if (pg === 'L' && si <= 27 && si >= 22) { return 'H' }
        else if (pg === 'L' && si <= 21 && si >= 16) { return 'I' }
        else if (pg === 'L' && si <= 15 && si >= 10) { return 'J' }
        else if (pg === 'L' && si <= 9 && si >= 5) { return 'K' }
        else if (pg === 'L' && si <= 4 && si >= 0) { return 'L' }
        else if (pg === 'M' && si >= 135) { return 'A' }
        else if (pg === 'M' && si <= 134 && si >= 86) { return 'B' }
        else if (pg === 'M' && si <= 85 && si >= 65) { return 'C' }
        else if (pg === 'M' && si <= 64 && si >= 56) { return 'D' }
        else if (pg === 'M' && si <= 55 && si >= 47) { return 'E' }
        else if (pg === 'M' && si <= 46 && si >= 40) { return 'F' }
        else if (pg === 'M' && si <= 39 && si >= 33) { return 'G' }
        else if (pg === 'M' && si <= 32 && si >= 26) { return 'H' }
        else if (pg === 'M' && si <= 25 && si >= 20) { return 'I' }
        else if (pg === 'M' && si <= 19 && si >= 15) { return 'J' }
        else if (pg === 'M' && si <= 14 && si >= 10) { return 'K' }
        else if (pg === 'M' && si <= 9 && si >= 5) { return 'L' }
        else if (pg === 'M' && si <= 4 && si >= 0) { return 'M' }
        else if (pg === 'N' && si >= 139) { return 'A' }
        else if (pg === 'N' && si <= 138 && si >= 91) { return 'B' }
        else if (pg === 'N' && si <= 90 && si >= 69) { return 'C' }
        else if (pg === 'N' && si <= 68 && si >= 60) { return 'D' }
        else if (pg === 'N' && si <= 59 && si >= 52) { return 'E' }
        else if (pg === 'N' && si <= 51 && si >= 44) { return 'F' }
        else if (pg === 'N' && si <= 43 && si >= 37) { return 'G' }
        else if (pg === 'N' && si <= 36 && si >= 31) { return 'H' }
        else if (pg === 'N' && si <= 30 && si >= 25) { return 'I' }
        else if (pg === 'N' && si <= 24 && si >= 19) { return 'J' }
        else if (pg === 'N' && si <= 18 && si >= 14) { return 'K' }
        else if (pg === 'N' && si <= 13 && si >= 9) { return 'L' }
        else if (pg === 'N' && si <= 8 && si >= 4) { return 'M' }
        else if (pg === 'N' && si <= 3 && si >= 0) { return 'N' }
        else if (pg === 'O' && si >= 144) { return 'A' }
        else if (pg === 'O' && si <= 143 && si >= 95) { return 'B' }
        else if (pg === 'O' && si <= 94 && si >= 73) { return 'C' }
        else if (pg === 'O' && si <= 72 && si >= 64) { return 'D' }
        else if (pg === 'O' && si <= 63 && si >= 56) { return 'E' }
        else if (pg === 'O' && si <= 55 && si >= 48) { return 'F' }
        else if (pg === 'O' && si <= 47 && si >= 42) { return 'G' }
        else if (pg === 'O' && si <= 41 && si >= 35) { return 'H' }
        else if (pg === 'O' && si <= 34 && si >= 29) { return 'I' }
        else if (pg === 'O' && si <= 28 && si >= 24) { return 'J' }
        else if (pg === 'O' && si <= 23 && si >= 18) { return 'K' }
        else if (pg === 'O' && si <= 17 && si >= 13) { return 'L' }
        else if (pg === 'O' && si <= 12 && si >= 9) { return 'M' }
        else if (pg === 'O' && si <= 8 && si >= 4) { return 'N' }
        else if (pg === 'O' && si <= 3 && si >= 0) { return 'O' }
        else if (pg === 'P' && si >= 148) { return 'A' }
        else if (pg === 'P' && si <= 147 && si >= 99) { return 'B' }
        else if (pg === 'P' && si <= 98 && si >= 77) { return 'C' }
        else if (pg === 'P' && si <= 76 && si >= 68) { return 'D' }
        else if (pg === 'P' && si <= 67 && si >= 60) { return 'E' }
        else if (pg === 'P' && si <= 59 && si >= 52) { return 'F' }
        else if (pg === 'P' && si <= 51 && si >= 46) { return 'G' }
        else if (pg === 'P' && si <= 45 && si >= 39) { return 'H' }
        else if (pg === 'P' && si <= 38 && si >= 33) { return 'I' }
        else if (pg === 'P' && si <= 32 && si >= 28) { return 'J' }
        else if (pg === 'P' && si <= 27 && si >= 22) { return 'K' }
        else if (pg === 'P' && si <= 21 && si >= 17) { return 'L' }
        else if (pg === 'P' && si <= 16 && si >= 13) { return 'M' }
        else if (pg === 'P' && si <= 12 && si >= 8) { return 'N' }
        else if (pg === 'P' && si <= 7 && si >= 4) { return 'O' }
        else if (pg === 'P' && si <= 3 && si >= 0) { return 'P' }
        else if (pg === 'Q' && si >= 151) { return 'A' }
        else if (pg === 'Q' && si <= 150 && si >= 103) { return 'B' }
        else if (pg === 'Q' && si <= 102 && si >= 81) { return 'C' }
        else if (pg === 'Q' && si <= 80 && si >= 72) { return 'D' }
        else if (pg === 'Q' && si <= 71 && si >= 64) { return 'E' }
        else if (pg === 'Q' && si <= 63 && si >= 56) { return 'F' }
        else if (pg === 'Q' && si <= 55 && si >= 49) { return 'G' }
        else if (pg === 'Q' && si <= 48 && si >= 43) { return 'H' }
        else if (pg === 'Q' && si <= 42 && si >= 37) { return 'I' }
        else if (pg === 'Q' && si <= 36 && si >= 31) { return 'J' }
        else if (pg === 'Q' && si <= 30 && si >= 26) { return 'K' }
        else if (pg === 'Q' && si <= 25 && si >= 21) { return 'L' }
        else if (pg === 'Q' && si <= 20 && si >= 17) { return 'M' }
        else if (pg === 'Q' && si <= 16 && si >= 12) { return 'N' }
        else if (pg === 'Q' && si <= 11 && si >= 8) { return 'O' }
        else if (pg === 'Q' && si <= 7 && si >= 4) { return 'P' }
        else if (pg === 'Q' && si <= 3 && si >= 0) { return 'Q' }
        else if (pg === 'R' && si >= 155) { return 'A' }
        else if (pg === 'R' && si <= 154 && si >= 107) { return 'B' }
        else if (pg === 'R' && si <= 106 && si >= 85) { return 'C' }
        else if (pg === 'R' && si <= 84 && si >= 76) { return 'D' }
        else if (pg === 'R' && si <= 75 && si >= 68) { return 'E' }
        else if (pg === 'R' && si <= 67 && si >= 60) { return 'F' }
        else if (pg === 'R' && si <= 59 && si >= 53) { return 'G' }
        else if (pg === 'R' && si <= 52 && si >= 47) { return 'H' }
        else if (pg === 'R' && si <= 46 && si >= 41) { return 'I' }
        else if (pg === 'R' && si <= 40 && si >= 35) { return 'J' }
        else if (pg === 'R' && si <= 34 && si >= 30) { return 'K' }
        else if (pg === 'R' && si <= 29 && si >= 25) { return 'L' }
        else if (pg === 'R' && si <= 24 && si >= 20) { return 'M' }
        else if (pg === 'R' && si <= 19 && si >= 16) { return 'N' }
        else if (pg === 'R' && si <= 15 && si >= 12) { return 'O' }
        else if (pg === 'R' && si <= 11 && si >= 8) { return 'P' }
        else if (pg === 'R' && si <= 7 && si >= 4) { return 'Q' }
        else if (pg === 'R' && si <= 3 && si >= 0) { return 'R' }
        else if (pg === 'S' && si >= 159) { return 'A' }
        else if (pg === 'S' && si <= 158 && si >= 110) { return 'B' }
        else if (pg === 'S' && si <= 109 && si >= 88) { return 'C' }
        else if (pg === 'S' && si <= 87 && si >= 79) { return 'D' }
        else if (pg === 'S' && si <= 78 && si >= 71) { return 'E' }
        else if (pg === 'S' && si <= 70 && si >= 64) { return 'F' }
        else if (pg === 'S' && si <= 63 && si >= 57) { return 'G' }
        else if (pg === 'S' && si <= 56 && si >= 50) { return 'H' }
        else if (pg === 'S' && si <= 49 && si >= 44) { return 'I' }
        else if (pg === 'S' && si <= 43 && si >= 39) { return 'J' }
        else if (pg === 'S' && si <= 38 && si >= 33) { return 'K' }
        else if (pg === 'S' && si <= 32 && si >= 28) { return 'L' }
        else if (pg === 'S' && si <= 27 && si >= 24) { return 'M' }
        else if (pg === 'S' && si <= 23 && si >= 19) { return 'N' }
        else if (pg === 'S' && si <= 18 && si >= 15) { return 'O' }
        else if (pg === 'S' && si <= 14 && si >= 11) { return 'P' }
        else if (pg === 'S' && si <= 10 && si >= 7) { return 'Q' }
        else if (pg === 'S' && si <= 6 && si >= 4) { return 'R' }
        else if (pg === 'S' && si <= 3 && si >= 0) { return 'S' }
        else if (pg === 'T' && si >= 162) { return 'A' }
        else if (pg === 'T' && si <= 161 && si >= 114) { return 'B' }
        else if (pg === 'T' && si <= 113 && si >= 92) { return 'C' }
        else if (pg === 'T' && si <= 91 && si >= 83) { return 'D' }
        else if (pg === 'T' && si <= 82 && si >= 74) { return 'E' }
        else if (pg === 'T' && si <= 73 && si >= 67) { return 'F' }
        else if (pg === 'T' && si <= 66 && si >= 60) { return 'G' }
        else if (pg === 'T' && si <= 59 && si >= 54) { return 'H' }
        else if (pg === 'T' && si <= 53 && si >= 48) { return 'I' }
        else if (pg === 'T' && si <= 47 && si >= 42) { return 'J' }
        else if (pg === 'T' && si <= 41 && si >= 37) { return 'K' }
        else if (pg === 'T' && si <= 36 && si >= 32) { return 'L' }
        else if (pg === 'T' && si <= 31 && si >= 27) { return 'M' }
        else if (pg === 'T' && si <= 26 && si >= 23) { return 'N' }
        else if (pg === 'T' && si <= 22 && si >= 18) { return 'O' }
        else if (pg === 'T' && si <= 17 && si >= 14) { return 'P' }
        else if (pg === 'T' && si <= 13 && si >= 11) { return 'Q' }
        else if (pg === 'T' && si <= 10 && si >= 7) { return 'R' }
        else if (pg === 'T' && si <= 6 && si >= 3) { return 'S' }
        else if (pg === 'T' && si <= 2 && si >= 0) { return 'T' }
        else if (pg === 'U' && si >= 165) { return 'A' }
        else if (pg === 'U' && si <= 164 && si >= 117) { return 'B' }
        else if (pg === 'U' && si <= 116 && si >= 95) { return 'C' }
        else if (pg === 'U' && si <= 94 && si >= 86) { return 'D' }
        else if (pg === 'U' && si <= 85 && si >= 78) { return 'E' }
        else if (pg === 'U' && si <= 77 && si >= 70) { return 'F' }
        else if (pg === 'U' && si <= 69 && si >= 63) { return 'G' }
        else if (pg === 'U' && si <= 62 && si >= 57) { return 'H' }
        else if (pg === 'U' && si <= 56 && si >= 51) { return 'I' }
        else if (pg === 'U' && si <= 50 && si >= 45) { return 'J' }
        else if (pg === 'U' && si <= 44 && si >= 40) { return 'K' }
        else if (pg === 'U' && si <= 39 && si >= 35) { return 'L' }
        else if (pg === 'U' && si <= 34 && si >= 30) { return 'M' }
        else if (pg === 'U' && si <= 29 && si >= 26) { return 'N' }
        else if (pg === 'U' && si <= 25 && si >= 22) { return 'O' }
        else if (pg === 'U' && si <= 21 && si >= 18) { return 'P' }
        else if (pg === 'U' && si <= 17 && si >= 14) { return 'Q' }
        else if (pg === 'U' && si <= 13 && si >= 10) { return 'R' }
        else if (pg === 'U' && si <= 9 && si >= 7) { return 'S' }
        else if (pg === 'U' && si <= 6 && si >= 3) { return 'T' }
        else if (pg === 'U' && si <= 2 && si >= 0) { return 'U' }
        else if (pg === 'V' && si >= 168) { return 'A' }
        else if (pg === 'V' && si <= 167 && si >= 120) { return 'B' }
        else if (pg === 'V' && si <= 119 && si >= 98) { return 'C' }
        else if (pg === 'V' && si <= 97 && si >= 89) { return 'D' }
        else if (pg === 'V' && si <= 88 && si >= 81) { return 'E' }
        else if (pg === 'V' && si <= 80 && si >= 73) { return 'F' }
        else if (pg === 'V' && si <= 72 && si >= 66) { return 'G' }
        else if (pg === 'V' && si <= 65 && si >= 60) { return 'H' }
        else if (pg === 'V' && si <= 59 && si >= 54) { return 'I' }
        else if (pg === 'V' && si <= 53 && si >= 48) { return 'J' }
        else if (pg === 'V' && si <= 47 && si >= 43) { return 'K' }
        else if (pg === 'V' && si <= 42 && si >= 38) { return 'L' }
        else if (pg === 'V' && si <= 37 && si >= 34) { return 'M' }
        else if (pg === 'V' && si <= 33 && si >= 29) { return 'N' }
        else if (pg === 'V' && si <= 28 && si >= 25) { return 'O' }
        else if (pg === 'V' && si <= 24 && si >= 21) { return 'P' }
        else if (pg === 'V' && si <= 20 && si >= 17) { return 'Q' }
        else if (pg === 'V' && si <= 16 && si >= 13) { return 'R' }
        else if (pg === 'V' && si <= 12 && si >= 10) { return 'S' }
        else if (pg === 'V' && si <= 9 && si >= 6) { return 'T' }
        else if (pg === 'V' && si <= 5 && si >= 3) { return 'U' }
        else if (pg === 'V' && si <= 2 && si >= 0) { return 'V' }
        else if (pg === 'W' && si >= 171) { return 'A' }
        else if (pg === 'W' && si <= 170 && si >= 123) { return 'B' }
        else if (pg === 'W' && si <= 122 && si >= 101) { return 'C' }
        else if (pg === 'W' && si <= 100 && si >= 92) { return 'D' }
        else if (pg === 'W' && si <= 91 && si >= 84) { return 'E' }
        else if (pg === 'W' && si <= 83 && si >= 76) { return 'F' }
        else if (pg === 'W' && si <= 75 && si >= 69) { return 'G' }
        else if (pg === 'W' && si <= 68 && si >= 63) { return 'H' }
        else if (pg === 'W' && si <= 62 && si >= 57) { return 'I' }
        else if (pg === 'W' && si <= 56 && si >= 51) { return 'J' }
        else if (pg === 'W' && si <= 50 && si >= 46) { return 'K' }
        else if (pg === 'W' && si <= 45 && si >= 41) { return 'L' }
        else if (pg === 'W' && si <= 40 && si >= 37) { return 'M' }
        else if (pg === 'W' && si <= 36 && si >= 32) { return 'N' }
        else if (pg === 'W' && si <= 31 && si >= 28) { return 'O' }
        else if (pg === 'W' && si <= 27 && si >= 24) { return 'P' }
        else if (pg === 'W' && si <= 23 && si >= 20) { return 'Q' }
        else if (pg === 'W' && si <= 19 && si >= 16) { return 'R' }
        else if (pg === 'W' && si <= 15 && si >= 13) { return 'S' }
        else if (pg === 'W' && si <= 12 && si >= 9) { return 'T' }
        else if (pg === 'W' && si <= 8 && si >= 5) { return 'U' }
        else if (pg === 'W' && si <= 5 && si >= 3) { return 'V' }
        else if (pg === 'W' && si <= 2 && si >= 0) { return 'W' }
        else if (pg === 'X' && si >= 174) { return 'A' }
        else if (pg === 'X' && si <= 173 && si >= 126) { return 'B' }
        else if (pg === 'X' && si <= 125 && si >= 104) { return 'C' }
        else if (pg === 'X' && si <= 103 && si >= 95) { return 'D' }
        else if (pg === 'X' && si <= 94 && si >= 87) { return 'E' }
        else if (pg === 'X' && si <= 86 && si >= 79) { return 'F' }
        else if (pg === 'X' && si <= 78 && si >= 72) { return 'G' }
        else if (pg === 'X' && si <= 71 && si >= 66) { return 'H' }
        else if (pg === 'X' && si <= 65 && si >= 60) { return 'I' }
        else if (pg === 'X' && si <= 59 && si >= 54) { return 'J' }
        else if (pg === 'X' && si <= 53 && si >= 49) { return 'K' }
        else if (pg === 'X' && si <= 48 && si >= 44) { return 'L' }
        else if (pg === 'X' && si <= 43 && si >= 40) { return 'M' }
        else if (pg === 'X' && si <= 39 && si >= 35) { return 'N' }
        else if (pg === 'X' && si <= 34 && si >= 31) { return 'O' }
        else if (pg === 'X' && si <= 30 && si >= 27) { return 'P' }
        else if (pg === 'X' && si <= 26 && si >= 23) { return 'Q' }
        else if (pg === 'X' && si <= 22 && si >= 19) { return 'R' }
        else if (pg === 'X' && si <= 18 && si >= 16) { return 'S' }
        else if (pg === 'X' && si <= 15 && si >= 12) { return 'T' }
        else if (pg === 'X' && si <= 11 && si >= 9) { return 'U' }
        else if (pg === 'X' && si <= 8 && si >= 6) { return 'V' }
        else if (pg === 'X' && si <= 5 && si >= 3) { return 'W' }
        else if (pg === 'X' && si <= 2 && si >= 0) { return 'X' }
        else if (pg === 'Y' && si >= 177) { return 'A' }
        else if (pg === 'Y' && si <= 176 && si >= 129) { return 'B' }
        else if (pg === 'Y' && si <= 128 && si >= 107) { return 'C' }
        else if (pg === 'Y' && si <= 106 && si >= 98) { return 'D' }
        else if (pg === 'Y' && si <= 97 && si >= 90) { return 'E' }
        else if (pg === 'Y' && si <= 89 && si >= 82) { return 'F' }
        else if (pg === 'Y' && si <= 81 && si >= 75) { return 'G' }
        else if (pg === 'Y' && si <= 74 && si >= 69) { return 'H' }
        else if (pg === 'Y' && si <= 68 && si >= 63) { return 'I' }
        else if (pg === 'Y' && si <= 62 && si >= 57) { return 'J' }
        else if (pg === 'Y' && si <= 56 && si >= 52) { return 'K' }
        else if (pg === 'Y' && si <= 51 && si >= 47) { return 'L' }
        else if (pg === 'Y' && si <= 46 && si >= 42) { return 'M' }
        else if (pg === 'Y' && si <= 41 && si >= 38) { return 'N' }
        else if (pg === 'Y' && si <= 37 && si >= 34) { return 'O' }
        else if (pg === 'Y' && si <= 33 && si >= 30) { return 'P' }
        else if (pg === 'Y' && si <= 29 && si >= 26) { return 'Q' }
        else if (pg === 'Y' && si <= 25 && si >= 22) { return 'R' }
        else if (pg === 'Y' && si <= 21 && si >= 19) { return 'S' }
        else if (pg === 'Y' && si <= 18 && si >= 15) { return 'T' }
        else if (pg === 'Y' && si <= 14 && si >= 12) { return 'U' }
        else if (pg === 'Y' && si <= 11 && si >= 9) { return 'V' }
        else if (pg === 'Y' && si <= 8 && si >= 6) { return 'W' }
        else if (pg === 'Y' && si <= 5 && si >= 3) { return 'X' }
        else if (pg === 'Y' && si <= 2 && si >= 0) { return 'Y' }
        else if (pg === 'Z' && si >= 180) { return 'A' }
        else if (pg === 'Z' && si <= 179 && si >= 132) { return 'B' }
        else if (pg === 'Z' && si <= 131 && si >= 110) { return 'C' }
        else if (pg === 'Z' && si <= 109 && si >= 101) { return 'D' }
        else if (pg === 'Z' && si <= 100 && si >= 92) { return 'E' }
        else if (pg === 'Z' && si <= 91 && si >= 85) { return 'F' }
        else if (pg === 'Z' && si <= 84 && si >= 78) { return 'G' }
        else if (pg === 'Z' && si <= 77 && si >= 72) { return 'H' }
        else if (pg === 'Z' && si <= 71 && si >= 66) { return 'I' }
        else if (pg === 'Z' && si <= 65 && si >= 60) { return 'J' }
        else if (pg === 'Z' && si <= 59 && si >= 55) { return 'K' }
        else if (pg === 'Z' && si <= 54 && si >= 50) { return 'L' }
        else if (pg === 'Z' && si <= 49 && si >= 45) { return 'M' }
        else if (pg === 'Z' && si <= 44 && si >= 41) { return 'N' }
        else if (pg === 'Z' && si <= 40 && si >= 36) { return 'O' }
        else if (pg === 'Z' && si <= 35 && si >= 32) { return 'P' }
        else if (pg === 'Z' && si <= 31 && si >= 29) { return 'Q' }
        else if (pg === 'Z' && si <= 28 && si >= 25) { return 'R' }
        else if (pg === 'Z' && si <= 24 && si >= 21) { return 'S' }
        else if (pg === 'Z' && si <= 20 && si >= 18) { return 'T' }
        else if (pg === 'Z' && si <= 17 && si >= 15) { return 'U' }
        else if (pg === 'Z' && si <= 14 && si >= 12) { return 'V' }
        else if (pg === 'Z' && si <= 11 && si >= 9) { return 'W' }
        else if (pg === 'Z' && si <= 8 && si >= 6) { return 'X' }
        else if (pg === 'Z' && si <= 5 && si >= 3) { return 'Y' }
        else if (pg === 'Z' && si <= 2 && si >= 0) { return 'Z' }
        else { return 'none' }
    }

    const getRNT = (step, dive, newPg) => {
        const depth = dive.depth
        const startPg = newPg
        console.log('depth', depth)
        console.log('starting pg', startPg)

        if (depth <= 35) {
            if (startPg === 'A') { return 10 }
            if (startPg === 'B') { return 19 }
        } else if (step === 1) { return 0 }
    }

    return (<>

        <Dive step={1} dives={dives} getPressureGroup={getPressureGroup} resetDives={resetDives} setAndUpdate={setAndUpdate} />
        {dive1.pg !== ''
            ? <Dive step={2} dives={dives} getPressureGroup={getPressureGroup} resetDives={resetDives} />
            : ''}
        {dive2.pg !== ''
            ? <Dive step={3} dives={dives} getPressureGroup={getPressureGroup} resetDives={resetDives} />
            : ''}
    </>
    )
}