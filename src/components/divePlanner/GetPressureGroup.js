import { GetRNT } from "./GetRNT"

// Sets Pressure Group, safety stop boolean, no deco limit boolean, minutes to no deco time, and specifies which dive to update.

export const GetPressureGroup = (input, step, currentDive, getRNT, setAndUpdate) => {
        let rnt = input.rnt
        if (step === 2 || step === 3) rnt = GetRNT(step, input.depth, currentDive.pgAfterSi)
        let tbt = (input.abt + rnt)
        const depth = input.depth
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