describe('frontend loads', () => {
  it('visits hte app', () => {
    // Visit the app - Ændre til den port din app kører på
    cy.request('http://localhost:5173').then((response) => {
      // Check if the app is running
      expect(response.status).to.eq(200)
      //npm run test:e2e:dev
    })
  })
})

describe('Check h1 tag on app has "You did it!"', () => {
  it('visits the app', () => {
    cy.visit('http://localhost:5173')
    cy.get('h1').should('have.text', 'You did it!')
  })
})
