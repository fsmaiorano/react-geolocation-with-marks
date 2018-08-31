import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MapGL, { Marker } from 'react-map-gl';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as MapActions } from '../../store/ducks/map';

import Modal from '../Modal';
import SidePanel from '../SidePanel';

import { Avatar } from './styles';

class Map extends Component {
  static propTypes = {
    showModal: PropTypes.func.isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);

    this.handleWindowResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }

  handleWindowResize = () => {
    const { viewport } = this.state;

    this.setState({
      showModal: false,
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleViewportChange = (viewport) => {
    this.setState({ viewport });
  };

  handleMapClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    const { showModal } = this.state;
    const { setPosition } = this.props;
    if ((showModal && !e.target.id === 'modal-backdrop') || e.target.id === 'modal-action-cancel') {
      this.setState({ showModal: false });
    } else {
      const position = {
        latitude,
        longitude,
      };
      setPosition(position);
      this.setState({ showModal: true });
    }
  };

  render() {
    const { viewport, showModal } = this.state;
    const { users } = this.props;

    return (
      <Fragment>
        {users && users.data.length > 0 ? <SidePanel /> : null}

        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          onViewportChange={this.handleViewportChange}
        >
          {users
            && users.data.map(user => (
              <Marker key={user.id} latitude={user.position.lat} longitude={user.position.lng}>
                <Avatar src={user.avatar} />
              </Marker>
            ))}
          {showModal ? <Modal latitude={viewport.latitude} longitude={viewport.longitude} /> : null}
        </MapGL>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  map: state.map,
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(MapActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
