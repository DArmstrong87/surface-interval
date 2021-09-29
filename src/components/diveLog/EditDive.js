import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router";
import { getCurrentDive, saveDive } from "../application/ApiManager";
import { EditConditions } from "./EditConditions";
import { EditSpecialties } from "./EditSpecialties";

export const EditDive = () => {
    const history = useHistory()
    const { diveId } = useParams()
    const [currentDive, setDive] = useState({
        userId: parseInt(localStorage.getItem('si_user'))
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

    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Edit Dive</h2>
            </section>
        </article>

        <article className='diveFormContainer'>
            <section className='diveForm'>
                <h2 className='diveNumber'>Dive {currentDive.id}</h2>
                <fieldset>
                    <label htmlFor="date">Date </label>
                    <input type="date" value={currentDive.date} className='date'
                        onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.date = event.target.value
                            setDive(copy)
                        }} />
                </fieldset>
                <fieldset>
                    <label htmlFor="location">Location</label>
                    <input type="location" value={currentDive.location}
                        onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.location = event.target.value
                            setDive(copy)
                        }} />
                </fieldset>
                <fieldset>
                    <label htmlFor="diveSite">Dive Site</label>
                    <input type="diveSite" value={currentDive.diveSite}
                        onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.diveSite = event.target.value
                            setDive(copy)
                        }} />
                </fieldset>
                <div className="fresh-salt-radios">
                    <input type="radio" value="Fresh"
                        checked={currentDive.freshOrSalt === 'Fresh' ? true : false}
                        onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.freshOrSalt = event.target.value
                            setDive(copy)
                        }} />
                    <label>Fresh</label>
                    <input type="radio" value="Salt"
                        checked={currentDive.freshOrSalt === 'Salt' ? true : false}
                        onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.freshOrSalt = event.target.value
                            setDive(copy)
                        }} /><label>Salt</label>
                </div>
                <fieldset>
                    <label htmlFor="depth">Depth</label>
                    <input type="number" value={currentDive.depth}
                        onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.depth = parseInt(event.target.value)
                            setDive(copy)
                        }} />
                </fieldset>
                <fieldset>
                    <label htmlFor="time">Time</label>
                    <input type="number" value={currentDive.time}
                        onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.time = parseInt(event.target.value)
                            setDive(copy)
                        }} />
                </fieldset>
                <fieldset>
                    <label htmlFor="comments">Comments</label>
                    <textarea type="comments" value={currentDive.comments}
                        className="comments-box" rows="4"
                        onChange={(event) => {
                            const copy = { ...currentDive }
                            copy.comments = event.target.value
                            setDive(copy)
                        }} />
                </fieldset>

                <EditConditions currentDive={currentDive} setDive={setDive} />
                <EditSpecialties currentDive={currentDive} setDive={setDive} />

                <fieldset className="submit-cancel-buttons">
                    <button className="submitButton" type="submit"
                        onClick={(event) => saveDive(event, currentDive, diveId)
                            .then(history.push("/divelog"))
                        }>
                        Save Changes
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