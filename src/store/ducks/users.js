export const Types = {
  ADD_USER_REQUEST: 'user/ADD_USER_REQUEST',
  ADD_USER_SUCCESS: 'user/ADD_USER_SUCCESS',
  ADD_USER_FAILURE: 'user/ADD_USER_FAILURE',
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
      debugger;
      return {
        ...state,
        data: [...state.data, action.payload.users],
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
  addUserSuccess: users => ({
    type: Types.ADD_USER_SUCCESS,
    payload: { users },
  }),
  addUserFailure: feedback => ({
    type: Types.ADD_USER_FAILURE,
    payload: { feedback },
  }),
};
