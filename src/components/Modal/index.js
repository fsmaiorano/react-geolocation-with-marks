import React from 'react';

import { Container, Backdrop } from './styles';
import { ButtonPrimary, ButtonSecondary } from '../../styles/button';

const Modal = () => (
  <Backdrop id="modal-backdrop">
    <Container>
      <h3>Adicionar novo usuário</h3>
      <input />
      <div>
        <ButtonSecondary id="modal-action-cancel" type="button">
          Cancelar
        </ButtonSecondary>
        <ButtonPrimary id="modal-action-save" type="button">
          Salvar
        </ButtonPrimary>
      </div>
    </Container>
  </Backdrop>
);

export default Modal;
