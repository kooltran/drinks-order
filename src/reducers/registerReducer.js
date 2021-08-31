import {
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL,
} from '../constants'

export const registerReducer = (state, action) => {
  switch (action.type) {
    case AUTH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case AUTH_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        fail: action.payload,
      }
    default:
      return state
  }
}
