import React from 'react'

const OrderItem = ({ item }) => {
  return (
    <div className="order-item">
      <div className="order-item__name">{item?.user?.name}</div>
      <div className="order-item__date">{item?.date}</div>
      <div className="order-item__products">
        {item?.products?.map(productItem => (
          <div key={productItem.product._id} className="product-content">
            <span className="product-name">{productItem.product.name}</span>
            <span className="product-quantity">{productItem.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderItem
