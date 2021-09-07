import React, { useEffect, useState } from "react"
import { getMyDives } from "../application/ApiManager"

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
        <article className='diveLogMain' key='article2'>
            {dives.map(
                (dive, index) => {
                    return <section className='diveLogEntry' key={`section--${dive.id}`}><div>
                        <h2 className='diveNumber'>Dive {index + 1}</h2>
                        <ul className='diveList'>
                            <li className={dive.saltOrFresh === "Fresh" ? 'fresh' : 'salt'}><b>{dive.saltOrFresh} Water</b></li>
                            <li><b>Location:</b> {dive.location}</li>
                            <li><b>Dive Site:</b> {dive.diveSite}</li>
                            <li className={dive.depth > 60 ? 'deep' : ''}><b>Depth:</b> {dive.depth} feet</li>
                            <li><b>Time:</b> {dive.time} min</li>
                            <li><b>Comments:</b> {dive.comments} </li>
                        </ul>
                    </div>
                        <div className='edit-delete'>
                            <a href="/">Edit</a>
                            <a href="/">Delete</a>
                        </div>
                    </section>
                }
            )}
        </article>
    </>)
}