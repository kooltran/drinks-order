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

const createProductActionRequest = () => ({
  type: CREATE_PRODUCT_REQUEST,
})

const createProductActionSuccess = payload => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload,
})

const createProductActionFail = payload => ({
  type: CREATE_PRODUCT_FAIL,
  payload,
})

const getProductActionRequest = () => ({
  type: GET_PRODUCT_REQUEST,
})

const getProductActionSuccess = payload => ({
  type: GET_PRODUCT_SUCCESS,
  payload,
})

const getProductActionFail = payload => ({
  type: GET_PRODUCT_FAIL,
  payload,
})

export {
  createProductActionRequest,
  createProductActionSuccess,
  createProductActionFail,
  getProductActionRequest,
  getProductActionSuccess,
  getProductActionFail,
}
