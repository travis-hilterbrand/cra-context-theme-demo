import React from "react";

import "./App.css";
import { createTheme, TestProvider } from "./TestContext";
import ThemedButton from './ThemedButton';

const myTheme = createTheme({
  colors: {
    primary: 'green',
  }
})

function App() {
  const [direction, setDirection] = React.useState('ltr');
  const handleToggleDirection = () => {
    if (direction === 'ltr') {
      setDirection('rtl');
    }
    else {
      setDirection('ltr');
    }
  };

  return (
    <TestProvider direction={direction} theme={myTheme}>
      <div className="App">
        <button onClick={handleToggleDirection}>Toggle Direction</button>
        <hr />
        <ThemedButton />
      </div>
    </TestProvider>
  );
}

export default App;
