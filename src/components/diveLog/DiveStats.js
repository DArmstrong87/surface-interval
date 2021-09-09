import { useEffect, useState } from "react/cjs/react.development";
import { GetDiveStats, getMyDives } from "../application/ApiManager";
import "./DiveStats.css"

export const DiveStats = () => {
    const [dives, setDives] = useState([])
    const diveStats = GetDiveStats()
    useEffect(
        () => {
            getMyDives()
                .then(dives => {
                    setDives(dives)
                })

        },
        []
    )
    console.log(diveStats.deepest)
    return (<>
        <section>
            <ul className="diveStats">
                <li>Total Dives: {dives.length}</li>
                <li>Most Recent Dive: {diveStats.mostRecent}</li>
                <li>Deepest Dive: {diveStats.deepest} ft</li>
                <li>Longest Dive: {diveStats.longest} min</li>
            </ul>
        </section>
    </>)
}