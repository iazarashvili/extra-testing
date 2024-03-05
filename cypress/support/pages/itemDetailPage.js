export class ItemDetailPage {

        elements = {
            
        }

        mobileElements = {
            addItemToCartButton: () => '#AddToCart-detailed-mobile-button',
            itemPrice: () => 'div span._x_text-10:eq(0)',
            itemName: () => 'h1._x_font-bold:eq(0)',
        }
}

export default new ItemDetailPage()