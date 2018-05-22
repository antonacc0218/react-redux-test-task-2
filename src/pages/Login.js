import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Form, Segment, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { logIn } from './asyncActions';

class Login extends React.Component {
  static propTypes = {
    logIn: PropTypes.func.isRequired,
    isAuthorized: PropTypes.bool
  };

  state = { email: '', password: '' };

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
    const { isAuthorized } = this.props;

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
              <Button type='submit' disabled={!this.isFormValid()} fluid color='teal'>Login</Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: state.isAuthorized
});

const mapDispatchToProps = dispatch => ({
  logIn: (params, failCb) => dispatch(logIn(params, failCb))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
