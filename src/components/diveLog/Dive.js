import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import { deleteSingleDive, getCurrentDive, getDiveImages, getDivesByDate } from "../application/ApiManager"
import "./Dive.css"

export const Dive = () => {
    const { diveId } = useParams()
    const [dive, setDive] = useState({})
    const [dives, setDives] = useState([])
    const [images, setDiveImages] = useState([])
    const navigate = useNavigate()

    const findSpecialties = () => {
        const array = [dive.isAltitude, dive.isDeep, dive.isDrift, dive.isDry, dive.isFFM, dive.isNav, dive.isN32, dive.isN36, dive.isRebreather, dive.isSearch, dive.isSidemount, dive.isWreck]
        if (array.some(x => x === true)) { return true }
    }
    const hasSpecialty = findSpecialties()

    useEffect(
        () => {
            getCurrentDive(diveId)
                .then(dive => {
                    setDive(dive)
                })
        }, [diveId]
    )

    useEffect(
        () => {
            getDiveImages(diveId)
                .then(images => {
                    setDiveImages(images)
                })
        }, [diveId, images]
    )

    useEffect(
        () => {
            getDivesByDate('asc')
                .then(dives => setDives(dives))
        }, []
    )

    const index = dives.indexOf(dives.find(singleDive => singleDive.id === dive.id))

    const options = { buttons: { showDownloadButton: false } }

    return (
        <><SimpleReactLightbox>
            <article className='gearArticle'>
                <div className="back">
                    <Link className="diveNumber" to="/divelog">🔙</Link>
                </div>
            </article>
            <article className='diveLogMain' key='article2'>
                <section className='diveLogEntry' key={`section--${dive.id}`}>

                    <h2 className='diveNumber'>Dive {index + 1}</h2>
                    <h6 className='diveDate'>{dive.date}</h6>
                    <ul className='diveList'>
                        <li><b>Location:</b> {dive.location}</li>
                        <li><b>Dive Site:</b> {dive.diveSite}</li>
                        <li className={dive.depth > 60 ? 'deep' : ''}><b>Depth:</b> {dive.depth} feet</li>
                        <li><b>Time:</b> {dive.time} min</li>
                        <li><b>Comments:</b> {dive.comments} </li>
                    </ul>

                    <h3 className='diveNumber'>Dive & Water Conditions</h3>
                    <ul className='diveList'>
                        <li className={dive.freshOrSalt === "Fresh" ? 'fresh' : 'salt'}><b>{dive.freshOrSalt} Water</b></li>
                        {dive.isBoat ? <li><b>Boat</b></li> : ''}
                        {dive.isCurrent ? <li><b>Current/Drift</b></li> : ''}
                        {dive.isShore ? <li><b>Shore</b></li> : ''}
                        {dive.isSurge ? <li><b>Surge</b></li> : ''}
                        {dive.isWaves ? <li><b>Waves</b></li> : ''}
                        {dive.waterTemp ? <li><b>Water Temp:</b> {dive.waterTemp} °F</li> : ''}
                    </ul>

                    {hasSpecialty ? <h3 className="diveNumber">Specialties</h3> : ''}
                    <div className="loggedSpecialties">
                        {dive.isAltitude ? <b>⛰️Altitude</b> : ''}
                        {dive.isDeep ? <b>⬇️Deep</b> : ''}
                        {dive.isDrift ? <b>🌫️Drift</b> : ''}
                        {dive.isDry ? <b>👨‍🚀Dry</b> : ''}
                        {dive.isFFM ? <b>🤿Full Face Mask</b> : ''}
                        {dive.isNav ? <b>🧭Navigation</b> : ''}
                        {dive.isNight ? <b>🌒Night</b> : ''}
                        {dive.isN32 ? <b>🟢EANX32</b> : ''}
                        {dive.isN36 ? <b>🟡EANX36</b> : ''}
                        {dive.isRebreather ? <b>🤖Rebreather</b> : ''}
                        {dive.isSearch ? <b>🔍Search and Recovery</b> : ''}
                        {dive.isSidemount ? <b>🚀Sidemount</b> : ''}
                        {dive.isWreck ? <b>⚓Wreck</b> : ''}
                    </div>

                    <p />

                    {images.length > 0 ? <>
                        <h3 className='diveNumber'>Photos</h3>
                        <div className="dive-images">
                            <SRLWrapper options={options}>
                                <div className="diveImagesDiv">
                                    {images.map(image => {
                                        return <>
                                            <div className="diveImage">
                                                <img src={image.imageUrl} alt={`Location: ${dive.location}, ${dive.diveSite} ${dive.date}`} />
                                            </div>
                                        </>
                                    })}
                                </div>
                            </SRLWrapper>
                        </div>
                    </> : ''
                    }

                    <div className='edit-delete'>
                        <Link to={`/dives/edit/${dive.id}`}>Edit</Link>
                        <Link to="#" onClick={() => { deleteSingleDive(dive.id).then(navigate(-1)) }}>Delete
                        </Link>
                    </div>
                </section>
            </article>
        </SimpleReactLightbox>
        </>
    )
}