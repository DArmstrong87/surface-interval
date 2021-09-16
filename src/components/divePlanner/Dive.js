import React, { useState } from "react";


export const Dive = ({ step, dives, getPressureGroup, resetDives }) => {
    const [diveInput, updateDiveInput] = useState({ rnt: 0 })
    let currentDive = {}

    if (step === 1) { currentDive = dives[0] }
    else if (step === 2) { currentDive = dives[1] }
    else if (step === 3) { currentDive = dives[2] }
    console.log(dives)
    console.log('current',currentDive)
    console.log('step', step)


    return (<>
        {/* FORM */}
        <h2>Dive 1</h2>
        <section className="inputs-flag">
            <div className="divePlanInputDiv">
                {currentDive.pg !== '' ? '' :
                    <><fieldset>
                        <label>Depth</label>
                        <input type="number" value={diveInput.depth} onChange={(event) => {
                            const dive = { ...diveInput }
                            dive.depth = parseInt(event.target.value)
                            updateDiveInput(dive)
                        }} /> ft
                    </fieldset>
                        <fieldset>
                            <label>Time</label>
                            <input type="number" value={diveInput.abt} onChange={(event) => {
                                const dive = { ...diveInput }
                                dive.abt = parseInt(event.target.value)
                                updateDiveInput(dive)
                            }} />min
                        </fieldset>
                        <button onClick={() => getPressureGroup(diveInput)}>Dive</button></>
                }
                <button onClick={resetDives}>Reset</button>
            </div>
            <div className={currentDive.noDecoLimit === false && currentDive.ssRequired === false ? "diveFlagGreen" : currentDive.noDecoLimit === true ? "diveFlagRed" : currentDive.noDecoLimit === false && currentDive.ssRequired === true ? "diveFlagYellow" : ""}>
                <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
            </div>
        </section>
        {/* RESULTS */}
        <section>
            <ul className="diveResults">
                <li>
                    Pressure Group: {currentDive.pg !== '' ? <div className="pg-box">{currentDive.pg}</div> : ''}
                </li>
                <li>
                    Safety stop required:
                    <div className="ss">{currentDive.ssRequired === true && currentDive.noDecoLimit === false ? '3 minutes' :
                        currentDive.noDecoLimit === true && currentDive.minOverDeco <= 5 ? '8 minutes' :
                            currentDive.noDecoLimit === true && currentDive.minOverDeco > 5 ? '15 minutes' :
                                currentDive.pg !== '' && currentDive.ssRequired === false ? 'None' : ''}
                    </div>
                </li>
                {currentDive.minOverDeco < 0 ?
                    <li>
                        Minutes to no deco limit: {currentDive.pg !== '' ? Math.abs(currentDive.minOverDeco)
                            : ''}
                    </li> : ''
                }
                {currentDive.minOverDeco > 0 ?
                    <><li>Min over no deco limit: {currentDive.minOverDeco}</li>
                        <li>
                            <div className="noDecoLimit">
                                <b>No Deco Limit exceeded.</b> This dive is highly discouraged. The No Deco Limit is exceeded by {currentDive.minOverDeco} {currentDive.minOverDeco === 1 ? 'minute' : 'minutes'} which requires an {currentDive.minOverDeco <= 5 ? '8' : '15'} minute decompression stop (air supply permitting). The diver must remain out of the water for {currentDive.minOverDeco <= 5 ? '6' : '24'} hours before the next dive.
                            </div>
                        </li></>
                    : currentDive.noDecoLimit === true && currentDive.minOverDeco <= 0 ?
                        <li>
                            <div className="noDecoLimit">
                                <b>No Deco Limit met.</b> This dive is highly discouraged. The dive time requires rounding up to the next pressure group, which meets the no deco limit. This dive requires an 8 minute decompression stop (air supply permitting). The diver must remain out of the water for 6 hours before the next dive.
                            </div>
                        </li> : ''
                }
            </ul>
            {/* {currentDive.depth > 0 ?
                <button className="nextDive" onClick={toggleDive2}>
                    Next Dive ⬇️
                </button>
                : ''}
            <p className="empty"></p> */}
        </section>


        {/* // DIVE FORM 2 */}
        {/* {form_Dive2.active === true ?
            <>
                <h2>Dive 2</h2>
                <section className="inputs-flag">
                    <div className="divePlanInputDiv">
                        {dive2.pg !== '' ? '' :
                            <>
                                <fieldset>
                                    <label>Surface Interval</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...diveInput }
                                        dive.si = parseInt(event.target.value)
                                        updateDiveInput(dive)
                                    }} /> min
                                </fieldset>
                                <fieldset>
                                    <label>Depth</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...diveInput }
                                        dive.depth = parseInt(event.target.value)
                                        updateDiveInput(dive)
                                    }} /> ft
                                </fieldset>
                                <fieldset>
                                    <label>Time</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...diveInput }
                                        dive.abt = parseInt(event.target.value)
                                        updateDiveInput(dive)
                                    }} />min
                                </fieldset>
                                <button onClick={getPressureGroup}>Dive</button></>
                        }
                        <button onClick={resetDives}>Reset</button>
                    </div>
                    <div className={dive2.noDecoLimit === false && dive2.ssRequired === false ? "diveFlagGreen" : dive2.noDecoLimit === true ? "diveFlagRed" : dive2.noDecoLimit === false && dive2.ssRequired === true ? "diveFlagYellow" : ""}>
                        <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
                    </div>
                </section>
                <section>
                    <ul className="diveResults">
                        <li>
                            Pressure Group: {dive2.pg !== '' ? <div className="pg-box">{dive2.pg}</div> : ''}
                        </li>
                        <li>
                            Safety stop required:
                            <div className="ss">{dive2.ssRequired === true && dive2.noDecoLimit === false ? '3 minutes' :
                                dive2.noDecoLimit === true && dive2.minOverDeco <= 5 ? '8 minutes' :
                                    dive2.noDecoLimit === true && dive2.minOverDeco > 5 ? '15 minutes' :
                                        dive2.depth > 0 && dive2.ssRequired === false ? 'None' : ''}
                            </div>
                        </li>
                        {dive2.minOverDeco < 0 ?
                            <li>
                                Minutes to no deco limit: {dive2.depth > 0 ? Math.abs(dive2.minOverDeco)
                                    : ''}
                            </li> : ''
                        }
                        {dive2.minOverDeco > 0 ?
                            <><li>Min over no deco limit: {dive2.minOverDeco}</li>
                                <li>
                                    <div className="noDecoLimit">
                                        <b>No Deco Limit exceeded.</b> This dive is highly discouraged. The No Deco Limit is exceeded by {dive2.minOverDeco} {dive2.minOverDeco === 1 ? 'minute' : 'minutes'} which requires an {dive2.minOverDeco <= 5 ? '8' : '15'} minute decompression stop (air supply permitting). The diver must remain out of the water for {dive2.minOverDeco <= 5 ? '6' : '24'} hours before the next dive.
                                    </div>
                                </li></>
                            : dive2.noDecoLimit === true && dive2.minOverDeco <= 0 ?
                                <li>
                                    <div className="noDecoLimit">
                                        <b>No Deco Limit met.</b> This dive is highly discouraged. The dive time requires rounding up to the next pressure group, which meets the no deco limit. This dive requires an 8 minute decompression stop (air supply permitting). The diver must remain out of the water for 6 hours before the next dive.
                                    </div>
                                </li> : ''
                        }
                    </ul>
                    {dive2.depth > 0 ?
                        <button className="nextDive" onClick={toggleDive3}>
                            Next Dive ⬇️
                        </button>
                        : ''}
                    <p className="empty"></p>
                </section></>
            : ''} */}


        {/* // DIVE FORM 3 */}
        {/* {form_Dive3.active === true ?
            <>
                <h2>Dive 3</h2>
                <section className="inputs-flag">
                    <div className="divePlanInputDiv">
                        {dive3.depth > 0 ? '' :
                            <>
                                <fieldset>
                                    <label>Surface Interval</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...diveInput }
                                        dive.si = parseInt(event.target.value)
                                        updateDiveInput(dive)
                                    }} /> min
                                </fieldset>
                                <fieldset>
                                    <label>Depth</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...diveInput }
                                        dive.depth = parseInt(event.target.value)
                                        updateDiveInput(dive)
                                    }} /> ft
                                </fieldset>
                                <fieldset>
                                    <label>Time</label>
                                    <input type="number" onChange={(event) => {
                                        const dive = { ...diveInput }
                                        dive.abt = parseInt(event.target.value)
                                        updateDiveInput(dive)
                                    }} />min
                                </fieldset>
                                <button onClick={getPressureGroup}>Dive</button></>
                        }
                        <button onClick={resetDives}>Reset</button>
                    </div>
                    <div className={dive3.noDecoLimit === false && dive3.ssRequired === false ? "diveFlagGreen" : dive3.noDecoLimit === true ? "diveFlagRed" : dive3.noDecoLimit === false && dive3.ssRequired === true ? "diveFlagYellow" : ""}>
                        <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
                    </div>
                </section>
                <section>
                    <ul className="diveResults">
                        <li>
                            Pressure Group: {dive3.depth > 0 ? <div className="pg-box">{dive3.pg}</div> : ''}
                        </li>
                        <li>
                            Safety stop required:
                            <div className="ss">{dive3.ssRequired === true && dive3.noDecoLimit === false ? '3 minutes' :
                                dive3.noDecoLimit === true && dive3.minOverDeco <= 5 ? '8 minutes' :
                                    dive3.noDecoLimit === true && dive3.minOverDeco > 5 ? '15 minutes' :
                                        dive3.depth > 0 && dive3.ssRequired === false ? 'None' : ''}
                            </div>
                        </li>
                        {dive3.minOverDeco < 0 ?
                            <li>
                                Minutes to no deco limit: {dive3.depth > 0 ? Math.abs(dive3.minOverDeco)
                                    : ''}
                            </li> : ''
                        }
                        {dive3.minOverDeco > 0 ?
                            <><li>Min over no deco limit: {dive3.minOverDeco}</li>
                                <li>
                                    <div className="noDecoLimit">
                                        <b>No Deco Limit exceeded.</b> This dive is highly discouraged. The No Deco Limit is exceeded by {dive3.minOverDeco} {dive3.minOverDeco === 1 ? 'minute' : 'minutes'} which requires an {dive3.minOverDeco <= 5 ? '8' : '15'} minute decompression stop (air supply permitting). The diver must remain out of the water for {dive3.minOverDeco <= 5 ? '6' : '24'} hours before the next dive.
                                    </div>
                                </li></>
                            : dive3.noDecoLimit === true && dive3.minOverDeco <= 0 ?
                                <li>
                                    <div className="noDecoLimit">
                                        <b>No Deco Limit met.</b> This dive is highly discouraged. The dive time requires rounding up to the next pressure group, which meets the no deco limit. This dive requires an 8 minute decompression stop (air supply permitting). The diver must remain out of the water for 6 hours before the next dive.
                                    </div>
                                </li> : ''
                        }
                    </ul>
                    {dive3.depth > 0 ?
                        <button className="nextDive" onClick={toggleDive2}>
                            Next Dive ⬇️
                        </button>
                        : ''}
                    <p className="empty"></p>
                </section>
            </> : ''} */}
    </>
    )
}