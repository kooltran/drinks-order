import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
} from '../constants'

const createOrderActionRequest = () => ({
  type: CREATE_ORDER_REQUEST,
})

const createOrderActionSuccess = payload => ({
  type: CREATE_ORDER_SUCCESS,
  payload,
})

const createOrderActionFail = payload => ({
  type: CREATE_ORDER_FAIL,
  payload,
})

const getOrderActionRequest = () => ({
  type: GET_ORDER_REQUEST,
})

const getOrderActionSuccess = payload => ({
  type: GET_ORDER_SUCCESS,
  payload,
})

const getOrderActionFail = payload => ({
  type: GET_ORDER_FAIL,
  payload,
})

export {
  createOrderActionRequest,
  createOrderActionSuccess,
  createOrderActionFail,
  getOrderActionRequest,
  getOrderActionSuccess,
  getOrderActionFail,
}
