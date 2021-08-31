import axiosInstance from './axiosInstance'

const createProductAPI = payload => {
  return axiosInstance
    .post('/product', payload, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(res => res.data)
}

const getProductsAPI = () => {
  return axiosInstance.get('/product').then(res => res.data)
}

const deleteProductAPI = id => {
  return axiosInstance.delete(`/product/${id}`).then(res => res.data)
}

export { createProductAPI, getProductsAPI, deleteProductAPI }
