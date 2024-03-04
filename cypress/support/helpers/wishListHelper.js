import wishListPage from "../pages/wishListPage"

export class WishListPageHelper {
    deleteItemToWishList(){
        cy.get(wishListPage.elements.multipleRemoveIcon(), {timeout: 8000}).click({multiple: true})
        cy.contains('შენი საყიდლების სია ცარიელია')
    }
}

export const wishListPageHelper = new WishListPageHelper()