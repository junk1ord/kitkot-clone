import React from "react";

const MicroCard = ({ user }) => {
  return (
    <div className="section microcard">
      <img className="user-profile" src={user.avatar} width={"100%"} alt="" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
        }}
      >
        <strong>{user.username}</strong>
        <div>{user.name}</div>
      </div>
    </div>
  );
};

export default MicroCard;
