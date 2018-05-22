import React from 'react';
import PropTypes from 'prop-types';
import { Item, List } from 'semantic-ui-react';

const UserInfo = (props) => (
  <Item.Meta>
    <div>
      <strong>City: </strong>
      <span>{props.userInfo.city}</span>
    </div>
    <div>
      <strong>Languages: </strong>
      <br/>
      <ul>
        {props.userInfo.languages.map(language =>
          <li key={language}>{language}</li>
        )}
      </ul>
    </div>
    <div>
      <strong>Links: </strong>
      <List>
        {props.userInfo.social.map(profile =>
          <List.Item
            key={profile.link}
            icon={profile.icon}
            content={<a target="_blank" href={profile.link}>{profile.label}</a>}
          />
        )}
      </List>
    </div>
  </Item.Meta>
);

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    city: PropTypes.string.isRequired,
    languages: PropTypes.arrayOf(PropTypes.string),
    social: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }))
  })
};

export default UserInfo;
