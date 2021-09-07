import React from "react";
import { Link } from "react-router-dom";
import { DiveList } from "./DiveList";
import './DiveLog.css'

export const DiveLog = () => {

    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Dive Log</h2>
                <Link to="/logdive">
                    <button className="logDive">
                        Log Dive<br />
                        🤿
                    </button>
                </Link>
            </section>
        </article>

        <DiveList />
    </>)
}