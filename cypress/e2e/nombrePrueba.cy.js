describe('funcionalida de login', () => {
  it('mi aplicacion carga leyendo home', () => {
    // 01 arrange: estado inicial de la aplicacion
    cy.visit('/')

    // 02. act: interactua con la aplicacion (ejecuta acciones)
    cy.get('h1')
      .contains('lista de productos') // asert: verificar que la accion se ejecuto
  })

  it('Probar el Login como CUSTOMER', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')
    // 01. Arrange
    cy.visit('/login')

    // 02. Act
    cy.get('input[type="email"]').type('drstrange@marvel.com')
    cy.get('input[type="password"]').type('multiverso')

    cy.get('button[type="submit"]').click()
    cy.wait('@login')

    // 03. Assert
    // cy.url().should('include', '/micuenta')
    cy.get('h1').contains('Mi Cuenta')
  })
  it('Cuando haga Logout como ADMIN me debe llevar a la página de Home', () => {
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')
    // 01. Arrange
    cy.visit('/login')

    // 02. Act
    cy.get('input[type="email"]').type('superman@dc.com')
    cy.get('input[type="password"]').type('superman')

    cy.get('button[type="submit"]').click()

    cy.wait('@login')

    cy.get('nav > ul li:last').click()
    // 03. Assert
    // cy.url().should('include', '/dashboard')
    cy.get('h1').contains('lista de productos')
  })
})
