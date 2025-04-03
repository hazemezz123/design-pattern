import React from "react";
import SRP from "./designPattern/SRP";
const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Welcome To the design pattern Principles the main property</h1>
      <strong>
        You are in the SRP (Single responsibility Principle) Branch Here
      </strong>
      <SRP />
    </div>
  );
};

export default App;
