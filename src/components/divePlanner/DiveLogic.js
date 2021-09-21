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
    // ***This is the only function that should set the new state of each dive!***
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

    // Sets residual nitrogen time, given starting pressure group and depth of next dive.
    const getRNT = (step, inputDepth, newPg) => {
        const depth = inputDepth
        const startPg = newPg
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

        <Dive step={1} dives={dives} resetDives={resetDives} getRNT={getRNT} setAndUpdate={setAndUpdate} />
        {dive1.pg !== '' && dive1.noDecoLimit !== true
            ? <Dive step={2} dives={dives} updateDive2={updateDive2} resetDives={resetDives} getRNT={getRNT} setAndUpdate={setAndUpdate}/>
            : ''}
        {dive2.pg !== '' && dive2.noDecoLimit !== true
            ? <Dive step={3} dives={dives}  updateDive3={updateDive3} resetDives={resetDives} getRNT={getRNT} setAndUpdate={setAndUpdate} resetAllDives={resetAllDives}/>
            : ''}
    </>
    )
}