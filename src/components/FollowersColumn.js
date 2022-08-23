import React from "react";
import MicroCard from "../components/MicroCard";

const FollowersColumn = (topFiveFollowing) => {
  const users = topFiveFollowing.users;
  return (
    <div className="followers-column">
      <div className="followers-section">
        <div className="home" />
        <h2 className="bold red">For You</h2>
      </div>
      <div className="followers-section">
        <div className="following" />
        <h2>Following</h2>
      </div>
      <hr />
      <strong>
        <em>Your top accounts</em>
      </strong>
      <div style={{ padding: "1rem 0" }}>
        {users &&
          users.map((user, index) => <MicroCard key={index} user={user} />)}
      </div>
      <hr />
    </div>
  );
};

export default FollowersColumn;
