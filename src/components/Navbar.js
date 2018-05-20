import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu, Container } from 'semantic-ui-react';

const NavBar = (props) => (
  <Menu className='nav-bar' fixed='top' inverted>
    <Container>
      <Menu.Menu position='left'>
        {props.routes.map(route =>
          <Menu.Item key={route.path}>
            <NavLink
              key={route.path}
              exact={route.isExact}
              to={route.path}
            >
              {route.name}
            </NavLink>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Container>
  </Menu>
);

NavBar.propTypes = {
  routes: PropTypes.array,
};

export default NavBar;
