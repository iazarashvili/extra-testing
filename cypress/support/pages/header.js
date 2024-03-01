class Header {
    elements = {
        wishListItemCount: () => '[routerlink="/wishlist"] div p',
        basketItemCount: () => '[routerlink="/basket"] p',
        basketButton: () => '[href="/basket"]',
    }
}

export default new Header()