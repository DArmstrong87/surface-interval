import { useEffect, useState } from "react"
import { GetDiveStats, getMyDives } from "../application/ApiManager"
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

    return (<>
        <section className="diveStats-section">
            <table className="diveStatsTable">
                <thead className="diveStatsHeading">
                    <tr>
                        <td colSpan='2'>Dive Stats</td>
                    </tr>
                </thead>
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