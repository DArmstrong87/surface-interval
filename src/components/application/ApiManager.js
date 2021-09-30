import { useEffect, useState } from "react"

// ---------------------------------- GETTERS ----------------------------------
// --------- User
export const getCurrentUser = () => {
    const user = localStorage.getItem('si_user')
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/users?&userId=${user}`)
        .then(res => res.json())
}

// --------- Dives
export const getMyDives = () => {
    const user = localStorage.getItem('si_user')
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives?&userId=${user}`)
        .then(res => res.json())
}
export const getDivesAlphabetical = (obj) => {
    const user = localStorage.getItem('si_user')
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives?&userId=${user}&_sort=${obj.property}&_order=${obj.order}`)
        .then(res => res.json())
}

export const getDivesByParam = (obj) => {
    const user = localStorage.getItem('si_user')
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives?&userId=${user}&${obj.property}=${obj.param}`)
        .then(res => res.json())
}

export const getDivesByDepth = (order) => {
    const user = localStorage.getItem('si_user')
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives?_sort=depth&userId=${user}&_order=${order}`)
        .then(res => res.json())
}

export const getDivesByDate = (order) => {
    const user = localStorage.getItem('si_user')
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives?_sort=date&userId=${user}&_order=${order}`)
        .then(res => res.json())
}

export const getDivesByTime = (order) => {
    const user = localStorage.getItem('si_user')
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives?_sort=time&userId=${user}&_order=${order}`)
        .then(res => res.json())
}

export const getCurrentDive = (id) => {
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives/${id}`)
        .then(res => res.json())
}
export const getDiveImages = (num) => {
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/diveImages?&diveId=${num}`)
        .then(res => res.json())
}
export const getAllDiveImages = () => {
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/diveImages`)
        .then(res => res.json())
}

// --------- Gear
export const getMyGear = () => {
    const user = localStorage.getItem('si_user')
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/gear?&userId=${user}`)
        .then(res => res.json())
}

export const getCurrentGearSet = (id) => {
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/gear/${id}`)
        .then(res => res.json())
}

// --------- Cert Cards
export const getMyCards = () => {
    const user = localStorage.getItem('si_user')
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/certCards?&userId=${user}`)
        .then(res => res.json())
}

export const GetDiveStats = () => {
    const [deepest, setDeep] = useState([])
    const [longest, setLongest] = useState([])
    const [mostRecent, setRecent] = useState([])
    const [dives, setDives] = useState([])

    const getAvgDepth = () => {
        let total = 0
        for (const dive of dives) {
            total += dive.depth
        }

        return total / dives.length
    }
    const getAvgTime = () => {
        let total = 0
        for (const dive of dives) {
            total += dive.time
        }
        return total / dives.length
    }
    const avgDepth = getAvgDepth()
    const avgTime = getAvgTime()
    const diveStats = {
        mostRecent: mostRecent[0]?.date,
        deepest: deepest[0]?.depth,
        longest: longest[0]?.time,
        avgDepth: avgDepth.toFixed(2),
        avgTime: avgTime.toFixed(0)
    }

    useEffect(() => {
        const user = localStorage.getItem('si_user')
        fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives?&userId=${user}&_sort=date&_order=desc`)
            .then(res => res.json())
            .then((data) => setRecent(data))
    }, []
    )
    useEffect(() => {
        const user = localStorage.getItem('si_user')
        fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives?&userId=${user}&_sort=depth&_order=desc`)
            .then(res => res.json())
            .then((data) => setDeep(data))
    }, []
    )
    useEffect(() => {
        const user = localStorage.getItem('si_user')
        fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives?&userId=${user}&_sort=time&_order=desc`)
            .then(res => res.json())
            .then((data) => setLongest(data))
    }, []
    )
    useEffect(() => {
        getMyDives()
            .then((data) => setDives(data))
    }, []
    )

    return diveStats
}

