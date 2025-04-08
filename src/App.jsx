import React from "react";
import SRP from "./components/SRP";
import OCP from "./components/OCP";
import LSP from "./components/LSP";
import ISP from "./components/ISP";
import DIP from "./components/DIP";
const App = () => {
  return (
    <h1 style={{ textAlign: "center" }}>
      Welcome To the deign pattern Principles
      <section>
        <SRP />
      </section>
      <hr />
      <section>
        <OCP />
      </section>
      <hr />
      <section>
        <LSP />
      </section>
      <hr />
      <section>
        <ISP />
      </section>
      <section>
        <DIP />
      </section>
    </h1>
  );
};

export default App;
