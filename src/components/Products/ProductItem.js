import React, { useState } from 'react'
import { API_BASE_URL } from '../../constants'
import { useAppContext } from '../../AppContext'
import { addCartItem, deleteCart } from '../../actions/cartAction'

const ProductItem = ({ item }) => {
  const [quantity, setQty] = useState(1)

  const {
    data: {
      cart: { cartList },
    },
    dispatch,
  } = useAppContext()

  const handleChangeQuantity = ({ target: { value } }) => {
    const quantity = parseInt(value)
    if (quantity <= 0) {
      setQty(1)
    } else if (quantity > 5) {
      setQty(5)
    } else {
      setQty(quantity)
    }
  }

  const handleAddToCart = () => {
    if (cartList.length === 0) {
      cartList.push({ ...item, quantity: 1 })
      dispatch(addCartItem(cartList))
    } else {
      if (cartList.find(cart => cart._id === item._id)) {
        const cartAdded = cartList.map(cart =>
          cart._id === item._id
            ? {
                ...cart,
                quantity: cart.quantity + 1,
              }
            : cart
        )

        dispatch(addCartItem(cartAdded))
      } else {
        dispatch(addCartItem([...cartList, { ...item, quantity: 1 }]))
      }
    }
  }

  return (
    <div className="product-item">
      <div className="product-item__image">
        <img src={`${API_BASE_URL}/${item.productImage}`} alt="" />
      </div>
      <div className="product-item__content">
        <div className="product-name">{item.name}</div>
        <div className="product-quantity">
          <input
            type="number"
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </div>
        <div className="product-price">{`${item.price},000đ`}</div>
      </div>
      <div className="product-item__add" onClick={handleAddToCart}>
        +
      </div>
    </div>
  )
}

export default ProductItem
