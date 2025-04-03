import React from "react";
import FactoryPattern from "./FactoryPattern";

const App = () => {
  return (
    <div
      style={{ textAlign: "center", color: "white", height: "100vh" }}
      className="bg-dark "
    >
      <h1> Welcome To the deign pattern Principles</h1>
      <strong>Factory Pattern Is here ! </strong>
      <section className="mt-5 ">
        <FactoryPattern />
      </section>
    </div>
  );
};

export default App;
