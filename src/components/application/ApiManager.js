export const getMyDives = () => {
    const user = localStorage.getItem('si_user')
    return fetch(`http://localhost:8088/dives?&userId=${user}`)
        .then(res => res.json())
}