import React, { useState } from "react";

export const Dive = ({ step, dives, getPressureGroup, resetDives, setPgAfterSi }) => {
    const [diveInput, updateDiveInput] = useState({ rnt: 0 })
    let currentDive = {}

    if (step === 1) { currentDive = dives[0] }
    else if (step === 2) { currentDive = dives[1] }
    else if (step === 3) { currentDive = dives[2] }
    console.log(dives)
    console.log('current', currentDive)

    return (<>

        {/* FORM */}
        <h2>Dive {step === 1 ? '1' : step === 2 ? '2' : step === 3 ? '3' : ''}</h2>
        <section className="inputs-flag">
            <div className="divePlanInputDiv">
                {currentDive.pg !== '' ? '' : 
                    <>
                        {step === 2 || step === 3 ?
                            <><fieldset>
                                <label>Surface Interval</label>
                                <input type="number" onChange={(event) => {
                                    const dive = { ...diveInput }
                                    dive.si = parseInt(event.target.value)
                                    updateDiveInput(dive)
                                }} /> min
                            </fieldset>
                                <button onClick={() => setPgAfterSi(diveInput, currentDive, step)}>Set</button></>
                            : ''
                        }
                        <fieldset>
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
                        <button onClick={() => getPressureGroup(diveInput, step)}>Dive</button></>
                }
                <button onClick={() => resetDives(updateDiveInput)}>Reset</button>
            </div>
            <div className={currentDive.noDecoLimit === false && currentDive.ssRequired === false ? "diveFlagGreen" : currentDive.noDecoLimit === true ? "diveFlagRed" : currentDive.noDecoLimit === false && currentDive.ssRequired === true ? "diveFlagYellow" : ""}>
                <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" />
            </div>
        </section>

        {/* RESULTS */}
        <section>
            {currentDive.depth !== 0 ?
                <ul className="diveResults">
                    {step === 2 || step === 3 ?
                        <li>
                            <div className="results-label">Starting Pressure Group:</div><div className="pg-box">{currentDive.pgAfterSi}</div>
                        </li> : ''}
                    <li>
                        <div className="results-label">Pressure Group:</div> {currentDive.pg !== '' ? <div className="pg-box">{currentDive.pg}</div> : ''}
                    </li>
                    <li>
                        <div className="results-label">Depth:</div> {currentDive.depth > 0 ? currentDive.depth + ' feet' : ''}
                    </li>
                    <li>
                        <div className="results-label">Actual bottom time:</div>
                        {currentDive.abt > 0 ? currentDive.abt + ' minutes' : ''}
                    </li>
                    <li>
                        <div className="results-label">Safety stop required:</div>
                        <div className="ss">{currentDive.ssRequired === true && currentDive.noDecoLimit === false ? '3 minutes' :
                            currentDive.noDecoLimit === true && currentDive.minOverDeco <= 5 ? '8 minutes' :
                                currentDive.noDecoLimit === true && currentDive.minOverDeco > 5 ? '15 minutes' :
                                    currentDive.pg !== '' && currentDive.ssRequired === false ? 'None' : ''}
                        </div>
                    </li>
                    {currentDive.minOverDeco < 0 ?
                        <li>
                            <div className="results-label">Minutes to no deco limit: </div>
                            {currentDive.pg !== '' ? Math.abs(currentDive.minOverDeco)
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
                : ''
            }
        </section>
    </>
    )
}