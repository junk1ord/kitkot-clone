import axios from "axios";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Upload = () => {
  const username = "junk1ord";
  const name = "Rakshit Deshmukh";
  const avatar = "https://i.imgur.com/Ds51cmJ.png";
  const today = new Date();
  const timestamp = today.toISOString();
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState(null);

  const data = {
    id: uuid(),
    name: name,
    username: username,
    avatar: avatar,
    is_followed: false,
    video: video,
    caption: caption,
    likes: 0,
    comments: 0,
    timestamp: timestamp,
    button_visible: false,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("/.netlify/functions/add", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="upload-page">
      <br />
      <h1>Upload video</h1>
      <p style={{ marginTop: "2rem" }}>
        This video will be published to <strong>@{username}</strong>
      </p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="section">
            <div className="image-upload"></div>
            <div className="form-section">
              <div className="section input-section">
                <label className="bold">Caption</label>
                <input
                  className="input"
                  name="caption"
                  onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <div className="break"></div>
              <div className="section input-section">
                <label className="bold">Video Url</label>
                <input
                  className="input"
                  name="video"
                  onChange={(e) => setVideo(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
