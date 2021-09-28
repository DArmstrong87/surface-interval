// Sets residual nitrogen time, given starting pressure group and depth of next dive.

export const GetRNTN32 = (step, inputDepth, newPg) => {
    const depth = inputDepth
    const startPg = newPg
    if (step === 1) { return 0 }
    else if (depth <= 45) {
        if (startPg === 'A') return 10
        if (startPg === 'B') return 20
        if (startPg === 'C') return 26
        if (startPg === 'D') return 30
        if (startPg === 'E') return 34
        if (startPg === 'F') return 37
        if (startPg === 'G') return 41
        if (startPg === 'H') return 46
        if (startPg === 'I') return 50
        if (startPg === 'J') return 55
        if (startPg === 'K') return 60
        if (startPg === 'L') return 65
        if (startPg === 'M') return 71
        if (startPg === 'N') return 77
        if (startPg === 'O') return 83
        if (startPg === 'P') return 90
        if (startPg === 'Q') return 98
        if (startPg === 'R') return 106
        if (startPg === 'S') return 115
        if (startPg === 'T') return 126
        if (startPg === 'U') return 138
        if (startPg === 'V') return 151
        if (startPg === 'W') return 167
        if (startPg === 'X') return 187
        if (startPg === 'Y') return 213
        if (startPg === 'Z') return 220
    } else if (depth <= 50) {
        if (startPg === 'A') return 9
        if (startPg === 'B') return 17
        if (startPg === 'C') return 23
        if (startPg === 'D') return 26
        if (startPg === 'E') return 29
        if (startPg === 'F') return 32
        if (startPg === 'G') return 36
        if (startPg === 'H') return 39
        if (startPg === 'I') return 43
        if (startPg === 'J') return 47
        if (startPg === 'K') return 51
        if (startPg === 'L') return 55
        if (startPg === 'M') return 59
        if (startPg === 'N') return 64
        if (startPg === 'O') return 69
        if (startPg === 'P') return 74
        if (startPg === 'Q') return 80
        if (startPg === 'R') return 85
        if (startPg === 'S') return 92
        if (startPg === 'T') return 99
        if (startPg === 'U') return 106
        if (startPg === 'V') return 114
        if (startPg === 'W') return 123
        if (startPg === 'X') return 133
        if (startPg === 'Y') return 145
        if (startPg === 'Z') return 155
    } else if (depth <= 55) {
        if (startPg === 'A') return 8
        if (startPg === 'B') return 15
        if (startPg === 'C') return 20
        if (startPg === 'D') return 23
        if (startPg === 'E') return 26
        if (startPg === 'F') return 28
        if (startPg === 'G') return 31
        if (startPg === 'H') return 34
        if (startPg === 'I') return 37
        if (startPg === 'J') return 41
        if (startPg === 'K') return 44
        if (startPg === 'L') return 47
        if (startPg === 'M') return 51
        if (startPg === 'N') return 55
        if (startPg === 'O') return 59
        if (startPg === 'P') return 63
        if (startPg === 'Q') return 67
        if (startPg === 'R') return 72
        if (startPg === 'S') return 77
        if (startPg === 'T') return 82
        if (startPg === 'U') return 87
        if (startPg === 'V') return 93
        if (startPg === 'W') return 99
        if (startPg === 'X') return 106
        if (startPg === 'Y') return 110
    } else if (depth <= 60) {
        if (startPg === 'A') return 7
        if (startPg === 'B') return 14
        if (startPg === 'C') return 18
        if (startPg === 'D') return 20
        if (startPg === 'E') return 23
        if (startPg === 'F') return 25
        if (startPg === 'G') return 28
        if (startPg === 'H') return 30
        if (startPg === 'I') return 33
        if (startPg === 'J') return 36
        if (startPg === 'K') return 39
        if (startPg === 'L') return 42
        if (startPg === 'M') return 45
        if (startPg === 'N') return 48
        if (startPg === 'O') return 51
        if (startPg === 'P') return 55
        if (startPg === 'Q') return 58
        if (startPg === 'R') return 62
        if (startPg === 'S') return 66
        if (startPg === 'T') return 70
        if (startPg === 'U') return 74
        if (startPg === 'V') return 79
        if (startPg === 'W') return 84
        if (startPg === 'X') return 90
    } else if (depth <= 70) {
        if (startPg === 'A') return 6
        if (startPg === 'B') return 11
        if (startPg === 'C') return 15
        if (startPg === 'D') return 17
        if (startPg === 'E') return 19
        if (startPg === 'F') return 21
        if (startPg === 'G') return 23
        if (startPg === 'H') return 25
        if (startPg === 'I') return 27
        if (startPg === 'J') return 29
        if (startPg === 'K') return 32
        if (startPg === 'L') return 34
        if (startPg === 'M') return 36
        if (startPg === 'N') return 39
        if (startPg === 'O') return 41
        if (startPg === 'P') return 44
        if (startPg === 'Q') return 46
        if (startPg === 'R') return 49
        if (startPg === 'S') return 52
        if (startPg === 'T') return 55
        if (startPg === 'U') return 58
        if (startPg === 'V') return 60
    } else if (depth <= 80) {
        if (startPg === 'A') return 5
        if (startPg === 'B') return 10
        if (startPg === 'C') return 13
        if (startPg === 'D') return 14
        if (startPg === 'E') return 16
        if (startPg === 'F') return 18
        if (startPg === 'G') return 19
        if (startPg === 'H') return 21
        if (startPg === 'I') return 23
        if (startPg === 'J') return 25
        if (startPg === 'K') return 27
        if (startPg === 'L') return 28
        if (startPg === 'M') return 30
        if (startPg === 'N') return 32
        if (startPg === 'O') return 34
        if (startPg === 'P') return 36
        if (startPg === 'Q') return 38
        if (startPg === 'R') return 41
        if (startPg === 'S') return 43
        if (startPg === 'T') return 45
    } else if (depth <= 90) {
        if (startPg === 'A') return 5
        if (startPg === 'B') return 8
        if (startPg === 'C') return 11
        if (startPg === 'D') return 13
        if (startPg === 'E') return 14
        if (startPg === 'F') return 15
        if (startPg === 'G') return 17
        if (startPg === 'H') return 18
        if (startPg === 'I') return 20
        if (startPg === 'J') return 21
        if (startPg === 'K') return 23
        if (startPg === 'L') return 24
        if (startPg === 'M') return 26
        if (startPg === 'N') return 28
        if (startPg === 'O') return 29
        if (startPg === 'P') return 31
        if (startPg === 'Q') return 33
        if (startPg === 'R') return 34
        if (startPg === 'S') return 35
    } else if (depth <= 100) {
        if (startPg === 'A') return 4
        if (startPg === 'B') return 7
        if (startPg === 'C') return 10
        if (startPg === 'D') return 11
        if (startPg === 'E') return 12
        if (startPg === 'F') return 14
        if (startPg === 'G') return 15
        if (startPg === 'H') return 16
        if (startPg === 'I') return 17
        if (startPg === 'J') return 19
        if (startPg === 'K') return 20
        if (startPg === 'L') return 22
        if (startPg === 'M') return 23
        if (startPg === 'N') return 24
        if (startPg === 'O') return 26
        if (startPg === 'P') return 27
        if (startPg === 'Q') return 29
        if (startPg === 'R') return 30
    } else if (depth <= 110) {
        if (startPg === 'A') return 4
        if (startPg === 'B') return 7
        if (startPg === 'C') return 9
        if (startPg === 'D') return 10
        if (startPg === 'E') return 11
        if (startPg === 'F') return 12
        if (startPg === 'G') return 13
        if (startPg === 'H') return 14
        if (startPg === 'I') return 16
        if (startPg === 'J') return 17
        if (startPg === 'K') return 18
        if (startPg === 'L') return 19
        if (startPg === 'M') return 20
        if (startPg === 'N') return 22
        if (startPg === 'O') return 23
        if (startPg === 'P') return 24
        if (startPg === 'Q') return 25
    } else if (depth <= 120) {
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
        if (startPg === 'O') return 10
    } else if (depth > 120) {
        if (startPg === 'A') return 3
        if (startPg === 'B') return 5
        if (startPg === 'C') return 7
        if (startPg === 'D') return 8
        if (startPg === 'E') return 9
        if (startPg === 'F') return 10
        if (startPg === 'G') return 11
        if (startPg === 'H') return 12
        if (startPg === 'I') return 13
        if (startPg === 'J') return 14
        if (startPg === 'K') return 15
        if (startPg === 'L') return 16
        if (startPg === 'M') return 17
        if (startPg === 'N') return 18
    }
}