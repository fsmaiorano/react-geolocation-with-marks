export const Types = {
  SET_POSITION: 'map/SET_POSITION',
};

const INITIAL_STATE = {
  position: {
    lat: null,
    lng: null,
  },
};

export default function map(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_POSITION:
      return {
        ...state,
        position: {
          lat: action.payload.position.latitude,
          lng: action.payload.position.longitude,
        },
      };
    default:
      return state;
  }
}

export const Creators = {
  setPosition: position => ({
    type: Types.SET_POSITION,
    payload: { position },
  }),
};
