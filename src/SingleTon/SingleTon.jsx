import React from "react";
import { useStore } from "./ContextSingleTon";
const SingleTon = () => {
  const { theme, ToggleTheme } = useStore();
  return (
    <div>
      <h1>SingleTon</h1>
      <p>Current Theme: {theme}</p>
      <button onClick={ToggleTheme}>Switch Theme</button>
    </div>
  );
};

export default SingleTon;
