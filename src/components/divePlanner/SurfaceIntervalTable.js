import React from "react";

const pg = dive.pg //Previous dive's PG
const setSpg = (letter) => {
    const dive = { ...dive2 }
    dive.spg = letter
    updateDive2(dive)
}

const siTable = () => {
    if (pg === 'A' && si >= 0) { setSpg('A') }
    else if (pg === 'B' && surfInt >= 48 && si <= 228) { setSpg('A') }
    else if (surfInt <= 47 && surfInt >= 0) { setSPG('B') }
}