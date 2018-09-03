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
            <span>
              {user.username}
              <i className="fa fa-times" aria-hidden="true" />
              <i className="fa fa-angle-right" aria-hidden="true" />
            </span>
          </UserDetails>
        </User>
      ))}
  </Panel>
);

SidePanel.propTypes = {
  users: PropTypes.shape({
    feedback: PropTypes.string,
    search: PropTypes.string,
    data: PropTypes.arrayOf({
      id: PropTypes.number,
      avatar: PropTypes.string,
      user: PropTypes.string,
      username: PropTypes.string,
      position: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(SidePanel);
