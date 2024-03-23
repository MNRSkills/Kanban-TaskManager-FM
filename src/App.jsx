import { useState, useEffect, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/compContainer.css";
import { ThemeProvider } from "./context/theme";

// All our components here
import AllBoards from "./Components/allBoards";
import BoardsFetch from "./Components/FetchBoard/boardsFetch";

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
    updateCSSFile();
    localStorage.setItem("theme", JSON.stringify(themeMode));
  }, [themeMode]);

  const updateCSSFile = () => {
    const root = document.documentElement;
    if (root.classList.length > 0) {
      root.classList.remove(...root.classList);
      root.classList.toggle(themeMode);
    } else {
      root.classList.toggle(themeMode);
    }
  };

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="component-container">
        <AllBoards />
        Hello world
        <BoardsFetch />
      </div>
    </ThemeProvider>
  );
}

export default App;
