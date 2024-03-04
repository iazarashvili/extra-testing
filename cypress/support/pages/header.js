

export class Header {
    elements = {
        wishListItemCount: () => '[routerlink="/wishlist"] div p',
        basketItemCount: () => '[routerlink="/basket"] p',
        
        basketButton: () => '[href="/basket"]',
        wishListButton: () => '[routerlink="/wishlist"]',
    }
}

export default new Header()