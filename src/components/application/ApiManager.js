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