/// <reference types = "cypress" />

// for importing json files
import amazonhomepage       from '../../fixtures/amazonhomepage.json'
import resultpage           from '../../fixtures/resultpage.json'
import productdetailpage    from '../../fixtures/productdetailpage.json'
import amazonsigninpage     from '../../fixtures/amazonsigninpage.json'
import amazonsignuppage     from '../../fixtures/amazonsignuppage.json'

// for importing Class files
import AmazonHomePage       from '../../support/pageObject/amazonHomePage'
import ResultPage           from '../../support/pageObject/resultPage'
import ProductDetailPage    from '../../support/pageObject/productDetailPage'
import AmazonSignInPage     from '../../support/pageObject/amazonSignInPage'
import AmazonSignupPage     from '../../support/pageObject/amazonSignUpPage'

const amazonHomePage    = new AmazonHomePage()
const resultPage        = new ResultPage()
const productDetailPage = new ProductDetailPage()
const amazonSignInPage  = new AmazonSignInPage()
const amazonSignUpPage  = new AmazonSignupPage()

describe('Cypress automation framework for demo purpose', ()=>{

    beforeEach('', ()=>{

        cy.visit('/')                                                                                                                       // to visit Amazon India website

    })

    it('Amazon_First_script: Guest user should able to search, find and add product into the cart', ()=>{

        amazonHomePage.getTitleBartext().should('contain', amazonhomepage.addressText)                                                      // to verify text in Amazon home page
        amazonHomePage.getSearchfield().type(amazonhomepage.productname)                                                                    // add item name in the search field
        resultPage.getProductitem().should('contain', resultpage.productTitle).invoke('removeAttr', 'target').click().wait(2000)            // click searched item
        productDetailPage.getAddtoCartbutton().should('contain', productdetailpage.addToCarttext).click()                                   // to verify and click "Add to Cart" button        
        amazonSignInPage.getSignIntext().should('contain', amazonsigninpage.signIntext)                                                     // to verify main title of the page
        amazonSignInPage.getCreateNewAccountbutton().should('contain', amazonsigninpage.createAccounttext)                                  // to verify Create your Amazon account

    })
    
    it('Amazon_Second_script: Guest user should able add invalid-data in Sign-Up page and get valid error message', ()=>{
        
        amazonHomePage.getAccountbutton().should('contain', 'Account & Lists').click()                                                      // to verify and click Account and Lists button
        amazonSignInPage.getCreateNewAccountbutton().should('contain', amazonsigninpage.createAccounttext).click()                          // to verify Create your Amazon account
        amazonSignUpPage.getPagetitle().should('contain', amazonsignuppage.pageTitle)                                                       // to verify Create Account title
        amazonSignUpPage.getYourNamefield().type(amazonsignuppage.name)                                                                     // to add data in Your name field
        amazonSignUpPage.getMobileNumberfield().type(amazonsignuppage.number)                                                               // to add data in mobile number field
        amazonSignUpPage.getPasswordfield().type(amazonsignuppage.password)                                                                 // to add data in password field
        amazonSignUpPage.getContinuebutton().should('contain', amazonsignuppage.continueButton).click()                                     // to verify and click Continue button
        amazonSignUpPage.getErrormessage().should('contain', amazonsignuppage.errorMessage)                                                 // to verify error message
        
    })

})
