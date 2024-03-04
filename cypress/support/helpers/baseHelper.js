import basePage from "../pages/basePage";
import signInForm from "../pages/signInForm";
import homePage from "../pages/homePage";
import header from "../pages/header";
import { homePageHelper } from '../helpers/homePageHelper'

export class BaseHelper {

    sessionAuthorization(userName, password){
        cy.session("SessionAuthorization1", () => {
            cy.viewport(1920, 1080)
            cy.visit('')
            cy.get('#username').type(Cypress.env('authUserName'));
            cy.get('#password').type(Cypress.env('authPassword'));
            cy.contains('Sign In').click();
            cy.url().should('eq', Cypress.env('base_url'));
            baseHelper.clickSignInButton(basePage.elements.signInButton())
            baseHelper.typeUserName(userName);
            baseHelper.typeUserPassword(password)
            baseHelper.clickSignInButton(signInForm.elements.signInButton())
            cy.wait(4000)
          })
    }

    initialAuthorization(){
        cy.session("stagingaauth", () => {
            cy.viewport(1920, 1080)
            cy.visit('')
            cy.get('#username').type(Cypress.env('authUserName'));
            cy.get('#password').type(Cypress.env('authPassword'));
            cy.contains('Sign In').click();
            cy.url().should('eq', Cypress.env('base_url'));
            homePageHelper.white()
          })
    }
    
    openSiteFromWeb(){
        cy.viewport(1920, 1080)
        cy.visit('').wait(1000)
    }

    openSiteFromMobile(){
        cy.viewport('iphone-x')
        cy.visit('').wait(1000)
    }

    clickSignInButton(button){
        cy.get(button).click({force: true})
    }

    typeUserName(usserName){
        cy.get(signInForm.elements.userNameInput()).type(usserName)
    }

    typeUserPassword(password){
        cy.get(signInForm.elements.passwordInput()).type(password)
    }

    addItemToCartAndCheck(item, itemCount){
        cy.get(item).click()
        cy.get(homePage.elements.addItemToCardPopupText(), { timeout: 5000 }).should('include.text', 'დამატებულია კალათაში')
        cy.get(header.elements.basketItemCount()).invoke('text').invoke('replace').then(($count) => {
            expect(parseInt($count)).be.eq(itemCount)
        })
    }

    addItemToWishListAndCheck(item, item_count) {
        cy.get(item).click().wait(2000)
        cy.get(header.elements.wishListItemCount(), { timeout: 6000 }).invoke('text').invoke('replace').then(($itemCount) => {
            expect(parseInt($itemCount)).to.eq(item_count)
        })
    }

    openBasket() {
        cy.get(header.elements.basketButton()).click()
    }

    openWishList() {
        cy.get(header.elements.wishListButton()).click()
        cy.location('pathname').should('eq', '/wishlist').wait(2000)
    }

    scroolToTimedDeals(){
        cy.scrollTo(0, 400, { duration: 700 }).wait(1000)
    }

    scroolToFirstSet(){
        cy.scrollTo(0, 1000, {duration: 1200}).wait(1000)
    }

}

export const baseHelper = new BaseHelper()