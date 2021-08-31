import React, { useEffect } from 'react'
import { getProductsAPI } from '../../api/productAPI'
import { useAppContext } from '../../AppContext'
import {
  getProductActionRequest,
  getProductActionSuccess,
  getProductActionFail,
} from '../../actions/productAction'
import ProductItem from './ProductItem'

import './Product.scss'

const ProductList = () => {
  const {
    data: {
      product: { data },
    },
    dispatch,
  } = useAppContext()

  const getProduct = async () => {
    dispatch(getProductActionRequest())

    try {
      const data = await getProductsAPI()
      dispatch(getProductActionSuccess(data))
    } catch (err) {
      dispatch(getProductActionFail(err.message))
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div className="product-list">
      {data?.map(item => {
        return <ProductItem key={item._id} item={item} />
      })}
    </div>
  )
}

export default ProductList
