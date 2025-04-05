import React from "react";

const Object = {
  name: "Jhon",
  email: "Jhon@gmail.com",
  age: 20,
  Grade: "A",
};
const ISP = () => {
  return (
    <div>
      <UserInfo name="Jhon" email="Jhon@gmail.com" age={20} Grade="A" />
      <UserCardWithDelete user={Object} />
    </div>
  );
};

function UserInfo({ name, email, age, Grade }) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>email: {email}</h2>
      <h3>age: {age}</h3>
      <h4>Grade: {Grade}</h4>
    </div>
  );
}

function UserCardWithDelete({ user }) {
  return (
    <div>
      <UserInfo {...user} />
      <button onClick={() => alert("deleted")}>Delete</button>
    </div>
  );
}
export default ISP;
