import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getCurrentGearSet } from "../application/ApiManager";
import "../diveLog/LogNewDive.css";
import "./CreateGear.css"
export const Gearset = () => {
    const history = useHistory()
    const { gearId } = useParams()

    const [gear, setGear] = useState({})

    useEffect(
        () => {
            getCurrentGearSet(gearId)
                .then(gear => {
                    setGear(gear)
                })
        },
        [gearId]
    )

    const deleteGear = (id) => {
        fetch(`http://localhost:8088/gear/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                history.push("/gear")
            }
            )
    }

    return (
        <>
            <article className='gearArticle'>
                <h2 className='gearTitle'>Gearset</h2>
                <div className="back">
                    <Link className="diveNumber" to="/gear">🔙</Link>
                </div>
            </article>
            <article className='diveLogMain' key='article2'>
                <section className='diveLogEntry' key={`section--${gear.id}`}><div>
                    <h2 className='diveNumber'>{gear.name}</h2>
                    <h3 className='gearHeading'>Essential Gear</h3>
                    <ul className='diveList'>
                        {gear.bcd !== '' ?
                            <li><b>BCD:</b> {gear.bcd}</li> : ''}
                        {gear.regulator !== '' ?
                            <li><b>Regulator:</b> {gear.regulator}</li> : ''}
                        {gear.octopus !== '' ?
                            <li><b>Octopus:</b> {gear.octopus}</li> : ''}
                        {gear.mask !== '' ?
                            <li><b>Mask:</b> {gear.mask}</li> : ''}
                        {gear.fins !== '' ?
                            <li><b>Fins:</b> {gear.fins}</li> : ''}
                        {gear.boots !== '' ?
                            <li><b>Boots:</b> {gear.boots}</li> : ''}
                        {gear.console !== '' ?
                            <li><b>Console:</b> {gear.console}</li> : ''}
                        {gear.computer !== '' ?
                            <li><b>Computer:</b> {gear.computer}</li> : ''}
                        {gear.exposureSuit !== '' ?
                            <li><b>Exposure Suit:</b> {gear.exposureSuit}</li> : ''}
                        {gear.weight !== '' ?
                            <li><b>Weight:</b> {gear.weight}</li> : ''}
                        {gear.tank !== '' ?
                            <li><b>Tank:</b> {gear.tank}</li> : ''}
                    </ul>
                </div>
                    <div className='edit-delete'>
                        <Link to={`/gear/edit/${gear.id}`}>Edit</Link>
                        <Link to="#" onClick={() => { deleteGear(gear.id) }}>Delete</Link>
                    </div>
                </section>
            </article>
        </>
    )
}