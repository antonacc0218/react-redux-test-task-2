import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NotificationBar from '../components/NotificationBar';
import { notificationRemoveByIndex } from '../store/actionCreator';

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

const mapDispatchToProps = dispatch => ({
  removeMessage: (index) => dispatch(notificationRemoveByIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBarContainer);
