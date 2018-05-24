import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const LogInBtn = (props) => {
  if (props.isAuthorized) {
    return <Button onClick={props.signOut}>Log Out</Button>;
  }

  return <NavLink to='/login'><Button color='green'>Log In</Button></NavLink>;
};

LogInBtn.propTypes = {
  isAuthorized: PropTypes.bool,
  signOut: PropTypes.func.isRequired
};

export default LogInBtn;
