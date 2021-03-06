import { ButtonBase, Grid, makeStyles } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import { Alert, Button, Card, Container, Form, Table } from 'react-bootstrap';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { decreaseItemQuantity, increaseItemQuantity, paymentSuccess, removeItemToCart } from '../../../redux/slice/cart-slice';
import SlickCarousel from '../../common/carousel/slick-carousel';
import Header from '../../common/header';
import subTotal from '../../common/total-price/subtotal';

const CartDesktop = () => {
    let cart = useSelector(state => state.cart)
    const [isPayment, setIsPayment] = useState(false)
    const [isPaymentSuccess, setIsPaymentSuccess] = useState('')
    const [isPaymentError, setIsPaymentError] = useState('')
    const productList = useSelector(state => state.product)
    const dispatch = useDispatch()
    const client = {
        sandbox: "ASF5du6Fvrn0Ub-Xl1mxe6eIYiyqlx5YOW9RgI-jtxNz0a5Bj-d5kvE3v12gr8mQPi9HuhFaZiuiKeW6"
    }
    const currency = 'USD'
    const total = subTotal(cart) / 20000

    const handleGoPayment = id => {
        const item = {}
        const action = paymentSuccess(item)
        dispatch(action)
        cart = []
    }
    const handleRemoveItemCart = (id) => {
        const item = {
            id: id
        }
        const action = removeItemToCart(item)
        dispatch(action)
        console.log(dispatch(action))
    }
    const handleIncreaseItemCart = (id) => {
        const item = {
            id: id
        }
        const action = increaseItemQuantity(item)
        dispatch(action)
    }
    const handleDecreaseItemCart = (id) => {
        const item = {
            id: id
        }
        const action = decreaseItemQuantity(item)
        dispatch(action)
    }
    const onSuccess = payment => {
        setIsPaymentSuccess('Thanh To??n Th??nh C??ng!')
        dispatch(paymentSuccess())
        cart = []
    }
    const onError = err => {
        setIsPaymentError('Thanh To??n Th???t B???i! H??y Th??? L???i')
    }
    return (
        <div className='w-100'>
            <Header />
            <Container className='d-flex mw-100 mt-2'>
                <Container className='p-2 p-4 w-100 table-cart'>
                    <div>
                        <h4>T??m t???t m???t h??ng ({cart.length})</h4>
                    </div>
                    <Table className=''>
                        <thead>
                            <tr>
                                <th className=''>S???n ph???m</th>
                                <th className=''>Gi??</th>
                                <th className=''>S??? l?????ng</th>
                                <th className=''>T???ng c???ng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => <tr className='cart-items'>
                                    <td className='d-flex'>
                                        <img className='image-product-cart' src={item.url} />
                                        <div className='ml-2 d-flex flex-column'>
                                            <p>{item.name}</p>
                                            <Form.Control className='select-size' as="select" size="sm" custom>
                                                <option >{item.size}</option>
                                                {/* {item.size.map(size => <option>{size}</option>)} */}
                                            </Form.Control>
                                            <Button onClick={() => handleRemoveItemCart(item.id)} variant='text' className='text-left'>X??a</Button>
                                        </div>
                                    </td>
                                    <td className=''>{item.price} ??</td>
                                    <td className='text-center'>
                                        <div className='d-flex'>
                                            {item.quantity !== 1 && <Grid item><ButtonBase className='btn-cart' onClick={() => handleDecreaseItemCart(item.id)}><RemoveIcon /></ButtonBase></Grid>}
                                            <Grid item><label className='p-1'>{item.quantity}</label> </Grid>
                                            <Grid item><ButtonBase className='btn-cart' onClick={() => handleIncreaseItemCart(item.id)}><AddIcon /></ButtonBase></Grid>
                                        </div>
                                    </td>
                                    <td className='text-center'>{item.price * item.quantity} ??</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Container>
                <Container className='flex-shrink-1 total-price'>
                    <Card>
                        <Card.Body>
                            <h4>T??m T???t ????n H??ng</h4>
                            <div className='d-flex justify-content-between'>
                                <p>Th??nh ti???n:</p>
                                <h4>{subTotal(cart)} ??</h4>
                            </div>
                            <Button onClick={() => setIsPayment(true)} className='w-100 btn-dark text-center' type='button'>Thanh To??n</Button>
                        </Card.Body>
                        {
                            isPayment && <Card.Body>
                                {isPaymentSuccess && <Alert variant='success'>{isPaymentSuccess}</Alert>}
                                {isPaymentError && <Alert variant='danger'>{isPaymentError}</Alert>}
                                <PaypalExpressBtn
                                    client={client}
                                    currency={currency}
                                    total={total}
                                    onSuccess={onSuccess}
                                    onError={onError} />
                            </Card.Body>

                        }
                    </Card>
                </Container>
            </Container>
            <SlickCarousel props={productList.data} titleSlick='S???n ph???m li??n quan' />
        </div>
    );
};

export default CartDesktop;