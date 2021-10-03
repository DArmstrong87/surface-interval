import React, { useEffect } from "react";
import { useState } from "react";
import { getCurrentUser, updateProfilePic } from "../application/ApiManager";
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

  const handleSubmit = () => {
    updateProfilePic(user, profilePatch, setUser)
    setProfileUpload(false)
  }

  return (
    <>
      {profileUpload ? '' :
        <>
          <h2 className="profile-h2">{user.name}</h2>
          <div className="profilePic">
            <img src={user.profilePicUrl} alt="Profile pic" />
            <button onClick={() => setProfileUpload(true)}>Update</button>
          </div>
        </>
      }

      {profileUpload ? <>
        {profilePatch.profilePicUrl !== "" ?
          <img src={profilePatch.profilePicUrl} alt="Profile pic" /> : ''}
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