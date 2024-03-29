import React, { useEffect } from "react";
import { useState } from "react";
import { deleteCard, getCurrentUser, getMyCards, postCertCard } from "../application/ApiManager";
import "./UploadProfilePic.css";
import "./CertCards.css";
import axios from "axios";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

export const CertCardUpload = () => {
    const [front, setFront] = useState([])
    const [back, setBack] = useState([])
    const [user, setUser] = useState({})
    const [certCards, setCards] = useState([])
    const [certCard, setCert] = useState({ userId: user.id })
    const [toggleUpload, setToggleUpload] = useState(false)

    useEffect(() => {
        async function getUserAndCards() {
            getCurrentUser()
                .then((data) => setUser(data[0]));
            getMyCards()
                .then((data) => setCards(data));
        }
        getUserAndCards();
    }, []
    )


    const uploadFront = () => {
        const imageData = new FormData()
        const frontImg = { ...front }
        const cert = { ...certCard }
        imageData.append("file", frontImg[0])
        imageData.append('upload_preset', 'certCards')
        axios.post('https://api.cloudinary.com/v1_1/surface-interval/image/upload', imageData)
            .then(res => {
                cert.frontImageUrl = res?.data?.secure_url
                cert.userId = user?.id
                setCert(cert)
            })
    }
    const uploadBack = () => {
        const imageData = new FormData()
        const backImg = { ...back }
        const cert = { ...certCard }
        imageData.append("file", backImg[0])
        imageData.append('upload_preset', 'certCards')
        axios.post('https://api.cloudinary.com/v1_1/surface-interval/image/upload', imageData)
            .then(res => {
                cert.backImageUrl = res?.data?.secure_url
                cert.userId = user?.id
                setCert(cert)
            })
    }

    const handleSubmit = () => {
        postCertCard(certCard)
            .then(() => { getMyCards().then((data) => setCards(data)) })
            .then(() => setCert({ userId: user.id }));
        setToggleUpload(false)
    }
    const resetForm = (e) => {
        e.preventDefault()
        setToggleUpload(false)
        setCert({ userId: user.id })
    }

    const options = { buttons: { showDownloadButton: false } }

    return (<>
        <SimpleReactLightbox>
            <article className="cert-cards">
                <h2 className='diveNumber'>Certification Cards</h2>

                {certCards.length === 0 ?
                    <section key={"certCards"} className="certCards" >
                        <h3 className="noCerts">No cert cards uploaded</h3>
                    </section>
                    : ''}
                {toggleUpload ? '' :
                    <>
                        <p className="tip">Tip: Take photos of the front and back of your cert cards and crop them.</p>
                        <button className="upload-cert-button" onClick={() => setToggleUpload(true)}>Upload New Card</button>
                    </>}

                {toggleUpload ? <>
                    <div className="cert-card-form">
                        {certCard.frontImageUrl ?
                            <article className="cards">
                                <section className="uploadedCard">
                                    <div className="cert-card">
                                        <img src={certCard?.frontImageUrl} alt="New Cert Front" />
                                    </div>
                                    {certCard.backImageUrl ?
                                        <div className="cert-card">
                                            <img src={certCard?.backImageUrl} alt="New Cert Back" />
                                        </div>
                                        : ""}
                                </section>
                            </article> : ''}
                        <fieldset>
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder={"Name of cert"} onChange={(event) => {
                                const copy = { ...certCard }
                                copy.name = event.target.value
                                setCert(copy)
                            }} />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="name">Date Issued</label>
                            <input type="date" onChange={(event) => {
                                const copy = { ...certCard }
                                copy.dateIssued = event.target.value
                                setCert(copy)
                            }} />
                        </fieldset>
                        <fieldset className="upload-certs-container">
                            <div className="cert-inputs">

                                {certCard.frontImageUrl ? "" :
                                    <div>
                                        <input className="fileUpload" name="fileUpload" type="file" onChange={(event) => {
                                            setFront(event.target.files)
                                        }
                                        } />
                                        <button className="upload-certs"
                                            onClick={uploadFront}>
                                            Upload Front
                                        </button>
                                    </div>
                                }
                                {certCard.frontImageUrl && !certCard.backImageUrl ?
                                    <div>
                                        <input className="fileUpload" name="fileUpload" type="file" onChange={(event) => {
                                            setBack(event.target.files)
                                        }
                                        } />
                                        <button className="upload-certs"
                                            onClick={uploadBack}>
                                            Upload Back
                                        </button>
                                    </div>
                                    :
                                    certCard.backImageUrl ? "" : ""}
                            </div>
                        </fieldset>
                        <div className="cert-buttons">
                            {certCard.frontImageUrl && certCard.backImageUrl ?
                                <button onClick={handleSubmit}>Submit</button>
                                : ""}
                            ⚓<button onClick={resetForm}>Cancel</button>
                        </div>
                    </div>
                </>
                    : ''}

                <section key={"certCardContainer"} className="certCardContainer">
                    <SRLWrapper options={options}>
                        <article className="cards">
                            {certCards.map(card => {
                                return <>
                                    <section className="card">
                                        <div className="cardHeader">
                                            <h2 className="cardTitle" >{card.name}</h2>
                                        </div>
                                        <div>

                                            <div className="cert-card">
                                                <img src={card.frontImageUrl} alt={`${card.name} Cert`} />
                                            </div>
                                            <div className="cert-card">
                                                <img src={card.backImageUrl} alt={`${card.name} Cert`} />
                                            </div>
                                            <p className="cardDetails"><i>Date Issued: {card.dateIssued}</i>
                                                <button className="certButton"
                                                    onClick={() => { deleteCard(card.id, setCards) }}>
                                                    Delete</button>
                                            </p>
                                        </div>
                                    </section>

                                </>
                            })}
                        </article>
                    </SRLWrapper>
                </section>
            </article >
        </SimpleReactLightbox>
    </>
    );
}