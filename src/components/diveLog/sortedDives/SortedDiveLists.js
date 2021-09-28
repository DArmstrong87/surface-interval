import React, { useEffect, useState } from "react"
import { getDivesByDate, getDivesByParam } from "../../application/ApiManager"
import { AllDives } from "./AllDives"
import "./SortedDives.css"

export const SortedDiveLists = () => {
    const [divesByDate, setDivesByDate] = useState([])
    const [toggleState, setToggle] = useState({ all: true })

    // Transient state creates the parameters for the fetch call.
    const [divesByParam, setDivesByParam] = useState([])
    const [obj, setPropertyandParam] = useState({})
    const [dateOrder, setDateOrder] = useState('asc')
    const [order, setOrder] = useState('')

    // Unique locations and dive sites to avoid duplicates.
    const locations = divesByDate.map((dive) => { return dive.location })
    const sites = divesByDate.map((dive) => { return dive.diveSite })
    const uniqueLocations = [...new Set(locations)]
    const uniqueSites = [...new Set(sites)]

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

    return (<>
        <div className="sort_selects">
            <button className="allButton" onClick={() => {
                setDateOrder('asc');
                setToggle({ all: true })
            }}>All</button>
            <select className="sortDiveSelect"
                defaultValue='location'
                onChange={(event) => {
                    setPropertyandParam({ property: 'location', param: event.target.value });
                    setDateOrder('asc')
                    setToggle({ location: true })
                }}>
                <option value='location'
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

            <select className="sortDiveSelect"
                defaultValue="site"
                onChange={(event) => {
                    setPropertyandParam({ property: 'diveSite', param: event.target.value });
                    setToggle({ diveSite: true })
                    setDateOrder('asc')
                }}>
                <option value='site'
                    selected={!toggleState.diveSite}
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
        </div>

        <section className="sortedDivesContainer">
            <AllDives divesByDate={divesByDate} setDivesByDate={setDivesByDate} toggleState={toggleState} setDateOrder={setDateOrder} dateOrder={dateOrder} order={order} divesByParam={divesByParam} setToggle={setToggle} setOrder={setOrder} />
        </section>
    </>
    )
}