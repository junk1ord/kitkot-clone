import React from "react";

const Card = ({ user, toggleFollow }) => {
  return (
    <div className="card">
      <div className="break" />
      <div className="section">
        <div className="user-info">
          <img
            className="user-profile"
            src={user.avatar}
            width={"100%"}
            alt=""
          />
          <div style={{ width: "100%" }}>
            <div
              className="section"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div
                style={{
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h3 style={{ margin: 0 }} className="bold">
                  {user.name}
                </h3>
              </div>
              <div style={{ display: "flex" }}>
                <div style={{ fontSize: "20px", width: "50%" }}>
                  <em>{user.username}</em>
                </div>
                <div
                  style={{ fontSize: "10px", width: "50%", marginTop: "10px" }}
                  className=""
                >
                  {user.timestamp}
                </div>
              </div>
            </div>
            <p>{user.caption}</p>
          </div>
        </div>
        {user.button_visible && (
          <div
            className={user.is_followed ? "followed-button" : "follow-button"}
            onClick={() => toggleFollow(user)}
          >
            {user.is_followed ? "Following" : "Follow"}
          </div>
        )}
      </div>
      <video className="video" controls>
        <source src={user.video} type="video/mp4" />
      </video>
      <div className="section socials" style={{ marginTop: "1rem" }}>
        <i className="far fa-heart"></i>
        <div className="social-tag">{user.likes}</div>
        <i className="far fa-comment-dots"></i>
        <div className="social-tag">{user.comments}</div>
        <i className="far fa-share-square"></i>
      </div>
    </div>
  );
};

export default Card;
