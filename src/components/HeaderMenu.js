import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Container } from 'semantic-ui-react';
import NavBar from './NavigationBar';
import LogInBtn from './LogInBtn';

const HeaderMenu = (props) => (
  <Menu className='nav-bar' fixed='top' inverted>
    <Container>
      <Menu.Menu position='left'>
        <NavBar routes={props.routes}/>
      </Menu.Menu>
      <Menu.Menu position='right'>
        <Menu.Item>
          <LogInBtn isAuthorized={props.isAuthorized} signOut={props.signOut}/>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

HeaderMenu.propTypes = {
  routes: PropTypes.array,
  isAuthorized: PropTypes.bool,
  signOut: PropTypes.func
};

export default HeaderMenu;
