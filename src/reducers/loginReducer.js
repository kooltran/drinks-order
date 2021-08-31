import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
} from '../constants'

export const loginReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      }
    case AUTH_LOGIN_FAIL:
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
