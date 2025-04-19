import React from "react";
import FactoryPattern from "./components/FactoryPattern";
import { ThemeContextProvider } from "./Context/ThemeContext";
import SingleTon from "./components/SingleTon";
import Adapter from "./components/Adapter";
import Template from "./components/Template";
import Composite from "./components/Composite.jsx";
 
const App = () => {
  return (
    <ThemeContextProvider>
      <div >
        Welcome To the deign pattern Principles
        <section>
          <FactoryPattern />
        </section>
        <hr />
        <section>
          <SingleTon />
        </section>
        <section>
          <Adapter />
        </section>
        <section>
          <Template />
        </section>
        <section>
          <Composite />
        </section>
      </div>
    </ThemeContextProvider>
  );
};

export default App;
