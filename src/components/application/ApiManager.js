import { useEffect, useState } from "react/cjs/react.development"

export const getCurrentUser = () => {
    const user = localStorage.getItem('si_user')
    return fetch(`http://localhost:8088/users?&userId=${user}`)
        .then(res => res.json())
}

export const getMyDives = () => {
    const user = localStorage.getItem('si_user')
    return fetch(`http://localhost:8088/dives?&userId=${user}`)
        .then(res => res.json())
}
export const getMyGear = () => {
    const user = localStorage.getItem('si_user')
    return fetch(`http://localhost:8088/gear?&userId=${user}`)
        .then(res => res.json())
}
export const getMyCards = () => {
    const user = localStorage.getItem('si_user')
    return fetch(`http://localhost:8088/certCards?&userId=${user}`)
        .then(res => res.json())
}
export const getCurrentDive = (id) => {
    return fetch(`http://localhost:8088/dives/${id}`)
        .then(res => res.json())
}
export const getCurrentGearSet = (id) => {
    return fetch(`http://localhost:8088/gear/${id}`)
        .then(res => res.json())
}

export const deleteDive = (id) => {
    return fetch(`http://localhost:8088/dives/${id}`, {
        method: "DELETE"
    })
}
export const deleteGear = (id) => {
    return fetch(`http://localhost:8088/gear/${id}`, {
        method: "DELETE"
    })
}

export const GetDiveStats = () => {
    const [deepest, setDeep] = useState([])
    const [longest, setLongest] = useState([])
    const [mostRecent, setRecent] = useState([])
    const diveStats = {
        mostRecent: mostRecent[0]?.date,
        deepest: deepest[0]?.depth,
        longest: longest[0]?.time
    }
    useEffect(() => {
        const user = localStorage.getItem('si_user')
        fetch(`http://localhost:8088/dives?&userId=${user}&_sort=date&_order=desc`)
            .then(res => res.json())
            .then((data) => setRecent(data))
    }, []
    )
    useEffect(() => {
        const user = localStorage.getItem('si_user')
        fetch(`http://localhost:8088/dives?&userId=${user}&_sort=depth&_order=desc`)
            .then(res => res.json())
            .then((data) => setDeep(data))
    }, []
    )
    useEffect(() => {
        const user = localStorage.getItem('si_user')
        fetch(`http://localhost:8088/dives?&userId=${user}&_sort=time&_order=desc`)
            .then(res => res.json())
            .then((data) => setLongest(data))
    }, []
    )

    return diveStats
}