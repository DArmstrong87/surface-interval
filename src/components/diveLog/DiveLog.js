import React from "react";
import { Link } from "react-router-dom";
import { DiveList } from "./DiveList";
import './DiveLog.css'
import { DiveStats } from "./DiveStats";
import './DiveStats.css'

export const DiveLog = () => {
    return (<>
        <article className='diveLogArticle'>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Dive Log</h2>
            </section>
            <div className="diveStatsDiv">
                <DiveStats />
                <Link to="/logdive">
                    <button className="logDive">
                        Log Dive<br />
                        🤿
                    </button>
                </Link>
            </div>
        </article>

        <DiveList />
    </>)
}