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
