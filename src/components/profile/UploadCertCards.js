import React, { useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import { getCurrentUser, getMyCards } from "../application/ApiManager";
import "./UploadProfilePic.css";

export const CertCardUpload = () => {
    const [image, setImage] = useState([])
    const [user, setUser] = useState({})
    const [certCards, setCards] = useState([])
    const maxNumber = 1;
    const onChange = (imageList) => {
        setImage(imageList);
    };

    useEffect(() =>
        getCurrentUser()
            .then((data) => setUser(data[0])
            ), []
    )

    useEffect(() =>
        getMyCards()
            .then((data) => setCards(data)
            ), []
    )

    const [certCard, setCert] = useState({
        userId: user.id,
        name: "",
        dateIssued: "",
        imageUrl: ""
    })

    const UploadCertCard = (image) => {
        const copy = { ...certCard }
        copy.imageUrl = image.data_url;
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(copy)
        }
        return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/certCards`, fetchOption)
            .then(() =>
                getMyCards()
                    .then((data) => setCards(data)
                    ), []
            )
    }

    const deleteCard = (id) => {
        const fetchOption = {
            method: "DELETE",
        }
        return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/certCards/${id}`, fetchOption)
            .then(() =>
                getMyCards()
                    .then((data) => setCards(data)
                    ), {}
            )
    }
   
    return (<>

        {certCards.length === 0 ?

            <section key={"certCards"} className="certCards" ><div>
                <h3 className="noCerts">No Certification Cards Uploaded</h3>
                <ImageUploading
                    multiple
                    value={image}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemove,
                        isDragging,
                        dragProps
                    }) => (
                        <div key={"image_wrapper"} className="upload__image-wrapper">
                            <div className="uploadButton"><button
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Click or Drop <br />to Upload Card
                            </button></div>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.data_url} alt="" width="400" />
                                    <div className="image-item__btn-wrapper">
                                        <label>Certification</label>
                                        <input type="text" placeholder="Name" onChange={(event) => {
                                            const copy = { ...certCard }
                                            copy.name = event.target.value
                                            setCert(copy)
                                        }} />
                                        <label>Date Issued:</label>
                                        <input type="date" onChange={(event) => {
                                            const copy = { ...certCard }
                                            copy.dateIssued = event.target.value
                                            setCert(copy)
                                        }} />
                                        <div class="save-delete">
                                        <button className="certCardButton" onClick={() => { UploadCertCard(image).then(onImageRemove(index)) }}>Save</button>
                                        <button className="certCardButton" onClick={() => onImageRemove(index)}>Delete</button></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ImageUploading>
            </div>
            </section>
            :
            <section key={"certCards"}>
                <div key={"image_wrapper"} className="certCards">
                    <h2 className="moduleTitle">Certification Cards</h2>
                </div>
                <div key={"card-container"} className="certCardContainer">
                    <ImageUploading
                        multiple
                        value={image}
                        onChange={onChange}
                        maxNumber={maxNumber}
                        dataURLKey="data_url"
                    >
                        {({
                            imageList,
                            onImageUpload,
                            onImageRemove,
                            isDragging,
                            dragProps
                        }) => (

                            <div className="certCards">
                                {imageList >= 0 ?
                                    <div><button className="addCard"
                                        style={isDragging ? { color: "red" } : null}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Add Card
                                    </button>
                                    </div>
                                    : ''
                                }
                                {imageList.map((image, index) => (
                                    <div key={index} className="certCards">
                                        <img src={image.data_url} alt="" width="400" />
                                        <div key={`wrapper-${index}`} className="image-item__btn-wrapper">
                                            <label>Certification</label>
                                            <input type="text" placeholder="Name" onChange={(event) => {
                                                const copy = { ...certCard }
                                                copy.name = event.target.value
                                                setCert(copy)
                                            }} />
                                            <label>Date Issued:</label>
                                            <input type="date" onChange={(event) => {
                                                const copy = { ...certCard }
                                                copy.dateIssued = event.target.value
                                                setCert(copy)
                                            }} />
                                            <button className="certCardButton" onClick={() => { UploadCertCard(image).then(onImageRemove(index)) }}>Save</button>
                                            <button className="certButton" onClick={() => onImageRemove(index)}>Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ImageUploading>

                </div>
            </section>
        }
        <section  key={"certCardContainer"} className="certCardContainer">
            {certCards.map(
                card => {
                    return <><div className="cardOverview">
                        <div className="cardHeader">
                            <h2 className="cardTitle" >{card.name}</h2>
                        </div>
                        <div className="certCard">
                            <img src={card.imageUrl} alt={`${certCard.name} Cert`} />
                        </div>
                        <p className="cardDetails"><i>Date Issued: {card.dateIssued}</i>
                            <button className="certButton" onClick={() => { deleteCard(card.id) }}>Delete</button>
                        </p>
                    </div>
                    </>
                }
            )}
        </section>
    </>
    );
}