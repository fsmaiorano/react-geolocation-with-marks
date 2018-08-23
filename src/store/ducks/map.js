export const Types = {
  ADD_POSITION_REQUEST: 'map/ADD_POSITION_REQUEST',
  ADD_POSITION_SUCCESS: 'map/ADD_POSITION_SUCCESS',
  ADD_POSITION_FAILURE: 'map/ADD_POSITION_FAILURE',
};

const INITIAL_STATE = {
  feedback: null,
  isLoading: false,
  position: {
    lat: null,
    lng: null,
  },
};

export default function map(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_POSITION_REQUEST:
      return { ...state, isLoading: true };
    case Types.ADD_POSITION_SUCCESS:
      return { ...state, isLoading: false, data: action.payload.position };
    case Types.ADD_POSITION_FAILURE:
      return { ...state, isLoading: false, data: action.payload.feedback };
    default:
      return state;
  }
}

export const Creators = {
  addPositionRequest: position => ({
    types: Types.ADD_POSITION_REQUEST,
    payload: { position },
  }),

  addPositionSuccess: data => ({
    types: Types.ADD_POSITION_SUCCESS,
    payload: { data },
  }),

  addPositionFailure: feedback => ({
    types: Types.ADD_POSITION_FAILURE,
    payload: { feedback },
  }),
};
