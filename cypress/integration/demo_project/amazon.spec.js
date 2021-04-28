/// <reference types = "cypress" />

// for importing json files
import amazonhomepage       from '../../fixtures/amazonhomepage.json'
import resultpage           from '../../fixtures/resultpage.json'
import productdetailpage    from '../../fixtures/productdetailpage.json'
import amazonsigninpage     from '../../fixtures/amazonsigninpage.json'

// for importing Class files
import AmazonHomePage       from '../../support/pageObject/amazonHomePage'
import ResultPage           from '../../support/pageObject/resultPage'
import ProductDetailPage    from '../../support/pageObject/productDetailPage'
import AmazonSignInPage     from '../../support/pageObject/amazonSignInPage'

const amazonHomePage    = new AmazonHomePage()
const resultPage        = new ResultPage()
const productDetailPage = new ProductDetailPage()
const amazonSignInPage  = new AmazonSignInPage

describe('Cypress automation framework for demo purpose', ()=>{

    it('Amazon: First test', ()=>{
          
        cy.visit('https://www.amazon.in')

    })
    it.only('Amazon: Second test', ()=>{

        cy.visit('/')                                                                                                                       // visit Amazon India site
        amazonHomePage.getTitleBartext().should('contain', amazonhomepage.addressText)                                                      // to verify text in Amazon home page
        amazonHomePage.getSearchfield().type(amazonhomepage.productname)                                                                    // add item name in the search field
        resultPage.getProductitem().eq(2).should('contain', resultpage.productTitle).invoke('removeAttr', 'target').click().wait(2000)      // click searched item
        productDetailPage.getAddtoCartbutton().should('contain', productdetailpage.addToCarttext)                                           // to verify and click "Add to Cart" button
        cy.get('#addToCart_feature_div .a-button-inner  #add-to-cart-button').click()
        amazonSignInPage.getSignIntext().should('contain', amazonsigninpage.signIntext)                                                       // to verify main title of the page
        amazonSignInPage.getCreateNewAccountbutton().should('contain', amazonsigninpage.createAccounttext)                                  // to verify Create your Amazon account

    })
        



})
