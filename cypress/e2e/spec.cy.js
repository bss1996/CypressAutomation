/// <reference types = "Cypress" />
const fs = require('fs').promises;

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })
})