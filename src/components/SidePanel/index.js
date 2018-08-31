import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Panel, User, Avatar, UserDetails,
} from './styles';

const SidePanel = ({ users }) => (
  <Panel>
    {users
      && users.data.map(user => (
        <User key={user.id}>
          <Avatar src={user.avatar} />
          <UserDetails>
            <span>{user.name}</span>
            <span>{user.username}</span>
          </UserDetails>
        </User>
      ))}
  </Panel>
);

SidePanel.propTypes = {
  users: PropTypes.shape({
    data: PropTypes.arrayOf({
      id: PropTypes.number,
      avatar: PropTypes.string,
      user: PropTypes.string,
      username: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(SidePanel);
