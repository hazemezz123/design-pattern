import React from "react";

const ApiData = {
  user_name: "Amira",
  user_email: "Amira@gmail.com",
};

function UserInfo({ user }) {
  return (
    <div>
      <h1>User info</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

const Adapter = () => {
  class AdapterData {
    constructor(HamadaApi) {
      this.name = HamadaApi.user_name;
      this.email = HamadaApi.user_email;
    }
  }

  const AdaptedData = new AdapterData(ApiData);
  return (
    <div>
      <UserInfo user={AdaptedData} />
    </div>
  );
};

export default Adapter;
