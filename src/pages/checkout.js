import React from 'react';
import Header from '../components/Header';
import TopNavigation from '../components/TopNavigation';
import { Box, Grid, Typography } from '@material-ui/core';
import PageContainer from '../components/PageContainer';
import CheckoutStepper from '../components/CheckoutStepper';
import CheckoutLogin from '../components/checkout/CheckoutLogin';
import CheckoutDeliveryAddress from '../components/checkout/CheckoutDeliveryAddress';
import CheckoutOrderSummary from '../components/checkout/CheckoutOrderSummary';
import CartTotalPrice from '../components/CartTotalPrice';
import SectionHeader from '../components/SectionHeader';

const CheckoutPaymentOptions = () => {
    return <h3>Payment Options</h3>
}
const Checkout = () => {
    const items = [
        {
            text: "Login",
            action: "login",
            nextButtonText: "Continue to checkout",
            component: <CheckoutLogin />
        },
        {
            text: "Delivery Address",
            action: "deliveryAddress",
            nextButtonText: "Deliver here",
            component: <CheckoutDeliveryAddress />
        },
        {
            text: "Order Summary",
            action: "orderSummary",
            nextButtonText: "Go to Payment",
            component: <CheckoutOrderSummary />
        },
        {
            text: "Payment Options",
            action: "paymentOptions",
            nextButtonText: "Pay Now",
            component: <CheckoutPaymentOptions />
        }
    ]
    return (
        <>
            <Header />
            <TopNavigation />
            <PageContainer margin="large">
                <Grid container spacing={1}>
                    <Grid item xs={12} md={9} lg={8}>
                        <Box bgcolor="background.paper" height={1}>
                            <CheckoutStepper
                                items={items}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={3} lg={4}>
                        <Box bgcolor="background.paper" >
                            <SectionHeader
                                left={
                                    <Typography variant="body1" color="textSecondary">
                                        {"Total Payable"}
                                    </Typography>
                                }
                            />
                            <CartTotalPrice />
                        </Box>
                    </Grid>
                </Grid>

            </PageContainer>
        </>
    );
}

export default Checkout;