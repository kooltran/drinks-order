import axiosInstance from './axiosInstance'

const createOrderAPI = payload => {
  return axiosInstance.post('/orders', payload).then(res => res.data)
}

const getOrdersAPI = () => {
  return axiosInstance.get('/orders').then(res => res.data)
}

const deleteOrderAPI = id => {
  return axiosInstance.delete(`/orders/${id}`).then(res => res.data)
}

export { createOrderAPI, getOrdersAPI, deleteOrderAPI }
