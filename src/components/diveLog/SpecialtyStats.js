import React from "react";
import { GetDiveStats } from "../application/ApiManager"
import "./DiveStats.css"

export const SpecialtyStats = ({ setSpecialty }) => {
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
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isAltitude')
                            }}>Altitude</button></td>
                        <td>{diveStats.altitude}</td>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isNight')
                            }}>Night</button></td>
                        <td>{diveStats.night}</td>
                    </tr>
                    <tr>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isCave')
                            }}>Cave</button></td>
                        <td>{diveStats.cave}</td>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isN32')
                            }}>EANx32</button></td>
                        <td>{diveStats.n32}</td>
                    </tr>
                    <tr>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isDeep')
                            }}>Deep</button></td>
                        <td>{diveStats.deep}</td>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isN36')
                            }}>EANx36</button></td>
                        <td>{diveStats.n36}</td>
                    </tr>
                    <tr>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isDrift')
                            }}>Drift</button></td>
                        <td>{diveStats.drift}</td>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isRebreather')
                            }}>Rebreather</button></td>
                        <td>{diveStats.rebreather}</td>
                    </tr>
                    <tr>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isDry')
                            }}>Drysuit</button></td>
                        <td>{diveStats.dry}</td>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isSearch')
                            }}>Search & Recovery</button></td>
                        <td>{diveStats.search}</td>
                    </tr>
                    <tr>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isFFM')
                            }}>Full Face Mask</button></td>
                        <td>{diveStats.ffm}</td>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isSidemount')
                            }}>Sidemount</button></td>
                        <td>{diveStats.sidemount}</td>
                    </tr>
                    <tr>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isNav')
                            }}>Navigation</button></td>
                        <td>{diveStats.nav}</td>
                        <td><button className="specialtyButton"
                            onClick={() => {
                                setSpecialty('isWreck')
                            }}>Wreck</button></td>
                        <td>{diveStats.wreck}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </>)
}