import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Container, Grid } from '@material-ui/core';
import Navigation from '../../navigation';
import Footer from '../../organisms/footer';
import Header from '../../organisms/header';
import ProductCard from '../../product';
import { useSelector } from 'react-redux';

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const productList = useSelector(state => state.product)
    useEffect(() => {
        setIsLoading(productList.loading)
    }, [productList.loading])
    return (
        <>
            <Header />
            <Navigation />
            {
                isLoading ? <div>Loading...</div> : <Container maxWidth='md'>
                    <Grid container spacing={1}>
                        {
                            productList.data.map(item => item.id <= 10 && (
                                <ProductCard props={item} />
                            ))
                        }
                    </Grid>
                </Container>
            }
            <Footer />
        </>
    );
};

export default HomePage;