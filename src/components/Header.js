import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, Button, Badge } from '@material-ui/core';
import { push } from 'connected-react-router'
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        padding: "0 10px",
        position: "sticky",
        top: 0,
        zIndex: 10,
    },
    container: {
        maxWidth: "80%",
        minWidth: "50%",
        margin: "auto",
        padding: "10px 0px 10px 0px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    search: {
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        width: "80%",
        padding: "0 10px",

    },
    searchInput: {
        width: "100%",
        padding: "10px",
        fontSize: "15px",
        background: "#fff",
        outline: "none",
        border: "none",
        borderRadius: "2px 0 0 2px",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.23)"
    },
    searchIcon: {
        backgroundColor: "#FFF",
        padding: 5,
        borderRadius: "0px 2px 2px 0px",
        '&:hover': {
            color: "brown",
            backgroundColor: "#FFF",
        }
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
        flexDirection: "column",
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
        marginLeft: theme.spacing(1)
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
}));
export default () => {
    const classes = useStyles();
    const [query, setQuery] = useState()
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
                <div className={classes.search}>
                    <input
                        type="text" className={classes.searchInput}
                        placeholder={"Search for products, brands and more"}
                        onChange={(e) => { setQuery(e.target.value.trim()) }}
                    />
                    <IconButton
                        className={classes.searchIcon}
                        aria-label="add to shopping cart"
                        onClick={() => query && dispatch(push(`/search?q=${query}`))}
                    >
                        <SearchIcon />
                    </IconButton>
                </div>
                <Hidden smDown>
                    <div className={classes.login}>
                        <Button variant="contained" className={classes.loginButton}>Login</Button>
                    </div>
                </Hidden>
                <div className={classes.cart}>
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

        </div>

    )
}