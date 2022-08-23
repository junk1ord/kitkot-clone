import React from "react";

const MiniCard = ({ user, toggleFollow }) => {
  return (
    <div className="section minicard">
      <div className="section">
        <img className="user-profile" src={user.avatar} width={"100%"} alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <strong>{user.username}</strong>
          <div>{user.name}</div>
        </div>
      </div>
      {user.button_visible && (
        <div
          style={{ margin: "auto 0" }}
          className={user.is_followed ? "followed-button" : "follow-button"}
          onClick={() => toggleFollow(user)}
        >
          {user.is_followed ? "Following" : "Follow"}
        </div>
      )}
    </div>
  );
};

export default MiniCard;
