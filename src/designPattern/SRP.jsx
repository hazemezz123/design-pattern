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
      <p>{user.age}</p>
      <strong>{user.email}</strong>
    </div>
  );
}

function LogOutButton() {
  return (
    <button onClick={() => alert("alert Form the LogOutButton ")}>
      Log Out Button
    </button>
  );
}
function UserProfile() {
  return (
    <div style={{}}>
      <UserInfo user={{ name: "hazem", age: "18", email: "hazem@gmail.com" }} />
      <LogOutButton />
    </div>
  );
}
export default SRP;
