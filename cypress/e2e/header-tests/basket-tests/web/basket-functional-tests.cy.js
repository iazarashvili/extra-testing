import { baseHelper } from "../../../../support/helpers/baseHelper"
import homePage from "../../../../support/pages/homePage"
import { checker } from "../../../../support/helpers/checkMethods"
import { basketApi } from "../../../../support/api/basketApi"

describe('კალათის ფუნქციონალის ტესტირება', () => {
    context('არაავტორიზებული მომხმარებლით, resolution 1920 x 1080', () => {
        beforeEach('', () => {
            basketApi.emptyBasket()
            baseHelper.initialAuthorization()
            baseHelper.openSiteFromWeb()
        })

        it('პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
            baseHelper.scroolToTimedDeals()
            baseHelper.addItemToCartAndCheck(homePage.timedDealsElements.firstItemAddToCartButton(), 1)
            checker.checkAddedProductToBasket(homePage.timedDealsElements.firstItemDiscountPrice(), homePage.timedDealsElements.firstItemName())
        });

        it('პროდუქტის დამატება კალათში მთავარი გვერდის პირველი სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.firstSetItemAddToCartButton(), 1)
            checker.checkAddedProductToBasket(homePage.elements.firstItemPrice(), homePage.elements.firstItemName())
        });
    })
})



describe('კალათის ფუნქციონალის ტესტირება', () => {
    context('ავტორიზებული მომხმარებლით. resolution 1920 x 1080', () => {
        beforeEach('', () => {
            basketApi.emptyBasket()
            baseHelper.sessionAuthorization(Cypress.env('userName'), Cypress.env('password'))
            baseHelper.openSiteFromWeb()
        })

        it('პროდუქტის კალათში დამატება დღის შეთავაზების სეტიდან', () => {
            baseHelper.scroolToTimedDeals()
            baseHelper.addItemToCartAndCheck(homePage.timedDealsElements.firstItemAddToCartButton(), 1)
            checker.checkAddedProductToBasket(homePage.timedDealsElements.firstItemDiscountPrice(), homePage.timedDealsElements.firstItemName())
        });

        it('პროდუქტის დამატება კალათში მთავარი გვერდის პირველი სეტიდან', () => {
            baseHelper.scroolToFirstSet()
            baseHelper.addItemToCartAndCheck(homePage.elements.firstSetItemAddToCartButton(), 1)
            checker.checkAddedProductToBasket(homePage.elements.firstItemPrice(), homePage.elements.firstItemName())
        });
    })
})