// import axios from 'axios';
import { useEffect, useState } from 'react';
import "./ImageUpload.css"
import { getAllDiveImages, postImages } from '../../application/ApiManager';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';

export const DiveLogImageUpload = ({ setDiveImages, currentDive }) => {
    const [postedImages, setPostedImages] = useState([
        {
            diveId: 129,
            imageUrl: "https://res.cloudinary.com/surface-interval/image/upload/v1633312641/divelog-images/ii1bx971cz9l3ewu0j0c.webp"
        },
        {
            diveId: 129,
            imageUrl: "https://res.cloudinary.com/surface-interval/image/upload/v1633312641/divelog-images/itdzrgactbxup12qmwsa.webp"
        },
        {
            diveId: 129,
            imageUrl: "https://res.cloudinary.com/surface-interval/image/upload/v1633312641/divelog-images/v30tdxz0qxh6t3r5p0db.webp"
        },
        {
            diveId: 129,
            imageUrl: "https://res.cloudinary.com/surface-interval/image/upload/v1633312640/divelog-images/xqzhm4wgzr65etvjg9ur.webp"
        }
    ])
    const [allDiveImages, setAllDiveImages] = useState([])

    useEffect(
        () => {
            getAllDiveImages()
                .then(images => setAllDiveImages(images))
        }, [currentDive]
    )
    // useEffect(
    //     () => {
    //         getDiveImages(currentDive)
    //             .then(images => setPostedImages(images))
    //     }, [currentDive, allDiveImages]
    // )

    const uploadImage = () => {
        for (let i = 0; i < postedImages.length; i++) {
            const copy = { ...postedImages[i] }
            postImages(copy)
        }
    }
    const options = { buttons: { showDownloadButton: false } }

    return (
        <SimpleReactLightbox>
            <div>
                <h2 className='diveNumber'>Photos</h2>
                <section className="preview-images">
                    <SRLWrapper options={options}>
                        {postedImages.map(image => {
                            return <img src={image.imageUrl} alt="dive log" />
                        })}
                    </SRLWrapper>
                </section >

                <fieldset className="upload-images-container">
                    <div><input className="fileUpload" name="fileUpload" type="file" multiple onChange={(event) => {
                        setDiveImages(event.target.files)
                    }
                    } /></div>
                    <button className="upload-photos" onClick={uploadImage}>
                        Upload Photos
                    </button>
                </fieldset>
            </div >
        </SimpleReactLightbox>
    )
}
