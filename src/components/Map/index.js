import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import MapGL, { Marker } from 'react-map-gl';
import { toast } from 'react-toastify';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as MapActions } from '../../store/ducks/map';
import { Creators as UserActions } from '../../store/ducks/users';

import Modal from '../Modal';
import SidePanel from '../SidePanel';

import { Avatar } from './styles';

class Map extends Component {
  static propTypes = {
    setPosition: PropTypes.func.isRequired,
    map: PropTypes.shape({
      lng: PropTypes.number,
      lat: PropTypes.number,
    }).isRequired,
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

  componentDidUpdate() {
    const { users, removeFeedback } = this.props;
    if (users.feedback) {
      toast.error(users.feedback);
      removeFeedback();
    }
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
    const { setPosition } = this.props;
    const position = {
      latitude,
      longitude,
    };
    setPosition(position);
    this.openModal(e, longitude, latitude);
  };

  openModal = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { viewport, showModal } = this.state;
    const { users } = this.props;

    return (
      <Fragment>
        {!!users.data && users.data.length > 0 ? <SidePanel /> : null}

        <MapGL
          {...viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://styles/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZGllZ28zZyIsImEiOiJjamh0aHc4em0wZHdvM2tyc3hqbzNvanhrIn0.3HWnXHy_RCi35opzKo8sHQ"
          onViewportChange={this.handleViewportChange}
        >
          {!!users.data
            && users.data.map(user => (
              <Marker key={user.id} latitude={user.position.lat} longitude={user.position.lng}>
                <Avatar src={user.avatar} />
              </Marker>
            ))}
        </MapGL>
        {showModal ? (
          <Modal
            latitude={viewport.latitude}
            longitude={viewport.longitude}
            closed={this.closeModal}
          />
        ) : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  map: state.map,
  users: state.users,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...MapActions, ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
