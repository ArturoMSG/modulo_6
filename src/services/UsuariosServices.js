import axios from 'axios'

const URL_API = 'https://ecomerce-master.herokuapp.com/api/v1'

const servicioRegistroUsuario = (datos) => axios.post(`${URL_API}/signup`, datos)
const servicioLoginUsuario = (datos) => axios.post(`${URL_API}/login`, datos)
const servicioMiUsuario = (jwt) => axios.post(`${URL_API}/login`,
  {
    headers: {
      Authorization: `JWT ${jwt}`
    }
  })

export {
  servicioRegistroUsuario,
  servicioLoginUsuario,
  servicioMiUsuario

}
