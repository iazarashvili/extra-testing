import { basketApi } from "../../../../support/api/basketApi";
import { baseHelper } from "../../../../support/helpers/baseHelper";
import homePage from "../../../../support/pages/homePage";
import { checker } from '../../../../support/helpers/checkMethods'
import itemDetailPage from "../../../../support/pages/itemDetailPage";

describe('კალათის ფუნქციონალის ტესტირება', () => {
    context('არაავტორიზებული მომხმარებლით, resolution 315 x 812', () => {
        beforeEach('', () => {
            basketApi.emptyBasket()
            baseHelper.initialAuthorizationMobile()
            baseHelper.openSiteFromMobile()
        })

        it('პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
            baseHelper.responsiveScroolTimedDeals()
            baseHelper.addItemToCartAndCheck(homePage.timedDealsElements.firstItemAddToCartButton(), 1)
            cy.scrollTo('top')
            checker.checkAddedProductToBasket(homePage.timedDealsElements.firstItemDiscountPrice(), homePage.timedDealsElements.firstItemName())
        });

        it('პროდუქტის კალათში დამატება მთავარი გვერდი პირველი სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.firstSetItemAddToCartButton(), 1)
            cy.scrollTo('top')
            checker.checkAddedProductToBasket(homePage.elements.firstItemPrice(), homePage.elements.firstItemName())
        });

        it('პროდუქტის კალათში დამატება დეტალური გვერდიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            cy.scrollTo(0, 1200, {duration: 1000})
            baseHelper.addItemToCartAndCheck(itemDetailPage.mobileElements.addItemToCartButton(), 1)
            cy.scrollTo('top')
            checker.checkAddedProductToBasket(itemDetailPage.mobileElements.itemPrice(), itemDetailPage.mobileElements.itemName())
        });

        afterEach('კალათის გასუფთავება', () => {
            basketApi.emptyBasket()
        })
    })
})



describe('კალათის ფუნქციონალის ტესტირება', () => {
    context('ავტორიზებული მომხმარებლით. resolution 315 x 812', () => {
        beforeEach('', () => {
            basketApi.emptyBasket()
            baseHelper.sessionAuthorizationMobile(Cypress.env('userName'), Cypress.env('password'))
            baseHelper.openSiteFromMobile()
        })

        it('პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
            baseHelper.responsiveScroolTimedDeals()
            baseHelper.addItemToCartAndCheck(homePage.timedDealsElements.firstItemAddToCartButton(), 1)
            cy.scrollTo('top')
            checker.checkAddedProductToBasket(homePage.timedDealsElements.firstItemDiscountPrice(), homePage.timedDealsElements.firstItemName())
        });

        it('პროდუქტის კალათში დამატება მთავარი გვერდი პირველი სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.firstSetItemAddToCartButton(), 1)
            cy.scrollTo('top')
            checker.checkAddedProductToBasket(homePage.elements.firstItemPrice(), homePage.elements.firstItemName())
        });

        it('პროდუქტის კალათში დამატება დეტალური გვერდიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.openProductDetailPage(homePage.elements.firstItemName())
            cy.scrollTo(0, 1200, {duration: 1000})
            baseHelper.addItemToCartAndCheck(itemDetailPage.mobileElements.addItemToCartButton(), 1)
            cy.scrollTo('top')
            checker.checkAddedProductToBasket(itemDetailPage.mobileElements.itemPrice(), itemDetailPage.mobileElements.itemName())
        });

        afterEach('კალათის გასუფთავება', () => {
            basketApi.emptyBasket()
        })
    })
})