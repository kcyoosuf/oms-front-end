import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../core/actions/ui-actions';
import { push } from 'connected-react-router'
import { Hidden, Box } from '@material-ui/core';
import clsx from 'clsx';


const useStyles = makeStyles(theme => ({
    container: {
        color: "#212121",
        textAlign: "center",
        position: "relative",
        maxWidth: "1248px",
        margin: "0 auto",
    },
    navigationUl: {
        listStyleType: "none",
        marginBlockStart: 0,
        display: "flex",
        justifyContent: "space-between"
    },
    menuItem: {
        float: "left",
        flex: 3,
        fontWeight: 500,
        paddingTop: 10,
        '&:hover': {
            color: "brown",
            fontWeight: 800,
            cursor: "pointer"
        }
    },
    active: {
        color: "brown",
    }
}));
export default () => {
    const classes = useStyles();
    const [active, setActive] = useState("top_stories")
    const categories = useSelector(state => state.ui.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = () => {
            if (categories.length == 0) {
                dispatch(fetchCategories())
            }
        }
        fetchData()
    }, [categories, dispatch])
    return (
        <Box
            display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}
            bgcolor="background.paper"
            boxShadow={1}
            height={40}
        >
            <div className={classes.container}>
                <ul className={classes.navigationUl}>
                    {
                        categories && categories.map(item => (
                            <li
                                key={item.name}
                                className={active === item.name ? clsx(classes.active, classes.menuItem) : classes.menuItem}
                                onClick={() => {
                                    setActive(item.name)
                                    dispatch(push(`/categories${item.url}`))
                                }}
                            >
                                {item.title}
                            </li>
                        ))

                    }

                </ul>
            </div>
        </Box>
    )
}