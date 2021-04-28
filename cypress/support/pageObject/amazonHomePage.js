class amazonHomePage{

    getTitleBartext()
    {
        return  cy.get('#nav-global-location-slot #glow-ingress-line2')
    }
    getSearchfield()
    {
        return  cy.get('.nav-fill #twotabsearchtextbox')
    }
}
export default amazonHomePage