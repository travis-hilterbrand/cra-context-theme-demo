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
  /*
<ThemeContext.Provider value={themes.dark}>
</ThemeContext.Provider>
*/
  return (
    <div className="App">
      <ThemedButton />
    </div>
  );
}

export default App;
