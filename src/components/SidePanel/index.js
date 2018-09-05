import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { Creators as Actions } from '../../store/ducks/users';

import {
  Panel, User, Avatar, UserDetails, UserActions,
} from './styles';

class SidePanel extends Component {
  static propTypes = {
    removeUserRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({
      feedback: PropTypes.string,
      search: PropTypes.string,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          avatar: PropTypes.string,
          name: PropTypes.string,
          username: PropTypes.string,
          position: PropTypes.shape({
            lat: PropTypes.number,
            lng: PropTypes.number,
          }).isRequired,
        }),
      ),
    }).isRequired,
  };

  handleRemoveClick = (user) => {
    const { removeUserRequest } = this.props;
    removeUserRequest(user);
  };

  render() {
    const { users } = this.props;
    return (
      <Panel>
        {!!users.data
          && users.data.map(user => (
            <User key={user.id}>
              <Avatar src={user.avatar} />
              <UserDetails>
                <span>{user.name}</span>
                <span>{user.username}</span>
              </UserDetails>
              <UserActions>
                <i
                  className="fa fa-times"
                  aria-hidden="true"
                  onClick={() => this.handleRemoveClick(user)}
                />
                <i className="fa fa-angle-right" aria-hidden="true" />
              </UserActions>
            </User>
          ))}
      </Panel>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SidePanel);
