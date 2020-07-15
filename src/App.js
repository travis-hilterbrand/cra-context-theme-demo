import React from "react";

import "./App.css";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
const ThemeContext = React.createContext(themes.light);

function ThemedButton() {
  const theme = React.useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
function App() {
  const [theme, setTheme] = React.useState(themes.dark);
  const handleToggle = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };
  return (
    <div className="App">
      <button onClick={handleToggle}>Toggle</button>
      <hr />
      <ThemeContext.Provider value={theme}>
        <ThemedButton />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
