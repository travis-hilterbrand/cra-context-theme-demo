import React, { Component } from "react";

const TestProviderDefaultProps = {
  direction: 'ltr',
  theme: 'day'
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
