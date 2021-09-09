import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getMyGear } from "../application/ApiManager"
import "./Gear.css"

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

    const deleteGear = (id) => {
        fetch(`http://localhost:8088/gear/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                getMyGear()
                    .then(gear => {
                        setGear(gear)
                    })
            }, []
            )
    }

    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Gear</h2>
                <Link to="/addgear"><button className="logDive">
                    Create Gear Set<br />
                    🤿
                </button></Link>
            </section>
        </article>

        <article className='diveLogMain' key='article2'>
            {gear.map(
                (gearset) => {
                    return <section className='diveLogEntry' key={`section--${gearset.id}`}><div>
                        <h2 className='diveNumber'>{gearset.name}</h2>
                        <h3 className='gearHeading'>Essential Gear</h3>
                        <ul className='diveList'>
                            {gearset.bcd !== '' ?
                                <li><b>BCD:</b> {gearset.bcd}</li> : ''}
                            {gearset.regulator !== '' ?
                                <li><b>Regulator:</b> {gearset.regulator}</li> : ''}
                            {gearset.octopus !== '' ?
                                <li><b>Octopus:</b> {gearset.octopus}</li> : ''}
                            {gearset.mask !== '' ?
                                <li><b>Mask:</b> {gearset.mask}</li> : ''}
                            {gearset.fins !== '' ?
                                <li><b>Fins:</b> {gearset.fins}</li> : ''}
                            {gearset.boots !== '' ?
                                <li><b>Boots:</b> {gearset.boots}</li> : ''}
                            {gearset.console !== '' ?
                                <li><b>Console:</b> {gearset.console}</li> : ''}
                            {gearset.computer !== '' ?
                                <li><b>Computer:</b> {gearset.computer}</li> : ''}
                            {gearset.exposureSuit !== '' ?
                                <li><b>Exposure Suit:</b> {gearset.exposureSuit}</li> : ''}
                            {gearset.weight !== '' ?
                                <li><b>Weight:</b> {gearset.weight}</li> : ''}
                            {gearset.tank !== '' ?
                                <li><b>Tank:</b> {gearset.tank}</li> : ''}
                        </ul>
                    </div>
                        <div className='edit-delete'>
                            <a href={`/gear/edit/${gearset.id}`}>Edit</a>
                            <a href="##" onClick={() => {
                                deleteGear(gearset.id)
                            }}>Delete</a>
                        </div>
                    </section>
                }
            )}
        </article>
    </>)
}