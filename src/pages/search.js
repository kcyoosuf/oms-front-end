import React, { useEffect } from 'react'
import Header from '../components/Header'
import TopNavigation from '../components/TopNavigation'
import PageContainer from '../components/PageContainer';
import Section from '../components/Section';
import { searchProductsByQuery } from '../core/actions/search-actions';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import ProductSM from '../components/ProductSM';
import { capitalizeFirstLetter } from "../helpers/util/string-util"

export default (props) => {
    const dispatch = useDispatch();
    const query = new URLSearchParams(window.location.search).get("q");
    const products = useSelector(state => state.search.products);
    const categories = useSelector(state => state.search.categories);
    useEffect(() => {
        const fetchData = () => {
            if (query) dispatch(searchProductsByQuery(query))
        }
        fetchData()
    },[dispatch,query])


    return (
        <>
            <Header />
            <TopNavigation />
            <PageContainer>
                {categories.map((category, index) => {
                    return (
                        <Section
                            key={index}
                            title={capitalizeFirstLetter(category)}
                            buttonText={"VIEW ALL"}
                        >
                            {products[category] &&
                                products[category].component.component === "Mobile-11" && (
                                    products[category].items && products[category].items.map((product, index) => {
                                        return (
                                            <Grid item lg={2} md={3} sm={6} xs={6} key={index}>
                                                <ProductSM
                                                    product={product}
                                                />
                                            </Grid>
                                        )
                                    })
                                )
                            }
                        </Section>
                    )
                })}

            </PageContainer>
        </>

    )
}