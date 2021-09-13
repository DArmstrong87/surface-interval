import React, { useEffect } from "react";
// import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import { useState } from "react/cjs/react.development";
import { getCurrentUser } from "../application/ApiManager";
import "./UploadProfilePic.css";

export const ProfilePicUpload = () => {
  const [image, setImage] = useState([])
  const [user, setUser] = useState({})
  const profilePic = user.profilePicUrl
  console.log(user)
  const profilePatch = { "profilePicUrl": image[0]?.data_url }
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImage(imageList);
  };

  useEffect(() =>
    getCurrentUser()
      .then((data) => setUser(data[0])
      ), {}
  )



  const UpdateProfilePic = () => {
    const fetchOption = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(profilePatch)
    }

    return fetch(`http://localhost:8088/users/${user.id}`, fetchOption)
      .then(() =>
        getCurrentUser()
          .then((data) => setUser(data[0])
          ), {}
      )
  }

  console.log(image)
  return (<section>
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
            onImageRemoveAll,
            onImageRemove,
            isDragging,
            dragProps
          }) => (
            // write your building UI
            <div>
              {imageList.map((image, index) => (
                <div key={index} className="profilePic">
                  <img src={image.data_url} alt="profilePic" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={UpdateProfilePic(image.data_url), onImageRemove(index)}>Save</button>
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
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
              onImageUpdate,
              onImageRemove,
              onImageRemoveAll,
              isDragging,
              dragProps
            }) => (
              // write your building UI
              <div>
                {imageList.map((image, index) => (
                  <div key={index} className="profilePic">
                    <img src={image.data_url} alt="profilePic" />
                    <div className="image-item__btn-wrapper">
                      <button onClick={UpdateProfilePic(image.data_url), onImageRemove(index)}>Save</button>
                      <button onClick={() => onImageUpdate(index)}>Update</button>
                      <button onClick={() => onImageRemove(index)}>Remove</button>
                    </div>
                  </div>
                ))}
                <button
                  style={isDragging ? { color: "skyblue" } : null}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  Update
                </button>
                {/* &nbsp;
            <button onClick={onImageRemoveAll}>Remove image</button> */}
              </div>
            )}
          </ImageUploading>
        </div >
      </div>

    }


  </section>
  );
}