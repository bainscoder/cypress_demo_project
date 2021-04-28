class productDetailPage{

    getAddtoCartbutton()
    {
        return  cy.get('.a-section.a-spacing-small.a-visible .a-button-stack .a-button-inner')
    }
}

export default productDetailPage