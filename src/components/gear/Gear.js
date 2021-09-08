import React, { useEffect, useState } from "react"
import { deleteGear, getMyGear } from "../application/ApiManager"

export const Gear = () => {
    const [gear, setGear] = useState([])

    useEffect(
        () => {
            getMyGear()
                .then(gear => {
                    setGear(gear)
                })
        },
        []
    )

    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Gear</h2>
                <button className="logDive">
                    Create Gear Set<br />
                    🤿
                </button>
            </section>
        </article>

        <article className='diveLogMain' key='article2'>
            {gear.map(
                (gearset) => {
                    return <section className='diveLogEntry' key={`section--${gear.id}`}><div>
                        <h2 className='diveNumber'>{gearset.name}</h2>
                        <ul className='diveList'>
                            <li><b>BCD:</b> {gearset.bcd}</li>
                            <li><b>Regulator:</b> {gearset.regulator}</li>
                        </ul>
                    </div>
                        <div className='edit-delete'>
                            <a href={`/gear/edit/${gear.id}`}>Edit</a>
                            <a href="##" onClick={() => {
                                deleteGear(gear.id)
                            }}>Delete</a>
                        </div>
                    </section>
                }
            )}
        </article>
    </>)
}