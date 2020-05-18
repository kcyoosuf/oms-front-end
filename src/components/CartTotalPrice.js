import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import { getCurrency, getCartTotalText } from '../helpers/util/string-util';
import { getCartItemTotal } from '../helpers/util/calc-util';
import { useSelector } from 'react-redux';

const BoxItem = ({ left, right }) => {
    return (
        <Box p={1} display="flex" justifyContent="space-between">
            {left}
            {right}
        </Box>
    )
}
const CartTotalPrice = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        <Box p={2}>
            <BoxItem
                left={<Typography>Price ({getCartTotalText(cartItems)})</Typography>}
                right={<Typography>{getCurrency()}{getCartItemTotal(cartItems)}</Typography>}
            />
            <BoxItem
                left={<Typography>Delivery Charges</Typography>}
                right={<Typography>Free</Typography>}
            />
            <Divider />
            <BoxItem
                left={<Typography variant="h6">Total Amount</Typography>}
                right={<Typography variant="h6">{getCurrency()}{getCartItemTotal(cartItems)}</Typography>}
            />
        </Box>
    );
}

export default CartTotalPrice;