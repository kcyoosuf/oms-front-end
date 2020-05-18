import React, { useEffect } from 'react';
import { Grid, makeStyles, Typography, Box, CardMedia, CardActionArea, Card, Divider, ButtonGroup, Button } from '@material-ui/core';
import ProductPrice from './ProductPrice';
import Counter from './Counter';
import CartItemButtons from './CartItemButtons';
import { getCurrency } from '../helpers/util/string-util';
const useStyles = makeStyles((theme) => ({
    image: {
        height: 100,
        objectFit: "contain",
        marginRight: 8,
        [theme.breakpoints.down('md')]: {
            height: 80,
            objectFit: "contain",
        },
    },

}))
const CartItem = ({ cartItem, page }) => {
    const classes = useStyles()
    return (
        <>
            <Box p={1} border={1} borderLeft={0} borderRight={0} borderTop={0} borderColor="#eee">
                <Grid container>
                    <Grid item xs={4} lg={3}>
                        <Box display="flex" justifyContent="space-around" alignItems="center" flexDirection="column" height={1}>
                            <img src={cartItem.itemImage} className={classes.image} />
                            <Counter quantity={cartItem.quantity} />
                        </Box>
                    </Grid>
                    <Grid item xs={8} lg={9} style={{ position: "relative" }}>
                        <Typography component="span">
                            <Box
                                textAlign="left"
                                fontSize={{ xs: 12, md: 16, lg: 18 }}
                                textOverflow="ellipsis"
                                overflow="hidden"
                                component="div"
                            >
                                {cartItem.title}
                            </Box>
                        </Typography>
                        <ProductPrice
                            price={cartItem.itemPrice}
                            actualPrice={cartItem.actual_price}
                            offerPercentage={cartItem.offer_percentage}
                        />
                        <Box
                            color="#888"
                            py={1}
                            fontSize={{ xs: 12, md: 14, lg: 16 }}
                        >
                            {`Seller : ${cartItem.seller.name}`}
                        </Box>
                        <Box display={{ xs: "flex", lg: "flex" }} justifyContent="left" fontSize={{ xs: 10, lg: 12 }}>
                            <Box mr={1}>Delivery by Sat May 9 |</Box>
                            <Box>{getCurrency()}40</Box>
                        </Box>

                    </Grid>

                    <Grid item xs={12}>
                        {page === "cart" && <CartItemButtons />}

                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default CartItem;