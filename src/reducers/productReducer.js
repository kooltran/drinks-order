import {
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
} from '../constants'

export const productReducer = (state, action) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
        fail: null,
      }
    case CREATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        fail: null,
      }
    case CREATE_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        data: null,
        fail: action.payload,
      }
    case GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
        fail: null,
      }
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        fail: null,
      }
    case GET_PRODUCT_FAIL:
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
