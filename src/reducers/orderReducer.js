import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
} from '../constants'

export const orderReducer = (state, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        // data: {
        //   ...state.data,
        //   orderCreated: null,
        // },
        orderItem: null,
        fail: null,
      }
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        // data: {
        //   ...state.data,
        //   orderCreated: action.payload,
        // },
        orderItem: action.payload,
        fail: null,
      }
    case CREATE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        // data: {
        //   ...state.data,
        //   orderCreated: null,
        // },
        orderItem: null,
        fail: action.payload,
      }
    case GET_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        // data: {
        //   ...state.data,
        //   orderList: null,
        // },
        orderItem: null,
        fail: null,
      }
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        // data: {
        //   ...state.data,
        //   orderList: action.payload,
        // },
        orderItem: action.payload,
        fail: null,
      }
    case GET_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        // data: {
        //   ...state.data,
        //   orderList: null,
        // },
        orderItem: null,
        fail: action.payload,
      }
    default:
      return state
  }
}
