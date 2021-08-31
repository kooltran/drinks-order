import combineReducers from 'react-combine-reducers'
import { cartReducer } from '../reducers/cartReducer'
import { productReducer } from '../reducers/productReducer'
import { authReducer } from '../reducers/authReducer'
import { orderReducer } from '../reducers/orderReducer'

const authInitState = {
  data: {
    token: null,
    user: null,
  },
  isLoggedIn: false,
  loading: false,
  fail: null,
}

const productInitState = {
  loading: false,
  data: null,
  fail: null,
}

const orderInitState = {
  loading: false,
  orderItem: null,
  fail: null,
}

const cartInitState = {
  cartList: [],
}

const [rootReducer, initialStateCombined] = combineReducers({
  product: [productReducer, productInitState],
  auth: [authReducer, authInitState],
  cart: [cartReducer, cartInitState],
  orders: [orderReducer, orderInitState],
})

export { rootReducer, initialStateCombined }
