import React from "react";
import SingleTon from "./SingleTon/SingleTon";
import { AppProvider } from "./SingleTon/ContextSingleTon";
const App = () => {
  return (
    <AppProvider>
      <div
        style={{ textAlign: "center", color: "white", height: "100vh" }}
        className="bg-dark "
      >
        <h1> Welcome To the deign pattern Principles</h1>
        <strong>SingleTon Is here ! </strong>
        <section className="mt-5 ">
          <SingleTon />
        </section>
      </div>
    </AppProvider>
  );
};

export default App;
