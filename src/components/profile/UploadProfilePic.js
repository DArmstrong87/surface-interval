import React, { useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { useState } from "react";
import { getCurrentUser } from "../application/ApiManager";
import "./UploadProfilePic.css";

export const ProfilePicUpload = () => {
  const [image, setImage] = useState([])
  const [user, setUser] = useState({})
  const profilePatch = { "profilePicUrl": image[0]?.data_url }
  const maxNumber = 1;
  const onChange = (imageList) => {
    setImage(imageList);
  };

  useEffect(() =>
    getCurrentUser()
      .then((data) => setUser(data[0])
      ), []
  )

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

  return (<section className="profilePicContainer">
    {user.profilePicUrl === '' ?
      < div className="uploadButton" >
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
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
          }) => (
            <div>
              {imageList.map((image, index) => (
                <div key={index} className="profilePic">
                  <img src={image.data_url} alt="profilePic" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={UpdateProfilePic(image.data_url)}>Update</button>
                  </div>
                </div>
              ))}
              <button
                style={isDragging ? { color: "skyblue" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                Upload Profile Pic
              </button>
            </div>
          )}
        </ImageUploading>
      </div >
      :
      <div className="profilePic">
        <img src={user.profilePicUrl} alt="profilePic" />
        < div className="uploadButton" >
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
                {imageList.map((image, index) => (
                  <div key={index} className="profilePic">
                    <div className="image-item__btn-wrapper">
                      <button onClick={UpdateProfilePic(image.data_url) && onImageRemove(index)}>Save</button>
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
      </div>
    }
  </section>
  );
}