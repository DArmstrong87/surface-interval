import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { deleteDive, getMyDives } from "../application/ApiManager"
import { SortedDiveLists } from "./sortedDives/SortedDiveLists"

export const DiveList = () => {
    const [dives, setDives] = useState([])
    
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
        <SortedDiveLists />
        
        <article className='diveLogMain' key='article2'>
            {dives.map(
                (dive, index) => {
                    const findSpecialties = () => {
                        const array = [dive.isAltitude, dive.isDeep, dive.isDrift, dive.isDry, dive.isFFM, dive.isNav, dive.isN32, dive.isN36, dive.isRebreather, dive.isSearch, dive.isSidemount, dive.isWreck]
                        if (array.some(x => x === true)) { return true }
                    }

                    return <section className='diveLogEntry' key={`section--${dive.id}`}><div>
                        <h2 className='diveNumber'>Dive {index + 1}</h2>
                        <h6 className='diveDate'>{dive.date}</h6>
                        <ul className='diveList'>
                            <li><b>Location:</b> {dive.location}</li>
                            <li><b>Dive Site:</b> {dive.diveSite}</li>
                            <li className={dive.depth > 60 ? 'deep' : ''}><b>Depth:</b> {dive.depth} feet</li>
                            <li><b>Time:</b> {dive.time} min</li>
                            <li><b>Comments:</b> {dive.comments} </li>
                        </ul>

                        <h3 className='diveNumber'>Dive & Water Conditions</h3>
                        <ul className='diveList'>
                            <li className={dive.freshOrSalt === "Fresh" ? 'fresh' : 'salt'}><b>{dive.freshOrSalt} Water</b></li>
                            {dive.isBoat ? <li><b>Boat</b></li> : ''}
                            {dive.isCurrent ? <li><b>Current/Drift</b></li> : ''}
                            {dive.isShore ? <li><b>Shore</b></li> : ''}
                            {dive.isSurge ? <li><b>Surge</b></li> : ''}
                            {dive.isWaves ? <li><b>Waves</b></li> : ''}
                            {dive.waterTemp ? <li><b>Water Temp:</b> {dive.waterTemp} °F</li> : ''}
                        </ul>

                        {findSpecialties() === true ? <h3 className="diveNumber">Specialties</h3> : ''}
                        <div className="loggedSpecialties">
                            {dive.isAltitude ? <b>⛰️Altitude</b> : ''}
                            {dive.isDeep ? <b>⬇️Deep</b> : ''}
                            {dive.isDrift ? <b>🌫️Drift</b> : ''}
                            {dive.isDry ? <b>👨‍🚀Dry</b> : ''}
                            {dive.isFFM ? <b>🤿Full Face Mask</b> : ''}
                            {dive.isNav ? <b>🧭Navigation</b> : ''}
                            {dive.isNight ? <b>🌒Night</b> : ''}
                            {dive.isN32 ? <b>🟢EANX32</b> : ''}
                            {dive.isN36 ? <b>🟡EANX36</b> : ''}
                            {dive.isRebreather ? <b>🤖Rebreather</b> : ''}
                            {dive.isSearch ? <b>🔍Search and Recovery</b> : ''}
                            {dive.isSidemount ? <b>🚀Sidemount</b> : ''}
                            {dive.isWreck ? <b>⚓Wreck</b> : ''}
                        </div>
                    </div>

                        <div className='edit-delete'>
                            <Link to={`/dives/edit/${dive.id}`}>Edit</Link>
                            <Link to="#" onClick={() => { deleteDive(dive.id, setDives) }}>
                                Delete
                            </Link>
                        </div>
                    </section>
                }
            )}
        </article>
    </>)
}