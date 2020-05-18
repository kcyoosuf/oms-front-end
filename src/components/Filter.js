import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader, Collapse, ListItem, ListItemText, Checkbox, TextField, Slider, Divider } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StarBorder from '@material-ui/icons/StarBorder';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
    list: {
        boxShadow: "none"
    }
}))

export default ({ filters }) => {
    const classes = useStyles();

    return (
        <>
            <List
                className={classes.list}
                component="nav"
                dense
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        {"Filter"}
                    </ListSubheader>
                }
                className={classes.root}
            >
                {filters && filters.items && filters.items.map((filter, index) => {
                    return (
                        <Fragment key={index}>
                            <FilterItem
                                key={index}
                                filter={filter}
                            />
                            <Divider />
                        </Fragment>
                    )
                })}
            </List>
        </>
    )
}
const FilterItem = ({ filter }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(filter.open_by_default);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <ListItem button onClick={handleClick} dense>
                <ListItemText primary={filter.title} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {filter.type === "checkbox" && (
                    filter.values.map((item, index) => {
                        return (
                            <List component="div" disablePadding dense key={index}>
                                <ListItem className={classes.nested} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            //checked={checked.indexOf(value) !== -1}
                                            tabIndex={-1}
                                            disableRipple
                                        />
                                    </ListItemIcon>
                                    <ListItemText id={index} primary={item.text} />
                                </ListItem>
                            </List>
                        )
                    })
                )}
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {filter.type === "select" && (
                    <List component="div" disablePadding dense>
                        <ListItem className={classes.nested} dense>
                            <TextField
                                fullWidth
                                id="outlined-select-currency-native"
                                select
                                label="Select Size"
                                //value={currency}
                                //onChange={handleChange}
                                SelectProps={{
                                    native: true,
                                }}
                                variant="outlined"
                            >

                                {filter.values.map((item, index) => {
                                    return (


                                        <option key={index}>{item.text}</option>

                                    )
                                })}

                            </TextField>
                        </ListItem>
                    </List>
                )}
            </Collapse>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {filter.type === "slider" && (
                    <List component="div" disablePadding dense>
                        <ListItem className={classes.nested} dense>

                            <Slider
                                style={{ paddingTop: 30 }}
                                defaultValue={filter.values[2]}
                                //getAriaValueText={"hello"}
                                aria-labelledby="discrete-slider-always"
                                marks={filter.values}
                                valueLabelDisplay="on"
                                step={filter.values.lengt}
                                min={filter.values[0]}
                                max={filter.values[filter.values.length - 1]}
                            />
                        </ListItem>
                    </List>


                )}
            </Collapse>
        </>
    )
}