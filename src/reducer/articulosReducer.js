import types from './types'

const articulosIniciales = {
  articulos: [
    { id: 1, title: 'producto 1' },
    { id: 2, title: 'producto 2' }
  ],

  carrito: [
    { id: 1, title: 'producto 1', quantity: 1 },
    { id: 2, title: 'producto 2', quantity: 2 }
  ],

  activeArticulo:
    { id: 1, title: 'articulo 1' }

}

const articulosReducer = (state, action) => {
  switch (action.type) {
    case types.articuloMostrar:
      return {
        ...state,
        activeArticulo: state.articulos.find(articuloa => articuloa === action.payload)
      }

    case types.articuloAgregarAlCarrito:{
      const nuevoArticulo = action.payload
      const contadorCarrito = state.carrito.find(
        art => art.id === nuevoArticulo.id
      )
      return contadorCarrito
        ? {
            ...state,
            carrito: state.carrito.map(art =>
              art.id === nuevoArticulo.id
                ? { ...art, quantity: art.quantity + 1 }
                : art
            )
          }
        : {
            ...state,
            carrito: [
              ...state.carrito,
              { ...action.payload, quantity: 1 }
            ]
          } }

    case types.articuloQuitarTodo:
      return {
        ...state,
        carrito: state.carrito.filter(articuloa => articuloa.id !== action.payload)

      }

    case types.articuloQuitarUno:{
      const articuloBorrado = state.carrito.find(art => art.id === action.payload)

      return articuloBorrado.quantity > 1
        ? {
            ...state,
            carrito: state.carrito.map(art =>
              art.id === action.payload
                ? { ...art, quantity: art.quantity - 1 }
                : art
            )
          }
        : {
            ...state,
            carrito: state.carrito.filter(art => art.id !== action.payload)
          } }

    default:
      return state
  }
}

export { articulosIniciales }
export default articulosReducer
