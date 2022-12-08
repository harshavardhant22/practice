it('Amazon', () => {
    cy.visit('https://www.amazon.com/')
    cy.wait(500)
})

it('login', () => {
    cy.get('#nav-link-accountList-nav-line-1').click()
    cy.get('#ap_email').type('9959203557')
    cy.get('.a-button-inner > #continue').click()
    cy.get('#ap_password').type('995920')
    cy.wait(500)
    cy.get('#signInSubmit').click()
    cy.wait(500)

})
