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
  <button onClick={() => alert("Logged Out")}>Log out Button</button>;
}

function UserProfile() {
  return (
    <>
      <UserInfo user={{ name: "jhon", email: "jhon@gmail.com" }} />
      <LogoutButton />;
    </>
  );
}

export default SRP;
