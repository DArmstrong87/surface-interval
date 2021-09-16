import React from "react";

export const SI_Table = ({ dives, step }) => {

    const findPg = () => {
        if (step === 1) { return '' }
        else if (step === 2) { return dives[0]?.pg }
        else if (step === 3) { return dives[1]?.pg }
    }
    const findSi = () => {
        if (step === 1) { return '' }
        else if (step === 2) { return dives[1]?.si }
        else if (step === 3) { return dives[2]?.si }
    }

    const pg = findPg()
    const si = findSi()
    console.log(step)
    console.log(dives)
    console.log('pg, si', pg, si)

    const findNewPg = () => {
        const newPg = ''
        if (pg === 'A' && si >= 0) { newPg = 'A' }
        else if (pg === 'B' && si >= 48 && si <= 228) { newPg = 'A' }
        else if (pg === 'B' && si <= 47 && si >= 0) { newPg = 'B' }
        return newPg
    }
    const newPg = findNewPg()
    console.log('newPG=', newPg)
    console.log('setNewPG runs')
    return (newPg)
}