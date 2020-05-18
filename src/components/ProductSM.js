
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { getProductName } from '../helpers/util/string-util';
import ProductRating from "../components/ProductRating"
import ProductPrice from './ProductPrice';
const useStyles = makeStyles(theme => ({

    card_container: {
        "backgroundColor": "#ffffff",
        "padding": "10px",
        "transition": "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
        //"boxShadow": "2px 1px 3px 3px rgba(0, 0, 0, 0.12), 2px 1px 2px 3px rgba(0, 0, 0, 0.24)",
        '&:hover': {
            "boxShadow": "0 14px 14px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
            marginRight: 2,
            marginLeft: 2
        },
        overflow: "hidden",
        [theme.breakpoints.down('md')]: {
            margin: 1,
        },
    },
    card: {
        "display": "flex",
        "flexDirection": "column",
        "position": "relative",
        textDecoration: "none",
        cursor: "pointer"
    },
    item_image_container: {
        "height": "100%",
        display: "flex",
        "margin": "0 auto",
    },
    item_image: {
        "top": "0",
        "left": "0",
        "bottom": "0",
        "right": "0",
        "maxWidth": "100%",
        "maxHeight": "100%",
        "transition": "opacity 0.5s linear",
        "opacity": "1",
        "margin": "auto",
        "zIndex": "0"
    },
    cart_icon: {
        "position": "absolute",
        "right": "0px",
        zIndex: 1
    },
    favorite_icon: {
        "position": "absolute",
        "left": "0px",
        "top": "0px",
        zIndex: 1
    },

    sub_title: {
        "display": "inline-block",
        "width": "calc(100% - 10px)",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "color": "#212121"
    },
    title: {
        "color": "#878787",
        "fontSize": "14px",
        "fontWeight": "500"
    }

}))
export default ({ product }) => {

    const classes = useStyles();
    const dispatch = useDispatch()
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <Grid item>
            <div className={classes.card_container}>
                <div className={classes.card} href="">
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        alignContent="flex-end"
                        bgcolor="background.paper"
                        css={{ height: 350 }}
                    >

                        <IconButton className={classes.cart_icon} aria-label="add to shopping cart" color="secondary">
                            <AddShoppingCartIcon />
                        </IconButton>
                        <IconButton className={classes.favorite_icon} aria-label="add to shopping cart" color="primary">
                            <FavoriteBorderIcon />
                        </IconButton>

                        <div className={classes.item_image_container} onClick={() => { dispatch(push(`/product/${getProductName(product.subtitle)}/${product.id}`)) }}>
                            <img
                                className={classes.item_image}
                                src={product.imageUrl}
                                alt={product.title}
                            />
                        </div>
                    </Box>
                    <Box
                        display="flex"
                        flexWrap="wrap"
                        alignContent="flex-end"
                        bgcolor="background.paper"
                        css={{ height: 100 }}
                    >
                        <div className={classes.item_details}>
                            <div className={classes.item_desc}>
                                <div className={classes.title}>{product.title}</div>
                                <div className={classes.sub_title}>
                                    {product.subtitle}
                                </div>
                            </div>

                            {product.rating && (
                                <ProductRating
                                    ratingValue={product.rating.ratingValue}
                                    totalRatings={product.rating.total_ratings}
                                />
                            )}
                            <ProductPrice
                                price={product.price}
                                actualPrice={product.actual_price}
                                offerPercentage={product.offer_percentage}
                            />
                        </div>
                    </Box>
                </div>
            </div>
        </Grid>
    )
}