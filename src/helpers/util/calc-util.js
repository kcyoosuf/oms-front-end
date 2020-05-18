export const getCartItemTotal = (cartItems) => {
    let cartItemTotal = 0;
    let items = cartItems.cartItemsDtos || []
    for (let i = 0; i < items.length; i++) {
        cartItemTotal += items[i].itemPrice * items[i].quantity
    }
    return cartItemTotal;
}