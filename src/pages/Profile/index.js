import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Item, Loader } from 'semantic-ui-react';
import UserInfo from 'components/UserInfo';
import { getUserInfo } from './actions';


class Profile extends React.Component {
  static propTypes = {
    userId: PropTypes.number,
    getUserInfo: PropTypes.func.isRequired,
    userInfo: PropTypes.object,
    isLoading: PropTypes.bool
  }

  componentDidMount() {
    const { userId } = this.props;

    if (userId) {
      this.props.getUserInfo(userId);
    }
  }

  render() {
    return (
      <React.Fragment>
        <Loader active={this.props.isLoading} size='medium'>Loading</Loader>
        {this.props.userInfo &&
        <Item>
          <Item.Header as='h1'>Profile</Item.Header>
          <Item.Content>
            <UserInfo userInfo={this.props.userInfo}/>
          </Item.Content>
        </Item>
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.user.id,
  userInfo: state.user.info,
  isLoading: state.user.isLoading
});

export default connect(mapStateToProps, { getUserInfo })(Profile);
