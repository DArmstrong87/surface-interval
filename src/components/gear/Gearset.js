import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getCurrentGearSet } from "../application/ApiManager";
import "../diveLog/LogNewDive.css";
import "./CreateGear.css"
import { DisplayBackups } from "./displayGear/DisplayBackups";
import { DisplayDocuments } from "./displayGear/DisplayDocuments";
import { DisplayEssential } from "./displayGear/DisplayEssential";
import { DisplayExposure } from "./displayGear/DisplayExposure";
import { DisplayMisc } from "./displayGear/DisplayMisc";
import { DisplaySafety } from "./displayGear/DisplaySafety";
import { DisplayTech } from "./displayGear/DisplayTech";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { GearPDF } from "./GearPDF";

export const Gearset = () => {
    const history = useHistory()
    const { gearId } = useParams()

    const [gear, setGear] = useState({})

    useEffect(
        () => {
            getCurrentGearSet(gearId)
                .then(gear => {
                    setGear(gear)
                })
        },
        [gearId]
    )

    const deleteGear = (id) => {
        fetch(`http://localhost:8088/gear/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                history.push("/gear")
            }
            )
    }

    return (
        <>
            <article className='gearArticle'>
                <h2 className='gearTitle'>Gearset</h2>
                <div className="back">
                    <Link className="diveNumber" to="/gear">🔙</Link>
                </div>
            </article>
            <article className='diveLogMain'>
                <section className="gearsetContainer">
                    <h2 className='diveNumber'>{gear.name}</h2>
                    <div className="gearEntry">
                        <div className="gearCol">
                            <DisplayEssential gear={gear} />
                            <DisplayExposure gear={gear} />
                            <DisplayTech gear={gear} />
                        </div>
                        <hr className="gearHR" />
                        <div className="gearCol">
                            <DisplayBackups gear={gear} />
                            <DisplayDocuments gear={gear} />
                            <DisplaySafety gear={gear} />
                            <DisplayMisc gear={gear} />
                        </div>
                    </div>
                    <div className='edit-delete'>
                        <PDFDownloadLink document={<GearPDF gear={gear} />}
                            fileName={`${gear.name} Gearset.pdf`}>
                            {({ blob, url, loading, error }) =>
                                loading ? 'Loading document...' : 'Download PDF'
                            }
                        </PDFDownloadLink>
                        <Link to={`/gear/edit/${gear.id}`}>Edit</Link>
                        <Link to="#" onClick={() => { deleteGear(gear.id) }}>Delete</Link>
                    </div>

                </section>
            </article>
        </>
    )
}