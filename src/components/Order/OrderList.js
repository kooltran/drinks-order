import React, { useEffect } from 'react'

import useOrder from './useOrders'
import OrderItem from './OrderItem'
import { useAppContext } from '../../AppContext'

const OrderList = () => {
  const {
    data: {
      orders: { orderItem },
    },
  } = useAppContext()

  const { getOrderList } = useOrder()

  useEffect(() => {
    getOrderList()
  }, [])

  return (
    <div className="order-list">
      {orderItem ? (
        <OrderItem item={orderItem} />
      ) : (
        'Your orders list is empty!!!'
      )}
    </div>
  )
}

export default OrderList
