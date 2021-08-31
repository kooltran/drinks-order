import moment from 'moment'

import {
  createOrderActionRequest,
  createOrderActionSuccess,
  createOrderActionFail,
  getOrderActionRequest,
  getOrderActionSuccess,
  getOrderActionFail,
} from '../../actions/orderAction'
import { createOrderAPI, getOrdersAPI } from '../../api/orderAPI'
import { useAppContext } from '../../AppContext'

const useOrders = () => {
  const {
    data: {
      cart: { cartList },
    },
    dispatch,
  } = useAppContext()

  const createOrder = async () => {
    const orderPayload = {
      products: cartList.map(cart => ({
        product: cart._id,
        quantity: cart.quantity,
      })),
      date: moment().format('DD/MM/YYYYY'),
    }

    dispatch(createOrderActionRequest())
    try {
      const res = await createOrderAPI(orderPayload)
      dispatch(createOrderActionSuccess(res.createdOrder))
    } catch (err) {
      dispatch(createOrderActionFail(err.response.data))
    }
  }

  const getOrderList = async () => {
    dispatch(getOrderActionRequest())
    try {
      const res = await getOrdersAPI()
      dispatch(getOrderActionSuccess(res.data))
    } catch (err) {
      dispatch(getOrderActionFail(err))
    }
  }

  return {
    createOrder,
    getOrderList,
  }
}

export default useOrders
