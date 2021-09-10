import React from "react";
import "./DiverProfile.css"

export const DiverProfile = () => {
    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Diver Profile</h2>
            </section>
        </article>

        <article className='diverProfileContainer'>
            <section className='diverStats'>
                <ul>
                    <li>Name</li>
                    <li>Highest Cert Level: </li>
                    <li>Total Dives: </li>
                    <li>Most recent dive:</li>
                    <li>Deepest Dive</li>
                    <li>Longest Dive</li>
                </ul>
            </section>
            <div className="profilePic">
                <img src="/images/da-upside-down.jpg" alt="profile pic" />
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