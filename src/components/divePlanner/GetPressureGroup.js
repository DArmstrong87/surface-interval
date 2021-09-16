import React from "react";

export const getPressureGroup = ({input, updateDive}) => {
    const dive = {...input}
    const tbt = dive.tbt
    const depth = dive.depth
    // Depth <= 35
    if (tbt <= 10 && depth <= 35) { updateDive('A', false, false, (tbt - 205), dive) }
    else if (tbt <= 19 && depth <= 35) { updateDive('B', false, false, (tbt - 205), dive) }
    else if (tbt <= 25 && depth <= 35) { updateDive('C', false, false, (tbt - 205), dive) }
    else if (tbt <= 29 && depth <= 35) { updateDive('D', false, false, (tbt - 205), dive) }
    else if (tbt <= 32 && depth <= 35) { updateDive('E', false, false, (tbt - 205), dive) }
    else if (tbt <= 36 && depth <= 35) { updateDive('F', false, false, (tbt - 205), dive) }
    else if (tbt <= 40 && depth <= 35) { updateDive('G', false, false, (tbt - 205), dive) }
    else if (tbt <= 44 && depth <= 35) { updateDive('H', false, false, (tbt - 205), dive) }
    else if (tbt <= 48 && depth <= 35) { updateDive('I', false, false, (tbt - 205), dive) }
    else if (tbt <= 52 && depth <= 35) { updateDive('J', false, false, (tbt - 205), dive) }
    else if (tbt <= 57 && depth <= 35) { updateDive('K', false, false, (tbt - 205), dive) }
    else if (tbt <= 62 && depth <= 35) { updateDive('L', false, false, (tbt - 205), dive) }
    else if (tbt <= 67 && depth <= 35) { updateDive('M', false, false, (tbt - 205), dive) }
    else if (tbt <= 73 && depth <= 35) { updateDive('N', false, false, (tbt - 205), dive) }
    else if (tbt <= 79 && depth <= 35) { updateDive('O', false, false, (tbt - 205), dive) }
    else if (tbt <= 85 && depth <= 35) { updateDive('P', false, false, (tbt - 205), dive) }
    else if (tbt <= 92 && depth <= 35) { updateDive('Q', false, false, (tbt - 205), dive) }
    else if (tbt <= 100 && depth <= 35) { updateDive('R', false, false, (tbt - 205), dive) }
    else if (tbt <= 108 && depth <= 35) { updateDive('S', false, false, (tbt - 205), dive) }
    else if (tbt <= 117 && depth <= 35) { updateDive('T', false, false, (tbt - 205), dive) }
    else if (tbt <= 127 && depth <= 35) { updateDive('U', false, false, (tbt - 205), dive) }
    else if (tbt <= 139 && depth <= 35) { updateDive('V', false, false, (tbt - 205), dive) }
    else if (tbt <= 152 && depth <= 35) { updateDive('W', true, false, (tbt - 205), dive) }
    else if (tbt <= 168 && depth <= 35) { updateDive('X', true, false, (tbt - 205), dive) }
    else if (tbt <= 188 && depth <= 35) { updateDive('Y', true, false, (tbt - 205), dive) }
    else if (tbt > 188 && depth <= 35) { updateDive('Z', true, true, (tbt - 205), dive) }
    // Depth <= 40
    else if (tbt <= 9 && depth <= 40) { updateDive('A', false, false, (tbt - 140), dive) }
    else if (tbt <= 16 && depth <= 40) { updateDive('B', false, false, (tbt - 140), dive) }
    else if (tbt <= 22 && depth <= 40) { updateDive('C', false, false, (tbt - 140), dive) }
    else if (tbt <= 25 && depth <= 40) { updateDive('D', false, false, (tbt - 140), dive) }
    else if (tbt <= 27 && depth <= 40) { updateDive('E', false, false, (tbt - 140), dive) }
    else if (tbt <= 31 && depth <= 40) { updateDive('F', false, false, (tbt - 140), dive) }
    else if (tbt <= 34 && depth <= 40) { updateDive('G', false, false, (tbt - 140), dive) }
    else if (tbt <= 37 && depth <= 40) { updateDive('H', false, false, (tbt - 140), dive) }
    else if (tbt <= 40 && depth <= 40) { updateDive('I', false, false, (tbt - 140), dive) }
    else if (tbt <= 44 && depth <= 40) { updateDive('J', false, false, (tbt - 140), dive) }
    else if (tbt <= 48 && depth <= 40) { updateDive('K', false, false, (tbt - 140), dive) }
    else if (tbt <= 51 && depth <= 40) { updateDive('L', false, false, (tbt - 140), dive) }
    else if (tbt <= 55 && depth <= 40) { updateDive('M', false, false, (tbt - 140), dive) }
    else if (tbt <= 60 && depth <= 40) { updateDive('N', false, false, (tbt - 140), dive) }
    else if (tbt <= 64 && depth <= 40) { updateDive('O', false, false, (tbt - 140), dive) }
    else if (tbt <= 69 && depth <= 40) { updateDive('P', false, false, (tbt - 140), dive) }
    else if (tbt <= 74 && depth <= 40) { updateDive('Q', false, false, (tbt - 140), dive) }
    else if (tbt <= 79 && depth <= 40) { updateDive('R', false, false, (tbt - 140), dive) }
    else if (tbt <= 85 && depth <= 40) { updateDive('S', false, false, (tbt - 140), dive) }
    else if (tbt <= 91 && depth <= 40) { updateDive('T', false, false, (tbt - 140), dive) }
    else if (tbt <= 97 && depth <= 40) { updateDive('U', false, false, (tbt - 140), dive) }
    else if (tbt <= 104 && depth <= 40) { updateDive('V', false, false, (tbt - 140), dive) }
    else if (tbt <= 111 && depth <= 40) { updateDive('W', true, false, (tbt - 140), dive) }
    else if (tbt <= 120 && depth <= 40) { updateDive('X', true, false, (tbt - 140), dive) }
    else if (tbt <= 129 && depth <= 40) { updateDive('Y', true, false, (tbt - 140), dive) }
    else if (tbt > 129 && depth <= 40) { updateDive('Z', true, true, (tbt - 140), dive) }
    // Depth <= 50
    else if (tbt <= 7 && depth <= 50) { updateDive('A', false, false, (tbt - 80), dive) }
    else if (tbt <= 13 && depth <= 50) { updateDive('B', false, false, (tbt - 80), dive) }
    else if (tbt <= 17 && depth <= 50) { updateDive('C', false, false, (tbt - 80), dive) }
    else if (tbt <= 19 && depth <= 50) { updateDive('D', false, false, (tbt - 80), dive) }
    else if (tbt <= 21 && depth <= 50) { updateDive('E', false, false, (tbt - 80), dive) }
    else if (tbt <= 24 && depth <= 50) { updateDive('F', false, false, (tbt - 80), dive) }
    else if (tbt <= 26 && depth <= 50) { updateDive('G', false, false, (tbt - 80), dive) }
    else if (tbt <= 28 && depth <= 50) { updateDive('H', false, false, (tbt - 80), dive) }
    else if (tbt <= 31 && depth <= 50) { updateDive('I', false, false, (tbt - 80), dive) }
    else if (tbt <= 33 && depth <= 50) { updateDive('J', false, false, (tbt - 80), dive) }
    else if (tbt <= 36 && depth <= 50) { updateDive('K', false, false, (tbt - 80), dive) }
    else if (tbt <= 39 && depth <= 50) { updateDive('L', false, false, (tbt - 80), dive) }
    else if (tbt <= 41 && depth <= 50) { updateDive('M', false, false, (tbt - 80), dive) }
    else if (tbt <= 44 && depth <= 50) { updateDive('N', false, false, (tbt - 80), dive) }
    else if (tbt <= 47 && depth <= 50) { updateDive('O', false, false, (tbt - 80), dive) }
    else if (tbt <= 50 && depth <= 50) { updateDive('P', false, false, (tbt - 80), dive) }
    else if (tbt <= 53 && depth <= 50) { updateDive('Q', false, false, (tbt - 80), dive) }
    else if (tbt <= 57 && depth <= 50) { updateDive('R', false, false, (tbt - 80), dive) }
    else if (tbt <= 60 && depth <= 50) { updateDive('S', false, false, (tbt - 80), dive) }
    else if (tbt <= 63 && depth <= 50) { updateDive('T', false, false, (tbt - 80), dive) }
    else if (tbt <= 67 && depth <= 50) { updateDive('U', true, false, (tbt - 80), dive) }
    else if (tbt <= 71 && depth <= 50) { updateDive('V', true, false, (tbt - 80), dive) }
    else if (tbt <= 75 && depth <= 50) { updateDive('W', true, false, (tbt - 80), dive) }
    else if (tbt > 75 && depth <= 50) { updateDive('X', true, true, (tbt - 80), dive) }
    // Depth <= 60
    else if (tbt <= 6 && depth <= 60) { updateDive('A', false, false, (tbt - 55), dive) }
    else if (tbt <= 11 && depth <= 60) { updateDive('B', false, false, (tbt - 55), dive) }
    else if (tbt <= 14 && depth <= 60) { updateDive('C', false, false, (tbt - 55), dive) }
    else if (tbt <= 16 && depth <= 60) { updateDive('D', false, false, (tbt - 55), dive) }
    else if (tbt <= 17 && depth <= 60) { updateDive('E', false, false, (tbt - 55), dive) }
    else if (tbt <= 19 && depth <= 60) { updateDive('F', false, false, (tbt - 55), dive) }
    else if (tbt <= 21 && depth <= 60) { updateDive('G', false, false, (tbt - 55), dive) }
    else if (tbt <= 23 && depth <= 60) { updateDive('H', false, false, (tbt - 55), dive) }
    else if (tbt <= 25 && depth <= 60) { updateDive('I', false, false, (tbt - 55), dive) }
    else if (tbt <= 27 && depth <= 60) { updateDive('J', false, false, (tbt - 55), dive) }
    else if (tbt <= 29 && depth <= 60) { updateDive('K', false, false, (tbt - 55), dive) }
    else if (tbt <= 31 && depth <= 60) { updateDive('L', false, false, (tbt - 55), dive) }
    else if (tbt <= 33 && depth <= 60) { updateDive('M', false, false, (tbt - 55), dive) }
    else if (tbt <= 35 && depth <= 60) { updateDive('N', false, false, (tbt - 55), dive) }
    else if (tbt <= 37 && depth <= 60) { updateDive('O', false, false, (tbt - 55), dive) }
    else if (tbt <= 39 && depth <= 60) { updateDive('P', false, false, (tbt - 55), dive) }
    else if (tbt <= 42 && depth <= 60) { updateDive('Q', false, false, (tbt - 55), dive) }
    else if (tbt <= 44 && depth <= 60) { updateDive('R', false, false, (tbt - 55), dive) }
    else if (tbt <= 47 && depth <= 60) { updateDive('S', false, false, (tbt - 55), dive) }
    else if (tbt <= 49 && depth <= 60) { updateDive('T', true, false, (tbt - 55), dive) }
    else if (tbt <= 52 && depth <= 60) { updateDive('U', true, false, (tbt - 55), dive) }
    else if (tbt <= 54 && depth <= 60) { updateDive('V', true, false, (tbt - 55), dive) }
    else if (tbt > 54 && depth <= 60) { updateDive('W', true, true, (tbt - 55), dive) }
    // Depth <= 70
    else if (tbt <= 5 && depth <= 70) { updateDive('A', false, false, (tbt - 40), dive) }
    else if (tbt <= 9 && depth <= 70) { updateDive('B', false, false, (tbt - 40), dive) }
    else if (tbt <= 12 && depth <= 70) { updateDive('C', false, false, (tbt - 40), dive) }
    else if (tbt <= 13 && depth <= 70) { updateDive('D', false, false, (tbt - 40), dive) }
    else if (tbt <= 15 && depth <= 70) { updateDive('E', false, false, (tbt - 40), dive) }
    else if (tbt <= 16 && depth <= 70) { updateDive('F', false, false, (tbt - 40), dive) }
    else if (tbt <= 18 && depth <= 70) { updateDive('G', false, false, (tbt - 40), dive) }
    else if (tbt <= 19 && depth <= 70) { updateDive('H', false, false, (tbt - 40), dive) }
    else if (tbt <= 21 && depth <= 70) { updateDive('I', false, false, (tbt - 40), dive) }
    else if (tbt <= 22 && depth <= 70) { updateDive('J', false, false, (tbt - 40), dive) }
    else if (tbt <= 24 && depth <= 70) { updateDive('K', false, false, (tbt - 40), dive) }
    else if (tbt <= 26 && depth <= 70) { updateDive('L', false, false, (tbt - 40), dive) }
    else if (tbt <= 27 && depth <= 70) { updateDive('M', false, false, (tbt - 40), dive) }
    else if (tbt <= 29 && depth <= 70) { updateDive('N', false, false, (tbt - 40), dive) }
    else if (tbt <= 31 && depth <= 70) { updateDive('O', false, false, (tbt - 40), dive) }
    else if (tbt <= 33 && depth <= 70) { updateDive('P', false, false, (tbt - 40), dive) }
    else if (tbt <= 35 && depth <= 70) { updateDive('Q', true, false, (tbt - 40), dive) }
    else if (tbt <= 36 && depth <= 70) { updateDive('R', true, false, (tbt - 40), dive) }
    else if (tbt <= 38 && depth <= 70) { updateDive('S', true, false, (tbt - 40), dive) }
    else if (tbt > 38 && depth <= 70) { updateDive('T', true, true, (tbt - 40), dive) }
    // Depth <= 80
    else if (tbt <= 4 && depth <= 80) { updateDive('A', false, false, (tbt - 30), dive) }
    else if (tbt <= 8 && depth <= 80) { updateDive('B', false, false, (tbt - 30), dive) }
    else if (tbt <= 10 && depth <= 80) { updateDive('C', false, false, (tbt - 30), dive) }
    else if (tbt <= 11 && depth <= 80) { updateDive('D', false, false, (tbt - 30), dive) }
    else if (tbt <= 13 && depth <= 80) { updateDive('E', false, false, (tbt - 30), dive) }
    else if (tbt <= 14 && depth <= 80) { updateDive('F', false, false, (tbt - 30), dive) }
    else if (tbt <= 15 && depth <= 80) { updateDive('G', false, false, (tbt - 30), dive) }
    else if (tbt <= 17 && depth <= 80) { updateDive('H', false, false, (tbt - 30), dive) }
    else if (tbt <= 18 && depth <= 80) { updateDive('I', false, false, (tbt - 30), dive) }
    else if (tbt <= 19 && depth <= 80) { updateDive('J', false, false, (tbt - 30), dive) }
    else if (tbt <= 21 && depth <= 80) { updateDive('K', false, false, (tbt - 30), dive) }
    else if (tbt <= 22 && depth <= 80) { updateDive('L', false, false, (tbt - 30), dive) }
    else if (tbt <= 23 && depth <= 80) { updateDive('M', false, false, (tbt - 30), dive) }
    else if (tbt <= 25 && depth <= 80) { updateDive('N', false, false, (tbt - 30), dive) }
    else if (tbt <= 26 && depth <= 80) { updateDive('O', true, false, (tbt - 30), dive) }
    else if (tbt <= 28 && depth <= 80) { updateDive('P', true, false, (tbt - 30), dive) }
    else if (tbt <= 29 && depth <= 80) { updateDive('Q', true, false, (tbt - 30), dive) }
    else if (tbt > 29 && depth <= 80) { updateDive('R', true, true, (tbt - 30), dive) }
    // Depth <= 90
    else if (tbt <= 4 && depth <= 90) { updateDive('A', false, false, (tbt - 25), dive) }
    else if (tbt <= 7 && depth <= 90) { updateDive('B', false, false, (tbt - 25), dive) }
    else if (tbt <= 9 && depth <= 90) { updateDive('C', false, false, (tbt - 25), dive) }
    else if (tbt <= 10 && depth <= 90) { updateDive('D', false, false, (tbt - 25), dive) }
    else if (tbt <= 11 && depth <= 90) { updateDive('E', false, false, (tbt - 25), dive) }
    else if (tbt <= 12 && depth <= 90) { updateDive('F', false, false, (tbt - 25), dive) }
    else if (tbt <= 13 && depth <= 90) { updateDive('G', false, false, (tbt - 25), dive) }
    else if (tbt <= 15 && depth <= 90) { updateDive('H', false, false, (tbt - 25), dive) }
    else if (tbt <= 16 && depth <= 90) { updateDive('I', false, false, (tbt - 25), dive) }
    else if (tbt <= 17 && depth <= 90) { updateDive('J', false, false, (tbt - 25), dive) }
    else if (tbt <= 18 && depth <= 90) { updateDive('K', false, false, (tbt - 25), dive) }
    else if (tbt <= 19 && depth <= 90) { updateDive('L', false, false, (tbt - 25), dive) }
    else if (tbt <= 21 && depth <= 90) { updateDive('M', false, false, (tbt - 25), dive) }
    else if (tbt <= 22 && depth <= 90) { updateDive('N', true, false, (tbt - 25), dive) }
    else if (tbt <= 23 && depth <= 90) { updateDive('O', true, false, (tbt - 25), dive) }
    else if (tbt <= 24 && depth <= 90) { updateDive('P', true, false, (tbt - 25), dive) }
    else if (tbt > 24 && depth <= 90) { updateDive('Q', true, true, (tbt - 25), dive) }
    // Depth <= 100
    else if (tbt <= 3 && depth <= 100) { updateDive('A', true, false, (tbt - 20), dive) }
    else if (tbt <= 6 && depth <= 100) { updateDive('B', true, false, (tbt - 20), dive) }
    else if (tbt <= 8 && depth <= 100) { updateDive('C', true, false, (tbt - 20), dive) }
    else if (tbt <= 9 && depth <= 100) { updateDive('D', true, false, (tbt - 20), dive) }
    else if (tbt <= 10 && depth <= 100) { updateDive('E', true, false, (tbt - 20), dive) }
    else if (tbt <= 11 && depth <= 100) { updateDive('F', true, false, (tbt - 20), dive) }
    else if (tbt <= 12 && depth <= 100) { updateDive('G', true, false, (tbt - 20), dive) }
    else if (tbt <= 13 && depth <= 100) { updateDive('H', true, false, (tbt - 20), dive) }
    else if (tbt <= 14 && depth <= 100) { updateDive('I', true, false, (tbt - 20), dive) }
    else if (tbt <= 15 && depth <= 100) { updateDive('J', true, false, (tbt - 20), dive) }
    else if (tbt <= 16 && depth <= 100) { updateDive('K', true, false, (tbt - 20), dive) }
    else if (tbt <= 17 && depth <= 100) { updateDive('L', true, false, (tbt - 20), dive) }
    else if (tbt <= 18 && depth <= 100) { updateDive('M', true, false, (tbt - 20), dive) }
    else if (tbt <= 19 && depth <= 100) { updateDive('N', true, false, (tbt - 20), dive) }
    else if (tbt > 19 && depth <= 100) { updateDive('O', true, true, dive) }
    // Depth <= 110
    else if (tbt <= 3 && depth <= 110) { updateDive('A', true, false, (tbt - 16), dive) }
    else if (tbt <= 6 && depth <= 110) { updateDive('B', true, false, (tbt - 16), dive) }
    else if (tbt <= 7 && depth <= 110) { updateDive('C', true, false, (tbt - 16), dive) }
    else if (tbt <= 8 && depth <= 110) { updateDive('D', true, false, (tbt - 16), dive) }
    else if (tbt <= 9 && depth <= 110) { updateDive('E', true, false, (tbt - 16), dive) }
    else if (tbt <= 10 && depth <= 110) { updateDive('F', true, false, (tbt - 16), dive) }
    else if (tbt <= 11 && depth <= 110) { updateDive('G', true, false, (tbt - 16), dive) }
    else if (tbt <= 12 && depth <= 110) { updateDive('H', true, false, (tbt - 16), dive) }
    else if (tbt <= 13 && depth <= 110) { updateDive('I', true, false, (tbt - 16), dive) }
    else if (tbt <= 13 && depth <= 110) { updateDive('J', true, false, (tbt - 16), dive) }
    else if (tbt <= 14 && depth <= 110) { updateDive('K', true, false, (tbt - 16), dive) }
    else if (tbt <= 15 && depth <= 110) { updateDive('L', true, false, (tbt - 16), dive) }
    else if (tbt > 15 && depth <= 110) { updateDive('M', true, true, (tbt - 16), dive) }
    // Depth <= 120
    else if (tbt <= 3 && depth <= 120) { updateDive('A', true, false, (tbt - 13), dive) }
    else if (tbt <= 5 && depth <= 120) { updateDive('B', true, false, (tbt - 13), dive) }
    else if (tbt <= 6 && depth <= 120) { updateDive('C', true, false, (tbt - 13), dive) }
    else if (tbt <= 7 && depth <= 120) { updateDive('D', true, false, (tbt - 13), dive) }
    else if (tbt <= 8 && depth <= 120) { updateDive('E', true, false, (tbt - 13), dive) }
    else if (tbt <= 9 && depth <= 120) { updateDive('F', true, false, (tbt - 13), dive) }
    else if (tbt <= 10 && depth <= 120) { updateDive('G', true, false, (tbt - 13), dive) }
    else if (tbt <= 11 && depth <= 120) { updateDive('H', true, false, (tbt - 13), dive) }
    else if (tbt <= 11 && depth <= 120) { updateDive('I', true, false, (tbt - 13), dive) }
    else if (tbt <= 12 && depth <= 120) { updateDive('J', true, false, (tbt - 13), dive) }
    else if (tbt > 12 && depth <= 120) { updateDive('K', true, true, (tbt - 13), dive) }
    // Depth <= 130
    else if (tbt <= 3 && depth <= 130) { updateDive('A', true, false, (tbt - 10), dive) }
    else if (tbt <= 5 && depth <= 130) { updateDive('B', true, false, (tbt - 10), dive) }
    else if (tbt <= 6 && depth <= 130) { updateDive('C', true, false, (tbt - 10), dive) }
    else if (tbt <= 7 && depth <= 130) { updateDive('D', true, false, (tbt - 10), dive) }
    else if (tbt <= 7 && depth <= 130) { updateDive('E', true, false, (tbt - 10), dive) }
    else if (tbt <= 8 && depth <= 130) { updateDive('F', true, false, (tbt - 10), dive) }
    else if (tbt <= 9 && depth <= 130) { updateDive('G', true, false, (tbt - 10), dive) }
    else if (tbt > 9 && depth <= 130) { updateDive('H', true, true, (tbt - 10), dive) }
    // Depth <= 140
    else if (tbt <= 0 && depth <= 130) { updateDive('A', true, false, (tbt - 8), dive) }
    else if (tbt <= 4 && depth <= 130) { updateDive('B', true, false, (tbt - 8), dive) }
    else if (tbt <= 5 && depth <= 130) { updateDive('C', true, false, (tbt - 8), dive) }
    else if (tbt <= 6 && depth <= 130) { updateDive('D', true, false, (tbt - 8), dive) }
    else if (tbt <= 7 && depth <= 130) { updateDive('E', true, false, (tbt - 8), dive) }
    else if (tbt > 6 && depth > 130) { updateDive('F', true, true, (tbt - 8), dive) }
}