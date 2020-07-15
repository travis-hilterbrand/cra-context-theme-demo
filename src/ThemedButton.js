import React from "react";
import { createUseStyles } from "react-jss";

//import { useTestContext } from "./TestContext";

const useStyles = createUseStyles({
  button: {
    background: '#eee',
    height: 60,
  },
});

export default function ThemedButton() {
  /*
    const testContext = useTestContext();
    style={{ color: testContext.theme.colors.primary }}
  */
  const classes = useStyles();
  return <button className={classes.button}>I am styled by theme context!</button>;
};