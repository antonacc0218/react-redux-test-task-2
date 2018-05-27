import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { notificationRemoveByIndex } from 'actionCreators';
import NotificationBar from '../components/NotificationBar';

class NotificationBarContainer extends React.Component {
  static propTypes = {
    notifications: PropTypes.array,
    removeMessage: PropTypes.func
  };

  render() {
    return (
      <NotificationBar
        notifications={this.props.notifications}
        removeMessage={this.props.removeMessage}
      />
    );
  }
}

const mapStateToProps = state => ({
  notifications: state.notifications
});

export default connect(
  mapStateToProps,
  { removeMessage: notificationRemoveByIndex }
)(NotificationBarContainer);
