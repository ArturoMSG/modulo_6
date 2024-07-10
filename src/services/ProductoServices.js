import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const servicioListaProductos = () => axios.get(`${BASE_URL}/items`)
const servicioUnProducto = (id) => axios.get(`${BASE_URL}/items/${id}`)
const servicioNuevoProducto = (data, jwt) => axios.post(`${BASE_URL}/users/me`, data, {
  headers: {
    Authorization: `Bearer ${jwt}`
  }
})

export {
  servicioListaProductos,
  servicioUnProducto,
  servicioNuevoProducto
}
