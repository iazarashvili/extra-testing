import basePage from "../pages/basePage";
import homePage from "../pages/homePage";
import signInForm from "../pages/signInForm";

export class HomePageHelper {

    white() {
        cy.get(homePage.whiteElements.white(), {timeout: 10000}).should('exist')
    }

    addItemToWishListAndCheck(item, count){
        cy.get(item).click()
        cy.get(header.elements.wishListItemCount(), { timeout: 6000 }).invoke('text').should('eq', item_count)
    }
}

export const homePageHelper = new HomePageHelper()