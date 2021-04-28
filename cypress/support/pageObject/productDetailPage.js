class productDetailPage{

    getAddtoCartbutton()
    {
        return  cy.get('#addToCart_feature_div .a-button-inner .a-button-text')
    }
}

export default productDetailPage