import React from "react";

const Adaptor = () => {
  const apiData = {
    user_name: "user",
    user_email: "user@gmail.com",
  };
  class UserAdapter {
    constructor(apiData) {
      this.name = apiData.user_name;
      this.email = apiData.user_email;
    }
  }
  const adaptedData = new UserAdapter(apiData);
  return (
    <div>
      <h1>Adapter</h1>
      <UserInfo user={adaptedData} />
    </div>
  );
};

function UserInfo({ user }) {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}
export default Adaptor;
