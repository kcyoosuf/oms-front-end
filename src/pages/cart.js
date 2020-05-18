import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartByUser } from '../core/actions/cart-actions';
import Header from '../components/Header';
import TopNavigation from '../components/TopNavigation';
import PageContainer from '../components/PageContainer';
import { Box, Grid, Typography, Button } from '@material-ui/core';
import CartItem from '../components/CartItem';
import SectionHeader from '../components/SectionHeader';
import CartTotalPrice from '../components/CartTotalPrice';
import { push } from 'connected-react-router';


const Cart = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cartItems);

    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchCartByUser(123))
        }
        fetchData()
    }, [dispatch])

    return (
        <>
            <Header />
            <TopNavigation />
            <PageContainer margin="large">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8} lg={8}>
                        <Box
                            bgcolor="background.paper"
                        >
                            <SectionHeader
                                left={
                                    <Typography variant="h5" color="inherit">
                                        {"My Cart"}
                                    </Typography>
                                }
                                right={
                                    <Button variant="contained" color="secondary">
                                        {"view all"}
                                    </Button>
                                }
                            />
                            {cartItems.cartItemsDtos && cartItems.cartItemsDtos.map((cartItem, index) => {
                                return (
                                    <>
                                        <CartItem
                                            key={index}
                                            cartItem={cartItem}
                                            page="cart"
                                        />
                                        <Box height={3} bgcolor="#eee" />
                                    </>
                                )
                            })}
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Box bgcolor="background.paper" >
                            <SectionHeader
                                left={
                                    <Typography variant="body1" color="textSecondary">
                                        {"PRICE DETAILS"}
                                    </Typography>
                                }
                            />
                            <CartTotalPrice />
                        </Box>
                        <Box
                            mt={1}
                            p={1}
                            bgcolor="primary.green"
                            onClick={() => dispatch(push("/checkout"))}
                        >
                            <Button fullWidth style={{ color: "#fff" }} >Place order</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                        <Box
                            bgcolor="background.paper"
                        >
                            <SectionHeader
                                left={
                                    <Typography variant="h5" color="inherit">
                                        {"Favorites"}
                                    </Typography>
                                }
                            />
                        </Box>
                    </Grid>
                </Grid>

            </PageContainer>
        </>
    );
}

export default Cart;