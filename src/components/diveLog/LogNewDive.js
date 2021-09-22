import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getMyDives, submitDive } from "../application/ApiManager";
import { Specialties } from "./Specialties";
import './LogNewDive.css'
import { Conditions } from "./Conditions";

export const LogNewDive = () => {
    const [dives, setDives] = useState([])
    const [diveCopy, setDive] = useState({ userId: parseInt(localStorage.getItem('si_user')), })
    const history = useHistory()
    const currentDive = dives.length + 1

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
                <div className="fresh-salt-radios">
                    <input type="radio" value="Fresh"
                        checked={diveCopy.freshOrSalt === 'Fresh' ? true : false} onChange={(event) => {
                            const copy = { ...diveCopy }
                            copy.freshOrSalt = event.target.value
                            setDive(copy)
                        }} />
                    <label>Fresh</label>
                    <input type="radio" value="Salt" 
                    checked={diveCopy.freshOrSalt === 'Salt' ? true : false} 
                    onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.freshOrSalt = event.target.value
                        setDive(copy)
                    }} />
                    <label>Salt</label>
                </div>
                <fieldset>
                    <label for="depth">Depth</label>
                    <input type="number" min="15" max="140" onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.depth = parseInt(event.target.value)
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="time">Time</label>
                    <input type="number" min="0" max="205" onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.time = parseInt(event.target.value)
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="comments">Comments</label>
                    <textarea className="comments-box" rows="4" cols="29" type="comments" onChange={(event) => {
                        const copy = { ...diveCopy }
                        copy.comments = event.target.value
                        setDive(copy)
                    }} />
                </fieldset>

                <Conditions diveCopy={diveCopy} setDive={setDive} />
                <Specialties diveCopy={diveCopy} setDive={setDive} />

                <fieldset className="submit-cancel-buttons">
                    <button className="submitButton" type="submit"
                        onClick={(event) => submitDive(event, diveCopy)
                            .then(history.push("/divelog"))}>
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