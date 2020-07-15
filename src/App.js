import React from "react";

import "./App.css";
import { createTheme, useTestContext, TestProvider } from "./TestContext";

function ThemedButton() {
  /*
    const context = React.useContext(TestContext);
    console.log("context", context);
    const contextClass = context && context.theme ? context.theme : undefined;
    return <button className={contextClass}>I am styled by theme context!</button>;
  */
  const testContext = useTestContext();
  return <button style={{ color: testContext.theme.colors.primary }}>I am styled by theme context!</button>;
};

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

  /*
  return (
    <div className="App">
      <ThemedButton />
    </div>
  );
*/
  return (
    <TestProvider direction={direction} theme={myTheme}>
      <div className="App">
        <button onClick={handleToggleDirection}>Toggle Direction</button>
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
