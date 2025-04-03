import React from "react";

const ISP = () => {
  return (
    <div>
      <UserInfoWithDelete
        user={{
          name: "John",
          email: "john@gmail.com",
          Phone: "1234567890",
          address: "123 Main St",
        }}
        OnDelete={() => {
          alert("User Deleted");
        }}
      />
    </div>
  );
};

function UserInfo({ name, email, Phone, address }) {
  return (
    <div>
      <h1>User Information</h1>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Phone : {Phone}</p>
      <p>Address : {address}</p>
    </div>
  );
}

function UserInfoWithDelete({ user, OnDelete }) {
  return (
    <div>
      <UserInfo {...user} />
      <button onClick={OnDelete}>Delete</button>
    </div>
  );
}
export default ISP;
