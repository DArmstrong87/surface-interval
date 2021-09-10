import React, { useEffect, useState } from "react";
import { getCurrentUser } from "../application/ApiManager";
import "./DiverProfile.css"

export const DiverProfile = () => {
    const [user, setUser] = useState({})

    useEffect(() =>
        getCurrentUser()
            .then((data) => setUser(data[0])
            ), {}
    )

    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Diver Profile</h2>
            </section>
        </article>

        <article className='diverProfileContainer'>
            <section className='diverStats'>
                <ul>
                    <li>{user.name}</li>
                    <li>Highest Cert Level: </li>
                    <li>Total Dives: </li>
                    <li>Most recent dive:</li>
                    <li>Deepest Dive</li>
                    <li>Longest Dive</li>
                </ul>
            </section>
            <div className="profilePic">
                <img src="/images/da-upside-down.jpg" alt="profile pic" />
                <button className="changeProfilePic">Change Profile Pic</button>
            </div>
        </article>

        <div>
            <button className="logDive">Upload Cert Card</button>
        </div>

        <article className="certCards">
            <h2 className="moduleTitle">Certification Cards</h2>
            <section className="certCardContainer">
                <div className="certCard"></div>
                <div className="certCard"></div>
                <div className="certCard"></div>
                <div className="certCard"></div>
            </section>
        </article>
    </>)
}