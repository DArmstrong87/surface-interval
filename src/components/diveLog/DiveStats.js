import { useEffect, useState } from "react/cjs/react.development";
import { getCurrentUser, GetDiveStats, getMyDives } from "../application/ApiManager";
import "./DiveStats.css"

export const DiveStats = () => {
    const [dives, setDives] = useState([])
    const diveStats = GetDiveStats()
    const [user, setUser] = useState([{}])

    useEffect(() =>
        getCurrentUser()
            .then((data) => setUser(data[0])
            ), []
    )
    useEffect(
        () => {
            getMyDives()
                .then(dives => {
                    setDives(dives)
                })
        },
        []
    )

    return (<>
        <section>
            {window.location.pathname === "/profile" ?
                <ul className="diveStats">
                    <li>{user.name}</li>
                    <li>Total Dives: {dives.length}</li>
                    <li>Most Recent Dive: {diveStats.mostRecent}</li>
                    <li>Deepest Dive: {diveStats.deepest} ft</li>
                    <li>Longest Dive: {diveStats.longest} min</li>
                </ul>
                :
                <ul className="diveStats">
                    <li>Total Dives: {dives.length}</li>
                    <li>Most Recent Dive: {diveStats.mostRecent}</li>
                    <li>Deepest Dive: {diveStats.deepest} ft</li>
                    <li>Longest Dive: {diveStats.longest} min</li>
                </ul>
            }
        </section>
    </>)
}