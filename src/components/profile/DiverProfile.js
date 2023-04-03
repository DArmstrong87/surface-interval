import React from "react";
import { DiveStats } from "../diveLog/DiveStats";
import "./DiverProfile.css"
import { CertCardUpload } from "./UploadCertCards";
import { ProfilePicUpload } from "./UploadProfilePic";

export const DiverProfile = () => {

    return (
        <>
            <article className='diveLogArticle'>
                <section className='diveLogHeading'>
                    <h2 className='moduleTitle'>Diver Profile</h2>
                </section>
            </article>

            <article className='diverProfileContainer'>
                <DiveStats />
                <div className="profilePic">
                    <ProfilePicUpload />
                </div>
            </article>

            <CertCardUpload />
        </>
    )
}