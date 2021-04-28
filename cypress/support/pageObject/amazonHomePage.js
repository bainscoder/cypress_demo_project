class amazonHomePage{

    getTitleBartext()
    {
        return  cy.get('#nav-global-location-slot #glow-ingress-line2')
    }
    getSearchfield()
    {
        return  cy.get('.nav-fill #twotabsearchtextbox')
    }
    getAccountbutton()
    {
        return  cy.get('#nav-tools .nav-line-2.nav-long-width')
    }
}
export default amazonHomePage