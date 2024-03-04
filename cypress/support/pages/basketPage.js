export class BasketPage {
    elements = {
        firstItemPrice: () => '[id="currentPrice_0"]',
        secondItemPrice: () => '[id="currentPrice_1"]',

        firstItemHeartIcon: () => '[id="addWishList_0"]:eq(1)',

        firstItemDiscountedPrice: () => '[id="discountedPrice_0"]',
        secondItemDiscountedPrice: () => '[id="discountedPrice_1"]',

        firstItemName: () => 'div._x_mb-4 a:eq(0)',
        secondItemName: () => 'div._x_mb-4 a:eq(1)',

        totalPrice: () => '[id="totalPrice"]',
    }
}

export default new BasketPage()