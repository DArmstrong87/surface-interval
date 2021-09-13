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

    const certCard = {
        userId: user.id,
        name: "",
        dateIssued: "",
        imageUrl: ""
    }

    const UpdateProfilePic = (image) => {
        const copy = { ...certCard }
        copy.name = "New Card";
        copy.dateIssued = "9/12/21";
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

    return (<section>
        {certCards.length === 0 ?
            < div className="certUploadButton" >
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
                            <button
                                style={isDragging ? { color: "red" } : null}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Click or <br />Drop here
                            </button>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.data_url} alt="" width="400" />
                                    <div className="image-item__btn-wrapper">
                                        <button className="certCardButton" onClick={() => { UpdateProfilePic(image).then(onImageRemove(index)) }}>Save</button>
                                        <button className="certButton" onClick={() => onImageRemove(index)}>Delete</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </ImageUploading>
            </div>
            :
            <div key="21341" className="profilePic">
                < div key="123" className="certUploadButton" >
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

                            <div>
                                <button
                                    style={isDragging ? { color: "red" } : null}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                >
                                    Add Card
                                </button>
                                {imageList.map((image, index) => (
                                    <div key={index} className="image-item">
                                        <img src={image.data_url} alt="" width="400" />
                                        <div className="image-item__btn-wrapper">
                                            <button className="certCardButton" onClick={() => { UpdateProfilePic(image).then(onImageRemove(index)) }}>Save</button>
                                            <button className="certButton" onClick={() => onImageRemove(index)}>Delete</button>
                                        </div>
                                    </div>
                                ))}
                                <button
                                    style={isDragging ? { color: "skyblue" } : null}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                > Update
                                </button>
                            </div>
                        )}
                    </ImageUploading>
                </div >
                {certCards.map(
                    card => {
                        return <><h3 className="cardTitle" >{card.name}</h3>
                            <p className="cardDetails">Date Issued: {card.dateIssued}</p>
                            <img src={card.imageUrl} alt="certCard" />
                            <button onClick={() => { deleteCard(card.id) }}>Delete</button></>
                    }
                )}

            </div>
        }
    </section>
    );
}