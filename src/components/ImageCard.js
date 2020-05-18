import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux';
import { Grid } from '@material-ui/core';

export default function ImageCard({ items }) {
    const dispatch = useDispatch();
    return (
        <Grid container spacing={1} style={{ marginTop: 8 }} >
            {items.map((item,index) => {
                return (
                    <Grid item xs={12} md={4} lg={4} pt={10} key={index}>
                        <Card onClick={() => dispatch(push(item.onClickUrl))}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    image={item.imageUrl}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            })}

        </Grid>
    );
}