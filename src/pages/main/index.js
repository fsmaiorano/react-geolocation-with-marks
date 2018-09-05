import React from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Map from '../../components/Map';

import { Container } from './styles';

const Main = () => (
  <Container>
    <Map />
    <ToastContainer />
  </Container>
);

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps)(Main);
