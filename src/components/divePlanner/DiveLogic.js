import React, { useRef, useState } from "react";

export const DiveStates = () => {
    // Dive States
    const [dive0, updateDive0] = useState({ rnt: 0 })
    const [dive1, updateDive1] = useState({
        noDecoLimit: false,
        ssRequired: false,
        depth: 0,
        rnt: 0,
        pg: ''
    })
    const [dive2, updateDive2] = useState({
        si: 0,
        rnt: 0,
        depth: 0,
        abt: 0,
        tbt: 0,
        ssRequired: false,
        noDecoLimit: false,
        pg: ''
    })
    const [dive3, updateDive3] = useState({
        si: 0,
        rnt: 0,
        depth: 0,
        abt: 0,
        tbt: 0,
        ssRequired: false,
        noDecoLimit: false,
        pg: ''
    })

    // Toggle States --> Form 2 --> Renders Dive 2 form to the page.
    const [form_Dive2, toggleForm2] = useState({ active: false })
    const toggleDive2 = () => {
        const form = { ...form_Dive2 }
        form.active = true
        toggleForm2(form)
    }

    // Toggle States --> Form 3 -- Renders Dive 3 form to the page.
    const [form_Dive3, toggleForm3] = useState({ active: false })
    const toggleDive3 = () => {
        const form = { ...form_Dive3 }
        form.active = true
        toggleForm3(form)
    }

    // Reset Forms -- Removes Dive 2 and 3 forms from the page.
    const resetForms = () => {
        const form2 = { ...form_Dive2 }
        form2.active = false
        const form3 = { ...form_Dive3 }
        form3.active = false
        toggleForm2(form2)
        toggleForm3(form3)
    }

    console.log(form_Dive2)


    console.log('dive1', dive1)
    console.log('dive2', dive2)
    console.log('dive3', dive3)

    // Dive Variables
    const dive = { ...dive0 }
    const tbt = (dive.abt + dive.rnt)
    const depth = dive.depth
    const diveRef = useRef()

    // Function to set the dive state's pressure group, ss boolean, no deco limit boolean, and minutes over deco. This funciton also scrolls the results into view.
    const setAndUpdate = (pg, ss, ndl, mod, dive) => {
        const setPG = (letter) => dive.pg = letter;
        const setSS = (boolean) => dive.ssRequired = boolean;
        const setNDL = (boolean) => dive.noDecoLimit = boolean;
        const minOverDeco = (num) => dive.minOverDeco = num;
        const scroll = () => { diveRef.current.scrollIntoView({ behavior: 'smooth' }) };
        const setDive = (pg, ss, ndl, mod) => { setPG(pg); setSS(ss); setNDL(ndl); minOverDeco(mod) };
        setDive(pg, ss, ndl, mod);
        if (dive1.pg === '') { updateDive1(dive) }
        else if (dive2.pg === '') { { updateDive2(dive) } }
        else if (dive3.pg === '') { { updateDive3(dive) } };
        scroll();
    }

    const resetDives = () => {
        updateDive0({ depth: 0, abt: 0, rnt: 0, pg: '' });
        updateDive1({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        updateDive2({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        updateDive3({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        resetForms();
    }


    // Sets Pressure Group, safety stop boolean, no deco limit boolean, minutes to no deco time, and specifies which dive to update.
    const getPressureGroup = () => {
        // Depth <= 35
        if (tbt <= 10 && depth <= 35) { setAndUpdate('A', false, false, (tbt - 205), dive) }
        else if (tbt <= 19 && depth <= 35) { setAndUpdate('B', false, false, (tbt - 205), dive) }
        else if (tbt <= 25 && depth <= 35) { setAndUpdate('C', false, false, (tbt - 205), dive) }
        else if (tbt <= 29 && depth <= 35) { setAndUpdate('D', false, false, (tbt - 205), dive) }
        else if (tbt <= 32 && depth <= 35) { setAndUpdate('E', false, false, (tbt - 205), dive) }
        else if (tbt <= 36 && depth <= 35) { setAndUpdate('F', false, false, (tbt - 205), dive) }
        else if (tbt <= 40 && depth <= 35) { setAndUpdate('G', false, false, (tbt - 205), dive) }
        else if (tbt <= 44 && depth <= 35) { setAndUpdate('H', false, false, (tbt - 205), dive) }
        else if (tbt <= 48 && depth <= 35) { setAndUpdate('I', false, false, (tbt - 205), dive) }
        else if (tbt <= 52 && depth <= 35) { setAndUpdate('J', false, false, (tbt - 205), dive) }
        else if (tbt <= 57 && depth <= 35) { setAndUpdate('K', false, false, (tbt - 205), dive) }
        else if (tbt <= 62 && depth <= 35) { setAndUpdate('L', false, false, (tbt - 205), dive) }
        else if (tbt <= 67 && depth <= 35) { setAndUpdate('M', false, false, (tbt - 205), dive) }
        else if (tbt <= 73 && depth <= 35) { setAndUpdate('N', false, false, (tbt - 205), dive) }
        else if (tbt <= 79 && depth <= 35) { setAndUpdate('O', false, false, (tbt - 205), dive) }
        else if (tbt <= 85 && depth <= 35) { setAndUpdate('P', false, false, (tbt - 205), dive) }
        else if (tbt <= 92 && depth <= 35) { setAndUpdate('Q', false, false, (tbt - 205), dive) }
        else if (tbt <= 100 && depth <= 35) { setAndUpdate('R', false, false, (tbt - 205), dive) }
        else if (tbt <= 108 && depth <= 35) { setAndUpdate('S', false, false, (tbt - 205), dive) }
        else if (tbt <= 117 && depth <= 35) { setAndUpdate('T', false, false, (tbt - 205), dive) }
        else if (tbt <= 127 && depth <= 35) { setAndUpdate('U', false, false, (tbt - 205), dive) }
        else if (tbt <= 139 && depth <= 35) { setAndUpdate('V', false, false, (tbt - 205), dive) }
        else if (tbt <= 152 && depth <= 35) { setAndUpdate('W', true, false, (tbt - 205), dive) }
        else if (tbt <= 168 && depth <= 35) { setAndUpdate('X', true, false, (tbt - 205), dive) }
        else if (tbt <= 188 && depth <= 35) { setAndUpdate('Y', true, false, (tbt - 205), dive) }
        else if (tbt > 188 && depth <= 35) { setAndUpdate('Z', true, true, (tbt - 205), dive) }
        // Depth <= 40
        else if (tbt <= 9 && depth <= 40) { setAndUpdate('A', false, false, (tbt - 140), dive) }
        else if (tbt <= 16 && depth <= 40) { setAndUpdate('B', false, false, (tbt - 140), dive) }
        else if (tbt <= 22 && depth <= 40) { setAndUpdate('C', false, false, (tbt - 140), dive) }
        else if (tbt <= 25 && depth <= 40) { setAndUpdate('D', false, false, (tbt - 140), dive) }
        else if (tbt <= 27 && depth <= 40) { setAndUpdate('E', false, false, (tbt - 140), dive) }
        else if (tbt <= 31 && depth <= 40) { setAndUpdate('F', false, false, (tbt - 140), dive) }
        else if (tbt <= 34 && depth <= 40) { setAndUpdate('G', false, false, (tbt - 140), dive) }
        else if (tbt <= 37 && depth <= 40) { setAndUpdate('H', false, false, (tbt - 140), dive) }
        else if (tbt <= 40 && depth <= 40) { setAndUpdate('I', false, false, (tbt - 140), dive) }
        else if (tbt <= 44 && depth <= 40) { setAndUpdate('J', false, false, (tbt - 140), dive) }
        else if (tbt <= 48 && depth <= 40) { setAndUpdate('K', false, false, (tbt - 140), dive) }
        else if (tbt <= 51 && depth <= 40) { setAndUpdate('L', false, false, (tbt - 140), dive) }
        else if (tbt <= 55 && depth <= 40) { setAndUpdate('M', false, false, (tbt - 140), dive) }
        else if (tbt <= 60 && depth <= 40) { setAndUpdate('N', false, false, (tbt - 140), dive) }
        else if (tbt <= 64 && depth <= 40) { setAndUpdate('O', false, false, (tbt - 140), dive) }
        else if (tbt <= 69 && depth <= 40) { setAndUpdate('P', false, false, (tbt - 140), dive) }
        else if (tbt <= 74 && depth <= 40) { setAndUpdate('Q', false, false, (tbt - 140), dive) }
        else if (tbt <= 79 && depth <= 40) { setAndUpdate('R', false, false, (tbt - 140), dive) }
        else if (tbt <= 85 && depth <= 40) { setAndUpdate('S', false, false, (tbt - 140), dive) }
        else if (tbt <= 91 && depth <= 40) { setAndUpdate('T', false, false, (tbt - 140), dive) }
        else if (tbt <= 97 && depth <= 40) { setAndUpdate('U', false, false, (tbt - 140), dive) }
        else if (tbt <= 104 && depth <= 40) { setAndUpdate('V', false, false, (tbt - 140), dive) }
        else if (tbt <= 111 && depth <= 40) { setAndUpdate('W', true, false, (tbt - 140), dive) }
        else if (tbt <= 120 && depth <= 40) { setAndUpdate('X', true, false, (tbt - 140), dive) }
        else if (tbt <= 129 && depth <= 40) { setAndUpdate('Y', true, false, (tbt - 140), dive) }
        else if (tbt > 129 && depth <= 40) { setAndUpdate('Z', true, true, (tbt - 140), dive) }
        // Depth <= 50
        else if (tbt <= 7 && depth <= 50) { setAndUpdate('A', false, false, (tbt - 80), dive) }
        else if (tbt <= 13 && depth <= 50) { setAndUpdate('B', false, false, (tbt - 80), dive) }
        else if (tbt <= 17 && depth <= 50) { setAndUpdate('C', false, false, (tbt - 80), dive) }
        else if (tbt <= 19 && depth <= 50) { setAndUpdate('D', false, false, (tbt - 80), dive) }
        else if (tbt <= 21 && depth <= 50) { setAndUpdate('E', false, false, (tbt - 80), dive) }
        else if (tbt <= 24 && depth <= 50) { setAndUpdate('F', false, false, (tbt - 80), dive) }
        else if (tbt <= 26 && depth <= 50) { setAndUpdate('G', false, false, (tbt - 80), dive) }
        else if (tbt <= 28 && depth <= 50) { setAndUpdate('H', false, false, (tbt - 80), dive) }
        else if (tbt <= 31 && depth <= 50) { setAndUpdate('I', false, false, (tbt - 80), dive) }
        else if (tbt <= 33 && depth <= 50) { setAndUpdate('J', false, false, (tbt - 80), dive) }
        else if (tbt <= 36 && depth <= 50) { setAndUpdate('K', false, false, (tbt - 80), dive) }
        else if (tbt <= 39 && depth <= 50) { setAndUpdate('L', false, false, (tbt - 80), dive) }
        else if (tbt <= 41 && depth <= 50) { setAndUpdate('M', false, false, (tbt - 80), dive) }
        else if (tbt <= 44 && depth <= 50) { setAndUpdate('N', false, false, (tbt - 80), dive) }
        else if (tbt <= 47 && depth <= 50) { setAndUpdate('O', false, false, (tbt - 80), dive) }
        else if (tbt <= 50 && depth <= 50) { setAndUpdate('P', false, false, (tbt - 80), dive) }
        else if (tbt <= 53 && depth <= 50) { setAndUpdate('Q', false, false, (tbt - 80), dive) }
        else if (tbt <= 57 && depth <= 50) { setAndUpdate('R', false, false, (tbt - 80), dive) }
        else if (tbt <= 60 && depth <= 50) { setAndUpdate('S', false, false, (tbt - 80), dive) }
        else if (tbt <= 63 && depth <= 50) { setAndUpdate('T', false, false, (tbt - 80), dive) }
        else if (tbt <= 67 && depth <= 50) { setAndUpdate('U', true, false, (tbt - 80), dive) }
        else if (tbt <= 71 && depth <= 50) { setAndUpdate('V', true, false, (tbt - 80), dive) }
        else if (tbt <= 75 && depth <= 50) { setAndUpdate('W', true, false, (tbt - 80), dive) }
        else if (tbt > 75 && depth <= 50) { setAndUpdate('X', true, true, (tbt - 80), dive) }
        // Depth <= 60
        else if (tbt <= 6 && depth <= 60) { setAndUpdate('A', false, false, (tbt - 55), dive) }
        else if (tbt <= 11 && depth <= 60) { setAndUpdate('B', false, false, (tbt - 55), dive) }
        else if (tbt <= 14 && depth <= 60) { setAndUpdate('C', false, false, (tbt - 55), dive) }
        else if (tbt <= 16 && depth <= 60) { setAndUpdate('D', false, false, (tbt - 55), dive) }
        else if (tbt <= 17 && depth <= 60) { setAndUpdate('E', false, false, (tbt - 55), dive) }
        else if (tbt <= 19 && depth <= 60) { setAndUpdate('F', false, false, (tbt - 55), dive) }
        else if (tbt <= 21 && depth <= 60) { setAndUpdate('G', false, false, (tbt - 55), dive) }
        else if (tbt <= 23 && depth <= 60) { setAndUpdate('H', false, false, (tbt - 55), dive) }
        else if (tbt <= 25 && depth <= 60) { setAndUpdate('I', false, false, (tbt - 55), dive) }
        else if (tbt <= 27 && depth <= 60) { setAndUpdate('J', false, false, (tbt - 55), dive) }
        else if (tbt <= 29 && depth <= 60) { setAndUpdate('K', false, false, (tbt - 55), dive) }
        else if (tbt <= 31 && depth <= 60) { setAndUpdate('L', false, false, (tbt - 55), dive) }
        else if (tbt <= 33 && depth <= 60) { setAndUpdate('M', false, false, (tbt - 55), dive) }
        else if (tbt <= 35 && depth <= 60) { setAndUpdate('N', false, false, (tbt - 55), dive) }
        else if (tbt <= 37 && depth <= 60) { setAndUpdate('O', false, false, (tbt - 55), dive) }
        else if (tbt <= 39 && depth <= 60) { setAndUpdate('P', false, false, (tbt - 55), dive) }
        else if (tbt <= 42 && depth <= 60) { setAndUpdate('Q', false, false, (tbt - 55), dive) }
        else if (tbt <= 44 && depth <= 60) { setAndUpdate('R', false, false, (tbt - 55), dive) }
        else if (tbt <= 47 && depth <= 60) { setAndUpdate('S', false, false, (tbt - 55), dive) }
        else if (tbt <= 49 && depth <= 60) { setAndUpdate('T', true, false, (tbt - 55), dive) }
        else if (tbt <= 52 && depth <= 60) { setAndUpdate('U', true, false, (tbt - 55), dive) }
        else if (tbt <= 54 && depth <= 60) { setAndUpdate('V', true, false, (tbt - 55), dive) }
        else if (tbt > 54 && depth <= 60) { setAndUpdate('W', true, true, (tbt - 55), dive) }
        // Depth <= 70
        else if (tbt <= 5 && depth <= 70) { setAndUpdate('A', false, false, (tbt - 40), dive) }
        else if (tbt <= 9 && depth <= 70) { setAndUpdate('B', false, false, (tbt - 40), dive) }
        else if (tbt <= 12 && depth <= 70) { setAndUpdate('C', false, false, (tbt - 40), dive) }
        else if (tbt <= 13 && depth <= 70) { setAndUpdate('D', false, false, (tbt - 40), dive) }
        else if (tbt <= 15 && depth <= 70) { setAndUpdate('E', false, false, (tbt - 40), dive) }
        else if (tbt <= 16 && depth <= 70) { setAndUpdate('F', false, false, (tbt - 40), dive) }
        else if (tbt <= 18 && depth <= 70) { setAndUpdate('G', false, false, (tbt - 40), dive) }
        else if (tbt <= 19 && depth <= 70) { setAndUpdate('H', false, false, (tbt - 40), dive) }
        else if (tbt <= 21 && depth <= 70) { setAndUpdate('I', false, false, (tbt - 40), dive) }
        else if (tbt <= 22 && depth <= 70) { setAndUpdate('J', false, false, (tbt - 40), dive) }
        else if (tbt <= 24 && depth <= 70) { setAndUpdate('K', false, false, (tbt - 40), dive) }
        else if (tbt <= 26 && depth <= 70) { setAndUpdate('L', false, false, (tbt - 40), dive) }
        else if (tbt <= 27 && depth <= 70) { setAndUpdate('M', false, false, (tbt - 40), dive) }
        else if (tbt <= 29 && depth <= 70) { setAndUpdate('N', false, false, (tbt - 40), dive) }
        else if (tbt <= 31 && depth <= 70) { setAndUpdate('O', false, false, (tbt - 40), dive) }
        else if (tbt <= 33 && depth <= 70) { setAndUpdate('P', false, false, (tbt - 40), dive) }
        else if (tbt <= 35 && depth <= 70) { setAndUpdate('Q', true, false, (tbt - 40), dive) }
        else if (tbt <= 36 && depth <= 70) { setAndUpdate('R', true, false, (tbt - 40), dive) }
        else if (tbt <= 38 && depth <= 70) { setAndUpdate('S', true, false, (tbt - 40), dive) }
        else if (tbt > 38 && depth <= 70) { setAndUpdate('T', true, true, (tbt - 40), dive) }
        // Depth <= 80
        else if (tbt <= 4 && depth <= 80) { setAndUpdate('A', false, false, (tbt - 30), dive) }
        else if (tbt <= 8 && depth <= 80) { setAndUpdate('B', false, false, (tbt - 30), dive) }
        else if (tbt <= 10 && depth <= 80) { setAndUpdate('C', false, false, (tbt - 30), dive) }
        else if (tbt <= 11 && depth <= 80) { setAndUpdate('D', false, false, (tbt - 30), dive) }
        else if (tbt <= 13 && depth <= 80) { setAndUpdate('E', false, false, (tbt - 30), dive) }
        else if (tbt <= 14 && depth <= 80) { setAndUpdate('F', false, false, (tbt - 30), dive) }
        else if (tbt <= 15 && depth <= 80) { setAndUpdate('G', false, false, (tbt - 30), dive) }
        else if (tbt <= 17 && depth <= 80) { setAndUpdate('H', false, false, (tbt - 30), dive) }
        else if (tbt <= 18 && depth <= 80) { setAndUpdate('I', false, false, (tbt - 30), dive) }
        else if (tbt <= 19 && depth <= 80) { setAndUpdate('J', false, false, (tbt - 30), dive) }
        else if (tbt <= 21 && depth <= 80) { setAndUpdate('K', false, false, (tbt - 30), dive) }
        else if (tbt <= 22 && depth <= 80) { setAndUpdate('L', false, false, (tbt - 30), dive) }
        else if (tbt <= 23 && depth <= 80) { setAndUpdate('M', false, false, (tbt - 30), dive) }
        else if (tbt <= 25 && depth <= 80) { setAndUpdate('N', false, false, (tbt - 30), dive) }
        else if (tbt <= 26 && depth <= 80) { setAndUpdate('O', true, false, (tbt - 30), dive) }
        else if (tbt <= 28 && depth <= 80) { setAndUpdate('P', true, false, (tbt - 30), dive) }
        else if (tbt <= 29 && depth <= 80) { setAndUpdate('Q', true, false, (tbt - 30), dive) }
        else if (tbt > 29 && depth <= 80) { setAndUpdate('R', true, true, (tbt - 30), dive) }
        // Depth <= 90
        else if (tbt <= 4 && depth <= 90) { setAndUpdate('A', false, false, (tbt - 25), dive) }
        else if (tbt <= 7 && depth <= 90) { setAndUpdate('B', false, false, (tbt - 25), dive) }
        else if (tbt <= 9 && depth <= 90) { setAndUpdate('C', false, false, (tbt - 25), dive) }
        else if (tbt <= 10 && depth <= 90) { setAndUpdate('D', false, false, (tbt - 25), dive) }
        else if (tbt <= 11 && depth <= 90) { setAndUpdate('E', false, false, (tbt - 25), dive) }
        else if (tbt <= 12 && depth <= 90) { setAndUpdate('F', false, false, (tbt - 25), dive) }
        else if (tbt <= 13 && depth <= 90) { setAndUpdate('G', false, false, (tbt - 25), dive) }
        else if (tbt <= 15 && depth <= 90) { setAndUpdate('H', false, false, (tbt - 25), dive) }
        else if (tbt <= 16 && depth <= 90) { setAndUpdate('I', false, false, (tbt - 25), dive) }
        else if (tbt <= 17 && depth <= 90) { setAndUpdate('J', false, false, (tbt - 25), dive) }
        else if (tbt <= 18 && depth <= 90) { setAndUpdate('K', false, false, (tbt - 25), dive) }
        else if (tbt <= 19 && depth <= 90) { setAndUpdate('L', false, false, (tbt - 25), dive) }
        else if (tbt <= 21 && depth <= 90) { setAndUpdate('M', false, false, (tbt - 25), dive) }
        else if (tbt <= 22 && depth <= 90) { setAndUpdate('N', true, false, (tbt - 25), dive) }
        else if (tbt <= 23 && depth <= 90) { setAndUpdate('O', true, false, (tbt - 25), dive) }
        else if (tbt <= 24 && depth <= 90) { setAndUpdate('P', true, false, (tbt - 25), dive) }
        else if (tbt > 24 && depth <= 90) { setAndUpdate('Q', true, true, (tbt - 25), dive) }
        // Depth <= 100
        else if (tbt <= 3 && depth <= 100) { setAndUpdate('A', true, false, (tbt - 20), dive) }
        else if (tbt <= 6 && depth <= 100) { setAndUpdate('B', true, false, (tbt - 20), dive) }
        else if (tbt <= 8 && depth <= 100) { setAndUpdate('C', true, false, (tbt - 20), dive) }
        else if (tbt <= 9 && depth <= 100) { setAndUpdate('D', true, false, (tbt - 20), dive) }
        else if (tbt <= 10 && depth <= 100) { setAndUpdate('E', true, false, (tbt - 20), dive) }
        else if (tbt <= 11 && depth <= 100) { setAndUpdate('F', true, false, (tbt - 20), dive) }
        else if (tbt <= 12 && depth <= 100) { setAndUpdate('G', true, false, (tbt - 20), dive) }
        else if (tbt <= 13 && depth <= 100) { setAndUpdate('H', true, false, (tbt - 20), dive) }
        else if (tbt <= 14 && depth <= 100) { setAndUpdate('I', true, false, (tbt - 20), dive) }
        else if (tbt <= 15 && depth <= 100) { setAndUpdate('J', true, false, (tbt - 20), dive) }
        else if (tbt <= 16 && depth <= 100) { setAndUpdate('K', true, false, (tbt - 20), dive) }
        else if (tbt <= 17 && depth <= 100) { setAndUpdate('L', true, false, (tbt - 20), dive) }
        else if (tbt <= 18 && depth <= 100) { setAndUpdate('M', true, false, (tbt - 20), dive) }
        else if (tbt <= 19 && depth <= 100) { setAndUpdate('N', true, false, (tbt - 20), dive) }
        else if (tbt > 19 && depth <= 100) { setAndUpdate('O', true, true, dive) }
        // Depth <= 110
        else if (tbt <= 3 && depth <= 110) { setAndUpdate('A', true, false, (tbt - 16), dive) }
        else if (tbt <= 6 && depth <= 110) { setAndUpdate('B', true, false, (tbt - 16), dive) }
        else if (tbt <= 7 && depth <= 110) { setAndUpdate('C', true, false, (tbt - 16), dive) }
        else if (tbt <= 8 && depth <= 110) { setAndUpdate('D', true, false, (tbt - 16), dive) }
        else if (tbt <= 9 && depth <= 110) { setAndUpdate('E', true, false, (tbt - 16), dive) }
        else if (tbt <= 10 && depth <= 110) { setAndUpdate('F', true, false, (tbt - 16), dive) }
        else if (tbt <= 11 && depth <= 110) { setAndUpdate('G', true, false, (tbt - 16), dive) }
        else if (tbt <= 12 && depth <= 110) { setAndUpdate('H', true, false, (tbt - 16), dive) }
        else if (tbt <= 13 && depth <= 110) { setAndUpdate('I', true, false, (tbt - 16), dive) }
        else if (tbt <= 13 && depth <= 110) { setAndUpdate('J', true, false, (tbt - 16), dive) }
        else if (tbt <= 14 && depth <= 110) { setAndUpdate('K', true, false, (tbt - 16), dive) }
        else if (tbt <= 15 && depth <= 110) { setAndUpdate('L', true, false, (tbt - 16), dive) }
        else if (tbt > 15 && depth <= 110) { setAndUpdate('M', true, true, (tbt - 16), dive) }
        // Depth <= 120
        else if (tbt <= 3 && depth <= 120) { setAndUpdate('A', true, false, (tbt - 13), dive) }
        else if (tbt <= 5 && depth <= 120) { setAndUpdate('B', true, false, (tbt - 13), dive) }
        else if (tbt <= 6 && depth <= 120) { setAndUpdate('C', true, false, (tbt - 13), dive) }
        else if (tbt <= 7 && depth <= 120) { setAndUpdate('D', true, false, (tbt - 13), dive) }
        else if (tbt <= 8 && depth <= 120) { setAndUpdate('E', true, false, (tbt - 13), dive) }
        else if (tbt <= 9 && depth <= 120) { setAndUpdate('F', true, false, (tbt - 13), dive) }
        else if (tbt <= 10 && depth <= 120) { setAndUpdate('G', true, false, (tbt - 13), dive) }
        else if (tbt <= 11 && depth <= 120) { setAndUpdate('H', true, false, (tbt - 13), dive) }
        else if (tbt <= 11 && depth <= 120) { setAndUpdate('I', true, false, (tbt - 13), dive) }
        else if (tbt <= 12 && depth <= 120) { setAndUpdate('J', true, false, (tbt - 13), dive) }
        else if (tbt > 12 && depth <= 120) { setAndUpdate('K', true, true, (tbt - 13), dive) }
        // Depth <= 130
        else if (tbt <= 3 && depth <= 130) { setAndUpdate('A', true, false, (tbt - 10), dive) }
        else if (tbt <= 5 && depth <= 130) { setAndUpdate('B', true, false, (tbt - 10), dive) }
        else if (tbt <= 6 && depth <= 130) { setAndUpdate('C', true, false, (tbt - 10), dive) }
        else if (tbt <= 7 && depth <= 130) { setAndUpdate('D', true, false, (tbt - 10), dive) }
        else if (tbt <= 7 && depth <= 130) { setAndUpdate('E', true, false, (tbt - 10), dive) }
        else if (tbt <= 8 && depth <= 130) { setAndUpdate('F', true, false, (tbt - 10), dive) }
        else if (tbt <= 9 && depth <= 130) { setAndUpdate('G', true, false, (tbt - 10), dive) }
        else if (tbt > 9 && depth <= 130) { setAndUpdate('H', true, true, (tbt - 10), dive) }
        // Depth <= 140
        else if (tbt <= 0 && depth <= 130) { setAndUpdate('A', true, false, (tbt - 8), dive) }
        else if (tbt <= 4 && depth <= 130) { setAndUpdate('B', true, false, (tbt - 8), dive) }
        else if (tbt <= 5 && depth <= 130) { setAndUpdate('C', true, false, (tbt - 8), dive) }
        else if (tbt <= 6 && depth <= 130) { setAndUpdate('D', true, false, (tbt - 8), dive) }
        else if (tbt <= 7 && depth <= 130) { setAndUpdate('E', true, false, (tbt - 8), dive) }
        else if (tbt > 6 && depth > 130) { setAndUpdate('F', true, true, (tbt - 8), dive) }
    }

    return (<>
        <h2>Dive 1</h2>
        <section className="inputs-flag">
            <div className="divePlanInputDiv">
                {dive1.depth > 0 ? '' :
                    <><fieldset>
                        <label>Depth</label>
                        <input type="number" value={dive0.depth} onChange={(event) => {
                            const dive = { ...dive0 }
                            dive.depth = parseInt(event.target.value)
                            updateDive0(dive)
                        }} /> ft
                    </fieldset>
                        <fieldset>
                            <label>Time</label>
                            <input type="number" value={dive0.abt} onChange={(event) => {
                                const dive = { ...dive0 }
                                dive.abt = parseInt(event.target.value)
                                updateDive0(dive)
                            }} />min
                        </fieldset>
                        <button onClick={getPressureGroup}>Dive</button></>
                }
                <button onClick={resetDives}>Reset</button>
            </div>
            <div className={dive1.noDecoLimit === false && dive1.ssRequired === false ? "diveFlagGreen" : dive1.noDecoLimit === true ? "diveFlagRed" : dive1.noDecoLimit === false && dive1.ssRequired === true ? "diveFlagYellow" : ""}>
                <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
            </div>
        </section>
        <section>
            <ul className="diveResults">
                <li>
                    Pressure Group: {dive1.depth > 0 ? <div className="pg-box">{dive1.pg}</div> : ''}
                </li>
                <li>
                    Safety stop required:
                    <div className="ss">{dive1.ssRequired === true && dive1.noDecoLimit === false ? '3 minutes' :
                        dive1.noDecoLimit === true && dive1.minOverDeco <= 5 ? '8 minutes' :
                            dive1.noDecoLimit === true && dive1.minOverDeco > 5 ? '15 minutes' :
                                dive1.depth > 0 && dive1.ssRequired === false ? 'None' : ''}
                    </div>
                </li>
                {dive1.minOverDeco < 0 ?
                    <li>
                        Minutes to no deco limit: {dive1.depth > 0 ? Math.abs(dive1.minOverDeco)
                            : ''}
                    </li> : ''
                }
                {dive1.minOverDeco > 0 ?
                    <><li>Min over no deco limit: {dive1.minOverDeco}</li>
                        <li>
                            <div className="noDecoLimit">
                                <b>No Deco Limit exceeded.</b> This dive is highly discouraged. The No Deco Limit is exceeded by {dive1.minOverDeco} {dive1.minOverDeco === 1 ? 'minute' : 'minutes'} which requires an {dive1.minOverDeco <= 5 ? '8' : '15'} minute decompression stop (air supply permitting). The diver must remain out of the water for {dive1.minOverDeco <= 5 ? '6' : '24'} hours before the next dive.
                            </div>
                        </li></>
                    : dive1.noDecoLimit === true && dive1.minOverDeco <= 0 ?
                        <li>
                            <div className="noDecoLimit">
                                <b>No Deco Limit met.</b> This dive is highly discouraged. The dive time requires rounding up to the next pressure group, which meets the no deco limit. This dive requires an 8 minute decompression stop (air supply permitting). The diver must remain out of the water for 6 hours before the next dive.
                            </div>
                        </li> : ''
                }
            </ul>
            {dive1.depth > 0 ?
                <button className="nextDive" onClick={toggleDive2}>
                    Next Dive ⬇️
                </button>
                : ''}
            <p ref={diveRef} className="empty"></p>
        </section>


        {/* // DIVE FORM 2 */}
        {form_Dive2.active === true ?
            <>
                <h2>Dive 2</h2>
                <section className="inputs-flag">
                    <div className="divePlanInputDiv">
                        {dive2.pg !== '' ? '' :
                            <>
                                <fieldset>
                                    <label>Surface Interval</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...dive0 }
                                        dive.si = parseInt(event.target.value)
                                        updateDive0(dive)
                                    }} /> min
                                </fieldset>
                                <fieldset>
                                    <label>Depth</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...dive0 }
                                        dive.depth = parseInt(event.target.value)
                                        updateDive0(dive)
                                    }} /> ft
                                </fieldset>
                                <fieldset>
                                    <label>Time</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...dive0 }
                                        dive.abt = parseInt(event.target.value)
                                        updateDive0(dive)
                                    }} />min
                                </fieldset>
                                <button onClick={getPressureGroup}>Dive</button></>
                        }
                        <button onClick={resetDives}>Reset</button>
                    </div>
                    <div className={dive2.noDecoLimit === false && dive2.ssRequired === false ? "diveFlagGreen" : dive2.noDecoLimit === true ? "diveFlagRed" : dive2.noDecoLimit === false && dive2.ssRequired === true ? "diveFlagYellow" : ""}>
                        <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
                    </div>
                </section>
                <section>
                    <ul className="diveResults">
                        <li>
                            Pressure Group: {dive2.pg !== '' ? <div className="pg-box">{dive2.pg}</div> : ''}
                        </li>
                        <li>
                            Safety stop required:
                            <div className="ss">{dive2.ssRequired === true && dive2.noDecoLimit === false ? '3 minutes' :
                                dive2.noDecoLimit === true && dive2.minOverDeco <= 5 ? '8 minutes' :
                                    dive2.noDecoLimit === true && dive2.minOverDeco > 5 ? '15 minutes' :
                                        dive2.depth > 0 && dive2.ssRequired === false ? 'None' : ''}
                            </div>
                        </li>
                        {dive2.minOverDeco < 0 ?
                            <li>
                                Minutes to no deco limit: {dive2.depth > 0 ? Math.abs(dive2.minOverDeco)
                                    : ''}
                            </li> : ''
                        }
                        {dive2.minOverDeco > 0 ?
                            <><li>Min over no deco limit: {dive2.minOverDeco}</li>
                                <li>
                                    <div className="noDecoLimit">
                                        <b>No Deco Limit exceeded.</b> This dive is highly discouraged. The No Deco Limit is exceeded by {dive2.minOverDeco} {dive2.minOverDeco === 1 ? 'minute' : 'minutes'} which requires an {dive2.minOverDeco <= 5 ? '8' : '15'} minute decompression stop (air supply permitting). The diver must remain out of the water for {dive2.minOverDeco <= 5 ? '6' : '24'} hours before the next dive.
                                    </div>
                                </li></>
                            : dive2.noDecoLimit === true && dive2.minOverDeco <= 0 ?
                                <li>
                                    <div className="noDecoLimit">
                                        <b>No Deco Limit met.</b> This dive is highly discouraged. The dive time requires rounding up to the next pressure group, which meets the no deco limit. This dive requires an 8 minute decompression stop (air supply permitting). The diver must remain out of the water for 6 hours before the next dive.
                                    </div>
                                </li> : ''
                        }
                    </ul>
                    {dive2.depth > 0 ?
                        <button className="nextDive" onClick={toggleDive3}>
                            Next Dive ⬇️
                        </button>
                        : ''}
                    <p className="empty"></p>
                </section></>
            : ''}


        {/* // DIVE FORM 2 */}
        {form_Dive3.active === true ?
            <>
                <h2>Dive 3</h2>
                <section className="inputs-flag">
                    <div className="divePlanInputDiv">
                        {dive3.depth > 0 ? '' :
                            <>
                                <fieldset>
                                    <label>Surface Interval</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...dive0 }
                                        dive.si = parseInt(event.target.value)
                                        updateDive0(dive)
                                    }} /> min
                                </fieldset>
                                <fieldset>
                                    <label>Depth</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...dive0 }
                                        dive.depth = parseInt(event.target.value)
                                        updateDive0(dive)
                                    }} /> ft
                                </fieldset>
                                <fieldset>
                                    <label>Time</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...dive0 }
                                        dive.abt = parseInt(event.target.value)
                                        updateDive0(dive)
                                    }} />min
                                </fieldset>
                                <button onClick={getPressureGroup}>Dive</button></>
                        }
                        <button onClick={resetDives}>Reset</button>
                    </div>
                    <div className={dive3.noDecoLimit === false && dive3.ssRequired === false ? "diveFlagGreen" : dive3.noDecoLimit === true ? "diveFlagRed" : dive3.noDecoLimit === false && dive3.ssRequired === true ? "diveFlagYellow" : ""}>
                        <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
                    </div>
                </section>
                <section>
                    <ul className="diveResults">
                        <li>
                            Pressure Group: {dive3.depth > 0 ? <div className="pg-box">{dive3.pg}</div> : ''}
                        </li>
                        <li>
                            Safety stop required:
                            <div className="ss">{dive3.ssRequired === true && dive3.noDecoLimit === false ? '3 minutes' :
                                dive3.noDecoLimit === true && dive3.minOverDeco <= 5 ? '8 minutes' :
                                    dive3.noDecoLimit === true && dive3.minOverDeco > 5 ? '15 minutes' :
                                        dive3.depth > 0 && dive3.ssRequired === false ? 'None' : ''}
                            </div>
                        </li>
                        {dive3.minOverDeco < 0 ?
                            <li>
                                Minutes to no deco limit: {dive3.depth > 0 ? Math.abs(dive3.minOverDeco)
                                    : ''}
                            </li> : ''
                        }
                        {dive3.minOverDeco > 0 ?
                            <><li>Min over no deco limit: {dive3.minOverDeco}</li>
                                <li>
                                    <div className="noDecoLimit">
                                        <b>No Deco Limit exceeded.</b> This dive is highly discouraged. The No Deco Limit is exceeded by {dive3.minOverDeco} {dive3.minOverDeco === 1 ? 'minute' : 'minutes'} which requires an {dive3.minOverDeco <= 5 ? '8' : '15'} minute decompression stop (air supply permitting). The diver must remain out of the water for {dive3.minOverDeco <= 5 ? '6' : '24'} hours before the next dive.
                                    </div>
                                </li></>
                            : dive3.noDecoLimit === true && dive3.minOverDeco <= 0 ?
                                <li>
                                    <div className="noDecoLimit">
                                        <b>No Deco Limit met.</b> This dive is highly discouraged. The dive time requires rounding up to the next pressure group, which meets the no deco limit. This dive requires an 8 minute decompression stop (air supply permitting). The diver must remain out of the water for 6 hours before the next dive.
                                    </div>
                                </li> : ''
                        }
                    </ul>
                    {dive3.depth > 0 ?
                        <button className="nextDive" onClick={toggleDive2}>
                            Next Dive ⬇️
                        </button>
                        : ''}
                    <p className="empty"></p>
                </section>
            </> : ''}</>
    )
}