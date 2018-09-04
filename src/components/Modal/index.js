import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UserActions } from '../../store/ducks/users';

import { Container, Backdrop } from './styles';
import { ButtonPrimary, ButtonSecondary } from '../../styles/button';

class Modal extends Component {
  state = {
    search: '',
  };

  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    closed: PropTypes.func.isRequired,
    map: PropTypes.shape({
      position: {
        lat: PropTypes.number,
        lng: PropTypes.number,
      },
    }).isRequired,
  };

  searchHandler = (term) => {
    this.setState({ search: term });
  };

  save = () => {
    const { addUserRequest, map } = this.props;
    const { search } = this.state;
    addUserRequest(search, map.position);
    this.close();
  };

  close = () => {
    const { closed } = this.props;
    closed();
  };

  render() {
    return (
      <Backdrop id="modal-backdrop">
        <Container id="modal">
          <h3>Adicionar novo usuário</h3>
          <input id="modal-input" type="text" onChange={e => this.searchHandler(e.target.value)} />
          <div>
            <ButtonSecondary id="modal-action-cancel" type="button" onClick={this.close}>
              Cancelar
            </ButtonSecondary>
            <ButtonPrimary id="modal-action-save" type="button" onClick={this.save}>
              Salvar
            </ButtonPrimary>
          </div>
        </Container>
      </Backdrop>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  map: state.map,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
