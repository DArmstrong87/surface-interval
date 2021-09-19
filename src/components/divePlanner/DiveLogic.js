import React, { useState } from "react";
import { Dive } from "./Dive";

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

    // Function to set the dive state's pressure group, ss boolean, no deco limit boolean, and minutes over deco.
    // ***This is the only function that should set the new state of each dive!
    const setAndUpdate = (pg, ss, ndl, mod, dive, step, rnt) => {
        const setPG = (letter) => dive.pg = letter;
        const setSS = (boolean) => dive.ssRequired = boolean;
        const setNDL = (boolean) => dive.noDecoLimit = boolean;
        const minOverDeco = (num) => dive.minOverDeco = num;
        const setNewPg = () => {
            if (step === 1) { dive.pgAfterSi = null }
            else if (step === 2) { dive.pgAfterSi = dive2.pgAfterSi }
            else if (step === 3) { dive.pgAfterSi = dive3.pgAfterSi }
        }
        const setRNT = (num) => dive.rnt = num
        const setDive = (pg, ss, ndl, mod, rnt) => { setPG(pg); setSS(ss); setNDL(ndl); minOverDeco(mod); setNewPg(); setRNT(rnt) };
        setDive(pg, ss, ndl, mod, rnt);
        if (step === 1) updateDive1(dive)
        if (step === 2) updateDive2(dive)
        else if (step === 3) updateDive3(dive)
    }

    const resetDives = (updateDiveInput) => {
        updateDiveInput({ depth: 0, abt: 0, rnt: 0, pg: '' });
        updateDive1({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        updateDive2({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
        updateDive3({ noDecoLimit: false, ssRequired: false, depth: 0, rnt: 0, pg: '' });
    }

    // Sets Pressure Group, safety stop boolean, no deco limit boolean, minutes to no deco time, and specifies which dive to update.
    const getPressureGroup = (input, step, currentDive) => {
        let rnt = input.rnt
        if (step === 2 || step === 3) rnt = getRNT(step, input.depth, currentDive.pgAfterSi)
        let tbt = (input.abt + rnt)
        const depth = input.depth
        console.log(input)
        console.log('getPressureGroup runs')
        if (depth <= 35) {
            if (tbt <= 10) setAndUpdate('A', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 19) setAndUpdate('B', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 25) setAndUpdate('C', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 29) setAndUpdate('D', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 32) setAndUpdate('E', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 36) setAndUpdate('F', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 40) setAndUpdate('G', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 44) setAndUpdate('H', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 48) setAndUpdate('I', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 52) setAndUpdate('J', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 57) setAndUpdate('K', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 62) setAndUpdate('L', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 67) setAndUpdate('M', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 73) setAndUpdate('N', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 79) setAndUpdate('O', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 85) setAndUpdate('P', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 92) setAndUpdate('Q', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 100) setAndUpdate('R', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 108) setAndUpdate('S', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 117) setAndUpdate('T', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 127) setAndUpdate('U', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 139) setAndUpdate('V', false, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 152) setAndUpdate('W', true, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 168) setAndUpdate('X', true, false, (tbt - 205), input, step, rnt)
            else if (tbt <= 188) setAndUpdate('Y', true, false, (tbt - 205), input, step, rnt)
            else if (tbt > 188) setAndUpdate('Z', true, true, (tbt - 205), input, step, rnt)
        }
        else if (depth <= 40) {
            if (tbt <= 9) setAndUpdate('A', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 16) setAndUpdate('B', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 22) setAndUpdate('C', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 25) setAndUpdate('D', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 27) setAndUpdate('E', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 31) setAndUpdate('F', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 34) setAndUpdate('G', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 37) setAndUpdate('H', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 40) setAndUpdate('I', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 44) setAndUpdate('J', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 48) setAndUpdate('K', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 51) setAndUpdate('L', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 55) setAndUpdate('M', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 60) setAndUpdate('N', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 64) setAndUpdate('O', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 69) setAndUpdate('P', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 74) setAndUpdate('Q', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 79) setAndUpdate('R', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 85) setAndUpdate('S', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 91) setAndUpdate('T', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 97) setAndUpdate('U', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 104) setAndUpdate('V', false, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 111) setAndUpdate('W', true, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 120) setAndUpdate('X', true, false, (tbt - 140), input, step, rnt)
            else if (tbt <= 129) setAndUpdate('Y', true, false, (tbt - 140), input, step, rnt)
            else if (tbt > 129) setAndUpdate('Z', true, true, (tbt - 140), input, step, rnt)
        }
        else if (depth <= 50) {
            if (tbt <= 7) setAndUpdate('A', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 13) setAndUpdate('B', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 17) setAndUpdate('C', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 19) setAndUpdate('D', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 21) setAndUpdate('E', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 24) setAndUpdate('F', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 26) setAndUpdate('G', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 28) setAndUpdate('H', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 31) setAndUpdate('I', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 33) setAndUpdate('J', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 36) setAndUpdate('K', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 39) setAndUpdate('L', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 41) setAndUpdate('M', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 44) setAndUpdate('N', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 47) setAndUpdate('O', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 50) setAndUpdate('P', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 53) setAndUpdate('Q', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 57) setAndUpdate('R', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 60) setAndUpdate('S', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 63) setAndUpdate('T', false, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 67) setAndUpdate('U', true, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 71) setAndUpdate('V', true, false, (tbt - 80), input, step, rnt)
            else if (tbt <= 75) setAndUpdate('W', true, false, (tbt - 80), input, step, rnt)
            else if (tbt > 75) setAndUpdate('X', true, true, (tbt - 80), input, step, rnt)
        }
        else if (depth <= 60) {
            if (tbt <= 6) setAndUpdate('A', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 11) setAndUpdate('B', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 14) setAndUpdate('C', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 16) setAndUpdate('D', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 17) setAndUpdate('E', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 19) setAndUpdate('F', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 21) setAndUpdate('G', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 23) setAndUpdate('H', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 25) setAndUpdate('I', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 27) setAndUpdate('J', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 29) setAndUpdate('K', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 31) setAndUpdate('L', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 33) setAndUpdate('M', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 35) setAndUpdate('N', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 37) setAndUpdate('O', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 39) setAndUpdate('P', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 42) setAndUpdate('Q', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 44) setAndUpdate('R', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 47) setAndUpdate('S', false, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 49) setAndUpdate('T', true, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 52) setAndUpdate('U', true, false, (tbt - 55), input, step, rnt)
            else if (tbt <= 54) setAndUpdate('V', true, false, (tbt - 55), input, step, rnt)
            else if (tbt > 54) setAndUpdate('W', true, true, (tbt - 55), input, step, rnt)
        }
        else if (depth <= 70) {
            if (tbt <= 5) setAndUpdate('A', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 9) setAndUpdate('B', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 12) setAndUpdate('C', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 13) setAndUpdate('D', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 15) setAndUpdate('E', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 16) setAndUpdate('F', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 18) setAndUpdate('G', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 19) setAndUpdate('H', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 21) setAndUpdate('I', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 22) setAndUpdate('J', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 24) setAndUpdate('K', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 26) setAndUpdate('L', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 27) setAndUpdate('M', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 29) setAndUpdate('N', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 31) setAndUpdate('O', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 33) setAndUpdate('P', false, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 35) setAndUpdate('Q', true, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 36) setAndUpdate('R', true, false, (tbt - 40), input, step, rnt)
            else if (tbt <= 38) setAndUpdate('S', true, false, (tbt - 40), input, step, rnt)
            else if (tbt > 38) setAndUpdate('T', true, true, (tbt - 40), input, step, rnt)
        }
        else if (depth <= 80) {
            if (tbt <= 4) setAndUpdate('A', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 8) setAndUpdate('B', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 10) setAndUpdate('C', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 11) setAndUpdate('D', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 13) setAndUpdate('E', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 14) setAndUpdate('F', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 15) setAndUpdate('G', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 17) setAndUpdate('H', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 18) setAndUpdate('I', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 19) setAndUpdate('J', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 21) setAndUpdate('K', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 22) setAndUpdate('L', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 23) setAndUpdate('M', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 25) setAndUpdate('N', false, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 26) setAndUpdate('O', true, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 28) setAndUpdate('P', true, false, (tbt - 30), input, step, rnt)
            else if (tbt <= 29) setAndUpdate('Q', true, false, (tbt - 30), input, step, rnt)
            else if (tbt > 29) setAndUpdate('R', true, true, (tbt - 30), input, step, rnt)
        }
        else if (depth <= 90) {
            if (tbt <= 4) setAndUpdate('A', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 7) setAndUpdate('B', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 9) setAndUpdate('C', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 10) setAndUpdate('D', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 11) setAndUpdate('E', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 12) setAndUpdate('F', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 13) setAndUpdate('G', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 15) setAndUpdate('H', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 16) setAndUpdate('I', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 17) setAndUpdate('J', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 18) setAndUpdate('K', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 19) setAndUpdate('L', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 21) setAndUpdate('M', false, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 22) setAndUpdate('N', true, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 23) setAndUpdate('O', true, false, (tbt - 25), input, step, rnt)
            else if (tbt <= 24) setAndUpdate('P', true, false, (tbt - 25), input, step, rnt)
            else if (tbt > 24) setAndUpdate('Q', true, true, (tbt - 25), input, step, rnt)
        }
        else if (depth <= 100) {
            if (tbt <= 3) setAndUpdate('A', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 6) setAndUpdate('B', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 8) setAndUpdate('C', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 9) setAndUpdate('D', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 10) setAndUpdate('E', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 11) setAndUpdate('F', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 12) setAndUpdate('G', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 13) setAndUpdate('H', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 14) setAndUpdate('I', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 15) setAndUpdate('J', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 16) setAndUpdate('K', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 17) setAndUpdate('L', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 18) setAndUpdate('M', true, false, (tbt - 20), input, step, rnt)
            else if (tbt <= 19) setAndUpdate('N', true, false, (tbt - 20), input, step, rnt)
            else if (tbt > 19) setAndUpdate('O', true, true, (tbt - 20), input, step, rnt)
        }
        else if (depth <= 110) {
            if (tbt <= 3) setAndUpdate('A', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 6) setAndUpdate('B', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 7) setAndUpdate('C', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 8) setAndUpdate('D', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 9) setAndUpdate('E', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 10) setAndUpdate('F', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 11) setAndUpdate('G', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 12) setAndUpdate('H', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 13) setAndUpdate('I', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 13) setAndUpdate('J', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 14) setAndUpdate('K', true, false, (tbt - 16), input, step, rnt)
            else if (tbt <= 15) setAndUpdate('L', true, false, (tbt - 16), input, step, rnt)
            else if (tbt > 15) setAndUpdate('M', true, true, (tbt - 16), input, step, rnt)
        }
        else if (depth <= 120) {
            if (tbt <= 3) setAndUpdate('A', true, false, (tbt - 13), input, step, rnt)
            else if (tbt <= 5) setAndUpdate('B', true, false, (tbt - 13), input, step, rnt)
            else if (tbt <= 6) setAndUpdate('C', true, false, (tbt - 13), input, step, rnt)
            else if (tbt <= 7) setAndUpdate('D', true, false, (tbt - 13), input, step, rnt)
            else if (tbt <= 8) setAndUpdate('E', true, false, (tbt - 13), input, step, rnt)
            else if (tbt <= 9) setAndUpdate('F', true, false, (tbt - 13), input, step, rnt)
            else if (tbt <= 10) setAndUpdate('G', true, false, (tbt - 13), input, step, rnt)
            else if (tbt <= 11) setAndUpdate('H', true, false, (tbt - 13), input, step, rnt)
            else if (tbt <= 11) setAndUpdate('I', true, false, (tbt - 13), input, step, rnt)
            else if (tbt <= 12) setAndUpdate('J', true, false, (tbt - 13), input, step, rnt)
            else if (tbt > 12) setAndUpdate('K', true, true, (tbt - 13), input, step, rnt)
        }
        else if (depth <= 130) {
            if (tbt <= 3) setAndUpdate('A', true, false, (tbt - 10), input, step, rnt)
            else if (tbt <= 5) setAndUpdate('B', true, false, (tbt - 10), input, step, rnt)
            else if (tbt <= 6) setAndUpdate('C', true, false, (tbt - 10), input, step, rnt)
            else if (tbt <= 7) setAndUpdate('D', true, false, (tbt - 10), input, step, rnt)
            else if (tbt <= 7) setAndUpdate('E', true, false, (tbt - 10), input, step, rnt)
            else if (tbt <= 8) setAndUpdate('F', true, false, (tbt - 10), input, step, rnt)
            else if (tbt <= 9) setAndUpdate('G', true, false, (tbt - 10), input, step, rnt)
            else if (tbt > 9) setAndUpdate('H', true, true, (tbt - 10), input, step, rnt)
        }
        else if (depth <= 140) {
            if (tbt <= 0) setAndUpdate('A', true, false, (tbt - 8), input, step, rnt)
            else if (tbt <= 4) setAndUpdate('B', true, false, (tbt - 8), input, step, rnt)
            else if (tbt <= 5) setAndUpdate('C', true, false, (tbt - 8), input, step, rnt)
            else if (tbt <= 6) setAndUpdate('D', true, false, (tbt - 8), input, step, rnt)
            else if (tbt <= 7) setAndUpdate('E', true, false, (tbt - 8), input, step, rnt)
            else if (tbt > 6) setAndUpdate('F', true, true, (tbt - 8), input, step, rnt)
        }
    }

    // Sets Pressue group after surface interval.
    const setPgAfterSi = (input, currentDive, step) => {
        // This function finds new PG, factoring in the previous dive's PG and the current surface interval.
        console.log('setNewPG runs')
        const inputData = { ...input }
        const dive = currentDive
        const findPg = () => {
            if (step === 1) return ''
            if (step === 2) return dives[0]?.pg
            if (step === 3) return dives[1]?.pg
        }
        const setPg = (letter) => {
            dive.pgAfterSi = letter
        }

        let pg = findPg()
        const si = inputData.si
        dive.si = inputData.si

        if (step === 1) dive.pgAfterSi = 'none'
        else if (pg === 'A') {
            if (si >= 0) dive.pgAfterSi = 'A'
        } else if (pg === 'B') {
            if (si >= 48) dive.pgAfterSi = 'A'
            if (si <= 47 && si >= 0) dive.pgAfterSi = 'B'
        } else if (pg === 'C') {
            if (si >= 70) dive.pgAfterSi = 'A'
            if (si <= 69 && si >= 22) dive.pgAfterSi = 'B'
            if (si <= 21 && si >= 0) dive.pgAfterSi = 'C'
        } else if (pg === 'D') {
            if (si >= 79) dive.pgAfterSi = 'A'
            if (si <= 78 && si >= 31) dive.pgAfterSi = 'B'
            if (si <= 30 && si >= 9) dive.pgAfterSi = 'C'
            if (si <= 8 && si >= 0) dive.pgAfterSi = 'D'
        } else if (pg === 'E') {
            if (si >= 88) dive.pgAfterSi = 'A'
            if (si <= 87 && si >= 39) dive.pgAfterSi = 'B'
            if (si <= 38 && si >= 17) dive.pgAfterSi = 'C'
            if (si <= 16 && si >= 8) dive.pgAfterSi = 'D'
            if (si <= 7 && si >= 0) dive.pgAfterSi = 'E'
        } else if (pg === 'F') {
            if (si >= 95) dive.pgAfterSi = 'A'
            if (si <= 94 && si >= 47) dive.pgAfterSi = 'B'
            if (si <= 46 && si >= 23) dive.pgAfterSi = 'C'
            if (si <= 24 && si >= 16) dive.pgAfterSi = 'D'
            if (si <= 15 && si >= 8) dive.pgAfterSi = 'E'
            if (si <= 8 && si >= 0) dive.pgAfterSi = 'F'
        } else if (pg === 'G') {
            if (si >= 102) dive.pgAfterSi = 'A'
            if (si <= 101 && si >= 54) dive.pgAfterSi = 'B'
            if (si <= 53 && si >= 32) dive.pgAfterSi = 'C'
            if (si <= 31 && si >= 23) dive.pgAfterSi = 'D'
            if (si <= 22 && si >= 14) dive.pgAfterSi = 'E'
            if (si <= 13 && si >= 7) dive.pgAfterSi = 'F'
            if (si <= 6 && si >= 0) dive.pgAfterSi = 'G'
        } else if (pg === 'H') {
            if (si >= 108) dive.pgAfterSi = 'A'
            if (si <= 107 && si >= 60) dive.pgAfterSi = 'B'
            if (si <= 59 && si >= 38) dive.pgAfterSi = 'C'
            if (si <= 37 && si >= 29) dive.pgAfterSi = 'D'
            if (si <= 28 && si >= 21) dive.pgAfterSi = 'E'
            if (si <= 20 && si >= 13) dive.pgAfterSi = 'F'
            if (si <= 12 && si >= 6) dive.pgAfterSi = 'G'
            if (si <= 5 && si >= 0) dive.pgAfterSi = 'H'
        } else if (pg === 'I') {
            if (si >= 114) dive.pgAfterSi = 'A'
            if (si <= 113 && si >= 66) dive.pgAfterSi = 'B'
            if (si <= 65 && si >= 44) dive.pgAfterSi = 'C'
            if (si <= 43 && si >= 35) dive.pgAfterSi = 'D'
            if (si <= 34 && si >= 27) dive.pgAfterSi = 'E'
            if (si <= 26 && si >= 19) dive.pgAfterSi = 'F'
            if (si <= 18 && si >= 12) dive.pgAfterSi = 'G'
            if (si <= 11 && si >= 6) dive.pgAfterSi = 'H'
            if (si <= 5 && si >= 0) dive.pgAfterSi = 'I'
        } else if (pg === 'J') {
            if (si >= 120) dive.pgAfterSi = 'A'
            if (si <= 119 && si >= 72) dive.pgAfterSi = 'B'
            if (si <= 71 && si >= 50) dive.pgAfterSi = 'C'
            if (si <= 49 && si >= 41) dive.pgAfterSi = 'D'
            if (si <= 40 && si >= 32) dive.pgAfterSi = 'E'
            if (si <= 31 && si >= 25) dive.pgAfterSi = 'F'
            if (si <= 24 && si >= 18) dive.pgAfterSi = 'G'
            if (si <= 17 && si >= 12) dive.pgAfterSi = 'H'
            if (si <= 11 && si >= 6) dive.pgAfterSi = 'I'
            if (si <= 5 && si >= 0) dive.pgAfterSi = 'J'
        } else if (pg === 'K') {
            if (si >= 125) dive.pgAfterSi = 'A'
            if (si <= 124 && si >= 77) dive.pgAfterSi = 'B'
            if (si <= 76 && si >= 55) dive.pgAfterSi = 'C'
            if (si <= 54 && si >= 46) dive.pgAfterSi = 'D'
            if (si <= 45 && si >= 38) dive.pgAfterSi = 'E'
            if (si <= 37 && si >= 30) dive.pgAfterSi = 'F'
            if (si <= 29 && si >= 23) dive.pgAfterSi = 'G'
            if (si <= 22 && si >= 17) dive.pgAfterSi = 'H'
            if (si <= 16 && si >= 11) dive.pgAfterSi = 'I'
            if (si <= 10 && si >= 5) dive.pgAfterSi = 'J'
            if (si <= 4 && si >= 0) dive.pgAfterSi = 'K'
        } else if (pg === 'L') {
            if (si >= 130) dive.pgAfterSi = 'A'
            if (si <= 129 && si >= 82) dive.pgAfterSi = 'B'
            if (si <= 81 && si >= 60) dive.pgAfterSi = 'C'
            if (si <= 59 && si >= 51) dive.pgAfterSi = 'D'
            if (si <= 50 && si >= 43) dive.pgAfterSi = 'E'
            if (si <= 42 && si >= 35) dive.pgAfterSi = 'F'
            if (si <= 34 && si >= 28) dive.pgAfterSi = 'G'
            if (si <= 27 && si >= 22) dive.pgAfterSi = 'H'
            if (si <= 21 && si >= 16) dive.pgAfterSi = 'I'
            if (si <= 15 && si >= 10) dive.pgAfterSi = 'J'
            if (si <= 9 && si >= 5) dive.pgAfterSi = 'K'
            if (si <= 4 && si >= 0) dive.pgAfterSi = 'L'
        } else if (pg === 'M') {
            if (si >= 135) dive.pgAfterSi = 'A'
            if (si <= 134 && si >= 86) dive.pgAfterSi = 'B'
            if (si <= 85 && si >= 65) dive.pgAfterSi = 'C'
            if (si <= 64 && si >= 56) dive.pgAfterSi = 'D'
            if (si <= 55 && si >= 47) dive.pgAfterSi = 'E'
            if (si <= 46 && si >= 40) dive.pgAfterSi = 'F'
            if (si <= 39 && si >= 33) dive.pgAfterSi = 'G'
            if (si <= 32 && si >= 26) dive.pgAfterSi = 'H'
            if (si <= 25 && si >= 20) dive.pgAfterSi = 'I'
            if (si <= 19 && si >= 15) dive.pgAfterSi = 'J'
            if (si <= 14 && si >= 10) dive.pgAfterSi = 'K'
            if (si <= 9 && si >= 5) dive.pgAfterSi = 'L'
            if (si <= 4 && si >= 0) dive.pgAfterSi = 'M'
        } else if (pg === 'N') {
            if (si >= 139) dive.pgAfterSi = 'A'
            if (si <= 138 && si >= 91) dive.pgAfterSi = 'B'
            if (si <= 90 && si >= 69) dive.pgAfterSi = 'C'
            if (si <= 68 && si >= 60) dive.pgAfterSi = 'D'
            if (si <= 59 && si >= 52) dive.pgAfterSi = 'E'
            if (si <= 51 && si >= 44) dive.pgAfterSi = 'F'
            if (si <= 43 && si >= 37) dive.pgAfterSi = 'G'
            if (si <= 36 && si >= 31) dive.pgAfterSi = 'H'
            if (si <= 30 && si >= 25) dive.pgAfterSi = 'I'
            if (si <= 24 && si >= 19) dive.pgAfterSi = 'J'
            if (si <= 18 && si >= 14) dive.pgAfterSi = 'K'
            if (si <= 13 && si >= 9) dive.pgAfterSi = 'L'
            if (si <= 8 && si >= 4) dive.pgAfterSi = 'M'
            if (si <= 3 && si >= 0) dive.pgAfterSi = 'N'
        } else if (pg === 'O') {
            if (si >= 144) dive.pgAfterSi = 'A'
            if (si <= 143 && si >= 95) dive.pgAfterSi = 'B'
            if (si <= 94 && si >= 73) dive.pgAfterSi = 'C'
            if (si <= 72 && si >= 64) dive.pgAfterSi = 'D'
            if (si <= 63 && si >= 56) dive.pgAfterSi = 'E'
            if (si <= 55 && si >= 48) dive.pgAfterSi = 'F'
            if (si <= 47 && si >= 42) dive.pgAfterSi = 'G'
            if (si <= 41 && si >= 35) dive.pgAfterSi = 'H'
            if (si <= 34 && si >= 29) dive.pgAfterSi = 'I'
            if (si <= 28 && si >= 24) dive.pgAfterSi = 'J'
            if (si <= 23 && si >= 18) dive.pgAfterSi = 'K'
            if (si <= 17 && si >= 13) dive.pgAfterSi = 'L'
            if (si <= 12 && si >= 9) dive.pgAfterSi = 'M'
            if (si <= 8 && si >= 4) dive.pgAfterSi = 'N'
            if (si <= 3 && si >= 0) dive.pgAfterSi = 'O'
        } else if (pg === 'P') {
            if (si >= 148) dive.pgAfterSi = 'A'
            if (si <= 147 && si >= 99) dive.pgAfterSi = 'B'
            if (si <= 98 && si >= 77) dive.pgAfterSi = 'C'
            if (si <= 76 && si >= 68) dive.pgAfterSi = 'D'
            if (si <= 67 && si >= 60) dive.pgAfterSi = 'E'
            if (si <= 59 && si >= 52) dive.pgAfterSi = 'F'
            if (si <= 51 && si >= 46) dive.pgAfterSi = 'G'
            if (si <= 45 && si >= 39) dive.pgAfterSi = 'H'
            if (si <= 38 && si >= 33) dive.pgAfterSi = 'I'
            if (si <= 32 && si >= 28) dive.pgAfterSi = 'J'
            if (si <= 27 && si >= 22) dive.pgAfterSi = 'K'
            if (si <= 21 && si >= 17) dive.pgAfterSi = 'L'
            if (si <= 16 && si >= 13) dive.pgAfterSi = 'M'
            if (si <= 12 && si >= 8) dive.pgAfterSi = 'N'
            if (si <= 7 && si >= 4) dive.pgAfterSi = 'O'
            if (si <= 3 && si >= 0) dive.pgAfterSi = 'P'
        } else if (pg === 'Q') {
            if (si >= 151) dive.pgAfterSi = 'A'
            if (si <= 150 && si >= 103) dive.pgAfterSi = 'B'
            if (si <= 102 && si >= 81) dive.pgAfterSi = 'C'
            if (si <= 80 && si >= 72) dive.pgAfterSi = 'D'
            if (si <= 71 && si >= 64) dive.pgAfterSi = 'E'
            if (si <= 63 && si >= 56) dive.pgAfterSi = 'F'
            if (si <= 55 && si >= 49) dive.pgAfterSi = 'G'
            if (si <= 48 && si >= 43) dive.pgAfterSi = 'H'
            if (si <= 42 && si >= 37) dive.pgAfterSi = 'I'
            if (si <= 36 && si >= 31) dive.pgAfterSi = 'J'
            if (si <= 30 && si >= 26) dive.pgAfterSi = 'K'
            if (si <= 25 && si >= 21) dive.pgAfterSi = 'L'
            if (si <= 20 && si >= 17) dive.pgAfterSi = 'M'
            if (si <= 16 && si >= 12) dive.pgAfterSi = 'N'
            if (si <= 11 && si >= 8) dive.pgAfterSi = 'O'
            if (si <= 7 && si >= 4) dive.pgAfterSi = 'P'
            if (si <= 3 && si >= 0) dive.pgAfterSi = 'Q'
        } else if (pg === 'R') {
            if (si >= 155) dive.pgAfterSi = 'A'
            if (si <= 154 && si >= 107) dive.pgAfterSi = 'B'
            if (si <= 106 && si >= 85) dive.pgAfterSi = 'C'
            if (si <= 84 && si >= 76) dive.pgAfterSi = 'D'
            if (si <= 75 && si >= 68) dive.pgAfterSi = 'E'
            if (si <= 67 && si >= 60) dive.pgAfterSi = 'F'
            if (si <= 59 && si >= 53) dive.pgAfterSi = 'G'
            if (si <= 52 && si >= 47) dive.pgAfterSi = 'H'
            if (si <= 46 && si >= 41) dive.pgAfterSi = 'I'
            if (si <= 40 && si >= 35) dive.pgAfterSi = 'J'
            if (si <= 34 && si >= 30) dive.pgAfterSi = 'K'
            if (si <= 29 && si >= 25) dive.pgAfterSi = 'L'
            if (si <= 24 && si >= 20) dive.pgAfterSi = 'M'
            if (si <= 19 && si >= 16) dive.pgAfterSi = 'N'
            if (si <= 15 && si >= 12) dive.pgAfterSi = 'O'
            if (si <= 11 && si >= 8) dive.pgAfterSi = 'P'
            if (si <= 7 && si >= 4) dive.pgAfterSi = 'Q'
            if (si <= 3 && si >= 0) dive.pgAfterSi = 'R'
        } else if (pg === 'S') {
            if (si >= 159) dive.pgAfterSi = 'A'
            if (si <= 158 && si >= 110) dive.pgAfterSi = 'B'
            if (si <= 109 && si >= 88) dive.pgAfterSi = 'C'
            if (si <= 87 && si >= 79) dive.pgAfterSi = 'D'
            if (si <= 78 && si >= 71) dive.pgAfterSi = 'E'
            if (si <= 70 && si >= 64) dive.pgAfterSi = 'F'
            if (si <= 63 && si >= 57) dive.pgAfterSi = 'G'
            if (si <= 56 && si >= 50) dive.pgAfterSi = 'H'
            if (si <= 49 && si >= 44) dive.pgAfterSi = 'I'
            if (si <= 43 && si >= 39) dive.pgAfterSi = 'J'
            if (si <= 38 && si >= 33) dive.pgAfterSi = 'K'
            if (si <= 32 && si >= 28) dive.pgAfterSi = 'L'
            if (si <= 27 && si >= 24) dive.pgAfterSi = 'M'
            if (si <= 23 && si >= 19) dive.pgAfterSi = 'N'
            if (si <= 18 && si >= 15) dive.pgAfterSi = 'O'
            if (si <= 14 && si >= 11) dive.pgAfterSi = 'P'
            if (si <= 10 && si >= 7) dive.pgAfterSi = 'Q'
            if (si <= 6 && si >= 4) dive.pgAfterSi = 'R'
            if (si <= 3 && si >= 0) dive.pgAfterSi = 'S'
        } else if (pg === 'T') {
            if (si >= 162) dive.pgAfterSi = 'A'
            if (si <= 161 && si >= 114) dive.pgAfterSi = 'B'
            if (si <= 113 && si >= 92) dive.pgAfterSi = 'C'
            if (si <= 91 && si >= 83) dive.pgAfterSi = 'D'
            if (si <= 82 && si >= 74) dive.pgAfterSi = 'E'
            if (si <= 73 && si >= 67) dive.pgAfterSi = 'F'
            if (si <= 66 && si >= 60) dive.pgAfterSi = 'G'
            if (si <= 59 && si >= 54) dive.pgAfterSi = 'H'
            if (si <= 53 && si >= 48) dive.pgAfterSi = 'I'
            if (si <= 47 && si >= 42) dive.pgAfterSi = 'J'
            if (si <= 41 && si >= 37) dive.pgAfterSi = 'K'
            if (si <= 36 && si >= 32) dive.pgAfterSi = 'L'
            if (si <= 31 && si >= 27) dive.pgAfterSi = 'M'
            if (si <= 26 && si >= 23) dive.pgAfterSi = 'N'
            if (si <= 22 && si >= 18) dive.pgAfterSi = 'O'
            if (si <= 17 && si >= 14) dive.pgAfterSi = 'P'
            if (si <= 13 && si >= 11) dive.pgAfterSi = 'Q'
            if (si <= 10 && si >= 7) dive.pgAfterSi = 'R'
            if (si <= 6 && si >= 3) dive.pgAfterSi = 'S'
            if (si <= 2 && si >= 0) dive.pgAfterSi = 'T'
        } else if (pg === 'U') {
            if (si >= 165) dive.pgAfterSi = 'A'
            if (si <= 164 && si >= 117) dive.pgAfterSi = 'B'
            if (si <= 116 && si >= 95) dive.pgAfterSi = 'C'
            if (si <= 94 && si >= 86) dive.pgAfterSi = 'D'
            if (si <= 85 && si >= 78) dive.pgAfterSi = 'E'
            if (si <= 77 && si >= 70) dive.pgAfterSi = 'F'
            if (si <= 69 && si >= 63) dive.pgAfterSi = 'G'
            if (si <= 62 && si >= 57) dive.pgAfterSi = 'H'
            if (si <= 56 && si >= 51) dive.pgAfterSi = 'I'
            if (si <= 50 && si >= 45) dive.pgAfterSi = 'J'
            if (si <= 44 && si >= 40) dive.pgAfterSi = 'K'
            if (si <= 39 && si >= 35) dive.pgAfterSi = 'L'
            if (si <= 34 && si >= 30) dive.pgAfterSi = 'M'
            if (si <= 29 && si >= 26) dive.pgAfterSi = 'N'
            if (si <= 25 && si >= 22) dive.pgAfterSi = 'O'
            if (si <= 21 && si >= 18) dive.pgAfterSi = 'P'
            if (si <= 17 && si >= 14) dive.pgAfterSi = 'Q'
            if (si <= 13 && si >= 10) dive.pgAfterSi = 'R'
            if (si <= 9 && si >= 7) dive.pgAfterSi = 'S'
            if (si <= 6 && si >= 3) dive.pgAfterSi = 'T'
            if (si <= 2 && si >= 0) dive.pgAfterSi = 'U'
        } else if (pg === 'V') {
            if (si >= 168) dive.pgAfterSi = 'A'
            if (si <= 167 && si >= 120) dive.pgAfterSi = 'B'
            if (si <= 119 && si >= 98) dive.pgAfterSi = 'C'
            if (si <= 97 && si >= 89) dive.pgAfterSi = 'D'
            if (si <= 88 && si >= 81) dive.pgAfterSi = 'E'
            if (si <= 80 && si >= 73) dive.pgAfterSi = 'F'
            if (si <= 72 && si >= 66) dive.pgAfterSi = 'G'
            if (si <= 65 && si >= 60) dive.pgAfterSi = 'H'
            if (si <= 59 && si >= 54) dive.pgAfterSi = 'I'
            if (si <= 53 && si >= 48) dive.pgAfterSi = 'J'
            if (si <= 47 && si >= 43) dive.pgAfterSi = 'K'
            if (si <= 42 && si >= 38) dive.pgAfterSi = 'L'
            if (si <= 37 && si >= 34) dive.pgAfterSi = 'M'
            if (si <= 33 && si >= 29) dive.pgAfterSi = 'N'
            if (si <= 28 && si >= 25) dive.pgAfterSi = 'O'
            if (si <= 24 && si >= 21) dive.pgAfterSi = 'P'
            if (si <= 20 && si >= 17) dive.pgAfterSi = 'Q'
            if (si <= 16 && si >= 13) dive.pgAfterSi = 'R'
            if (si <= 12 && si >= 10) dive.pgAfterSi = 'S'
            if (si <= 9 && si >= 6) dive.pgAfterSi = 'T'
            if (si <= 5 && si >= 3) dive.pgAfterSi = 'U'
            if (si <= 2 && si >= 0) dive.pgAfterSi = 'V'
        } else if (pg === 'W') {
            if (si >= 171) dive.pgAfterSi = 'A'
            if (si <= 170 && si >= 123) dive.pgAfterSi = 'B'
            if (si <= 122 && si >= 101) dive.pgAfterSi = 'C'
            if (si <= 100 && si >= 92) dive.pgAfterSi = 'D'
            if (si <= 91 && si >= 84) dive.pgAfterSi = 'E'
            if (si <= 83 && si >= 76) dive.pgAfterSi = 'F'
            if (si <= 75 && si >= 69) dive.pgAfterSi = 'G'
            if (si <= 68 && si >= 63) dive.pgAfterSi = 'H'
            if (si <= 62 && si >= 57) dive.pgAfterSi = 'I'
            if (si <= 56 && si >= 51) dive.pgAfterSi = 'J'
            if (si <= 50 && si >= 46) dive.pgAfterSi = 'K'
            if (si <= 45 && si >= 41) dive.pgAfterSi = 'L'
            if (si <= 40 && si >= 37) dive.pgAfterSi = 'M'
            if (si <= 36 && si >= 32) dive.pgAfterSi = 'N'
            if (si <= 31 && si >= 28) dive.pgAfterSi = 'O'
            if (si <= 27 && si >= 24) dive.pgAfterSi = 'P'
            if (si <= 23 && si >= 20) dive.pgAfterSi = 'Q'
            if (si <= 19 && si >= 16) dive.pgAfterSi = 'R'
            if (si <= 15 && si >= 13) dive.pgAfterSi = 'S'
            if (si <= 12 && si >= 9) dive.pgAfterSi = 'T'
            if (si <= 8 && si >= 5) dive.pgAfterSi = 'U'
            if (si <= 5 && si >= 3) dive.pgAfterSi = 'V'
            if (si <= 2 && si >= 0) dive.pgAfterSi = 'W'
        } else if (pg === 'X') {
            if (si >= 174) dive.pgAfterSi = 'A'
            if (si <= 173 && si >= 126) dive.pgAfterSi = 'B'
            if (si <= 125 && si >= 104) dive.pgAfterSi = 'C'
            if (si <= 103 && si >= 95) dive.pgAfterSi = 'D'
            if (si <= 94 && si >= 87) dive.pgAfterSi = 'E'
            if (si <= 86 && si >= 79) dive.pgAfterSi = 'F'
            if (si <= 78 && si >= 72) dive.pgAfterSi = 'G'
            if (si <= 71 && si >= 66) dive.pgAfterSi = 'H'
            if (si <= 65 && si >= 60) dive.pgAfterSi = 'I'
            if (si <= 59 && si >= 54) dive.pgAfterSi = 'J'
            if (si <= 53 && si >= 49) dive.pgAfterSi = 'K'
            if (si <= 48 && si >= 44) dive.pgAfterSi = 'L'
            if (si <= 43 && si >= 40) dive.pgAfterSi = 'M'
            if (si <= 39 && si >= 35) dive.pgAfterSi = 'N'
            if (si <= 34 && si >= 31) dive.pgAfterSi = 'O'
            if (si <= 30 && si >= 27) dive.pgAfterSi = 'P'
            if (si <= 26 && si >= 23) dive.pgAfterSi = 'Q'
            if (si <= 22 && si >= 19) dive.pgAfterSi = 'R'
            if (si <= 18 && si >= 16) dive.pgAfterSi = 'S'
            if (si <= 15 && si >= 12) dive.pgAfterSi = 'T'
            if (si <= 11 && si >= 9) dive.pgAfterSi = 'U'
            if (si <= 8 && si >= 6) dive.pgAfterSi = 'V'
            if (si <= 5 && si >= 3) dive.pgAfterSi = 'W'
            if (si <= 2 && si >= 0) dive.pgAfterSi = 'X'
        } else if (pg === 'Y') {
            if (si >= 177) dive.pgAfterSi = 'A'
            if (si <= 176 && si >= 129) dive.pgAfterSi = 'B'
            if (si <= 128 && si >= 107) dive.pgAfterSi = 'C'
            if (si <= 106 && si >= 98) dive.pgAfterSi = 'D'
            if (si <= 97 && si >= 90) dive.pgAfterSi = 'E'
            if (si <= 89 && si >= 82) dive.pgAfterSi = 'F'
            if (si <= 81 && si >= 75) dive.pgAfterSi = 'G'
            if (si <= 74 && si >= 69) dive.pgAfterSi = 'H'
            if (si <= 68 && si >= 63) dive.pgAfterSi = 'I'
            if (si <= 62 && si >= 57) dive.pgAfterSi = 'J'
            if (si <= 56 && si >= 52) dive.pgAfterSi = 'K'
            if (si <= 51 && si >= 47) dive.pgAfterSi = 'L'
            if (si <= 46 && si >= 42) dive.pgAfterSi = 'M'
            if (si <= 41 && si >= 38) dive.pgAfterSi = 'N'
            if (si <= 37 && si >= 34) dive.pgAfterSi = 'O'
            if (si <= 33 && si >= 30) dive.pgAfterSi = 'P'
            if (si <= 29 && si >= 26) dive.pgAfterSi = 'Q'
            if (si <= 25 && si >= 22) dive.pgAfterSi = 'R'
            if (si <= 21 && si >= 19) dive.pgAfterSi = 'S'
            if (si <= 18 && si >= 15) dive.pgAfterSi = 'T'
            if (si <= 14 && si >= 12) dive.pgAfterSi = 'U'
            if (si <= 11 && si >= 9) dive.pgAfterSi = 'V'
            if (si <= 8 && si >= 6) dive.pgAfterSi = 'W'
            if (si <= 5 && si >= 3) dive.pgAfterSi = 'X'
            if (si <= 2 && si >= 0) dive.pgAfterSi = 'Y'
        } else if (pg === 'Z') {
            if (si >= 180) dive.pgAfterSi = 'A'
            if (si <= 179 && si >= 132) dive.pgAfterSi = 'B'
            if (si <= 131 && si >= 110) dive.pgAfterSi = 'C'
            if (si <= 109 && si >= 101) dive.pgAfterSi = 'D'
            if (si <= 100 && si >= 92) dive.pgAfterSi = 'E'
            if (si <= 91 && si >= 85) dive.pgAfterSi = 'F'
            if (si <= 84 && si >= 78) dive.pgAfterSi = 'G'
            if (si <= 77 && si >= 72) dive.pgAfterSi = 'H'
            if (si <= 71 && si >= 66) dive.pgAfterSi = 'I'
            if (si <= 65 && si >= 60) dive.pgAfterSi = 'J'
            if (si <= 59 && si >= 55) dive.pgAfterSi = 'K'
            if (si <= 54 && si >= 50) dive.pgAfterSi = 'L'
            if (si <= 49 && si >= 45) dive.pgAfterSi = 'M'
            if (si <= 44 && si >= 41) dive.pgAfterSi = 'N'
            if (si <= 40 && si >= 36) dive.pgAfterSi = 'O'
            if (si <= 35 && si >= 32) dive.pgAfterSi = 'P'
            if (si <= 31 && si >= 29) dive.pgAfterSi = 'Q'
            if (si <= 28 && si >= 25) dive.pgAfterSi = 'R'
            if (si <= 24 && si >= 21) dive.pgAfterSi = 'S'
            if (si <= 20 && si >= 18) dive.pgAfterSi = 'T'
            if (si <= 17 && si >= 15) dive.pgAfterSi = 'U'
            if (si <= 14 && si >= 12) dive.pgAfterSi = 'V'
            if (si <= 11 && si >= 9) dive.pgAfterSi = 'W'
            if (si <= 8 && si >= 6) dive.pgAfterSi = 'X'
            if (si <= 5 && si >= 3) dive.pgAfterSi = 'Y'
            if (si <= 2 && si >= 0) dive.pgAfterSi = 'Z'
        }

        if (step === 2) { updateDive2(dive) }
        else if (step === 3) { updateDive3(dive) }
    }

    // Sets residual nitrogen time, given starting pressure group and depth of next dive.
    const getRNT = (step, inputDepth, newPg) => {
        const depth = inputDepth
        const startPg = newPg
        console.log('depth', depth)
        console.log('starting pg', startPg)
        if (step === 1) { return 0 }
        else if (depth <= 35) {
            if (startPg === 'A') return 10
            if (startPg === 'B') return 19
            if (startPg === 'C') return 25
            if (startPg === 'D') return 29
            if (startPg === 'E') return 32
            if (startPg === 'F') return 36
            if (startPg === 'G') return 40
            if (startPg === 'H') return 44
            if (startPg === 'I') return 48
            if (startPg === 'J') return 52
            if (startPg === 'K') return 57
            if (startPg === 'L') return 62
            if (startPg === 'M') return 67
            if (startPg === 'N') return 73
            if (startPg === 'O') return 79
            if (startPg === 'P') return 85
            if (startPg === 'Q') return 92
            if (startPg === 'R') return 100
            if (startPg === 'S') return 108
            if (startPg === 'T') return 117
            if (startPg === 'U') return 127
            if (startPg === 'V') return 139
            if (startPg === 'W') return 152
            if (startPg === 'X') return 168
            if (startPg === 'Y') return 188
            if (startPg === 'Z') return 205
        } else if (depth <= 40) {
            if (startPg === 'A') return 9
            if (startPg === 'B') return 16
            if (startPg === 'C') return 22
            if (startPg === 'D') return 25
            if (startPg === 'E') return 27
            if (startPg === 'F') return 31
            if (startPg === 'G') return 34
            if (startPg === 'H') return 37
            if (startPg === 'I') return 40
            if (startPg === 'J') return 44
            if (startPg === 'K') return 48
            if (startPg === 'L') return 51
            if (startPg === 'M') return 55
            if (startPg === 'N') return 60
            if (startPg === 'O') return 64
            if (startPg === 'P') return 69
            if (startPg === 'Q') return 74
            if (startPg === 'R') return 79
            if (startPg === 'S') return 85
            if (startPg === 'T') return 91
            if (startPg === 'U') return 97
            if (startPg === 'V') return 104
            if (startPg === 'W') return 111
            if (startPg === 'X') return 120
            if (startPg === 'Y') return 129
            if (startPg === 'Z') return 140
        } else if (depth <= 50) {
            if (startPg === 'A') return 7
            if (startPg === 'B') return 13
            if (startPg === 'C') return 17
            if (startPg === 'D') return 19
            if (startPg === 'E') return 21
            if (startPg === 'F') return 24
            if (startPg === 'G') return 26
            if (startPg === 'H') return 28
            if (startPg === 'I') return 31
            if (startPg === 'J') return 33
            if (startPg === 'K') return 36
            if (startPg === 'L') return 38
            if (startPg === 'M') return 41
            if (startPg === 'N') return 44
            if (startPg === 'O') return 47
            if (startPg === 'P') return 50
            if (startPg === 'Q') return 53
            if (startPg === 'R') return 57
            if (startPg === 'S') return 60
            if (startPg === 'T') return 63
            if (startPg === 'U') return 67
            if (startPg === 'V') return 71
            if (startPg === 'W') return 75
            if (startPg === 'X') return 80
        } else if (depth <= 60) {
            if (startPg === 'A') return 6
            if (startPg === 'B') return 11
            if (startPg === 'C') return 14
            if (startPg === 'D') return 16
            if (startPg === 'E') return 17
            if (startPg === 'F') return 19
            if (startPg === 'G') return 21
            if (startPg === 'H') return 23
            if (startPg === 'I') return 25
            if (startPg === 'J') return 27
            if (startPg === 'K') return 29
            if (startPg === 'L') return 31
            if (startPg === 'M') return 33
            if (startPg === 'N') return 35
            if (startPg === 'O') return 37
            if (startPg === 'P') return 39
            if (startPg === 'Q') return 42
            if (startPg === 'R') return 44
            if (startPg === 'S') return 47
            if (startPg === 'T') return 49
            if (startPg === 'U') return 52
            if (startPg === 'V') return 54
            if (startPg === 'W') return 55
        } else if (depth <= 70) {
            if (startPg === 'A') return 5
            if (startPg === 'B') return 9
            if (startPg === 'C') return 12
            if (startPg === 'D') return 13
            if (startPg === 'E') return 15
            if (startPg === 'F') return 16
            if (startPg === 'G') return 18
            if (startPg === 'H') return 19
            if (startPg === 'I') return 21
            if (startPg === 'J') return 22
            if (startPg === 'K') return 24
            if (startPg === 'L') return 26
            if (startPg === 'M') return 27
            if (startPg === 'N') return 29
            if (startPg === 'O') return 31
            if (startPg === 'P') return 33
            if (startPg === 'Q') return 34
            if (startPg === 'R') return 36
            if (startPg === 'S') return 38
            if (startPg === 'T') return 40
        } else if (depth <= 80) {
            if (startPg === 'A') return 4
            if (startPg === 'B') return 8
            if (startPg === 'C') return 10
            if (startPg === 'D') return 11
            if (startPg === 'E') return 13
            if (startPg === 'F') return 14
            if (startPg === 'G') return 15
            if (startPg === 'H') return 17
            if (startPg === 'I') return 18
            if (startPg === 'J') return 19
            if (startPg === 'K') return 21
            if (startPg === 'L') return 22
            if (startPg === 'M') return 23
            if (startPg === 'N') return 25
            if (startPg === 'O') return 26
            if (startPg === 'P') return 28
            if (startPg === 'Q') return 29
            if (startPg === 'R') return 30
        } else if (depth <= 90) {
            if (startPg === 'A') return 4
            if (startPg === 'B') return 7
            if (startPg === 'C') return 9
            if (startPg === 'D') return 10
            if (startPg === 'E') return 11
            if (startPg === 'F') return 12
            if (startPg === 'G') return 13
            if (startPg === 'H') return 15
            if (startPg === 'I') return 16
            if (startPg === 'J') return 17
            if (startPg === 'K') return 18
            if (startPg === 'L') return 19
            if (startPg === 'M') return 21
            if (startPg === 'N') return 22
            if (startPg === 'O') return 23
            if (startPg === 'P') return 24
            if (startPg === 'Q') return 25
        } else if (depth <= 100) {
            if (startPg === 'A') return 3
            if (startPg === 'B') return 6
            if (startPg === 'C') return 8
            if (startPg === 'D') return 9
            if (startPg === 'E') return 10
            if (startPg === 'F') return 11
            if (startPg === 'G') return 12
            if (startPg === 'H') return 13
            if (startPg === 'I') return 14
            if (startPg === 'J') return 15
            if (startPg === 'K') return 16
            if (startPg === 'L') return 17
            if (startPg === 'M') return 18
            if (startPg === 'N') return 19
            if (startPg === 'O') return 20
        } else if (depth <= 110) {
            if (startPg === 'A') return 3
            if (startPg === 'B') return 6
            if (startPg === 'C') return 7
            if (startPg === 'D') return 8
            if (startPg === 'E') return 9
            if (startPg === 'F') return 10
            if (startPg === 'G') return 11
            if (startPg === 'H') return 12
            if (startPg === 'I') return 13
            if (startPg === 'J') return 14
            if (startPg === 'K') return 14
            if (startPg === 'L') return 15
            if (startPg === 'M') return 16
        } else if (depth <= 120) {
            if (startPg === 'A') return 3
            if (startPg === 'B') return 5
            if (startPg === 'C') return 6
            if (startPg === 'D') return 7
            if (startPg === 'E') return 8
            if (startPg === 'F') return 9
            if (startPg === 'G') return 10
            if (startPg === 'H') return 11
            if (startPg === 'I') return 12
            if (startPg === 'J') return 12
            if (startPg === 'K') return 13
        } else if (depth <= 130) {
            if (startPg === 'A') return 3
            if (startPg === 'B') return 5
            if (startPg === 'C') return 6
            if (startPg === 'D') return 7
            if (startPg === 'E') return 8
            if (startPg === 'F') return 8
            if (startPg === 'G') return 9
            if (startPg === 'H') return 10
        }
    }

    return (<>

        <Dive step={1} dives={dives} getPressureGroup={getPressureGroup} resetDives={resetDives} setAndUpdate={setAndUpdate} />
        {dive1.pg !== ''
            ? <Dive step={2} dives={dives} getPressureGroup={getPressureGroup} resetDives={resetDives} setPgAfterSi={setPgAfterSi} getRNT={getRNT} />
            : ''}
        {dive2.pg !== ''
            ? <Dive step={3} dives={dives} getPressureGroup={getPressureGroup} resetDives={resetDives} setPgAfterSi={setPgAfterSi} getRNT={getRNT} />
            : ''}
    </>
    )
}