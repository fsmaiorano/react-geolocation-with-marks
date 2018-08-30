import React from 'react';
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

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(SidePanel);
