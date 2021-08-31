import React, { useState } from 'react'
import { API_BASE_URL } from '../../constants'
import { useAppContext } from '../../AppContext'

const CartItem = ({ item }) => {
  // const {
  //   data: {
  //     cart: { cartList },
  //   },
  //   dispatch,
  // } = useAppContext()

  return (
    <div className="cart-item">
      <div className="cart-item__quantity">{item.quantity}</div>
      <div className="cart-item__name">{item.name}</div>
      <div className="cart-item__price">{`${
        item.price * item.quantity
      },000đ`}</div>
    </div>
  )
}

export default CartItem
