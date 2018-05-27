import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import './style.less';

class NotificationBar extends React.Component {
  static propTypes = {
    notifications: PropTypes.array,
    removeMessage: PropTypes.func
  };

  render() {
    return (
      <div className='notification-bar'>
        {this.props.notifications.map((message, index) =>
          <Message
            key={index}
            color={message.isError ? 'red' : 'green'}
            header={message.value}
            onDismiss={() => this.props.removeMessage(index)}
          />
        )}
      </div>
    );
  }
}

export default NotificationBar;
