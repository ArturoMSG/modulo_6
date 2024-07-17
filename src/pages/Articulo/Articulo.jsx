import React, { useState, useEffect } from 'react'

import { useAutenticacionContext } from '../../hooks/useUsuario'
import icono from '../../assets/icono.png'
import { servicioUnProducto } from '../../services/ProductoServices'
import { useParams } from 'react-router-dom'

const Articulo = () => {
  const [valores, setValores] = useState([])

  const { autenticado, idProducto } = useAutenticacionContext()

  const { id } = useParams()

  useEffect(() => {
    const BusquedaUnValor = async () => {
      try {
        const respuesta = await servicioUnProducto(id)
        if (respuesta.status === 200) {
          setValores(respuesta.data)
        }
      } catch (error) {
        console.error('-----'.error, '&&&&&')
      }
    }
    BusquedaUnValor()
  }, [])
  return (
    <>
      <h1>Un Producto</h1>
      <img src={valores.image ? valores.image : icono} alt='Imagen Produto' />
      <h2 className='card-title'>Nombre del Producto:  {valores.product_name}</h2>
      <h4 className='card-title'>Descripcion:  {valores.description}</h4>
      <h5 className='card-title'>Categoria:  {valores.category}</h5>
      <h8 className='card-title'>fecha salida del producto:    {valores.updatedAt}</h8>
      {autenticado ? (<h2 className='card-text'>${valores.price}.00</h2>) : (<h3> para poder agregar productos al carrito debera iniciar secion</h3>)}
      {autenticado ? (<a href='#' className='btn btn-primary'>Agregar al carrito</a>) : ('')}
      <a href='/' className='btn btn-secundary'>Regresar a Pagina de inicio</a>
    </>
  )
}

export default Articulo
