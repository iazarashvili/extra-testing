import basketPage from "../pages/basketPage"
import homePage from "../pages/homePage"
import header from "../pages/header"


class Checker {
    checkAddedProductToBasket(itemPrice, itemName) {
        cy.get(itemPrice).invoke('text').then(($itemPrice) => {
            cy.get(itemName).invoke('text').invoke('trim').then(($itemName => {
                cy.get(header.elements.basketButton()).click()
                cy.get(basketPage.elements.totalPrice()).invoke('text').then(($totalPrice) => {
                    cy.get(basketPage.elements.firstItemName()).invoke('text').invoke('trim').should('eq', $itemName)
                    expect(parseFloat($itemPrice)).to.eq(parseFloat($totalPrice))
                })
            }))
        })
    }
}

export const checker = new Checker()