export const Types = {
  ADD_USER_REQUEST: 'user/ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'user/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'user/ADD_USER_FAILURE',

  REMOVE_USER_REQUEST: 'user/REMOVE_USER_REQUEST',
  REMOVE_USER_SUCCESS: 'user/REMOVE_USER_SUCCESS',
  REMOVE_USER_FAILURE: 'user/REMOVE_USER_FAILURE',

  REMOVE_FEEDBACK: 'user/REMOVE_FEEDBACK',
};

const INITIAL_STATE = {
  feedback: null,
  data: [],
  search: null,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return {
        ...state,
        search: action.payload.search,
      };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload.users],
      };
    case Types.ADD_USER_FAILURE:
      return {
        ...state,
        feedback: action.payload.feedback,
      };
    case Types.REMOVE_USER_REQUEST:
      return {
        ...state,
        data: [...state.data.filter(u => u !== action.payload.user)],
      };
    case Types.REMOVE_FEEDBACK:
      return {
        ...state,
        feedback: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: (search, position) => ({
    type: Types.ADD_USER_REQUEST,
    payload: { search, position },
  }),
  addUserSuccess: users => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { users },
  }),
  addUserFailure: feedback => ({
    type: Types.ADD_USER_FAILURE,
    payload: { feedback },
  }),

  removeUserRequest: user => ({
    type: Types.REMOVE_USER_REQUEST,
    payload: { user },
  }),
  removeUserSuccess: users => ({
    type: Types.REMOVE_USER_SUCCESS,
    payload: { users },
  }),
  removeUserFailure: feedback => ({
    type: Types.REMOVE_USER_FAILURE,
    payload: { feedback },
  }),

  removeFeedback: () => ({
    type: Types.REMOVE_FEEDBACK,
    payload: null,
  }),
};
