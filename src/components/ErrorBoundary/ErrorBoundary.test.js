import React from 'react';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <ErrorBoundary>
        <div className="unique" />
      </ErrorBoundary>
    ));
    expect(wrapper.state().hasError).toEqual(false);
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);
  });

  it('simulates catch error', () => {
    const wrapper = shallow(<ErrorBoundary />);
    wrapper.setState({ hasError: true });

    expect(wrapper.find('Header')
      .shallow()
      .contains('~Ooops something wrong')
    ).toEqual(true);
  });
});
