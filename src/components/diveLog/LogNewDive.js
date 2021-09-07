import React, { useEffect, useState } from "react";
import { getMyDives } from "../application/ApiManager";
import './LogNewDive.css'

export const LogNewDive = () => {
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

    const currentDive = dives.length + 1

    const diveCopy = {
        userId: localStorage.getItem('si_user'),
        date: '',
        location: '',
        diveSite: '',
        freshOrSalt: '',
        depth: 0,
        time: 0
    }

    

    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Log Dive</h2>
            </section>
        </article>

        <article className='diveFormContainer'>
            <section className='diveForm'>
                <h2 className='diveLogHeading'>Dive {currentDive}</h2>
                <fieldset>
                    <label for="date">Date </label>
                    <input type="date" className='date' />
                </fieldset>
                <fieldset>
                    <label for="location">Location</label>
                    <input type="location" placeholder="City or Country" />
                </fieldset>
                <fieldset>
                    <label for="location">Dive Site</label>
                    <input type="location" placeholder="USS Kittiwake" />
                </fieldset>
                <fieldset className="fresh-salt-radios">
                    <input type="radio" value="Fresh" />Fresh
                    <input type="radio" value="Salt" />Salt
                </fieldset>
                <fieldset>
                    <label for="depth">Depth</label>
                    <input type="number" />
                </fieldset>
                <fieldset>
                    <label for="time">Time</label>
                    <input type="number" />
                </fieldset>
                <fieldset>
                    <button type="submit">
                        Submit
                    </button>
                </fieldset>
            </section>
        </article>
    </>)
}