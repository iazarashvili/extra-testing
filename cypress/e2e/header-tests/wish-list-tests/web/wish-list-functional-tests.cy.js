import { baseHelper } from "../../../../support/helpers/baseHelper";
import { homePageHelper } from  "../../../../support/helpers/homePageHelper";
import homePage from "../../../../support/pages/homePage";
import header from "../../../../support/pages/header";
import basketPage from "../../../../support/pages/basketPage";
import { wishListPageHelper } from "../../../../support/helpers/wishListHelper";

describe('wish list ის ტესტირება', () => {
    beforeEach('', () => {
        baseHelper.sessionAuthorization(Cypress.env('userName'), Cypress.env('password'))
        baseHelper.openSiteFromWeb()
    })

    afterEach('ვიშლისტის გასუფთავება', () => {
        baseHelper.openWishList()
        wishListPageHelper.deleteItemToWishList()
    })

    it('პროდუქტის დამატება ვიშ ლისტში დღის შეთავაზების სეტიდან და შემოწმება', () => {
        baseHelper.addItemToWishListAndCheck(homePage.timedDealsElements.firstItemHeartIcon(), 1)
    });

    it('ორი პროდუქტის დამატება ვიშ ლისტში და შემოწმება', () => {
        baseHelper.addItemToWishListAndCheck(homePage.elements.firstItemHeartIcon(), 1)
        baseHelper.addItemToWishListAndCheck(homePage.elements.secondItemHeartIcon(), 2)
    });

    it('პროდუქტის დამატება ვიშ ლისტში კალათიდან და შემოწმება', () => {
        baseHelper.scroolToFirstSet()
        baseHelper.addItemToCartAndCheck(homePage.elements.firstSetItemAddToCartButton(), 1)
        baseHelper.openBasket()
        baseHelper.addItemToWishListAndCheck(basketPage.elements.firstItemHeartIcon(), 1)
    });
})