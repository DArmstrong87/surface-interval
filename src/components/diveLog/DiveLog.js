import React from "react";
import { DiveList } from "./DiveList";
import './DiveLog.css'

export const DiveLog = () => {

    return (<>
        <article className='diveLogArticle' key='article1'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Dive Log</h2>
                <button className="logDive">Log Dive</button>
            </section>
        </article>

        <DiveList />
    </>)
}