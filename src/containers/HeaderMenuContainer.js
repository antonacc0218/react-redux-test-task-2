import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signOut } from 'pages/Login/actions';
import HeaderMenu from 'components/HeaderMenu';

class HeaderMenuContainer extends React.Component {
  static propTypes = {
    isAuthorized: PropTypes.bool,
    routes: PropTypes.array,
    signOut: PropTypes.func.isRequired
  };

  render() {
    return (
      <HeaderMenu
        isAuthorized={this.props.isAuthorized}
        routes={this.props.routes}
        signOut={this.props.signOut}
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthorized: Boolean(state.user.id)
});

export default connect(mapStateToProps, { signOut })(HeaderMenuContainer);
