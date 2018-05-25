import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Icon } from 'semantic-ui-react';

class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container text>
          <p></p>
          <Header as='h2'>
          ~Ooops something wrong
            <Icon loading size='small' name='sun' />
          </Header>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
