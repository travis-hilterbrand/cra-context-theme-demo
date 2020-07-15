import React, { Component } from "react";
import { clone, merge } from 'lodash';

const DefaultTheme = {
  colors: {
    primary: 'blue',
  }
};
export function createTheme(userTheme) {
  return merge({}, DefaultTheme, userTheme);
}

const TestProviderDefaultProps = {
  direction: 'ltr',
  theme: clone(DefaultTheme)
};

export const TestContext = React.createContext(TestProviderDefaultProps);
export function useTestContext() {
  return React.useContext(TestContext);
}

export class TestProvider extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.direction !== prevProps.direction) {
      window.document.body.dir = this.props.direction;
      console.info('TestProvider setdirection', window.document.body);
    }
  }
  render() {
    const { children, direction, theme } = this.props;

    console.info('TestProvider render', this.props);
    return (
      <TestContext.Provider
        value={{
          direction,
          theme,
        }}
      >
        {children}
      </TestContext.Provider>
    );
  }
}
TestProvider.defaultProps = TestProviderDefaultProps;
