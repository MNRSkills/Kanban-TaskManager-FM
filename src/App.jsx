import { useState, useEffect, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./context/theme";

// All our components here
import AllBoards from "./Components/allBoards";

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    // Read from localStorage, default to lightMode if not found
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : false;
  });

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    // Write to local storage whenever theme changes
    localStorage.setItem("theme", JSON.stringify(themeMode));
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <AllBoards />
      Hello world
    </ThemeProvider>
  );
}

export default App;
