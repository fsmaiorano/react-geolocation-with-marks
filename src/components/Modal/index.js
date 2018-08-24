import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as UserActions } from '../../store/ducks/user';

import { Container, Backdrop } from './styles';
import { ButtonPrimary, ButtonSecondary } from '../../styles/button';

class Modal extends Component {
  state = {
    search: '',
  };

  searchHandler = (term) => {
    this.setState({ search: term });
  };

  save = () => {
    const { addUserRequest } = this.props;
    const { search } = this.state;
    addUserRequest(search);
  };

  render() {
    return (
      <Backdrop id="modal-backdrop">
        <Container>
          <h3>Adicionar novo usuário</h3>
          <input type="text" onChange={e => this.searchHandler(e.target.value)} />
          <div>
            <ButtonSecondary id="modal-action-cancel" type="button">
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
  user: state.user,
  map: state.map,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal);
