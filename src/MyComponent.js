import React from "react";
import Button from "./Button";
import { ThemeContextConsumer } from "./ThemeContext";

function MyComponent(props) {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className={`${context.theme}-image image`}>
          <div className={`${context.theme}-ball ball`} />
          <Button />
        </div>
      )}
    </ThemeContextConsumer>
  );
}

MyComponent.contextType = ThemeContextConsumer;

export default MyComponent;
