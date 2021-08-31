import React, { useEffect } from 'react'

import useOrder from '../Order/useOrders'

import { useAppContext } from '../../AppContext'
import CartItem from './CartItem'
import { Button } from '@material-ui/core'

import './Cart.scss'

const CartList = () => {
  const {
    data: {
      cart: { cartList },
      orders: { orderItem, loading, fail },
    },
  } = useAppContext()

  const { createOrder } = useOrder()

  return (
    <div className="cart-list">
      {cartList.length > 0
        ? cartList?.map(item => {
            return <CartItem key={item._id} item={item} />
          })
        : 'Your cart is empty'}
      {cartList.length > 0 && (
        <Button variant="outlined" onClick={createOrder} disabled={loading}>
          Order
        </Button>
      )}
    </div>
  )
}

export default CartList
