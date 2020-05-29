import React, { useEffect } from 'react'
import Header from '../components/Header'
import TopNavigation from '../components/TopNavigation'
import PageContainer from '../components/PageContainer';
import Carousel from '../components/Carousel';
import Section from '../components/Section';
import ImageCard from '../components/ImageCard';
import { fethPageComponents } from '../core/actions/ui-actions';
import { useDispatch, useSelector } from 'react-redux';
import OfferSM from '../components/OfferSM';


export default (props) => {

    const page = props.match.params.category || "home"
    const dispatch = useDispatch();
    const components = useSelector(state => state.ui.components);

    useEffect(() => {
        const fetchData = () => {
            dispatch(fethPageComponents(page))
        }
        fetchData()
    }, [page, dispatch])

    const paintPage = () => {
        const page = components.map((component, index) => {
            if (component.type === "section") {
                return (
                    <Section
                        key={index}
                        title={component.title}
                        buttonText={component.buttonText}

                    >
                        
                            <OfferSM items={component.items} />
                        
                    </Section>
                )
            }
            if (component.type === "imagecard") {
                return (
                    <ImageCard
                        key={index}
                        items={component.items}
                    />
                )
            }

            if (component.type === "carousel") {
                return (
                    <Carousel
                        key={index}
                        items={component.items}
                    />
                )
            }

            return '';
        });
        return page;
    }
    return (
        <>
            <Header />
            <TopNavigation />
            <PageContainer>
                {paintPage()}
            </PageContainer>
        </>

    )
}