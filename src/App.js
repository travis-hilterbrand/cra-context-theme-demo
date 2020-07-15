import React from "react";

import "./App.css";
import { useTestContext, TestContext, TestProvider } from "./TestContext";

function ThemedButton() {
  /*
    const context = React.useContext(TestContext);
    console.log("context", context);
    const contextClass = context && context.theme ? context.theme : undefined;
    return <button className={contextClass}>I am styled by theme context!</button>;
  */
  const testContext = useTestContext();
  return <button className={testContext.theme}>I am styled by theme context!</button>;
};

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
  const [theme, setTheme] = React.useState('day');
  const handleToggleTheme = () => {
    if (theme === 'day') {
      setTheme('night');
    }
    else {
      setTheme('day');
    }
  };

  /*
  return (
    <div className="App">
      <ThemedButton />
    </div>
  );
*/
  return (
    <TestProvider direction={direction} theme={theme}>
      <div className="App">
        <button onClick={handleToggleDirection}>Toggle Direction</button>
        <button onClick={handleToggleTheme}>Toggle Theme</button>
        <hr />
        <ThemedButton />
      </div>
    </TestProvider>
  );
  /*
    return (
      <TestProvider theme={"night"}>
        <div className="App">
          <ThemedButton />
        </div>
      </TestProvider>
    );
  */
}

export default App;
