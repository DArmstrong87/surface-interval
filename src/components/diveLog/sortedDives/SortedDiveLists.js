import React, { useEffect, useState } from "react"
import { getDivesByDate, getDivesByParam, deleteDive, getDivesAlphabetical, getDivesByDepth, getDivesByTime, getAllDiveImages } from "../../application/ApiManager"
import { Link } from "react-router-dom"
import "./SortedDives.css"

export const SortedDiveLists = () => {
    const [divesByDate, setDivesByDate] = useState([])
    const [images, setImages] = useState([])
    const [toggleState, setToggle] = useState({ all: true })
    const [divesByDateAsc, setDivesAsc] = useState([])
    const [divesByDepth, setDivesByDepth] = useState([])
    const [divesByTime, setDivesByTime] = useState([])
    const [divesAlphabetical, setDivesAlphabetical] = useState([])
    const [diveParams, setParams] = useState({ property: 'location', order: 'asc' })

    // Transient state creates the parameters for the fetch call.
    const [divesByParam, setDivesByParam] = useState([])
    const [obj, setPropertyandParam] = useState({})
    const [dateOrder, setDateOrder] = useState('asc')
    const [order, setOrder] = useState('')

    // Unique locations and dive sites to avoid duplicates.
    const locations = divesByDate.map((dive) => { return dive.location })
    const sites = divesByDate.map((dive) => { return dive.diveSite })
    const uniqueLocations = [...new Set(locations)].sort()
    const uniqueSites = [...new Set(sites)].sort()
    // const uniqueLocations = uniqueLocationsSet.sort()

    useEffect(
        () => {
            getDivesByDate(dateOrder)
                .then(dives => {
                    setDivesByDate(dives)
                })
        },
        [divesByDate.length, dateOrder]
    )

    useEffect(
        () => {
            getDivesByParam(obj)
                .then(dives => {
                    setDivesByParam(dives)
                })
        },
        [divesByDate.length, obj]
    )

    useEffect(
        () => {
            getDivesByDate('asc')
                .then(dives => {
                    setDivesAsc(dives)
                })
        },
        [divesByDate]
    )
    useEffect(
        () => {
            getDivesAlphabetical(diveParams)
                .then(dives => {
                    setDivesAlphabetical(dives)
                })
        },
        [divesByDate, diveParams]
    )

    useEffect(
        () => {
            getDivesByDepth(order)
                .then(dives => {
                    setDivesByDepth(dives)
                })
        },
        [order, divesByDate]
    )

    useEffect(
        () => {
            getDivesByTime(order)
                .then(dives => {
                    setDivesByTime(dives)
                })
        },
        [order, divesByDate]
    )

    useEffect(
        () => {
            getAllDiveImages()
                .then(images => setImages(images))
        }, []
    )
    const findDives = () => {
        if (toggleState.all) return divesByDate
        if (toggleState.date) return divesByDate
        if (toggleState.freshOrSalt) return divesAlphabetical
        if (toggleState.location) return divesByParam
        if (toggleState.diveSite) return divesByParam
        if (toggleState.depth) return divesByDepth
        else if (toggleState.time) return divesByTime
    }
    const dives = findDives()

    return (<>
        <div className="sort_selects">
            <button className="allButton" onClick={() => {
                setDateOrder('asc');
                setToggle({ all: true })
            }}>All</button>
        </div>

        <section className="sortedDivesContainer">

            <table className="sortedDiveLog">
                <thead>
                    <tr key={'row1'}>
                        <td>Dive</td>
                        <td>
                            <Link className="condensed-link-header" to={`#`}
                                onClick={() => {
                                    dateOrder === 'asc' ? setDateOrder('desc')
                                        : setDateOrder('asc')
                                    setToggle({ date: true });
                                }}>
                                Date {dateOrder === 'asc' && toggleState.date ? '👍'
                                    : dateOrder === 'desc' && toggleState.date ? '👎' : ''}
                            </Link>
                        </td>
                        <td>
                            <select className="sortDiveSelect" defaultValue={!toggleState.location}
                                onChange={(event) => {
                                    setPropertyandParam({ property: 'location', param: event.target.value });
                                    setDateOrder('asc')
                                    setToggle({ location: true })
                                }}>
                                <option
                                    value={!toggleState.location}
                                    selected={!toggleState.location}
                                    style={{ color: 'gray' }}>
                                    Locations
                                </option>
                                {uniqueLocations.map(
                                    location => {
                                        return <option key={location} value={location}>
                                            {location} ({locations.filter(obj => location === obj).length})
                                        </option>
                                    }
                                )}
                                )
                            </select>
                        </td>
                        <td>
                            <select className="sortDiveSelect" defaultValue="site"
                                onChange={(event) => {
                                    setPropertyandParam({ property: 'diveSite', param: event.target.value });
                                    setToggle({ diveSite: true })
                                    setDateOrder('asc')
                                }}>
                                <option value='site' selected={!toggleState.diveSite}
                                    style={{ color: 'gray' }}>
                                    Dive Sites
                                </option>
                                {uniqueSites.map(
                                    site => {
                                        return <option key={site} value={site}>
                                            {site} ({sites.filter(obj => site === obj).length})
                                        </option>
                                    }
                                )}
                                )
                            </select>
                        </td>
                        <td>
                            <Link className="condensed-link-header" to={`#`}
                                onClick={() => {
                                    order === 'asc' ? setOrder('desc') : setOrder('asc')
                                    setToggle({ depth: true });
                                }}>
                                Depth {order === 'asc' && toggleState.depth ? '👍'
                                    : order === 'desc' && toggleState.depth ? '👎' : ''}
                            </Link>
                        </td>
                        <td>
                            <Link className="condensed-link-header" to={`#`}
                                onClick={() => {
                                    order === 'asc' ? setOrder('desc') : setOrder('asc')
                                    setToggle({ time: true });
                                }}>
                                Time {order === 'asc' && toggleState.time ? '👍'
                                    : order === 'desc' && toggleState.time ? '👎' : ''}
                            </Link>
                        </td>
                        <td>
                            <Link className="condensed-link-header" to={`#`}
                                onClick={() => {
                                    const copy = { ...diveParams }
                                    copy.property = 'freshOrSalt'
                                    diveParams.order === 'asc' ? copy.order = 'desc' : copy.order = 'asc'
                                    setParams(copy)
                                    setToggle({ freshOrSalt: true });
                                }}>
                                {diveParams.order === 'asc' && toggleState.freshOrSalt ?
                                    <><u>Fresh</u>/Salt</>
                                    : diveParams.order === 'desc' && toggleState.freshOrSalt ?
                                        <>Fresh/<u>Salt</u></> : 'Fresh/Salt'}
                            </Link>
                        </td>
                        <td>Specialties</td>
                        <td>Edit/Del</td>
                    </tr>
                </thead>
                <tbody>
                    {dives.map(
                        dive => {
                            const foundDiveNum = divesByDateAsc.find(
                                diveDate => dive.id === diveDate.id
                            )
                            const diveNum = divesByDateAsc.indexOf(foundDiveNum)
                            const foundSpecialties = () => {
                                const specialties = []
                                if (dive.isAltitude) { specialties.push('Altitude') }
                                if (dive.isCave) { specialties.push('Altitude') }
                                if (dive.isDeep) { specialties.push('Deep') }
                                if (dive.isDrift) { specialties.push('Drift') }
                                if (dive.isDry) { specialties.push('Drysuit') }
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
                            const foundImages = images.find(image => image.diveId === dive.id)
                            return <tr key={dive.id}>
                                <td>
                                    <Link to={`/dives/${dive.id}`}>
                                        <div className="condensed-link">
                                            {diveNum + 1}
                                            {foundImages ? ' 📷' : ''}
                                        </div>
                                    </Link>
                                </td>
                                <td>{dive.date}</td>
                                <td>{dive.location}</td>
                                <td>{dive.diveSite}</td>
                                <td>{dive.depth}</td>
                                <td>{dive.time}</td>
                                <td>{dive.freshOrSalt}</td>
                                <td className="specialtiesTD">{specialties}</td>
                                <td className="small-icons">
                                    <Link to={`/dives/edit/${dive.id}`}>📝</Link>
                                    <Link to="#" onClick={() => { deleteDive(dive.id, setDivesByDate) }}>🗑️</Link>
                                </td>
                            </tr>
                        }
                    )}
                </tbody>
            </table>

        </section>
    </>
    )
}