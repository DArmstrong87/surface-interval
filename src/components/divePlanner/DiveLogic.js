import React, { useRef, useState } from "react";

export const DiveStates = () => {
    const [dive0, setDive0] = useState({})
    const [dive1, updateDive1] = useState({
        noDecoLimit: false,
        ssRequired: false
    })

    const [dive2, setDive2] = useState({
        si: 0,
        rnt: 0,
        depth: 0,
        abt: 0,
        tbt: 0,
        pg: '',
        ssRequired: false,
        noDecoLimit: false
    })
    const [dive3, setDive3] = useState({
        si: 0,
        rnt: 0,
        depth: 0,
        abt: 0,
        tbt: 0,
        pg: '',
        ssRequired: false,
        noDecoLimit: false
    })

    const dive = { ...dive0 }
    const abt = dive.abt
    const tbt = dive.abt + dive.rnt
    const depth = dive.depth
    const setAndUpdate = (pg, ss, ndl, mod, dive) => {
        const setPG = (letter) => dive.pg = letter;
        const setSS = (boolean) => dive.ssRequired = boolean;
        const setNDL = (boolean) => dive.noDecoLimit = boolean;
        const minOverDeco = (num) => dive.minOverDeco = num;
        const scroll = () => { diveRef.current.scrollIntoView({ behavior: 'smooth' }) };
        const setDive = (pg, ss, ndl, mod) => { setPG(pg); setSS(ss); setNDL(ndl); minOverDeco(mod) };
        setDive(pg, ss, ndl, mod); updateDive1(dive);
        scroll();
    }
    const resetDives = () => {
        setDive0({ depth: 0, abt: 0 });
        updateDive1({
            noDecoLimit: false,
            ssRequired: false
        })
    }
    const diveRef = useRef()

    const getPressureGroup = () => {
        // Depth <= 35
        if (abt <= 10 && depth <= 35) { setAndUpdate('A', false, false, (abt - 205), dive) }
        else if (abt <= 19 && depth <= 35) { setAndUpdate('B', false, false, (abt - 205), dive) }
        else if (abt <= 25 && depth <= 35) { setAndUpdate('C', false, false, (abt - 205), dive) }
        else if (abt <= 29 && depth <= 35) { setAndUpdate('D', false, false, (abt - 205), dive) }
        else if (abt <= 32 && depth <= 35) { setAndUpdate('E', false, false, (abt - 205), dive) }
        else if (abt <= 36 && depth <= 35) { setAndUpdate('F', false, false, (abt - 205), dive) }
        else if (abt <= 40 && depth <= 35) { setAndUpdate('G', false, false, (abt - 205), dive) }
        else if (abt <= 44 && depth <= 35) { setAndUpdate('H', false, false, (abt - 205), dive) }
        else if (abt <= 48 && depth <= 35) { setAndUpdate('I', false, false, (abt - 205), dive) }
        else if (abt <= 52 && depth <= 35) { setAndUpdate('J', false, false, (abt - 205), dive) }
        else if (abt <= 57 && depth <= 35) { setAndUpdate('K', false, false, (abt - 205), dive) }
        else if (abt <= 62 && depth <= 35) { setAndUpdate('L', false, false, (abt - 205), dive) }
        else if (abt <= 67 && depth <= 35) { setAndUpdate('M', false, false, (abt - 205), dive) }
        else if (abt <= 73 && depth <= 35) { setAndUpdate('N', false, false, (abt - 205), dive) }
        else if (abt <= 79 && depth <= 35) { setAndUpdate('O', false, false, (abt - 205), dive) }
        else if (abt <= 85 && depth <= 35) { setAndUpdate('P', false, false, (abt - 205), dive) }
        else if (abt <= 92 && depth <= 35) { setAndUpdate('Q', false, false, (abt - 205), dive) }
        else if (abt <= 100 && depth <= 35) { setAndUpdate('R', false, false, (abt - 205), dive) }
        else if (abt <= 108 && depth <= 35) { setAndUpdate('S', false, false, (abt - 205), dive) }
        else if (abt <= 117 && depth <= 35) { setAndUpdate('T', false, false, (abt - 205), dive) }
        else if (abt <= 127 && depth <= 35) { setAndUpdate('U', false, false, (abt - 205), dive) }
        else if (abt <= 139 && depth <= 35) { setAndUpdate('V', false, false, (abt - 205), dive) }
        else if (abt <= 152 && depth <= 35) { setAndUpdate('W', true, false, (abt - 205), dive) }
        else if (abt <= 168 && depth <= 35) { setAndUpdate('X', true, false, (abt - 205), dive) }
        else if (abt <= 188 && depth <= 35) { setAndUpdate('Y', true, false, (abt - 205), dive) }
        else if (abt > 188 && depth <= 35) { setAndUpdate('Z', true, true, (abt - 205), dive) }
        // Depth <= 40
        else if (abt <= 9 && depth <= 40) { setAndUpdate('A', false, false, (abt - 140), dive) }
        else if (abt <= 16 && depth <= 40) { setAndUpdate('B', false, false, (abt - 140), dive) }
        else if (abt <= 22 && depth <= 40) { setAndUpdate('C', false, false, (abt - 140), dive) }
        else if (abt <= 25 && depth <= 40) { setAndUpdate('D', false, false, (abt - 140), dive) }
        else if (abt <= 27 && depth <= 40) { setAndUpdate('E', false, false, (abt - 140), dive) }
        else if (abt <= 31 && depth <= 40) { setAndUpdate('F', false, false, (abt - 140), dive) }
        else if (abt <= 34 && depth <= 40) { setAndUpdate('G', false, false, (abt - 140), dive) }
        else if (abt <= 37 && depth <= 40) { setAndUpdate('H', false, false, (abt - 140), dive) }
        else if (abt <= 40 && depth <= 40) { setAndUpdate('I', false, false, (abt - 140), dive) }
        else if (abt <= 44 && depth <= 40) { setAndUpdate('J', false, false, (abt - 140), dive) }
        else if (abt <= 48 && depth <= 40) { setAndUpdate('K', false, false, (abt - 140), dive) }
        else if (abt <= 51 && depth <= 40) { setAndUpdate('L', false, false, (abt - 140), dive) }
        else if (abt <= 55 && depth <= 40) { setAndUpdate('M', false, false, (abt - 140), dive) }
        else if (abt <= 60 && depth <= 40) { setAndUpdate('N', false, false, (abt - 140), dive) }
        else if (abt <= 64 && depth <= 40) { setAndUpdate('O', false, false, (abt - 140), dive) }
        else if (abt <= 69 && depth <= 40) { setAndUpdate('P', false, false, (abt - 140), dive) }
        else if (abt <= 74 && depth <= 40) { setAndUpdate('Q', false, false, (abt - 140), dive) }
        else if (abt <= 79 && depth <= 40) { setAndUpdate('R', false, false, (abt - 140), dive) }
        else if (abt <= 85 && depth <= 40) { setAndUpdate('S', false, false, (abt - 140), dive) }
        else if (abt <= 91 && depth <= 40) { setAndUpdate('T', false, false, (abt - 140), dive) }
        else if (abt <= 97 && depth <= 40) { setAndUpdate('U', false, false, (abt - 140), dive) }
        else if (abt <= 104 && depth <= 40) { setAndUpdate('V', false, false, (abt - 140), dive) }
        else if (abt <= 111 && depth <= 40) { setAndUpdate('W', true, false, (abt - 140), dive) }
        else if (abt <= 120 && depth <= 40) { setAndUpdate('X', true, false, (abt - 140), dive) }
        else if (abt <= 129 && depth <= 40) { setAndUpdate('Y', true, false, (abt - 140), dive) }
        else if (abt > 129 && depth <= 40) { setAndUpdate('Z', true, true, (abt - 140), dive) }
        // Depth <= 50
        else if (abt <= 7 && depth <= 50) { setAndUpdate('A', false, false, (abt - 80), dive) }
        else if (abt <= 13 && depth <= 50) { setAndUpdate('B', false, false, (abt - 80), dive) }
        else if (abt <= 17 && depth <= 50) { setAndUpdate('C', false, false, (abt - 80), dive) }
        else if (abt <= 19 && depth <= 50) { setAndUpdate('D', false, false, (abt - 80), dive) }
        else if (abt <= 21 && depth <= 50) { setAndUpdate('E', false, false, (abt - 80), dive) }
        else if (abt <= 24 && depth <= 50) { setAndUpdate('F', false, false, (abt - 80), dive) }
        else if (abt <= 26 && depth <= 50) { setAndUpdate('G', false, false, (abt - 80), dive) }
        else if (abt <= 28 && depth <= 50) { setAndUpdate('H', false, false, (abt - 80), dive) }
        else if (abt <= 31 && depth <= 50) { setAndUpdate('I', false, false, (abt - 80), dive) }
        else if (abt <= 33 && depth <= 50) { setAndUpdate('J', false, false, (abt - 80), dive) }
        else if (abt <= 36 && depth <= 50) { setAndUpdate('K', false, false, (abt - 80), dive) }
        else if (abt <= 39 && depth <= 50) { setAndUpdate('L', false, false, (abt - 80), dive) }
        else if (abt <= 41 && depth <= 50) { setAndUpdate('M', false, false, (abt - 80), dive) }
        else if (abt <= 44 && depth <= 50) { setAndUpdate('N', false, false, (abt - 80), dive) }
        else if (abt <= 47 && depth <= 50) { setAndUpdate('O', false, false, (abt - 80), dive) }
        else if (abt <= 50 && depth <= 50) { setAndUpdate('P', false, false, (abt - 80), dive) }
        else if (abt <= 53 && depth <= 50) { setAndUpdate('Q', false, false, (abt - 80), dive) }
        else if (abt <= 57 && depth <= 50) { setAndUpdate('R', false, false, (abt - 80), dive) }
        else if (abt <= 60 && depth <= 50) { setAndUpdate('S', false, false, (abt - 80), dive) }
        else if (abt <= 63 && depth <= 50) { setAndUpdate('T', false, false, (abt - 80), dive) }
        else if (abt <= 67 && depth <= 50) { setAndUpdate('U', true, false, (abt - 80), dive) }
        else if (abt <= 71 && depth <= 50) { setAndUpdate('V', true, false, (abt - 80), dive) }
        else if (abt <= 75 && depth <= 50) { setAndUpdate('W', true, false, (abt - 80), dive) }
        else if (abt > 75 && depth <= 50) { setAndUpdate('X', true, true, (abt - 80), dive) }
        // Depth <= 60
        else if (abt <= 6 && depth <= 60) { setAndUpdate('A', false, false, (abt - 55), dive) }
        else if (abt <= 11 && depth <= 60) { setAndUpdate('B', false, false, (abt - 55), dive) }
        else if (abt <= 14 && depth <= 60) { setAndUpdate('C', false, false, (abt - 55), dive) }
        else if (abt <= 16 && depth <= 60) { setAndUpdate('D', false, false, (abt - 55), dive) }
        else if (abt <= 17 && depth <= 60) { setAndUpdate('E', false, false, (abt - 55), dive) }
        else if (abt <= 19 && depth <= 60) { setAndUpdate('F', false, false, (abt - 55), dive) }
        else if (abt <= 21 && depth <= 60) { setAndUpdate('G', false, false, (abt - 55), dive) }
        else if (abt <= 23 && depth <= 60) { setAndUpdate('H', false, false, (abt - 55), dive) }
        else if (abt <= 25 && depth <= 60) { setAndUpdate('I', false, false, (abt - 55), dive) }
        else if (abt <= 27 && depth <= 60) { setAndUpdate('J', false, false, (abt - 55), dive) }
        else if (abt <= 29 && depth <= 60) { setAndUpdate('K', false, false, (abt - 55), dive) }
        else if (abt <= 31 && depth <= 60) { setAndUpdate('L', false, false, (abt - 55), dive) }
        else if (abt <= 33 && depth <= 60) { setAndUpdate('M', false, false, (abt - 55), dive) }
        else if (abt <= 35 && depth <= 60) { setAndUpdate('N', false, false, (abt - 55), dive) }
        else if (abt <= 37 && depth <= 60) { setAndUpdate('O', false, false, (abt - 55), dive) }
        else if (abt <= 39 && depth <= 60) { setAndUpdate('P', false, false, (abt - 55), dive) }
        else if (abt <= 42 && depth <= 60) { setAndUpdate('Q', false, false, (abt - 55), dive) }
        else if (abt <= 44 && depth <= 60) { setAndUpdate('R', false, false, (abt - 55), dive) }
        else if (abt <= 47 && depth <= 60) { setAndUpdate('S', false, false, (abt - 55), dive) }
        else if (abt <= 49 && depth <= 60) { setAndUpdate('T', true, false, (abt - 55), dive) }
        else if (abt <= 52 && depth <= 60) { setAndUpdate('U', true, false, (abt - 55), dive) }
        else if (abt <= 54 && depth <= 60) { setAndUpdate('V', true, false, (abt - 55), dive) }
        else if (abt > 54 && depth <= 60) { setAndUpdate('W', true, true, (abt - 55), dive) }
        // Depth <= 70
        else if (abt <= 5 && depth <= 70) { setAndUpdate('A', false, false, (abt - 40), dive) }
        else if (abt <= 9 && depth <= 70) { setAndUpdate('B', false, false, (abt - 40), dive) }
        else if (abt <= 12 && depth <= 70) { setAndUpdate('C', false, false, (abt - 40), dive) }
        else if (abt <= 13 && depth <= 70) { setAndUpdate('D', false, false, (abt - 40), dive) }
        else if (abt <= 15 && depth <= 70) { setAndUpdate('E', false, false, (abt - 40), dive) }
        else if (abt <= 16 && depth <= 70) { setAndUpdate('F', false, false, (abt - 40), dive) }
        else if (abt <= 18 && depth <= 70) { setAndUpdate('G', false, false, (abt - 40), dive) }
        else if (abt <= 19 && depth <= 70) { setAndUpdate('H', false, false, (abt - 40), dive) }
        else if (abt <= 21 && depth <= 70) { setAndUpdate('I', false, false, (abt - 40), dive) }
        else if (abt <= 22 && depth <= 70) { setAndUpdate('J', false, false, (abt - 40), dive) }
        else if (abt <= 24 && depth <= 70) { setAndUpdate('K', false, false, (abt - 40), dive) }
        else if (abt <= 26 && depth <= 70) { setAndUpdate('L', false, false, (abt - 40), dive) }
        else if (abt <= 27 && depth <= 70) { setAndUpdate('M', false, false, (abt - 40), dive) }
        else if (abt <= 29 && depth <= 70) { setAndUpdate('N', false, false, (abt - 40), dive) }
        else if (abt <= 31 && depth <= 70) { setAndUpdate('O', false, false, (abt - 40), dive) }
        else if (abt <= 33 && depth <= 70) { setAndUpdate('P', false, false, (abt - 40), dive) }
        else if (abt <= 35 && depth <= 70) { setAndUpdate('Q', true, false, (abt - 40), dive) }
        else if (abt <= 36 && depth <= 70) { setAndUpdate('R', true, false, (abt - 40), dive) }
        else if (abt <= 38 && depth <= 70) { setAndUpdate('S', true, false, (abt - 40), dive) }
        else if (abt > 38 && depth <= 70) { setAndUpdate('T', true, true, (abt - 40), dive) }
        // Depth <= 80
        else if (abt <= 4 && depth <= 80) { setAndUpdate('A', false, false, (abt - 30), dive) }
        else if (abt <= 8 && depth <= 80) { setAndUpdate('B', false, false, (abt - 30), dive) }
        else if (abt <= 10 && depth <= 80) { setAndUpdate('C', false, false, (abt - 30), dive) }
        else if (abt <= 11 && depth <= 80) { setAndUpdate('D', false, false, (abt - 30), dive) }
        else if (abt <= 13 && depth <= 80) { setAndUpdate('E', false, false, (abt - 30), dive) }
        else if (abt <= 14 && depth <= 80) { setAndUpdate('F', false, false, (abt - 30), dive) }
        else if (abt <= 15 && depth <= 80) { setAndUpdate('G', false, false, (abt - 30), dive) }
        else if (abt <= 17 && depth <= 80) { setAndUpdate('H', false, false, (abt - 30), dive) }
        else if (abt <= 18 && depth <= 80) { setAndUpdate('I', false, false, (abt - 30), dive) }
        else if (abt <= 19 && depth <= 80) { setAndUpdate('J', false, false, (abt - 30), dive) }
        else if (abt <= 21 && depth <= 80) { setAndUpdate('K', false, false, (abt - 30), dive) }
        else if (abt <= 22 && depth <= 80) { setAndUpdate('L', false, false, (abt - 30), dive) }
        else if (abt <= 23 && depth <= 80) { setAndUpdate('M', false, false, (abt - 30), dive) }
        else if (abt <= 25 && depth <= 80) { setAndUpdate('N', false, false, (abt - 30), dive) }
        else if (abt <= 26 && depth <= 80) { setAndUpdate('O', true, false, (abt - 30), dive) }
        else if (abt <= 28 && depth <= 80) { setAndUpdate('P', true, false, (abt - 30), dive) }
        else if (abt <= 29 && depth <= 80) { setAndUpdate('Q', true, false, (abt - 30), dive) }
        else if (abt > 29 && depth <= 80) { setAndUpdate('R', true, true, (abt - 30), dive) }
        // Depth <= 90
        else if (abt <= 4 && depth <= 90) { setAndUpdate('A', false, false, (abt - 25), dive) }
        else if (abt <= 7 && depth <= 90) { setAndUpdate('B', false, false, (abt - 25), dive) }
        else if (abt <= 9 && depth <= 90) { setAndUpdate('C', false, false, (abt - 25), dive) }
        else if (abt <= 10 && depth <= 90) { setAndUpdate('D', false, false, (abt - 25), dive) }
        else if (abt <= 11 && depth <= 90) { setAndUpdate('E', false, false, (abt - 25), dive) }
        else if (abt <= 12 && depth <= 90) { setAndUpdate('F', false, false, (abt - 25), dive) }
        else if (abt <= 13 && depth <= 90) { setAndUpdate('G', false, false, (abt - 25), dive) }
        else if (abt <= 15 && depth <= 90) { setAndUpdate('H', false, false, (abt - 25), dive) }
        else if (abt <= 16 && depth <= 90) { setAndUpdate('I', false, false, (abt - 25), dive) }
        else if (abt <= 17 && depth <= 90) { setAndUpdate('J', false, false, (abt - 25), dive) }
        else if (abt <= 18 && depth <= 90) { setAndUpdate('K', false, false, (abt - 25), dive) }
        else if (abt <= 19 && depth <= 90) { setAndUpdate('L', false, false, (abt - 25), dive) }
        else if (abt <= 21 && depth <= 90) { setAndUpdate('M', false, false, (abt - 25), dive) }
        else if (abt <= 22 && depth <= 90) { setAndUpdate('N', true, false, (abt - 25), dive) }
        else if (abt <= 23 && depth <= 90) { setAndUpdate('O', true, false, (abt - 25), dive) }
        else if (abt <= 24 && depth <= 90) { setAndUpdate('P', true, false, (abt - 25), dive) }
        else if (abt > 24 && depth <= 90) { setAndUpdate('Q', true, true, (abt - 25), dive) }
        // Depth <= 100
        else if (abt <= 3 && depth <= 100) { setAndUpdate('A', true, false, (abt - 20), dive) }
        else if (abt <= 6 && depth <= 100) { setAndUpdate('B', true, false, (abt - 20), dive) }
        else if (abt <= 8 && depth <= 100) { setAndUpdate('C', true, false, (abt - 20), dive) }
        else if (abt <= 9 && depth <= 100) { setAndUpdate('D', true, false, (abt - 20), dive) }
        else if (abt <= 10 && depth <= 100) { setAndUpdate('E', true, false, (abt - 20), dive) }
        else if (abt <= 11 && depth <= 100) { setAndUpdate('F', true, false, (abt - 20), dive) }
        else if (abt <= 12 && depth <= 100) { setAndUpdate('G', true, false, (abt - 20), dive) }
        else if (abt <= 13 && depth <= 100) { setAndUpdate('H', true, false, (abt - 20), dive) }
        else if (abt <= 14 && depth <= 100) { setAndUpdate('I', true, false, (abt - 20), dive) }
        else if (abt <= 15 && depth <= 100) { setAndUpdate('J', true, false, (abt - 20), dive) }
        else if (abt <= 16 && depth <= 100) { setAndUpdate('K', true, false, (abt - 20), dive) }
        else if (abt <= 17 && depth <= 100) { setAndUpdate('L', true, false, (abt - 20), dive) }
        else if (abt <= 18 && depth <= 100) { setAndUpdate('M', true, false, (abt - 20), dive) }
        else if (abt <= 19 && depth <= 100) { setAndUpdate('N', true, false, (abt - 20), dive) }
        else if (abt > 19 && depth <= 100) { setAndUpdate('O', true, true, dive) }
        // Depth <= 110
        else if (abt <= 3 && depth <= 110) { setAndUpdate('A', true, false, (abt - 16), dive) }
        else if (abt <= 6 && depth <= 110) { setAndUpdate('B', true, false, (abt - 16), dive) }
        else if (abt <= 7 && depth <= 110) { setAndUpdate('C', true, false, (abt - 16), dive) }
        else if (abt <= 8 && depth <= 110) { setAndUpdate('D', true, false, (abt - 16), dive) }
        else if (abt <= 9 && depth <= 110) { setAndUpdate('E', true, false, (abt - 16), dive) }
        else if (abt <= 10 && depth <= 110) { setAndUpdate('F', true, false, (abt - 16), dive) }
        else if (abt <= 11 && depth <= 110) { setAndUpdate('G', true, false, (abt - 16), dive) }
        else if (abt <= 12 && depth <= 110) { setAndUpdate('H', true, false, (abt - 16), dive) }
        else if (abt <= 13 && depth <= 110) { setAndUpdate('I', true, false, (abt - 16), dive) }
        else if (abt <= 13 && depth <= 110) { setAndUpdate('J', true, false, (abt - 16), dive) }
        else if (abt <= 14 && depth <= 110) { setAndUpdate('K', true, false, (abt - 16), dive) }
        else if (abt <= 15 && depth <= 110) { setAndUpdate('L', true, false, (abt - 16), dive) }
        else if (abt > 15 && depth <= 110) { setAndUpdate('M', true, true, (abt - 16), dive) }
        // Depth <= 120
        else if (abt <= 3 && depth <= 120) { setAndUpdate('A', true, false, (abt - 13), dive) }
        else if (abt <= 5 && depth <= 120) { setAndUpdate('B', true, false, (abt - 13), dive) }
        else if (abt <= 6 && depth <= 120) { setAndUpdate('C', true, false, (abt - 13), dive) }
        else if (abt <= 7 && depth <= 120) { setAndUpdate('D', true, false, (abt - 13), dive) }
        else if (abt <= 8 && depth <= 120) { setAndUpdate('E', true, false, (abt - 13), dive) }
        else if (abt <= 9 && depth <= 120) { setAndUpdate('F', true, false, (abt - 13), dive) }
        else if (abt <= 10 && depth <= 120) { setAndUpdate('G', true, false, (abt - 13), dive) }
        else if (abt <= 11 && depth <= 120) { setAndUpdate('H', true, false, (abt - 13), dive) }
        else if (abt <= 11 && depth <= 120) { setAndUpdate('I', true, false, (abt - 13), dive) }
        else if (abt <= 12 && depth <= 120) { setAndUpdate('J', true, false, (abt - 13), dive) }
        else if (abt > 12 && depth <= 120) { setAndUpdate('K', true, true, (abt - 13), dive) }
        // Depth <= 130
        else if (abt <= 3 && depth <= 130) { setAndUpdate('A', true, false, (abt - 10), dive) }
        else if (abt <= 5 && depth <= 130) { setAndUpdate('B', true, false, (abt - 10), dive) }
        else if (abt <= 6 && depth <= 130) { setAndUpdate('C', true, false, (abt - 10), dive) }
        else if (abt <= 7 && depth <= 130) { setAndUpdate('D', true, false, (abt - 10), dive) }
        else if (abt <= 7 && depth <= 130) { setAndUpdate('E', true, false, (abt - 10), dive) }
        else if (abt <= 8 && depth <= 130) { setAndUpdate('F', true, false, (abt - 10), dive) }
        else if (abt <= 9 && depth <= 130) { setAndUpdate('G', true, false, (abt - 10), dive) }
        else if (abt > 9 && depth <= 130) { setAndUpdate('H', true, true, (abt - 10), dive) }
        // Depth <= 140
        else if (abt <= 0 && depth <= 130) { setAndUpdate('A', true, false, (abt - 8), dive) }
        else if (abt <= 4 && depth <= 130) { setAndUpdate('B', true, false, (abt - 8), dive) }
        else if (abt <= 5 && depth <= 130) { setAndUpdate('C', true, false, (abt - 8), dive) }
        else if (abt <= 6 && depth <= 130) { setAndUpdate('D', true, false, (abt - 8), dive) }
        else if (abt <= 7 && depth <= 130) { setAndUpdate('E', true, false, (abt - 8), dive) }
        else if (abt > 6 && depth > 130) { setAndUpdate('F', true, true, (abt - 8), dive) }
    }


    return (<><section className="inputs-flag">
        <div className="divePlanInputDiv">
            <fieldset>
                <label>Depth</label>
                <input type="number" value={dive0.depth} onChange={(event) => {
                    const dive = { ...dive0 }
                    dive.depth = parseInt(event.target.value)
                    setDive0(dive)
                }} /> ft
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
            <p ref={diveRef} className="empty"></p>
        </section>
    </>)
}