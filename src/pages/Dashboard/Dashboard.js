import React, { useEffect, useState, useRef } from 'react'
import { object, string, number } from 'yup'
import { TextField, Button, IconButton, Slide } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import { Alert } from '@material-ui/lab'
import CloseIcon from '@material-ui/icons/Close'
import { Formik } from 'formik'

import { useAppContext } from '../../AppContext'
import {
  createProductActionRequest,
  createProductActionSuccess,
  createProductActionFail,
} from '../../actions/productAction'
import { createProductAPI } from '../../api/productAPI'
import useAuth from '../../components/Auth/useAuth'
import { isEmpty } from '../../helpers'
import { API_BASE_URL } from '../../constants'
import './Dashboard.scss'

const Schema = object().shape({
  name: string().required('Product name is required'),
  price: number().required('Product price is required'),
  image: string().required(),
})

const Dashboard = () => {
  const [file, setFile] = useState({})
  const [showAlert, setShowAlert] = useState({})
  const formRef = useRef(null)

  const {
    data: { product },
    dispatch,
  } = useAppContext()

  const { submitLogout } = useAuth()

  const createProduct = async (payload, { resetForm }) => {
    dispatch(createProductActionRequest())
    try {
      const createdProduct = await createProductAPI(payload)
      dispatch(createProductActionSuccess(createdProduct))

      //Reset form
      setFile({})
      resetForm()

      setShowAlert({
        type: 'success',
        message: 'Product Created',
      })
    } catch (err) {
      setShowAlert({
        type: 'error',
        message: err.response.data.message,
      })
      dispatch(createProductActionFail(err.response.data.message))
    }
  }

  const handleSubmitCreateProduct = (values, { ...formProps }) => {
    const productFormData = new FormData()
    productFormData.append('name', values.name)
    productFormData.append('price', values.price)
    productFormData.append('productImage', file)
    createProduct(productFormData, { ...formProps })
  }

  const handleUploadFile = e => {
    const { setFieldValue } = formRef?.current
    setFile(e.target.files[0])
    setFieldValue('image', e.target.files[0].name)
  }

  return (
    <>
      <Formik
        onSubmit={handleSubmitCreateProduct}
        initialValues={{ name: '', price: '', image: '' }}
        validationSchema={Schema}
        innerRef={formRef}
      >
        {({
          handleSubmit,
          handleChange,
          touched,
          errors,
          handleBlur,
          values,
        }) => {
          const checkError = name => {
            if (touched[name]) {
              return !!errors[name]
            }
          }

          return (
            <form onSubmit={handleSubmit}>
              <div>
                <Button variant="outlined" onClick={() => submitLogout()}>
                  Logout
                </Button>
              </div>
              <div>
                <TextField
                  fullWidth
                  error={checkError('name')}
                  id="input-name"
                  name="name"
                  label="Product Name"
                  value={values.name}
                  helperText={touched.name && errors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="dense"
                />
              </div>
              <div>
                <TextField
                  fullWidth
                  error={checkError('price')}
                  id="input-price"
                  name="price"
                  label="Product Price"
                  value={values.price}
                  helperText={touched.price && errors.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  margin="dense"
                />
              </div>
              <div className="product-image">
                <TextField
                  fullWidth
                  error={checkError('image')}
                  id="input-image"
                  name="image"
                  placeholder="Product image"
                  value={file.name || ''}
                  helperText={touched.image && errors.image}
                  onBlur={handleBlur}
                  margin="dense"
                  disabled
                />
                <input
                  accept="image/*"
                  id="contained-button-file"
                  onChange={handleUploadFile}
                  multiple
                  type="file"
                  margin="dense"
                  hidden
                />
                <label
                  htmlFor="contained-button-file"
                  className="product-image__icon"
                >
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
              <Button
                className="product-create"
                type="submit"
                variant="outlined"
                disabled={
                  !values.name ||
                  !values.price ||
                  !values.image ||
                  product.loading ||
                  !isEmpty(errors)
                }
              >
                Create
              </Button>
            </form>
          )
        }}
      </Formik>
      {product.data?.product && (
        <div className="product-image__show">
          <img
            src={`${API_BASE_URL}/${product.data.product.productImage}`}
            alt=""
          />
        </div>
      )}
      {showAlert.type && (
        <Slide
          direction="left"
          in={!!showAlert.type}
          mountOnEnter
          unmountOnExit
        >
          <Alert
            className="product-alert"
            severity={showAlert.type}
            color={showAlert.type}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setShowAlert({})
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {product.data ? 'Product Created' : product.fail}
          </Alert>
        </Slide>
      )}
    </>
  )
}

export default Dashboard
