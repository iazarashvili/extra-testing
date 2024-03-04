import basePage from "../pages/basePage";
import homePage from "../pages/homePage";
import signInForm from "../pages/signInForm";
import header from "../pages/header";

export class HomePageHelper {

    white() {
        cy.get(homePage.whiteElements.white(), { timeout: 10000 }).should('exist')
    }
}

export const homePageHelper = new HomePageHelper()