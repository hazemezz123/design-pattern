import React from "react";

const ISP = () => {
  return (
    <div>
      <UserInfoWithDeleteButton
        user={{
          email: "jhon@gmail.com",
          name: "jhon",
          age: 20,
          phone: 123456789,
        }}
      />
    </div>
  );
};

function UserInfo({ email, name, age, phone }) {
  return (
    <div>
      <h1>Email: {email}</h1>
      <p>Name: {name}</p>
      <strong>Age : {age}</strong>
      <br />
      <i>Phone: {phone}</i>
    </div>
  );
}
function UserInfoWithDeleteButton({ user }) {
  return (
    <div>
      <UserInfo {...user} />
      <button onClick={() => alert("the user is deleted")}>Delete</button>
    </div>
  );
}

export default ISP;
