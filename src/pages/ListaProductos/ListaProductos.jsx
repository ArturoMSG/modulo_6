import React, { useState, useEffect } from 'react'
import { useAutenticacionContext } from '../../hooks/useUsuario'
import icono from '../../assets/icono.png'
import { servicioListaProductos } from '../../services/ProductoServices'

const ListaProductos = () => {
  const [itemsData, setitemsData] = useState([])

  const { autenticado, setIdProducto } = useAutenticacionContext()

  useEffect(() => {
    const fetchItemsData = async () => {
      try {
        const response = await servicioListaProductos()
        if (response.status === 200) {
          setitemsData(response.data)
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
        {/* Si itemsData no esta vacio, recorro el arreglo con Map y creo un Card de Bootstrap para cada elemento */}
        {itemsData && itemsData.map((product) => (

          <div className='card' style={{ width: '18rem' }} key={product.id} onClick={() => setIdProducto(product)}>
            <img className='card-img-top' style={{ maxHeight: '300px' }} src={product.image ? product.image : icono} alt={product.product_name} />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              {autenticado ? (<p className='card-text'>{product.description}</p>) : null}
              {autenticado ? (<p className='card-text'>${product.price}</p>) : null}
              {autenticado ? (<a href='#' className='btn btn-primary'>Agregar al carrito</a>) : ('')}
              <a href={`/articulo/${product.id}`} className='btn btn-secundary'>Mostrar producto</a>

            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default ListaProductos
