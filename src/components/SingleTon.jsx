import React from "react";
import { useTheme } from "../Context/ThemeContext";
const SingleTon = () => {
  const { theme, ToggleTheme } = useTheme();
  return (
    <div>
      <h1>Your Theme now is {theme}</h1>
      <strong>Click To Change the theme</strong>
      <button onClick={ToggleTheme}>Click</button>
    </div>
  );
};

export default SingleTon;
