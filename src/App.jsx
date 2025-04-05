import React from "react";
import SRP from "./SRP";
import OCP from "./OCP";
import LSP from "./LSP";
import ISP from "./ISP";
import DIP from "./DIP";
const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1> Welcome To the deign pattern Principles</h1>
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
    </div>
  );
};

export default App;
