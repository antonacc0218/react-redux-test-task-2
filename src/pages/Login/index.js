import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Dimmer, Grid, Form, Segment, Button, Loader } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { logIn } from './actions';

class Login extends React.Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool,
    isLoading: PropTypes.bool
  };

  state = { email: '', password: '', isLoading: false };

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  isFormValid = () => {
    const { email, password } = this.state;

    return email && password;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const failCb = () => this.setState({ password: '' });

    this.props.logIn({
      email,
      password
    }, failCb);
  }

  render() {
    const { isAuthorized, isLoading } = this.props;

    if (isAuthorized) {
      return <Redirect to='/profile' />;
    }

    const { email, password, } = this.state;
    return (
      <Grid id='login' verticalAlign='middle' textAlign='center'>
        <Grid.Column width={6}>
          <Form onSubmit={this.handleSubmit}>
            <Segment>
              <Form.Input icon='user' iconPosition='left' type='email' name='email' placeholder='E-mail address' value={email} onChange={this.handleChange}></Form.Input>
              <Form.Input icon='lock' iconPosition='left' type='password' name='password' placeholder='Password' value={password} onChange={this.handleChange}></Form.Input>
              <Button type='submit' disabled={!this.isFormValid() || isLoading} fluid color='teal'>Login</Button>
            </Segment>
          </Form>
        </Grid.Column>
        <Dimmer active={isLoading}>
          <Loader size='medium'>Loading</Loader>
        </Dimmer>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: Boolean(state.user.id),
  isLoading: state.user.isLoading
});

export default connect(mapStateToProps, { logIn })(Login);
