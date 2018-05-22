import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Item } from 'semantic-ui-react';
import { getUserInfo } from './asyncActions';
import UserInfo from '../components/UserInfo';


class Profile extends React.Component {
  static propTypes = {
    userId: PropTypes.number,
    getUserInfo: PropTypes.func.isRequired,
    userInfo: PropTypes.object
  }

  componentDidMount() {
    const { userId } = this.props;

    if (userId) {
      this.props.getUserInfo(userId);
    }
  }

  render() {
    if (this.props.userInfo) {
      return (
        <Item>
          <Item.Header as='h1'>Profile</Item.Header>
          <Item.Content>
            <UserInfo userInfo={this.props.userInfo}/>
          </Item.Content>
        </Item>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  userInfo: state.user.info
});

const mapDispatchToProps = dispatch => ({
  getUserInfo: (id) => dispatch(getUserInfo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
