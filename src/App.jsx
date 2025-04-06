import React from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <h1 style={{ textAlign: "center" }}>
      Welcome To the deign pattern Principles
      <ProfileCard name="HaZem" age="12" />
    </h1>
  );
};

export default App;
