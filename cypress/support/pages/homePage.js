export class HomePage {

    elements = {

        addItemToCardPopupText: () => 'app-toast div._x_text-white',
        firstSetItemAddToCartButton: () => '[id="AddToCart-card-button-0"]:eq(1)',

        firstItemHeartIcon: () => '[id="addWishList_0"]:eq(0)',
        secondItemHeartIcon: () => '#addWishList_1:eq(0)',

        //! Item Prices
        firstItemPrice: () => '[id="productPrice_0"]:eq(0)',
        secondItemPrice: () => '[id="productPrice_1"]:eq(0)',

        //! Item Names
        firstItemName: () => '[id="productTitle_0"]:eq(1)',
        secondItemName: () => '[id="productTitle_1"]:eq(1)',
    }

    timedDealsElements = {

        firstItemAddToCartButton: () => '#AddToCart-card-button-0:eq(0)',
        secondItemAddToCartButton: () => '[id="AddToCart-card-button-1"]:eq(0)',

        firstItemHeartIcon: () => '[id="addWishList_0"]:eq(0)',
        secondItemHeartIcon: () => '#addWishList_1:eq(0)',

        //! Item Names 
        firstItemName: () => '[id="productTitle_0"]:eq(0)',
        secondItemName: () => '[id="productTitle_1"]:eq(0)',

        firstItemDiscountPrice: () => '[id="discountPrice_0"]:eq(0)',
        secondItemDiscountPrice: () => '[id="discountPrice_1"]:eq(0)'

    }

    whiteElements = {
        
        white: () => '[class="_x_mt-4 _x_text-red _x_text-2 _x_font-bold ng-star-inserted"]',
    }
}

export default new HomePage()