import axios from 'axios'

const URL_API = 'https://ecommerce-json-jwt.onrender.com'

const servicioRegistroUsuario = (data) => axios.post(`${URL_API}/register`, data)
const servicioLoginUsuario = (data) => axios.post(`${URL_API}/login`, data)
const servicioMiUsuario = (jwt) => axios.get(`${URL_API}/users/me`,
  {
    headers: {
      Authorization: `Bearer ${jwt}`
    }
  })

export {
  servicioRegistroUsuario,
  servicioLoginUsuario,
  servicioMiUsuario

}
