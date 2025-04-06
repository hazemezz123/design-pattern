import React from "react";

const ProfileCard = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
};

export default ProfileCard;
