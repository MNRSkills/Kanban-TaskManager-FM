import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ThemeProvider } from "./context/theme";

// All our components here
import AllBoards from "./Components/allBoards";

function App() {
  const [themeMode, setThemeMode] = useState("dark");
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <AllBoards />
      Hello world
    </ThemeProvider>
  );
}

export default App;
