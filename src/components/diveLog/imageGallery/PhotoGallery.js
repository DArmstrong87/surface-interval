import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { getDivesAndImages } from "../../application/ApiManager";
import "./PhotoGallery.css"

export const PhotoGallery = () => {
    const [divesImages, setDivesImages] = useState([])

    useEffect(
        () => {
            getDivesAndImages()
                .then(images => setDivesImages(images))
        }, []
    )

    const filteredDives = divesImages.filter(dive => {
        return dive.diveImages.length > 0
    })
    console.log(filteredDives)

    return (<>
        <section className='diveLogHeading'>
            <h2 className='moduleTitle'>Photo Gallery</h2>
        </section>
        <article className="photo-gallery-container">

            {filteredDives.map(dive => {
                return <>
                    <div className="gallery-heading">
                        <h2>{dive.location}</h2>
                        <h3>{dive.diveSite}</h3>
                        <h4>{dive.date}</h4>
                    </div>
                    <div className="gallery-photos">
                        {dive.diveImages.map(image => {
                            return <div className="gallery-image">
                                <Link to={image.imageUrl}><img src={image.imageUrl} /></Link>
                            </div>
                        })}
                    </div>
                </>
            })}

        </article>
    </>)
}