describe('funcionalida de login', () => {
  it('mi aplicacion carga leyendo home', () => {
    // 01 arrange: estado inicial de la aplicacion
    cy.visit('/')

    // 02. act: interactua con la aplicacion (ejecuta acciones)
    cy.get('h1')
      .contains('Home') // asert: verificar que la accion se ejecuto
  })
})
