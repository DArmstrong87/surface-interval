import React, { useEffect, useState } from "react"
import { getDivesByParam, getMyDives } from "../../application/ApiManager"
import { AllDives } from "./AllDives"
import { ByDepth } from "./ByDepth"
import { ByDiveSite } from "./ByDiveSite"
import { ByLocation } from "./ByLocation"
import { ByTime } from "./ByTime"
import "./SortedDives.css"

export const SortedDiveLists = () => {
    const [dives, setDives] = useState([])
    const [toggleState, setToggle] = useState({
        location: false
    })
    const [order, setOrder] = useState('')
    const locations = dives.map((dive) => { return dive.location })
    const sites = dives.map((dive) => { return dive.diveSite })
    const uniqueLocations = [...new Set(locations)]
    const uniqueSites = [...new Set(sites)]

    // Transient state creates the parameters for the fetch call.
    const [divesByParam, setDivesByParam] = useState([])
    const [obj, setPropertyandParam] = useState({})

    useEffect(
        () => {
            getMyDives()
                .then(dives => {
                    setDives(dives)
                })
        },
        []
    )

    useEffect(
        () => {
            getDivesByParam(obj)
                .then(dives => {
                    setDivesByParam(dives)
                })
        },
        [obj]
    )

    return (<>
        <div className="all">
            <button
                onClick={() => { setToggle({ all: true }) }}>All</button>
        </div>
        <div className="sort_selects">
            <select className="sortDiveSelect"
                onChange={(event) => {
                    setPropertyandParam({ property: 'location', param: event.target.value });
                    setToggle({ location: true })
                }}>
                <option default selected={!toggleState.location}
                    style={{ color: 'gray' }}>
                    Location
                </option>
                {uniqueLocations.map(
                    location => {
                        return <option key={location} value={location}>
                            {location}
                        </option>
                    }
                )}
                )
            </select>


            <select className="sortDiveSelect"
                onChange={(event) => {
                    setPropertyandParam({ property: 'diveSite', param: event.target.value });
                    setToggle({ diveSite: true })
                }}>
                <option default selected={!toggleState.diveSite}
                    style={{ color: 'gray' }}>
                    Dive Sites
                </option>
                {uniqueSites.map(
                    site => {
                        return <option key={site} value={site}>
                            {site}
                        </option>
                    }
                )}
                )
            </select>

            <select className="sortDiveSelect"
                onChange={(event) => {
                    setOrder(event.target.value);
                    setToggle({ depth: true })
                }}>
                <option default selected={!toggleState.depth}
                    style={{ color: 'gray' }}>
                    Depth
                </option>
                <option key={'asc'} value={'asc'}>Ascending</option>
                <option key={'desc'} value={'desc'}>Descending</option>
            </select>

            <select className="sortDiveSelect"
                onChange={(event) => {
                    setOrder(event.target.value);
                    setToggle({ time: true })
                }}>
                <option default selected={!toggleState.time}
                    style={{ color: 'gray' }}>
                    Time
                </option>
                <option key={'asc'} value={'asc'}>Ascending</option>
                <option key={'desc'} value={'desc'}>Descending</option>
            </select>
        </div>

        <AllDives dives={dives} setDives={setDives} toggleState={toggleState} />
        <ByLocation setDives={setDives} divesByParam={divesByParam} toggleState={toggleState} />
        <ByDiveSite setDives={setDives} divesByParam={divesByParam} toggleState={toggleState} />
        <ByDepth order={order} toggleState={toggleState} />
        <ByTime order={order} toggleState={toggleState} />
    </>
    )
}