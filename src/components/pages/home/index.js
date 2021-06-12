import { Container, Grid } from '@material-ui/core';
import { unwrapResult } from '@reduxjs/toolkit';
import { Row } from 'antd';
import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getUser } from '../../../redux/slice/user-slice';
import SlickCarousel from '../../common/carousel/slick-carousel';
import Footer from '../../common/footer';
import Header from '../../common/header';
import ProductCard from '../../common/product';
import Navigation from '../../navigation';

const HomePage = () => {
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(true)
    const productList = useSelector(state => state.product)

    //Loading
    useEffect(() => {
        setIsLoading(productList.loading)
    }, [productList.loading])

    //User
    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const actionResult = await dispatch(getUser())
    //         const currentUser = unwrapResult(actionResult)
    //     }
    //     fetchUser()
    // }, [])
    return (
        <>
            <Header />
            <Navigation />
            <div className='content'>
                <Container maxWidth='lg' >
                    <a href='/'><img className='banner-image' src='https://img.ltwebstatic.com/images3_ach/2021/04/15/1618479153041436ada4242779f1617d7048528636.webp' /></a>
                </Container>
                <SlickCarousel props={productList.data} titleSlick='' />
                {
                    isLoading ? <div>Loading...</div> : <Container maxWidth='lg'>
                        <h1> Sale off 50%</h1>
                        <Row gutter={[8, 8]}>
                            {
                                productList.data.map(item => item && (
                                    <ProductCard props={item} />
                                ))
                            }
                        </Row>
                    </Container>
                }
                <SlickCarousel props={productList.data} titleSlick='' />
                <Container maxWidth='lg' >
                    <a href='/'><img className='banner-image' src='https://img.ltwebstatic.com/images3_ach/2021/04/02/1617336275f4f7f2caa20431743eb6a8d3c28583ac.webp' /></a>
                </Container>
                <Container maxWidth='lg' >
                    <a href='/'><img className='banner-image' src='https://img.ltwebstatic.com/images3_ach/2021/04/19/161879756254578ddf03809c41439e7d102fd9cc06.webp' /></a>
                </Container>
                <Container maxWidth='lg' >
                    <a href='/'><img className='banner-image' src='https://img.ltwebstatic.com/images3_ach/2021/03/19/1616133243608a388363b15675ebd70180898a3d9d.webp' /></a>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;