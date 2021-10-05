import React, { useEffect, useState } from "react"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"
import { getDivesAndImages } from "../../application/ApiManager"
import "./PhotoGallery.css"

export const PhotoGallery = () => {
    const [divesImages, setDivesImages] = useState([]);

    useEffect(
        () => {
            getDivesAndImages()
                .then(images => setDivesImages(images));
        }, []
    )

    const filteredDives = divesImages?.filter(dive => {
        return dive.diveImages.length > 0
    })

    const options = { buttons: { showDownloadButton: false } }

    return (<>
        <section className='diveLogHeading'>
            <h2 className='moduleTitle'>Photo Gallery</h2>
        </section>
        <SimpleReactLightbox key={Math.random().toString(36)}>
            <section className="photo-gallery-container" key={Math.random().toString(36).substr(2, 9)} >
                <SRLWrapper options={options} >
                    {filteredDives?.map(dive => {
                        return <>
                            <div className="gallery-heading" key={Math.random().toString(36).substr(2, 9)}>
                                <h2>{dive.location}</h2>
                                <h3>{dive.diveSite}</h3>
                                <h4>{dive.date}</h4>
                            </div>
                            <div className="gallery-photos" key={Math.random().toString(36).substr(2, 9)}>
                                {dive.diveImages.map(image => {
                                    let url = image.imageUrl
                                    url = url.substr(0, url.lastIndexOf(".jpg")) + ".webp"
                                    return <>
                                        <div className="gallery-image" key={Math.random().toString(36)} >
                                            <img src={image.imageUrl.includes(".jpg") ? url : image.imageUrl} alt={`Location/Site: ${dive.location}, ${dive.diveSite}  ${dive.date}`} />
                                        </div>
                                    </>
                                })}
                            </div>
                        </>
                    })}
                </SRLWrapper>
            </section>
        </SimpleReactLightbox>
    </>
    )
};