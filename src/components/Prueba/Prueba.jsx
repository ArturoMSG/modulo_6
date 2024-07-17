import React, { useEffect, useState } from 'react'
import { servicioListaProductos } from '../../services/ProductoServices'

const Prueba = () => {
  const [valores, setValores] = useState([])

  useEffect(() => {
    const consulta = async () => {
      try {
        const response = await servicioListaProductos()
        if (response.status === 200) {
          setValores(response.data)
          console.log(valores)
        }
      } catch (error) {
        console.error(error)
      }
    }
    consulta()
  }, [])

  return (
    <>
      <div>Prueba</div>
      <h4>Nombre: {valores.data} </h4>

    </>
  )
}

export default Prueba
