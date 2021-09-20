import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getMyDives, postDive } from "../application/ApiManager";
import { Specialties } from "./Specialties";
import './LogNewDive.css'
import { Conditions } from "./Conditions";

export const LogNewDive = () => {
    const [dives, setDives] = useState([])
    const [diveCopy, setDive] = useState({
        userId: parseInt(localStorage.getItem('si_user')),
        date: '',
        location: '',
        diveSite: '',
        freshOrSalt: '',
        depth: 0,
        time: 0,
        comments: '',
        isAltitude: false,
        isCave: false,
        isDeep: false,
        isDrift: false,
        isDry: false,
        isFFM: false,
        isNav: false,
        isNight: false,
        isN32: false,
        isN36: false,
        isRebreather: false,
        isSearch: false,
        isSidemount: false,
        isWreck: false,
        isBoat: false,
        isCurrent: false,
        isShore: false,
        isSurge: false,
        isWaves: false,
        waterTemp: 0,
    })
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
            comments: diveCopy.comments,
            isAltitude: diveCopy.isAltitude,
            isCave: diveCopy.isCave,
            isDeep: diveCopy.isDeep,
            isDrift: diveCopy.isDrift,
            isDry: diveCopy.isDry,
            isFFM: diveCopy.isFFM,
            isNav: diveCopy.isNav,
            isNight: diveCopy.isNight,
            isN32: diveCopy.isN32,
            isN36: diveCopy.isN36,
            isRebreather: diveCopy.isRebreather,
            isSearch: diveCopy.isSearch,
            isSidemount: diveCopy.isSidemount,
            isWreck: diveCopy.isWreck,
            isBoat: diveCopy.isBoat,
            isCurrent: diveCopy.isCurrent,
            isShore: diveCopy.isShore,
            isSurge: diveCopy.isSurge,
            isWaves: diveCopy.isWaves,
            waterTemp: diveCopy.waterTemp,
        }
        postDive(newDive).then(
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
                <div className="fresh-salt-radios">
                    <input type="radio" value="Fresh"
                        checked={diveCopy.freshOrSalt === 'Fresh' ? true : false} onChange={(event) => {
                            const copy = { ...diveCopy }
                            copy.freshOrSalt = event.target.value
                            setDive(copy)
                        }} />
                    <label>Fresh</label>
                    <input type="radio" value="Salt" checked={diveCopy.freshOrSalt === 'Salt' ? true : false} onChange={(event) => {
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