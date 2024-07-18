import React, { useReducer } from 'react'
import articulosReducer, { articulosIniciales } from '../../reducer/articulosReducer'

import types from '../../reducer/types'

const Carrito = () => {
  const [articulosstate, dispatch] = useReducer(articulosReducer, articulosIniciales)
  const { articulos, carrito, activeArticulo } = articulosstate
  return (
    <>
      <div>
        <h2> Productos</h2>
        <ul>
          {articulos.map(art => (
            <li key={art.id}>
              {art.title}
              <button onClick={(() => dispatch({
                type: types.articuloMostrar,
                payload: art
              }))}
              >mostrar
              </button>
              <button onClick={(() => dispatch({
                type: types.articuloAgregarAlCarrito,
                payload: art
              }))}
              >Agregar al carrito
              </button>
            </li>
          ))}
        </ul>

        {/* <ListaProductos /> */}

        <h2> Carrito</h2>
        <ul>
          {carrito.map(art => (
            <li key={art.id}>
              {art.title}- quantity : {art.quantity}
              <button onClick={(() => dispatch({
                type: types.articuloQuitarUno,
                payload: art.id
              }))}
              >Quitar un producto
              </button>
              <button onClick={(() => dispatch({
                type: types.articuloQuitarTodo,
                payload: art.id
              }))}
              >Quitar del carrito todo
              </button>
            </li>
          ))}
        </ul>

        <h2> VistaPrevia</h2>
        <p>{activeArticulo.title}</p>

      </div>

    </>

  )
}

export default Carrito
