class amazonSignInpage{

    getSignIntext()
    {
        return  cy.get('.a-section .a-spacing-small').eq(0)
    }
    getCreateNewAccountbutton()
    {
        return  cy.get('#auth-create-account-link #createAccountSubmit')
    }
}

export default amazonSignInpage