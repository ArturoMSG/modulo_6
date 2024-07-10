import { useContext } from 'react'
import { AutenticacionContext } from '../context/AutenticacionContext'

export const useAutenticacionContext = () => {
  const context = useContext(AutenticacionContext)
  if (!context) {
    throw new Error('useAuthContext debe ser usado dentro de un AuthProvider')
  }
  return context
}
