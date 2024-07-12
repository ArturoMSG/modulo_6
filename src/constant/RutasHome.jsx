import { useRoutes, Navigate } from 'react-router-dom'
import { useAutenticacionContext } from '../hooks/useUsuario'

import Carrito from '../pages/Carrito'
import Error from '../pages/Error'
import ListaProductos from '../pages/ListaProductos'
import Login from '../pages/Login'
import MiCuenta from '../pages/MiCuenta'
import Registro from '../pages/Registro'

const RutasHome = () => {
  const { autenticado } = useAutenticacionContext()

  const rutas = useRoutes([

    {
      path: '/carrito',
      element: (autenticado ? <Carrito /> : <Navigate to='/' />)
    },

    {
      path: '*',
      element: <Error />
    },

    {
      path: '/',
      element: <ListaProductos />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/micuenta',
      element: (autenticado ? <MiCuenta /> : <Navigate to='/' />)
    },
    {
      path: '/registro',
      element: <Registro />
    }

  ])

  return (rutas)
}

export default RutasHome
