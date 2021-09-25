import React, { useEffect, useState } from "react"
import { getDivesByDate, getDivesByParam, getMyDives } from "../../application/ApiManager"
import { AllDives } from "./AllDives"
import { ByDepth } from "./ByDepth"
import { ByDiveSite } from "./ByDiveSite"
import { ByLocation } from "./ByLocation"
import { ByTime } from "./ByTime"
import "./SortedDives.css"

export const SortedDiveLists = () => {
    const [dives, setDives] = useState([])
    const [divesByDate, setDivesByDate] = useState([])
    const [toggleState, setToggle] = useState({ all: true })
    const [order, setOrder] = useState('')
    const [dateOrder, setDateOrder] = useState('asc')
    
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
        [dives.length]
    )
    useEffect(
        () => {
            getDivesByDate(dateOrder)
                .then(dives => {
                    setDivesByDate(dives)
                })
        },
        [dives.length, dateOrder]
    )

    useEffect(
        () => {
            getDivesByParam(obj)
                .then(dives => {
                    setDivesByParam(dives)
                })
        },
        [dives.length, obj]
    )

    return (<>
        <div className="all">
            <select className="sortDiveSelect"
                defaultValue="all"
                onChange={(event) => {
                    setDateOrder(event.target.value);
                    setToggle({ all: true })
                }}>
                <option
                    selected={!toggleState.all}
                    value='all' style={{ color: 'gray' }}>All
                </option>
                <option key={'asc'} value={'asc'}>Asc 👍</option>
                <option key={'desc'} value={'desc'}>Desc 👎</option>
                )
            </select>
        </div>
        <div className="sort_selects">
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
                            {site}
                        </option>
                    }
                )}
                )
            </select>

            <select className="sortDiveSelect"
                selected={!toggleState.depth ? false : true}
                defaultValue={null}
                onChange={(event) => {
                    setOrder(event.target.value);
                    setToggle({ depth: true })
                    setDateOrder('asc')
                }}>
                <option value='depth'
                    selected={!toggleState.depth}
                    style={{ color: 'gray' }}>
                    Depth
                </option>
                <option key={'asc'} value={'asc'}>Asc 👍</option>
                <option key={'desc'} value={'desc'}>Desc 👎</option>
            </select>

            <select className="sortDiveSelect"
                defaultValue="time"
                onChange={(event) => {
                    setOrder(event.target.value);
                    setToggle({ time: true })
                    setDateOrder('asc')
                }}>
                <option value='time'
                    selected={!toggleState.time}
                    style={{ color: 'gray' }}>
                    Time
                </option>
                <option key={'asc'} value={'asc'}>Asc 👍</option>
                <option key={'desc'} value={'desc'}>Desc 👎</option>
            </select>
        </div>

        <section className="sortedDivesContainer">
            <AllDives dives={dives} divesByDate={divesByDate} setDives={setDives} toggleState={toggleState} order={order} divesByParam={divesByParam}/>
            {/* <ByLocation setDives={setDives} divesByDate={divesByDate} divesByParam={divesByParam} toggleState={toggleState} />
            <ByDiveSite setDives={setDives} divesByDate={divesByDate} divesByParam={divesByParam} toggleState={toggleState} />
            <ByDepth order={order} divesByDate={divesByDate} toggleState={toggleState} />
            <ByTime order={order} divesByDate={divesByDate} toggleState={toggleState} /> */}
        </section>
    </>
    )
}