import React, { useEffect } from 'react'
import Header from '../components/Header'
import TopNavigation from '../components/TopNavigation'
import PageContainer from '../components/PageContainer';
import { fethProductsByCatgory } from '../core/actions/product-actions';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Box } from '@material-ui/core';
import ProductSM from '../components/ProductSM';
import Filter from '../components/Filter';


export default (props) => {
    const category = props.match.params.category
    const dispatch = useDispatch();
    const products = useSelector(state => state.product.products);
    const filters = useSelector(state => state.product.filters);

    useEffect(() => {
        const fetchData = () => {
            dispatch(fethProductsByCatgory(category))
        }
        fetchData()
    }, [category,dispatch])


    return (
        <>
            <Header />
            <TopNavigation />
            <PageContainer>
                <Grid container spacing={1}>
                    <Grid item lg={2} md={2} sm={12} xs={12}>
                        <Box boxShadow={0} bgcolor="background.paper">
                            <Filter
                                filters={filters}
                            />
                        </Box>
                    </Grid>
                    <Grid item lg={10} md={10} xs={12} sm={12}>
                        <Grid container >
                            {products &&
                                products.component === "small" && (
                                    products.items && products.items.map((product, index) => {
                                        return (
                                            <Grid item lg={3} md={3} sm={6} xs={6} key={index}>
                                                <ProductSM
                                                    product={product}
                                                />
                                            </Grid>
                                        )
                                    })
                                )
                            }
                        </Grid>

                    </Grid>
                </Grid>
            </PageContainer>
        </>

    )
}