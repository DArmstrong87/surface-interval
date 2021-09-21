import React, { useState } from "react";
import { GetPressureGroup } from "./GetPressureGroup";
import { GetRNT } from "./GetRNT";
import { SetPgAfterSi } from "./SetNewPgAfterSi";

export const Dive = ({ step, dives, updateDive2, updateDive3, resetDives, resetAllDives, setAndUpdate }) => {
    const [diveInput, updateDiveInput] = useState({ rnt: 0 })
    let currentDive = {}

    if (step === 1) currentDive = dives[0]
    if (step === 2) currentDive = dives[1]
    else if (step === 3) currentDive = dives[2]

    const getRNTandRunPG = () => {
        GetRNT(step, diveInput.depth, currentDive.pgAfterSi);
        GetPressureGroup(diveInput, step, currentDive, setAndUpdate)
    }

    const diveOnEnter = (event) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            if (step === 1) { GetPressureGroup(diveInput, step, currentDive, setAndUpdate) }
            else if (step !== 1) { getRNTandRunPG() }
        }
    }

    const setSiOnEnter = (event) => {
        if (event.code === "Enter" || event.code === "NumpadEnter") {
            SetPgAfterSi(diveInput, dives, currentDive, step, updateDive2, updateDive3)
        }
    }

    const resetDivesAndInput = (step) => {
        updateDiveInput({ rnt: 0, depth: '', abt: '', si: '' })
        resetDives(step)
    }
    const resetAll = () => {
        updateDiveInput({ rnt: 0, depth: '', abt: '', si: '' })
        resetAllDives(updateDiveInput)
    }

    return (<>{/* FORM */}
        <h2>Dive {step === 1 ? 1 : step === 2 ? '2' : step === 3 ? '3' : ''}</h2>
        <section className="inputs-flag">
            <div className="divePlanInputDiv">
                {currentDive.pg !== '' ? '' :
                    <>
                        {step !== 1 ?
                            <><fieldset>
                                <label>Surface Interval</label>
                                <input type="number" value={diveInput.si} onChange={(event) => {
                                    const dive = { ...diveInput }
                                    dive.si = parseInt(event.target.value)
                                    updateDiveInput(dive)
                                }} onKeyDown={(event) => setSiOnEnter(event)} /> min
                                <div className="setSI">
                                    <button onClick={() => SetPgAfterSi(diveInput, dives, currentDive, step, updateDive2, updateDive3)}>Set</button>
                                </div>
                            </fieldset>
                            </>
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
                            }} onKeyDown={(event) => diveOnEnter(event)} />min
                        </fieldset>
                        <div className="diveButtons">
                            {step === 1
                                ? <button
                                    onClick={() => GetPressureGroup(diveInput, step, currentDive, setAndUpdate)}>Dive</button>
                                : <button onClick={() => getRNTandRunPG()}>Dive</button>
                            }
                            <button id="reset" onClick={() => resetDivesAndInput(step)}>Reset</button>
                        </div>
                    </>
                }
                {/* {currentDive.pg === '' ?
                    <button id="reset" onClick={() => resetDivesAndInput(step, diveInput)}>Reset</button> : ''} */}
            </div>
            <div className={currentDive.noDecoLimit === false && currentDive.ssRequired === false ? "diveFlagGreen"
                : currentDive.noDecoLimit === false && currentDive.ssRequired === true ? "diveFlagYellow"
                    : currentDive.noDecoLimit === true ? "diveFlagRed" : ""}>

                <img src="https://media.istockphoto.com/photos/scuba-flag-waving-picture-id498827225?k=20&m=498827225&s=612x612&w=0&h=fKrkr7R3hWEvan9KJp4hlV4qJMKcVDBFwqrqOsopaw0=" width="200" alt="Dive Flag" />
            </div>
            {currentDive.pg !== '' ?
                <div className="diveButtons">
                    <button id="reset" onClick={() => resetDivesAndInput(step, diveInput)}>Reset</button></div>
                : ''}

        </section>

        {/* RESULTS */}
        <section className="diveResults">
            {step === 2 || step === 3 ?
                <ul className="diveResultsList">
                    {diveInput.si > 0 ?
                        <><li>
                            <div className="results-label">Surface Interval:</div> {diveInput?.si} min</li>
                            <li>
                                <div className="results-label">Starting Pressure Group:</div><div className="pg-box">{currentDive?.pgAfterSi}</div>
                            </li></>
                        : ''
                    }
                </ul>
                : ''}
            {currentDive.depth !== 0 ?
                <ul className="diveResultsList">
                    <li>
                        <div className="results-label">Pressure group:</div> {currentDive.pg !== '' ? <div className="pg-box">{currentDive.pg}</div> : ''}
                    </li>
                    <li>
                        <div className="results-label">Depth:</div> {currentDive.depth > 0 ? currentDive.depth + ' feet' : ''}
                    </li>
                    {step === 1 ?
                        <li>
                            <div className="results-label">Total bottom time:</div>
                            {currentDive.abt > 0 ? currentDive.abt + ' min' : ''}
                        </li>
                        : ''}
                    {step === 2 || step === 3 ?
                        <><div className={currentDive.noDecoLimit === false && currentDive.ssRequired === false ? "timeGreen"
                            : currentDive.noDecoLimit === false && currentDive.ssRequired === true ? "timeYellow"
                                : currentDive.noDecoLimit === true ? "timeRed" : ""}>
                            <li>
                                <div className="results-label">Actual bottom time:</div>
                                {currentDive.abt > 0 ? currentDive.abt + ' min' : ''}
                            </li>
                            <li>
                                <div className="results-label">+ Residual nitrogen time:</div>
                                {currentDive.rnt} min
                            </li>
                            <li>
                                <div className="results-label">= Total bottom time: </div>
                                {currentDive.abt + currentDive.rnt} min
                            </li>
                        </div></>
                        : ''
                    }
                    <li>
                        <div className="results-label">Safety stop required:</div>
                        <div className="ss">{currentDive.ssRequired === true && currentDive.noDecoLimit === false ? '3 minutes'
                            : currentDive.noDecoLimit === true && currentDive.minOverDeco <= 5 ? '8 minutes'
                                : currentDive.noDecoLimit === true && currentDive.minOverDeco > 5 ? '15 minutes'
                                    : currentDive.pg !== '' && currentDive.ssRequired === false ? 'None' : ''}
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
                        <><li><div className="results-label">Min over no deco limit:</div> {currentDive.minOverDeco}</li>
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
            {step === 3 && currentDive.pg !== '' ?
                <div className="diveButtons">
                    <button id="reset" onClick={resetAll}>Reset All</button></div>
                : ''
            }
        </section>
    </>
    )
}