// ---------------------------------- POST METHODS ----------------------------------
export const submitDive = (event, diveCopy) => {
    event.preventDefault()
    const newDive = {
        userId: diveCopy.userId,
        date: diveCopy.date,
        location: diveCopy.location,
        diveSite: diveCopy.diveSite,
        freshOrSalt: diveCopy.freshOrSalt,
        depth: diveCopy.depth,
        time: diveCopy.time,
        comments: diveCopy.comments,
        isAltitude: diveCopy.isAltitude,
        isCave: diveCopy.isCave,
        isDeep: diveCopy.isDeep,
        isDrift: diveCopy.isDrift,
        isDry: diveCopy.isDry,
        isFFM: diveCopy.isFFM,
        isNav: diveCopy.isNav,
        isNight: diveCopy.isNight,
        isN32: diveCopy.isN32,
        isN36: diveCopy.isN36,
        isRebreather: diveCopy.isRebreather,
        isSearch: diveCopy.isSearch,
        isSidemount: diveCopy.isSidemount,
        isWreck: diveCopy.isWreck,
        isBoat: diveCopy.isBoat,
        isCurrent: diveCopy.isCurrent,
        isShore: diveCopy.isShore,
        isSurge: diveCopy.isSurge,
        isWaves: diveCopy.isWaves,
        waterTemp: diveCopy.waterTemp,
    }
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(newDive)
    }
    return fetch("https://surface-interval-api-ferdk.ondigitalocean.app/dives", fetchOption)
}
export const postImages = (diveImages) => {
    const newImage = {
        diveId: diveImages.diveId,
        imageUrl: diveImages.imageUrl
    }
    const fetchOption = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(newImage)
    }
    return fetch("https://surface-interval-api-ferdk.ondigitalocean.app/diveImages", fetchOption)
}

export const submitGear = (event, gearCopy) => {
    event.preventDefault()
    const newGear = {
        userId: gearCopy.userId,
        name: gearCopy.name,
        bcd: gearCopy.bcd,
        regulator: gearCopy.regulator,
        octopus: gearCopy.octopus,
        mask: gearCopy.mask,
        fins: gearCopy.fins,
        boots: gearCopy.boots,
        console: gearCopy.console,
        computer: gearCopy.computer,
        exposureSuit: gearCopy.exposureSuit,
        weight: parseInt(gearCopy.weight),
        tank: gearCopy.tank,
        gloves: gearCopy.gloves,
        hood: gearCopy.hood,
        batteries: gearCopy.batteries,
        camera: gearCopy.camera,
        cameraAcc: gearCopy.cameraAcc,
        chargers: gearCopy.chargers,
        o2Analyzer: gearCopy.o2Analyzer,
        power: gearCopy.power,
        strobe: gearCopy.strobe,
        torch: gearCopy.torch,
        torchBackup: gearCopy.torchBackup,
        finStrap: gearCopy.finStrap,
        maskBackup: gearCopy.maskBackup,
        maskStrap: gearCopy.maskStrap,
        mouthpiece: gearCopy.mouthpiece,
        oRings: gearCopy.oRings,
        zipTies: gearCopy.zipTies,
        itinerary: gearCopy.itinerary,
        maps: gearCopy.maps,
        passport: gearCopy.passport,
        logbook: gearCopy.logbook,
        planeTicket: gearCopy.planeTicket,
        travelIns: gearCopy.travelIns,
        vaxRec: gearCopy.vaxRec,
        audSignal: gearCopy.audSignal,
        firstAid: gearCopy.firstAid,
        knife: gearCopy.knife,
        meds: gearCopy.meds,
        o2Kit: gearCopy.o2Kit,
        sunscreen: gearCopy.sunscreen,
        vizSignal: gearCopy.vizSignal,
        wreckReel: gearCopy.wreckReel,
        dryBag: gearCopy.dryBag,
        defog: gearCopy.defog,
        sunglasses: gearCopy.sunglasses,
        toolKit: gearCopy.toolKit,
        towel: gearCopy.towel,
        waterBottle: gearCopy.waterBottle
    }

    const fetchOption = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(newGear)
    }

    return fetch("https://surface-interval-api-ferdk.ondigitalocean.app/gear", fetchOption)
}

