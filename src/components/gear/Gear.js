import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getMyGear } from "../application/ApiManager"
import "./Gear.css"
import { GearList } from "./GearList"

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
                    .then(gear => setGear(gear))
            }, []
            )
    }

    return (<>
        <article className='gearArticle'>
            <h2 className='gearTitle'>Gear</h2>
            <section className="quip-button">
                <h2 className="quip">Proper dive planning includes ensuring you have all the gear you need for the dive conditions.</h2>
                <Link to="/addgear"><button className="logDive">
                    Create Gear Set<br />
                    🤿
                </button></Link>
            </section>
        </article>

        <GearList gear={gear} deleteGear={deleteGear} />

    </>)
}