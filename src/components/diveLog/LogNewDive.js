import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getMyDives } from "../application/ApiManager";
import './LogNewDive.css'

export const LogNewDive = () => {
    const [dives, setDives] = useState([])
    const history = useHistory()

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

    const [diveCopy, setDive] = useState({
        userId: localStorage.getItem('si_user'),
        date: '',
        location: '',
        diveSite: '',
        freshOrSalt: '',
        depth: 0,
        time: 0,
        comments: ''
    })

    const submitDive = (event) => {
        event.preventDefault()
        const newDive = {
            userId: diveCopy.userId,
            date: diveCopy.date,
            location: diveCopy.location,
            diveSite: diveCopy.diveSite,
            freshOrSalt: diveCopy.freshOrSalt,
            depth: diveCopy.depth,
            time: diveCopy.time,
            comments: diveCopy.comments
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newDive)
        }

        return fetch("http://localhost:8088/dives", fetchOption)
            .then(
                () => {
                    history.push("/divelog")
                }
            )
    }



    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Log Dive</h2>
            </section>
        </article>

        <article className='diveFormContainer'>
            <section className='diveForm'>
                <h2 className='diveNumber'>Dive {currentDive}</h2>
                <fieldset>
                    <label for="date">Date </label>
                    <input type="date" className='date' onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.date = event.target.value
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="location">Location</label>
                    <input type="location" placeholder={"City or Country"} onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.location = event.target.value
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="dive-Site">Dive Site</label>
                    <input type="diveSite" placeholder="USS Kittiwake" onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.diveSite = event.target.value
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset className="fresh-salt-radios">
                    <input type="radio" value="Fresh"
                        checked={diveCopy.freshOrSalt === 'Fresh' ? true : false} onChange={(event) => {
                            const copy = { ...diveCopy }
                            copy.freshOrSalt = event.target.value
                            setDive(copy)
                        }} />Fresh
                    <input type="radio" value="Salt" checked={diveCopy.freshOrSalt === 'Salt' ? true : false} onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.freshOrSalt = event.target.value
                        setDive(copy)
                    }} />Salt
                </fieldset>
                <fieldset>
                    <label for="depth">Depth</label>
                    <input type="number" onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.depth = parseInt(event.target.value)
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="time">Time</label>
                    <input type="number" onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.time = parseInt(event.target.value)
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="comments">Comments</label>
                    <textarea className="comments-box" rows="4" type="comments" onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.comments = event.target.value
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset className="submit-cancel-buttons">
                    <button className="submitButton" type="submit" onClick={submitDive}>
                        Submit
                    </button>
                    <button className="cancelButton" onClick={() => {
                        history.push('/divelog')
                    }}>
                        Cancel
                    </button>
                </fieldset>
            </section>
        </article>
    </>)
}