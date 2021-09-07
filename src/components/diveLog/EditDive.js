import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import { getCurrentDive } from "../application/ApiManager";

export const EditDive = () => {
    const history = useHistory()
    const { diveId } = useParams()
    // const [currentDive, setCurrentDive] = useState({})


    const [currentDive, setDive] = useState({
        userId: parseInt(localStorage.getItem('si_user')),
        date: '',
        location: ``,
        diveSite: '',
        freshOrSalt: '',
        depth: 0,
        time: 0,
        comments: ''
    })

    useEffect(
        () => {
            getCurrentDive(diveId)
                .then(currentDive => {
                    setDive(currentDive)
                })
        },
        [diveId]
    )
    console.log(currentDive)
    const saveDive = (event) => {
        event.preventDefault()
        const updateDive = {
            userId: currentDive.userId,
            date: currentDive.date,
            location: currentDive.location,
            diveSite: currentDive.diveSite,
            freshOrSalt: currentDive.freshOrSalt,
            depth: currentDive.depth,
            time: currentDive.time,
            comments: currentDive.comments
        }

        const fetchOption = {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updateDive)
        }

        return fetch(`http://localhost:8088/dives/${diveId}`, fetchOption)
            .then(
                () => {
                    history.push("/divelog")
                }
            )
    }

    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Edit Dive</h2>
            </section>
        </article>

        <article className='diveFormContainer'>
            <section className='diveForm'>
                <h2 className='diveLogHeading'>Dive {currentDive.id}</h2>
                <fieldset>
                    <label for="date">Date </label>
                    <input type="date" value={currentDive.date} className='date' onChange={(event) => {
                        const copy = { ...currentDive }
                        copy.date = event.target.value
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="location">Location</label>
                    <input type="location" value={currentDive.location} placeholder={currentDive.location} onChange={(event) => {
                        const copy = { ...currentDive }
                        copy.location = event.target.value
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="diveSite">Dive Site</label>
                    <input type="diveSite" placeholder={currentDive.diveSite} onChange={(event) => {
                        const copy = { ...currentDive }
                        copy.diveSite = event.target.value
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset className="fresh-salt-radios">
                    <input type="radio" value="Fresh"
                        checked={currentDive.freshOrSalt === 'Fresh' ? true : false} onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.freshOrSalt = event.target.value
                            setDive(copy)
                        }} />Fresh
                    <input type="radio" value="Salt" checked={currentDive.freshOrSalt === 'Salt' ? true : false} onChange={(event) => {
                        const copy = { ...currentDive }
                        copy.freshOrSalt = event.target.value
                        setDive(copy)
                    }} />Salt
                </fieldset>
                <fieldset>
                    <label for="depth">Depth</label>
                    <input type="number" placeholder={currentDive.depth} onChange={(event) => {
                        const copy = { ...currentDive }
                        copy.depth = parseInt(event.target.value)
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="time">Time</label>
                    <input type="number" placeholder={currentDive.time} onChange={(event) => {
                        const copy = { ...currentDive }
                        copy.time = parseInt(event.target.value)
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <label for="comments">Comments</label>
                    <textarea type="comments" placeholder={currentDive.comments} onChange={(event) => {
                        const copy = { ...currentDive }
                        copy.comments = event.target.value
                        setDive(copy)
                    }} />
                </fieldset>
                <fieldset>
                    <button type="submit" onClick={saveDive}>
                        Save Changes
                    </button>
                </fieldset>
            </section>
        </article>
    </>)
}