// ---------------------------------- PUT METHODS ----------------------------------
export const saveGear = (event, currentGear, gearId) => {
    event.preventDefault()
    const updatedGear = {
        userId: parseInt(localStorage.getItem('si_user')),
        name: currentGear.name,
        bcd: currentGear.bcd,
        regulator: currentGear.regulator,
        octopus: currentGear.octopus,
        mask: currentGear.mask,
        fins: currentGear.fins,
        boots: currentGear.boots,
        console: currentGear.console,
        computer: currentGear.computer,
        exposureSuit: currentGear.exposureSuit,
        weight: parseInt(currentGear.weight),
        tank: currentGear.tank,
        gloves: currentGear.gloves,
        hood: currentGear.hood,
        batteries: currentGear.batteries,
        camera: currentGear.camera,
        cameraAcc: currentGear.cameraAcc,
        chargers: currentGear.chargers,
        o2Analyzer: currentGear.o2Analyzer,
        power: currentGear.power,
        strobe: currentGear.strobe,
        torch: currentGear.torch,
        torchBackup: currentGear.torchBackup,
        finStrap: currentGear.finStrap,
        maskBackup: currentGear.maskBackup,
        maskStrap: currentGear.maskStrap,
        mouthpiece: currentGear.mouthpiece,
        oRings: currentGear.oRings,
        zipTies: currentGear.zipTies,
        itinerary: currentGear.itinerary,
        maps: currentGear.maps,
        passport: currentGear.passport,
        logbook: currentGear.logbook,
        planeTicket: currentGear.planeTicket,
        travelIns: currentGear.travelIns,
        vaxRec: currentGear.vaxRec,
        audSignal: currentGear.audSignal,
        firstAid: currentGear.firstAid,
        knife: currentGear.knife,
        meds: currentGear.meds,
        o2Kit: currentGear.o2Kit,
        sunscreen: currentGear.sunscreen,
        vizSignal: currentGear.vizSignal,
        wreckReel: currentGear.wreckReel,
        dryBag: currentGear.dryBag,
        defog: currentGear.defog,
        sunglasses: currentGear.sunglasses,
        toolKit: currentGear.toolKit,
        towel: currentGear.towel,
        waterBottle: currentGear.waterBottle
    }

    const fetchOption = {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updatedGear)
    }

    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/gear/${gearId}`, fetchOption)
}

export const saveDive = (event, currentDive, diveId) => {
    event.preventDefault()
    const updateDive = {
        userId: currentDive.userId,
        date: currentDive.date,
        location: currentDive.location,
        diveSite: currentDive.diveSite,
        freshOrSalt: currentDive.freshOrSalt,
        depth: currentDive.depth,
        time: currentDive.time,
        comments: currentDive.comments,
        isAltitude: currentDive.isAltitude,
        isCave: currentDive.isCave,
        isDeep: !!currentDive.isDeep,
        isDrift: currentDive.isDrift,
        isDry: currentDive.isDry,
        isFFM: currentDive.isFFM,
        isNav: currentDive.isNav,
        isNight: currentDive.isNight,
        isN32: currentDive.isN32,
        isN36: currentDive.isN36,
        isRebreather: currentDive.isRebreather,
        isSearch: currentDive.isSearch,
        isSidemount: currentDive.isSidemount,
        isWreck: currentDive.isWreck,
        isBoat: currentDive.isBoat,
        isCurrent: currentDive.isCurrent,
        isShore: currentDive.isShore,
        isSurge: currentDive.isSurge,
        isWaves: currentDive.isWaves,
        waterTemp: currentDive.waterTemp,
    }

    const fetchOption = {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(updateDive)
    }

    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives/${diveId}`, fetchOption)
}

// ---------------------------------- DELETE METHODS ----------------------------------
export const deleteGear = (id, setGear) => {
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/gear/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            getMyGear()
                .then(gear => setGear(gear))
        }, []
        )
}
export const deleteImage = (id) => {
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/diveImages/${id}`, {
        method: "DELETE"
    })
}

export const deleteDive = (id, setDives) => {
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            getMyDives()
                .then(dives => {
                    setDives(dives)
                })
        }, []
        )
}
export const deleteSingleDive = (id) => {
    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/dives/${id}`, {
        method: "DELETE"
    })
}