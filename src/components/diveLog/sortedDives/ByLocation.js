import React from "react"
import { Link } from "react-router-dom"
import { deleteDive } from "../../application/ApiManager"

export const ByLocation = ({ divesByParam, toggleState, setDives }) => {
    return (
        <>
            {toggleState.location !== true ? '' :
                <table className="sortedDiveLog">
                    <thead>
                        <td>Location</td>
                        <td>Dive Site</td>
                        <td>Dive #</td>
                        <td>Depth</td>
                        <td>Time</td>
                        <td>Fresh/Salt</td>
                        <td>Specialties</td>
                        <td>Edit/Del</td>
                    </thead>
                    <tbody>
                        {divesByParam.map(
                            dive => {
                                const foundSpecialties = () => {
                                    const specialties = []
                                    if (dive.isAltitude) { specialties.push('Altitude') }
                                    if (dive.isCave) { specialties.push('Altitude') }
                                    if (dive.isDeep) { specialties.push('Deep') }
                                    if (dive.isDrift) { specialties.push('Drift') }
                                    if (dive.isFFM) { specialties.push('FFM') }
                                    if (dive.isNav) { specialties.push('Nav') }
                                    if (dive.isNight) { specialties.push('Night') }
                                    if (dive.isN32) { specialties.push('EAN32') }
                                    if (dive.isN36) { specialties.push('EAN36') }
                                    if (dive.isRebreather) { specialties.push('Rebreather') }
                                    if (dive.isSearch) { specialties.push('Search/Recovery') }
                                    if (dive.isSidemount) { specialties.push('Sidemount') }
                                    if (dive.isWreck) { specialties.push('Wreck') }
                                    return specialties.join(' | ')
                                }
                                return <tr>
                                    <td>{dive.location}</td>
                                    <td>{dive.diveSite}</td>
                                    <td>{dive.id}</td>
                                    <td>{dive.depth}</td>
                                    <td>{dive.time}</td>
                                    <td>{dive.freshOrSalt}</td>
                                    <td className="specialtiesTD">{foundSpecialties()}</td>
                                    <td className="small-icons">
                                        <Link to={`/dives/edit/${dive.id}`}>📝</Link>
                                        <Link to="#" onClick={() => { deleteDive(dive.id, setDives) }}>🗑️</Link>
                                    </td>
                                </tr>
                            }
                        )}
                    </tbody>
                </table>
            }
        </>
    )
}