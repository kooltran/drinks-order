import { ADD_CART_ITEM, DELETE_CART_ITEM, DELETE_CART } from '../constants'

export const addCartItem = item => ({
  type: ADD_CART_ITEM,
  payload: item,
})

export const deleteCartItem = item => ({
  type: DELETE_CART_ITEM,
  payload: item,
})

export const deleteCart = () => ({
  type: DELETE_CART,
})
