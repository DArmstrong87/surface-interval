import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DiveList } from "./DiveList";
import './DiveLog.css'
import { DiveStats } from "./DiveStats";
import './DiveStats.css'
import { SortedDiveLists } from "./sortedDives/SortedDiveLists";

export const DiveLog = () => {
    const [view, setView] = useState({ condensed: true })

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
        <div className="expanded-condensed">
            <input name="condensed" type="radio"
                checked={view.condensed}
                onChange={() =>
                    setView({ condensed: true, expanded: false })
                } />
            <label htmlFor="condensed">Condensed</label> ⚓
            <input name="expanded" type="radio"
                checked={view.expanded === true ? true : false}
                onChange={() =>
                    setView({ expanded: true, condensed: false })
                } />
            <label htmlFor="expanded">Expanded</label>
        </div>

        {view.condensed ? <SortedDiveLists /> : ''}
        {view.expanded ? <DiveList /> : ''}

    </>)
}