import axios from 'axios';
import { Cloudinary } from 'cloudinary-core';
import { useEffect, useState } from 'react';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import "./ImageUpload.css"
import { getAllDiveImages, getDiveImages, postImages } from '../../application/ApiManager';

export const DiveLogImageUpload = ({ setDiveImages, diveImages, currentDive }) => {
    const [postedImages, setPostedImages] = useState([])
    const [allDiveImages, setAllDiveImages] = useState([])

    useEffect(
        () => {
            getAllDiveImages()
                .then(images => setAllDiveImages(images))
        }, []
    )
    useEffect(
        () => {
            getDiveImages(currentDive)
                .then(images => setPostedImages(images))
        }, [allDiveImages]
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
                .then(getAllDiveImages().then(images => setAllDiveImages(images)))
                
        }
    }

    return (
        <div>
            <h2 className='diveNumber'>Images</h2>
            <section className="preview-images">
            {postedImages.map(image=>{
                return <>
                <div className="imgPreview">
                            <img src={image.imageUrl} />
                        </div>
                </>
            })}
            </section>

            <fieldset>
                <input type="file" multiple onChange={(event) => {
                    setDiveImages(event.target.files)
                }
                }></input>
                <button onClick={uploadImage}>
                    Upload Image
                </button>
            </fieldset>
        </div>
    )
}
