/* eslint-disable import/no-anonymous-default-export */
const API_BASE_URL = 'http://localhost:4000'

const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST'
const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS'
const AUTH_REGISTER_FAIL = 'AUTH_REGISTER_FAIL'
const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL'
const AUTH_LOGOUT = 'AUTH_LOGOUT'
const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST'
const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS'
const CREATE_PRODUCT_FAIL = 'CREATE_PRODUCT_FAIL'
const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST'
const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS'
const GET_PRODUCT_FAIL = 'GET_PRODUCT_FAIL'
const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST'
const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS'
const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL'
const ADD_CART_ITEM = 'ADD_CART_ITEM,'
const DELETE_CART_ITEM = 'DELETE_CART_ITEM,'
const DELETE_CART = 'DELETE_CART,'
const CREATE_ORDER_REQUEST = 'CREATE_ORDER_REQUEST'
const CREATE_ORDER_SUCCESS = 'CREATE_ORDER_SUCCESS'
const CREATE_ORDER_FAIL = 'CREATE_ORDER_FAIL'

const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST'
const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS'
const GET_ORDER_FAIL = 'GET_ORDER_FAIL'

export {
  API_BASE_URL,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  AUTH_LOGOUT,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAIL,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAIL,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
  DELETE_CART,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAIL,
}
