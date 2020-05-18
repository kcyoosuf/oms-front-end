import React, { useEffect } from 'react'
import Header from '../components/Header';
import TopNavigation from '../components/TopNavigation';
import { useDispatch, useSelector } from 'react-redux';
import PageContainer from '../components/PageContainer';
import { Grid, Box, Button, Typography, ButtonGroup, Hidden } from '@material-ui/core';
import { fetchProductById } from '../core/actions/product-actions';
import ProductRating from '../components/ProductRating';
import ProductPrice from '../components/ProductPrice';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ProductFeatures from '../components/ProductFeatures';
import ProductReview from '../components/ProductReview';


export default (props) => {
    const productId = props.match.params.productId;
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.product);

    useEffect(() => {
        const fetchData = () => {
            dispatch(fetchProductById(productId))
        }
        fetchData()
    }, [productId, dispatch])
    return (
        <>
            <Header />
            <TopNavigation />
            <PageContainer>
                {product &&
                    <Box boxShadow={0} bgcolor="background.paper" style={{ padding: 10 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} lg={5}>
                                <Grid container spacing={1}>
                                    <Grid item xs={3} lg={2}>
                                        <Box border={1} height="100%" style={{ borderColor: "#eee" }}></Box>
                                    </Grid>
                                    <Grid item xs={9} lg={10}>
                                        <Box border={1} style={{ borderColor: "#eee" }}>
                                            <img
                                                src={product.imageUrl}
                                                alt={product.title}
                                                style={{ margin: "auto", display: "block", objectFit: "scale-down", width: "70%", maxHeight: 450, height: "auto" }}
                                            />
                                        </Box>
                                    </Grid>
                                    <Hidden smDown>
                                        <Grid item xs={3} lg={2}>

                                        </Grid>
                                    </Hidden>
                                    <Grid item xs={12} lg={10}>
                                        <ButtonGroup
                                            variant="contained"
                                            fullWidth
                                            aria-label="add to cart or buy no"
                                        >
                                            <Button
                                                startIcon={<AddShoppingCartIcon />}
                                                color="primary"
                                                disableElevation
                                                size="large"
                                            >
                                                ADD TO CART
                                            </Button>
                                            <Button
                                                color="secondary"
                                                disableElevation
                                                size="large">
                                                BUY NOW
                                            </Button>
                                        </ButtonGroup>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={12} lg={7}>
                                <>

                                    <Box
                                        textAlign="left"
                                        textOverflow="ellipsis"
                                        fontSize={{ xs: 16, sm: 16, md: 20, lg: 24 }}
                                        fontWeight={500}
                                    >
                                        {product.title}
                                    </Box>

                                    {product.itemRating &&
                                        <ProductRating
                                            ratingValue={product.itemRating.ratingValue}
                                            totalRatings={product.itemRating.total_ratings}
                                        />
                                    }
                                    <ProductPrice
                                        price={product.price}
                                        actualPrice={product.actual_price}
                                        offerPercentage={product.offer_percentage}
                                    />

                                    {product.features &&
                                        <ProductFeatures
                                            title="Highlights"
                                            items={product.features}
                                        />
                                    }
                                    {product.warrantyDetails &&
                                        <ProductFeatures
                                            title="Warranty"
                                            text={product.warrantyDetails.warrantySummary}
                                        />
                                    }
                                    {product.seller &&
                                        <ProductFeatures
                                            title="Seller"
                                            text={
                                                <>
                                                    <b>{product.seller.name}</b>
                                                    &nbsp;(Rated <ProductRating ratingValue={product.seller.ratingValue} />
                                                    &nbsp;from {product.seller.total_ratings} customers)
                                                </>
                                            }
                                        />
                                    }
                                    {product.itemDescription &&
                                        <ProductFeatures title="Descripton">
                                            <Typography component="div">
                                                <Box textAlign="left" style={{ maxWidth: "100%", display: "block", wordBreak: "break-word" }}>
                                                    {product.itemDescription && product.itemDescription}
                                                </Box>
                                            </Typography>
                                        </ProductFeatures>
                                    }
                                    {product.reviews &&
                                        <>
                                            <ProductFeatures title="Reviews">
                                                {
                                                    product.reviews.items.map((reviewItem, index) => {
                                                        return <ProductReview reviewItem={reviewItem} />
                                                    })
                                                }
                                                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                                    <Button color="secondary">View All</Button>
                                                </div>
                                            </ProductFeatures>
                                        </>
                                    }
                                </>

                            </Grid>
                        </Grid>
                    </Box>
                }
            </PageContainer>
        </>
    )
}