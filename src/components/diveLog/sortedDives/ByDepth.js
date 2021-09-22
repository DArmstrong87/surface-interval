import React, { useEffect, useState } from "react"
import { getDivesByDepth } from "../../application/ApiManager"

export const ByDepth = ({ order, toggleState }) => {
    const [dives, setDives] = useState([])


    useEffect(
        () => {
            getDivesByDepth(order)
                .then(dives => {
                    setDives(dives)
                })
        },
        [order]
    )

    return (
        <>
            {toggleState.depth !== true ? '' :
                <table className="sortedDiveLog">
                    <thead>
                        <td>Depth</td>
                        <td>Dive Site</td>
                        <td>Location</td>
                        <td>Dive</td>
                        <td>Time</td>
                        <td>Fresh/Salt</td>
                        <td>Specialties</td>
                    </thead>
                    <tbody>
                    {dives.map(
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
                            const specialties = foundSpecialties()
                            return <tr>
                                <td>{dive.depth}</td>
                                <td>{dive.diveSite}</td>
                                <td>{dive.location}</td>
                                <td>{dive.id}</td>
                                <td>{dive.time}</td>
                                <td>{dive.freshOrSalt}</td>
                                <td>{specialties}</td>
                            </tr>
                        }
                    )}
                    </tbody>
                </table>
            }
        </>
    )
}