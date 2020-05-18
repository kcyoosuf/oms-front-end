/* import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card, CardActionArea, CardMedia, Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme)=>({
    
    image: {
        height:250,
        objectFit: "cover",
        [theme.breakpoints.down('md')]: {
            width:"100%",
            height:"auto",
            objectFit: "scale-down",
        },
    },
}));
export default ({ items }) => {
    const classes = useStyles();
    return (
        <Carousel indicators={false} autoPlay interval={4000} animation="slide" className={classes.carousel}>
            {items.map((item, index) => {
                return (
                    <Box height={0.25} display="flex" justifyContent="space-between">
                        <img src={item.imageUrl} alt="Contemplative Reptile" className={classes.image} />
                    </Box>
                )
            })
            }
        </Carousel>
    )
}
 */
import React from 'react';
import { Card, CardActionArea, CardMedia, Grid, Box } from '@material-ui/core'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({


}));

export default ({ items }) => {
    const classes = useStyles();

    return (
        <Carousel autoPlay showThumbs={false} showIndicators={false}>
            {items.map((item, index) => {
                return (
                    <Box display="flex" justifyContent="space-between">
                        <img src={item.imageUrl} alt="Contemplative Reptile" className={classes.image} />
                    </Box>
                )
            })
            }
        </Carousel>
    )
};
