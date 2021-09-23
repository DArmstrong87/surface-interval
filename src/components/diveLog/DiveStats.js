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
                <table className="diveStatsTable">
                    <tbody>
                        <tr>
                            <td><b>Total Dives</b></td>
                            <td>{dives.length}</td>
                        </tr>
                        <tr>
                            <td><b>Most Recent</b></td>
                            <td>{diveStats.mostRecent}</td>
                        </tr>
                        <tr>
                            <td><b>Deepest</b></td>
                            <td>{diveStats.deepest} ft</td>
                        </tr>
                        <tr>
                            <td><b>Longest</b></td>
                            <td>{diveStats.longest} min</td>
                        </tr>
                        <tr>
                            <td><b>Avg depth</b></td>
                            <td>{diveStats.avgDepth} ft</td>
                        </tr>
                        <tr>
                            <td><b>Avg time</b></td>
                            <td>{diveStats.avgTime} min</td>
                        </tr>
                    </tbody>
                </table>
        </section>
    </>)
}