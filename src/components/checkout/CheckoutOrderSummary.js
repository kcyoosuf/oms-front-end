import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem';
import { fetchCartByUser } from '../../core/actions/cart-actions';
import { checkoutActionComplete } from '../../core/actions/checkout-actions';
const CheckoutOrderSummary = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems)
    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchCartByUser(123))
            dispatch(checkoutActionComplete("orderSummary"))
        }
        fetchData()
    }, [dispatch])
    return (
        <>
            {cartItems && cartItems.cartItemsDtos && cartItems.cartItemsDtos.map((cartItem, index) => {
                return (

                    <CartItem
                        key={index}
                        cartItem={cartItem}
                    />

                )
            })}
        </>

    );
}

export default CheckoutOrderSummary;