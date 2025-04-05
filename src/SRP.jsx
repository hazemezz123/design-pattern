import React from "react";

const SRP = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

function UserInfo({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function LogoutButton() {
  return <button onClick={() => alert("logged out")}>Logout</button>;
}

function UserProfile() {
  return (
    <div>
      <UserInfo user={{ name: "Jhon", email: "Jhon@gmail.com" }} />
      <LogoutButton />
    </div>
  );
}
export default SRP;
