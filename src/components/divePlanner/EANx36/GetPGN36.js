import { GetRNTN36 } from "./GetRNTN36"

// Sets Pressure Group, safety stop boolean, no deco limit boolean, minutes to no deco time, and specifies which dive to update.

export const GetPGN36 = (input, step, currentDive, setAndUpdate) => {
    let rnt = input.rnt
    if (step === 2 || step === 3) rnt = GetRNTN36(step, input.depth, currentDive.pgAfterSi)
    let tbt = (input.abt + rnt)
    const depth = input.depth
    if (depth <= 50) {
        if (tbt <= 10) setAndUpdate('A', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 20) setAndUpdate('B', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 26) setAndUpdate('C', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 30) setAndUpdate('D', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 33) setAndUpdate('E', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 37) setAndUpdate('F', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 41) setAndUpdate('G', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 46) setAndUpdate('H', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 50) setAndUpdate('I', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 55) setAndUpdate('J', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 60) setAndUpdate('K', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 65) setAndUpdate('L', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 71) setAndUpdate('M', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 77) setAndUpdate('N', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 83) setAndUpdate('O', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 90) setAndUpdate('P', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 97) setAndUpdate('Q', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 106) setAndUpdate('R', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 115) setAndUpdate('S', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 125) setAndUpdate('T', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 137) setAndUpdate('U', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 150) setAndUpdate('V', false, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 166) setAndUpdate('W', true, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 186) setAndUpdate('X', true, false, (tbt - 220), input, step, rnt)
        else if (tbt <= 211) setAndUpdate('Y', true, false, (tbt - 220), input, step, rnt)
        else if (tbt > 211) setAndUpdate('Z', true, true, (tbt - 220), input, step, rnt)
    }
    else if (depth <= 55) {
        if (tbt <= 9) setAndUpdate('A', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 17) setAndUpdate('B', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 23) setAndUpdate('C', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 26) setAndUpdate('D', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 29) setAndUpdate('E', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 32) setAndUpdate('F', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 36) setAndUpdate('G', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 39) setAndUpdate('H', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 43) setAndUpdate('I', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 47) setAndUpdate('J', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 51) setAndUpdate('K', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 55) setAndUpdate('L', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 60) setAndUpdate('M', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 64) setAndUpdate('N', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 69) setAndUpdate('O', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 75) setAndUpdate('P', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 80) setAndUpdate('Q', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 86) setAndUpdate('R', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 93) setAndUpdate('S', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 100) setAndUpdate('T', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 107) setAndUpdate('U', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 115) setAndUpdate('V', false, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 125) setAndUpdate('W', true, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 135) setAndUpdate('X', true, false, (tbt - 155), input, step, rnt)
        else if (tbt <= 146) setAndUpdate('Y', true, false, (tbt - 155), input, step, rnt)
        else if (tbt > 146) setAndUpdate('Z', true, true, (tbt - 155), input, step, rnt)
    }
    else if (depth <= 60) {
        if (tbt <= 8) setAndUpdate('A', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 15) setAndUpdate('B', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 20) setAndUpdate('C', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 23) setAndUpdate('D', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 26) setAndUpdate('E', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 29) setAndUpdate('F', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 32) setAndUpdate('G', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 35) setAndUpdate('H', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 38) setAndUpdate('I', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 41) setAndUpdate('J', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 45) setAndUpdate('K', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 48) setAndUpdate('L', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 52) setAndUpdate('M', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 56) setAndUpdate('N', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 60) setAndUpdate('O', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 64) setAndUpdate('P', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 68) setAndUpdate('Q', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 73) setAndUpdate('R', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 78) setAndUpdate('S', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 83) setAndUpdate('T', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 89) setAndUpdate('U', false, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 95) setAndUpdate('V', true, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 101) setAndUpdate('W', true, false, (tbt - 115), input, step, rnt)
        else if (tbt <= 108) setAndUpdate('X', true, false, (tbt - 115), input, step, rnt)
        else if (tbt > 108) setAndUpdate('Y', true, true, (tbt - 115), input, step, rnt)
    }
    else if (depth <= 65) {
        if (tbt <= 7) setAndUpdate('A', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 14) setAndUpdate('B', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 18) setAndUpdate('C', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 21) setAndUpdate('D', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 23) setAndUpdate('E', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 26) setAndUpdate('F', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 28) setAndUpdate('G', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 31) setAndUpdate('H', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 34) setAndUpdate('I', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 37) setAndUpdate('J', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 40) setAndUpdate('K', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 43) setAndUpdate('L', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 46) setAndUpdate('M', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 49) setAndUpdate('N', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 52) setAndUpdate('O', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 56) setAndUpdate('P', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 60) setAndUpdate('Q', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 64) setAndUpdate('R', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 68) setAndUpdate('S', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 72) setAndUpdate('T', false, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 76) setAndUpdate('U', true, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 81) setAndUpdate('V', true, false, (tbt - 90), input, step, rnt)
        else if (tbt <= 86) setAndUpdate('W', true, false, (tbt - 90), input, step, rnt)
        else if (tbt > 86) setAndUpdate('X', true, true, (tbt - 90), input, step, rnt)
    }
    else if (depth <= 70) {
        if (tbt <= 7) setAndUpdate('A', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 13) setAndUpdate('B', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 17) setAndUpdate('C', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 19) setAndUpdate('D', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 21) setAndUpdate('E', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 23) setAndUpdate('F', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 26) setAndUpdate('G', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 28) setAndUpdate('H', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 31) setAndUpdate('I', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 33) setAndUpdate('J', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 36) setAndUpdate('K', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 38) setAndUpdate('L', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 41) setAndUpdate('M', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 44) setAndUpdate('N', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 47) setAndUpdate('O', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 50) setAndUpdate('P', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 53) setAndUpdate('Q', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 56) setAndUpdate('R', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 60) setAndUpdate('S', false, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 63) setAndUpdate('T', true, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 67) setAndUpdate('U', true, false, (tbt - 75), input, step, rnt)
        else if (tbt <= 71) setAndUpdate('V', true, false, (tbt - 75), input, step, rnt)
        else if (tbt > 71) setAndUpdate('W', true, true, (tbt - 75), input, step, rnt)
    }
    else if (depth <= 80) {
        if (tbt <= 6) setAndUpdate('A', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 11) setAndUpdate('B', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 14) setAndUpdate('C', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 16) setAndUpdate('D', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 18) setAndUpdate('E', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 20) setAndUpdate('F', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 22) setAndUpdate('G', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 24) setAndUpdate('H', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 26) setAndUpdate('I', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 28) setAndUpdate('J', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 30) setAndUpdate('K', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 32) setAndUpdate('L', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 34) setAndUpdate('M', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 36) setAndUpdate('N', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 39) setAndUpdate('O', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 41) setAndUpdate('P', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 43) setAndUpdate('Q', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 46) setAndUpdate('R', false, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 48) setAndUpdate('S', true, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 51) setAndUpdate('T', true, false, (tbt - 55), input, step, rnt)
        else if (tbt <= 53) setAndUpdate('U', true, false, (tbt - 55), input, step, rnt)
        else if (tbt > 53) setAndUpdate('V', true, true, (tbt - 55), input, step, rnt)
    }
    else if (depth <= 90) {
        if (tbt <= 5) setAndUpdate('A', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 9) setAndUpdate('B', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 12) setAndUpdate('C', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 14) setAndUpdate('D', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 15) setAndUpdate('E', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 17) setAndUpdate('F', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 19) setAndUpdate('G', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 20) setAndUpdate('H', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 22) setAndUpdate('I', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 24) setAndUpdate('J', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 25) setAndUpdate('K', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 27) setAndUpdate('L', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 29) setAndUpdate('M', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 31) setAndUpdate('N', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 33) setAndUpdate('O', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 35) setAndUpdate('P', false, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 37) setAndUpdate('Q', true, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 38) setAndUpdate('R', true, false, (tbt - 40), input, step, rnt)
        else if (tbt <= 39) setAndUpdate('S', true, false, (tbt - 40), input, step, rnt)
        else if (tbt > 39) setAndUpdate('T', true, true, (tbt - 40), input, step, rnt)
    }
    else if (depth <= 100) {
        if (tbt <= 4) setAndUpdate('A', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 8) setAndUpdate('B', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 11) setAndUpdate('C', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 12) setAndUpdate('D', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 14) setAndUpdate('E', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 15) setAndUpdate('F', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 16) setAndUpdate('G', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 18) setAndUpdate('H', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 19) setAndUpdate('I', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 21) setAndUpdate('J', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 22) setAndUpdate('K', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 24) setAndUpdate('L', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 25) setAndUpdate('M', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 27) setAndUpdate('N', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 29) setAndUpdate('O', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 30) setAndUpdate('P', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 32) setAndUpdate('Q', true, false, (tbt - 35), input, step, rnt)
        else if (tbt <= 34) setAndUpdate('R', true, false, (tbt - 35), input, step, rnt)
        else if (tbt > 34) setAndUpdate('S', true, true, (tbt - 35), input, step, rnt)
    }
    else if (depth > 100) {
        if (tbt <= 4) setAndUpdate('A', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 7) setAndUpdate('B', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 10) setAndUpdate('C', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 11) setAndUpdate('D', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 12) setAndUpdate('E', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 13) setAndUpdate('F', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 15) setAndUpdate('G', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 16) setAndUpdate('H', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 17) setAndUpdate('I', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 18) setAndUpdate('J', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 20) setAndUpdate('K', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 21) setAndUpdate('L', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 22) setAndUpdate('M', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 24) setAndUpdate('N', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 25) setAndUpdate('O', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 27) setAndUpdate('P', true, false, (tbt - 29), input, step, rnt)
        else if (tbt <= 28) setAndUpdate('Q', true, false, (tbt - 29), input, step, rnt)
        else if (tbt > 28) setAndUpdate('R', true, true, (tbt - 29), input, step, rnt)
    }
}