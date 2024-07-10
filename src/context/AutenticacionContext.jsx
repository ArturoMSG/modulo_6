import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AutenticacionContext = createContext()

const AutenticacionProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false) // ¿Estoy autenticado?
  const [usuarioPayload, setUsuarioPayload] = useState(null) // JWT payload decodificado

  const login = (token) => {
    localStorage.setItem('token', token)
    const payload = jwtDecode(token)
    setAutenticado(true)
    setUsuarioPayload(payload)
  }

  const logout = (token) => {
    localStorage.removeItem('token')
    setAutenticado(false)
    setUsuarioPayload(null)
  }

  // verificar si hay un token en el localStorage y si es válido cargarlo para evitar que el usuario tenga que loguearse cada vez que recargue/entre a la página
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      const payload = jwtDecode(token)
      setAutenticado(true)
      setUsuarioPayload(payload)
    }
  }, [])

  const datos = {
    // Las cosas que quiero hacer global
    autenticado,
    usuarioPayload,
    login,
    logout
  }

  return (
    <AutenticacionContext.Provider value={datos}>
      {children}
    </AutenticacionContext.Provider>
  )
}

export { AutenticacionContext, AutenticacionProvider }
