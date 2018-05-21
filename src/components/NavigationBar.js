import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

const NavBar = (props) => (
  <React.Fragment>
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
  </React.Fragment>
);

NavBar.propTypes = {
  routes: PropTypes.array,
};

export default NavBar;
