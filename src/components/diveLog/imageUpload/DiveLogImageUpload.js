import axios from 'axios';
import { useEffect, useState } from 'react'
import "./ImageUpload.css"
import { deleteImage, getAllDiveImages, getDiveImages, postImages } from '../../application/ApiManager'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

export const DiveLogImageUpload = ({ setDiveImages, diveImages, currentDive }) => {
    const [postedImages, setPostedImages] = useState([])
    const [allDiveImages, setAllDiveImages] = useState([])

    useEffect(
        () => {
            getAllDiveImages()
                .then(images => setAllDiveImages(images))
        }, [currentDive]
    )
    useEffect(
        () => {
            getDiveImages(currentDive)
                .then(images => setPostedImages(images))
        }, [currentDive, allDiveImages]
    )

    const uploadImage = () => {
        for (let i = 0; i < diveImages.length; i++) {
            const imageData = new FormData()
            const copy = { ...diveImages }
            imageData.append("file", copy[i])
            imageData.append('upload_preset', 'diveLog')
            axios.post('https://api.cloudinary.com/v1_1/surface-interval/image/upload', imageData)
                .then(res => {
                    copy.imageUrl = res?.data?.secure_url
                    copy.diveId = currentDive
                    postImages(copy)
                })
                .then(() => {
                    getAllDiveImages()
                        .then(images => setAllDiveImages(images))
                })
        }
    }
    const handleUrlUpload = (e) => {
        if (e.code === "Enter") {
            const array = e.target.value.split(",")
            console.log(array)
            for (const url of array) {
                // debugger
                const image = {
                    imageUrl: url,
                    diveId: currentDive
                }
                postImages(image)
                    .then(() => {
                        getAllDiveImages()
                            .then(images => setAllDiveImages(images))
                    })

            }
        }
    }

    const handleImgDelete = (id) => {
        deleteImage(id)
        getAllDiveImages()
            .then(images => setAllDiveImages(images))
    }


    const options = { buttons: { showDownloadButton: false } }

    return (
        <SimpleReactLightbox>
            <div>
                <h2 className='diveNumber'>Photos</h2>
                <section className="dive-images">
                    <SRLWrapper options={options}>
                        <div className="diveImagesDiv">
                            {postedImages.map(image => {
                                return <>
                                    <div className="diveImage">
                                        <img src={image.imageUrl} alt="divelog" />
                                        <button onClick={() => handleImgDelete(image.id)}>Delete</button>
                                    </div>
                                </>
                            })}
                        </div>
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
                <fieldset className="upload-images-container">
                    <label htmlFor="urlUpload">Upload from Url</label>
                    <textarea name="urlUpload" placeholder='Separate multiple urls with a comma' rows="7" cols="30"
                        onKeyPress={handleUrlUpload} />
                </fieldset>
            </div >
        </SimpleReactLightbox>
    )
}
