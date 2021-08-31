import React from 'react'
import ProductList from '../../components/Products/ProductList'
import CartList from '../../components/Cart/CartList'
import OrderList from '../../components/Order/OrderList'

import './Home.scss'

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-wrapper__product">
        <ProductList />
      </div>
      <div className="home-wrapper__order">
        <CartList />
        <OrderList />
      </div>
    </div>
  )
}

export default Home
