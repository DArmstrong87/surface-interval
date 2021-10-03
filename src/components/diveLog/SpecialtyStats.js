import React from "react";
import { GetDiveStats } from "../application/ApiManager"
import "./DiveStats.css"

export const SpecialtyStats = () => {
    const diveStats = GetDiveStats()

    return (<>
        <section className="diveStats-section">
            <table className="diveStatsTable">
                <thead colSpan='4' className="diveStatsHeading">
                    <tr>
                        <td colSpan='4'>Specialty Dives</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Altitude</b></td>
                        <td>{diveStats.altitude}</td>
                        <td><b>Night</b></td>
                        <td>{diveStats.night}</td>
                    </tr>
                    <tr>
                        <td><b>Cave</b></td>
                        <td>{diveStats.cave}</td>
                        <td><b>EANx32</b></td>
                        <td>{diveStats.n32}</td>
                    </tr>
                    <tr>
                        <td><b>Deep</b></td>
                        <td>{diveStats.deep}</td>
                        <td><b>EANx36</b></td>
                        <td>{diveStats.n36}</td>
                    </tr>
                    <tr>
                        <td><b>Drift</b></td>
                        <td>{diveStats.drift}</td>
                        <td><b>Rebreather</b></td>
                        <td>{diveStats.rebreather}</td>
                    </tr>
                    <tr>
                        <td><b>Drysuit</b></td>
                        <td>{diveStats.dry}</td>
                        <td><b>Search & Recovery</b></td>
                        <td>{diveStats.search}</td>
                    </tr>
                    <tr>
                        <td><b>Full Face Mask</b></td>
                        <td>{diveStats.ffm}</td>
                        <td><b>Sidemount</b></td>
                        <td>{diveStats.sidemount}</td>
                    </tr>
                    <tr>
                        <td><b>Navigation</b></td>
                        <td>{diveStats.nav}</td>
                        <td><b>Wreck</b></td>
                        <td>{diveStats.wreck}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </>)
}