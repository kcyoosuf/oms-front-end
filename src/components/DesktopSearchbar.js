import React, { useState, useEffect } from 'react';
import { Box, IconButton, List, ListItem, ListItemText, ClickAwayListener } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux';
import useViewport from '../hooks/viewport';
const useStyles = makeStyles(theme => ({

    searchInput: {
        padding: "10px",
        fontSize: "15px",
        background: "#fff",
        outline: "none",
        border: "none",
        borderRadius: "2px 0 0 2px",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,.23)",
        width: 400,
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
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
}));
const DesktopSearchbar = () => {
    const classes = useStyles();
    const [query, setQuery] = useState();
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const { width } = useViewport();

    const onSearchFocus = () => {
        if (width < 623) dispatch(push("/mobile-search"))
        else setShowSuggestions(true)

    }

    const [arr, setArr] = useState([]);
    useEffect(() => {
        setArr([...arr, query])
    }, [query])
    return (
        <Box display="flex" width={1} px={1}>
            <ClickAwayListener onClickAway={() => setShowSuggestions(false)}>
                <Box width={1} css={{ position: "relative" }}>
                    <input
                        type="text" className={classes.searchInput}
                        placeholder={"Search for products, brands and more"}
                        onFocus={() => onSearchFocus()}
                        onChange={(e) => { setQuery(e.target.value.trim()) }}
                        value={query}
                    />

                    {showSuggestions && (
                        <Box
                            height={250}
                            zIndex={2}
                            boxShadow={2}
                            bgcolor="background.paper"
                            css={{ position: "absolute", width: "100%", overflow: "auto" }}
                        >
                            <List dense>
                                {arr.map((item, index) => {
                                    return (
                                        <ListItem dense button onClick={() => setQuery(item)} key={index}>
                                            <ListItemText
                                                primary={item}
                                            />
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Box>
                    )}
                </Box>
            </ClickAwayListener>
            <IconButton
                className={classes.searchIcon}
                aria-label="add to shopping cart"
                onClick={() => query && dispatch(push(`/search?q=${query}`))}
            >
                <SearchIcon />
            </IconButton>
        </Box>
    );
}

export default DesktopSearchbar;