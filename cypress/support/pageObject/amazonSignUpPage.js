class amazonSignupPage{


    getPagetitle()
    {
        return  cy.get('.a-box.a-spacing-extra-large .a-spacing-small.moa_desktop_signup')
    }
    getYourNamefield()
    {
        return  cy.get('#ap_customer_name')
    }
    getMobileNumberfield()
    {
        return  cy.get('input[placeholder="Mobile number"]')
    }
    getPasswordfield()
    {
        return  cy.get('input[placeholder="At least 6 characters"]')
    }
    getContinuebutton()
    {
        return  cy.get('#auth-continue')
    }
    getErrormessage()
    {
        return  cy.get('.a-box.a-alert.a-alert-warning.a-spacing-base .a-alert-heading')
    }
}

export default amazonSignupPage