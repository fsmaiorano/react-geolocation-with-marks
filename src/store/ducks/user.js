export const Types = {
  ADD_USER_REQUEST: 'user/ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'user/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'user/ADD_USER_FAILURE',
};

const INITIAL_STATE = {
  feedback: null,
  user: null,
  search: null,
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_USER_REQUEST:
      return {
        ...state,
        search: action.payload.search,
      };
    case Types.ADD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    case Types.ADD_USER_FAILURE:
      return {
        ...state,
        feedback: action.payload.feedback,
      };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: search => ({
    type: Types.ADD_USER_REQUEST,
    payload: { search },
  }),
  addUserSuccess: user => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { user },
  }),
  addUserFailure: feedback => ({
    type: Types.ADD_USER_FAILURE,
    payload: { feedback },
  }),
};
