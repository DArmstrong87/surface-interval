import React, { useEffect } from "react";
import { useState } from "react";
import { getCurrentUser } from "../application/ApiManager";
import "./UploadProfilePic.css";
import axios from "axios";

export const ProfilePicUpload = () => {
  const [image, setImage] = useState()
  const [profileUpload, setProfileUpload] = useState(false)
  const [user, setUser] = useState({})
  const [profilePatch, setProfilePatch] = useState({ profilePicUrl: '' })

  useEffect(() =>
    getCurrentUser()
      .then((data) => setUser(data[0])
      ), []
  )

  const uploadImage = () => {
    const imageData = new FormData()
    const img = { ...image }
    const patch = { ...profilePatch }
    imageData.append("file", img[0])
    imageData.append('upload_preset', 'profilePic')
    axios.post('https://api.cloudinary.com/v1_1/surface-interval/image/upload', imageData)
      .then(res => {
        patch.profilePicUrl = res?.data?.secure_url
        setProfilePatch(patch)
      })
  }

  const UpdateProfilePic = () => {
    const fetchOption = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(profilePatch)
    }

    return fetch(`https://surface-interval-api-ferdk.ondigitalocean.app/users/${user.id}`, fetchOption)
      .then(() =>
        getCurrentUser()
          .then((data) => setUser(data[0])
          ), {}
      )
  }

  const handleSubmit = () => {
    UpdateProfilePic()
    setProfileUpload(false)
  }

  return (
    <>
      {profileUpload ? '' :
        <div className="profilePic">
          <img src={user.profilePicUrl} />
          <button onClick={() => setProfileUpload(true)}>Update</button>
        </div>
      }

      {profileUpload ? <>
        {profilePatch.profilePicUrl !== "" ? <img src={profilePatch.profilePicUrl} /> : ''}
        <div className="cert-card-form">
          <fieldset className="upload-images-container">
            <div>
              <input className="fileUpload" name="fileUpload" type="file"
                onChange={(event) => { setImage(event.target.files) }
                } />
            </div>
            <button className="upload-profile-pic" onClick={uploadImage}>
              Upload
            </button>
          </fieldset>
          <div className="cert-buttons">
            <button onClick={handleSubmit}>Save</button>⚓
            <button onClick={() => setProfileUpload(false)}>Cancel</button>
          </div>
        </div>
      </>
        : ''}
    </>)
}