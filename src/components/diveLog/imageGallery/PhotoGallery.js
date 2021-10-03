import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
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

    const options = { buttons: { showDownloadButton: false } }

    return (<>
        <SimpleReactLightbox>
            <section className='diveLogHeading'>
                <h2 className='moduleTitle'>Photo Gallery</h2>
            </section>
            <article className="photo-gallery-container">
                <SRLWrapper options={options}>
                    {filteredDives.map(dive => {
                        return <>
                            <div className="gallery-heading">
                                <h2>{dive.location}</h2>
                                <h3>{dive.diveSite}</h3>
                                <h4>{dive.date}</h4>
                            </div>
                            <div className="gallery-photos">
                                {dive.diveImages.map(image => {
                                    let url = image.imageUrl
                                    url = url.substr(0, url.lastIndexOf(".jpg")) + ".webp"
                                    return <div className="gallery-image">
                                        <img src={url} alt={`Location/Site: ${dive.location}, ${dive.diveSite}  ${dive.date}`} />
                                    </div>
                                })}
                            </div>
                        </>
                    })}
                </SRLWrapper>
            </article>
        </SimpleReactLightbox>
    </>)
}