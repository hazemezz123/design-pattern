import { useContext, createContext, useState } from "react";

const Context = createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  function ToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  const useStore = {
    theme,
    ToggleTheme,
  };
  return <Context.Provider value={useStore}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
