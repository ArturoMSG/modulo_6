import React, { useState, useEffect } from 'react'
import { useAutenticacionContext } from '../../hooks/useUsuario'
import icono from '../../assets/icono.png'
import { servicioListaProductos } from '../../services/ProductoServices'

const ListaProductos = () => {
  const [articulos, setArticulos] = useState([])

  const { autenticado, setIdProducto } = useAutenticacionContext()

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await servicioListaProductos()
        if (response.status === 200) {
          setArticulos(response.data)
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchItemsData()
  }, [])

  return (
    <>

      <h1>lista de productos</h1>
      {autenticado ? ('') : (<h3> para poder agregar productos al carrito debera iniciar secion</h3>)}
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {/* Si articulos no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {console.log('articulos-mik', articulos[0])}

        {articulos && articulos.map((producto) => (
          <div className='card' style={{ width: '18rem' }} key={producto.id} onClick={() => setIdProducto(producto)}>
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={producto.image ? producto.image : icono} alt={producto.product_name} />
            <div className='card-body'>
              <h5 className='card-title'>{producto.product_name}</h5>
              {autenticado ? (<p className='card-text'>{producto.description}</p>) : null}
              {autenticado ? (<p className='card-text'>${producto.price}</p>) : null}
              {autenticado ? (<a href='#' className='btn btn-primary'>Agregar al carrito</a>) : ('')}
              <a href={`/articulo/${producto.id}`} className='btn btn-secundary'>Mostrar producto</a>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default ListaProductos
