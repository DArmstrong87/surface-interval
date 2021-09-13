import React, { useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { useState } from "react/cjs/react.development";
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

    const UpdateProfilePic = (image) => {
        const copy = { ...certCard }
        copy.imageUrl = image.data_url;
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(copy)
        }
        return fetch(`http://localhost:8088/certCards`, fetchOption)
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
        return fetch(`http://localhost:8088/certCards/${id}`, fetchOption)
            .then(() =>
                getMyCards()
                    .then((data) => setCards(data)
                    ), {}
            )
    }

    return (<article>

        {certCards.length === 0 ?

            <section className="certCardContainer" ><div>
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
                        onImageRemoveAll,
                        isDragging,
                        dragProps
                    }) => (
                        <div className="upload__image-wrapper">
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.data_url} alt="" width="400" />
                                    <div className="image-item__btn-wrapper">
                                        <label for="Name">Certification</label>
                                        <input type="text" placeholder="Name" onChange={(event) => {
                                            const copy = { ...certCard }
                                            copy.name = event.target.value
                                            setCert(copy)
                                        }} />
                                        <label for="date">Date Issued:</label>
                                        <input type="date" onChange={(event) => {
                                            const copy = { ...certCard }
                                            copy.dateIssued = event.target.value
                                            setCert(copy)
                                        }} />
                                        <button className="certCardButton" onClick={() => { UpdateProfilePic(image).then(onImageRemove(index)) }}>Save</button>
                                        <button className="certButton" onClick={() => onImageRemove(index)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                            <button
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Click or Drop <br />to Upload Card
                            </button>
                        </div>
                    )}
                </ImageUploading>
            </div>
            </section>
            :
            <section>
                <div className="certCards">
                    <h2 className="moduleTitle">Certification Cards</h2>
                </div>
                <div className="certCardContainer">
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
                                <button
                                    style={isDragging ? { color: "red" } : null}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Add Card
                                </button>
                                {imageList.map((image, index) => (
                                    <div key={index} className="certCards">
                                        <img src={image.data_url} alt="" width="400" />
                                        <div className="">
                                            <label for="Name">Certification</label>
                                            <input type="text" placeholder="Name" onChange={(event) => {
                                                const copy = { ...certCard }
                                                copy.name = event.target.value
                                                setCert(copy)
                                            }} />
                                            <label for="date">Date Issued:</label>
                                            <input type="date" onChange={(event) => {
                                                const copy = { ...certCard }
                                                copy.dateIssued = event.target.value
                                                setCert(copy)
                                            }} />
                                            <button className="certCardButton" onClick={() => { UpdateProfilePic(image).then(onImageRemove(index)) }}>Save</button>
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
        <section className="certCardContainer">
        {certCards.map(
            card => {
                return <><div className="cardOverview"><h3 className="cardTitle" >{card.name}</h3>
                    <p className="cardDetails">Date Issued: {card.dateIssued}</p>
                    <div className="certCard">
                        <img src={card.imageUrl} alt={`${certCard.name} Cert`} />
                    </div>
                    <button onClick={() => { deleteCard(card.id) }}>Delete</button>
                </div>
                </>
            }
        )}
        </section>
    </article>
    );
}