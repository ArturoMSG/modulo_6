import React, { useState, useEffect } from 'react'
// import { useAutenticacionContext } from '../../hooks/useUsuario'
import { servicioMiUsuario } from '../../services/UsuariosServices'

const MiCuenta = () => {
  // const { usuarioPayload } = useAutenticacionContext()
  const [usuarioDatos, setusuarioDatos] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUsuarioDatos = async () => {
      try {
        const response = await servicioMiUsuario(token)
        if (response.status === 200) {
          setusuarioDatos(response.data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsuarioDatos()
  }, [token])

  return (
    <>
      <h1>Mi Cuenta. </h1>
      <h2>Bienvenido      </h2>

      {/* {usuarioPayload?.role === 'ADMIN'
        ? <h2>Bienvenido usuario ADMIN</h2>
        : <h2>Bienvenido usuario CUSTOMER</h2>}

        {usuarioPayload?.role === 'ADMIN' && <h4>Bienvenido Admin</h4>}

        {usuarioPayload?.role === 'CUSTOMER' && <h4>Bienvenido Customer</h4>} */
      }

      {usuarioDatos?.first_name && <h4>Nombre: {usuarioDatos.first_name} </h4>}
      {usuarioDatos?.last_name && <h4>Apellido: {usuarioDatos.last_name} </h4>}
      {usuarioDatos?.gender && <p>Genero: {usuarioDatos.gender} </p>}
      {usuarioDatos?.email && <p>Email: {usuarioDatos.email} </p>}
      {usuarioDatos?.role && <p>Tipo de Cuenta: {usuarioDatos.role} </p>}
    </>
  )
}

export default MiCuenta
