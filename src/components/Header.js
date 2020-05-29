import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CartIcon from '@material-ui/icons/ShoppingCart';
import { IconButton, Button, Badge } from '@material-ui/core';
import { push } from 'connected-react-router'
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import DesktopSearchbar from './DesktopSearchbar';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        padding: "0 10px",
        flexDirection: "row",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        zIndex: 10,
        [theme.breakpoints.down('sm')]: {
            padding: "0px",
            justifyContent: "space-between"
        },
    },
    container: {
        maxWidth: "100%",
        padding: "10px 0px 10px 0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
    },
    logo: {
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
    },

    login: {
        justifyContent: "right",
        display: "flex",
        flexDirection: "column"
    },
    loginButton: {
        backgroundColor: "#fff",
        color: "brown"
    },
    cart: {
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    mobileMenuToggle: {
        color: "#fff",
        fontSize: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    icon: {
        color: "#FFF",
        background: "none",
    }
}));
export default () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (

        <div className={classes.header}>
            <Hidden mdUp>
                <div className={classes.mobileMenuToggle}>
                    <IconButton className={classes.icon} aria-label="add to shopping cart">
                        <MenuIcon />
                    </IconButton>
                </div>
            </Hidden>
            <div className={classes.container}>
                <Hidden smDown>
                    <a className={classes.logo} href="/">
                        <img
                            width="75"
                            alt="Flipkart"
                            title="Flipkart"
                            className="logo-image"
                            src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
                        />
                    </a>
                </Hidden>

                <DesktopSearchbar />

            </div>
            <div className={classes.cart}>
                <Hidden smDown>
                    <div className={classes.login}>
                        <Button variant="contained" className={classes.loginButton}>Login</Button>
                    </div>
                </Hidden>
                <Hidden mdUp>
                    <IconButton className={classes.icon} aria-label="shopping cart">
                        <Badge color="secondary" badgeContent={5} max={999} >
                            <CartIcon />
                        </Badge>
                    </IconButton>

                </Hidden>
                <Hidden smDown>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.icon}
                        disableElevation
                        startIcon={<Badge color="secondary" badgeContent={5} max={999} ><CartIcon /></Badge>}
                        onClick={() => dispatch(push("/cart"))}
                    >
                        {"Cart"}
                    </Button>
                </Hidden>
            </div>
        </div>

    )
}