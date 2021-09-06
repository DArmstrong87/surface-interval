import React from "react";
import './DiveLog.css'

export const DiveLog = () => {
    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Dive Log</h2>
                <button className="logDive">Log Dive</button>
            </section>
        </article>

        <article className='diveLogMain'>
            <section className='diveLogEntry'>
            </section>
        </article>
    </>)
}