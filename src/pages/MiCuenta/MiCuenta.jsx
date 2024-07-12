import React, { useState, useEffect } from 'react'
import { useAutenticacionContext } from '../../hooks/useUsuario'
import { servicioMiUsuario } from '../../services/UsuariosServices'

const MiCuenta = () => {
  const { usuarioPayload } = useAutenticacionContext()
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
      <div>MiCuenta</div>

      {usuarioPayload?.role === 'ADMIN'
        ? <h2>Hola ADMIN</h2>
        : <h2>Hola CUSTOMER</h2>}

      {usuarioPayload?.role === 'ADMIN' && <h4>Bienvenido Admin</h4>}

      {usuarioPayload?.role === 'CUSTOMER' && <h4>Bienvenido Customer</h4>}

      <h1>Dashboard</h1>

      {usuarioDatos?.first_name && <h4>Nombre: {usuarioDatos.first_name} </h4>}
      {usuarioDatos?.last_name && <h4>Apellido: {usuarioDatos.last_name} </h4>}
      {usuarioDatos?.gender && <p>Genero: {usuarioDatos.gender} </p>}
      {usuarioDatos?.email && <p>Email: {usuarioDatos.email} </p>}
      {usuarioDatos?.role && <p>Role: {usuarioDatos.role} </p>}
    </>
  )
}

export default MiCuenta
