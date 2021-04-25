import React, { useState } from 'react';
import { Button, Card, Container, Form, Table, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { decreaseItemQuantity, increaseItemQuantity, removeItemToCart, paymentSuccess } from '../../../redux/slice/cart-slice';
import SlickCarousel from '../../common/carousel/slick-carousel';
import Header from '../../common/header';
import subTotal from '../../common/total-price/subtotal';
import PaypalExpressBtn from 'react-paypal-express-checkout'

const CartDesktop = () => {
    const cart = useSelector(state => state.cart)
    const [isPayment, setIsPayment] = useState(false)
    const [isPaymentSuccess, setIsPaymentSuccess] = useState('')
    const [isPaymentError, setIsPaymentError] = useState('')
    const cartList = useSelector(state => state.cart)
    const productList = useSelector(state => state.product)
    const history = useHistory()
    const dispatch = useDispatch()
    const client = {
        sandbox: "ASF5du6Fvrn0Ub-Xl1mxe6eIYiyqlx5YOW9RgI-jtxNz0a5Bj-d5kvE3v12gr8mQPi9HuhFaZiuiKeW6"
    }
    const currency = 'USD'
    const total = 2

    const handleGoPayment = () => {
        dispatch(paymentSuccess())
        console.log(dispatch(paymentSuccess()))
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
        setIsPaymentSuccess('Thanh Toán Thành Công!')
        dispatch(paymentSuccess())
    }
    const onError = err => {
        setIsPaymentError('Thanh Toán Thất Bại! Hãy Thử Lại')
    }
    console.log('cart', subTotal(cart))
    return (
        <div className='w-100'>
            <Header />
            <Container className='d-flex mw-100 mt-2'>
                <Container className='p-2 p-4 w-100'>
                    <div>
                        <h4>Tóm tắt mặt hàng ({cartList.length})</h4>
                    </div>
                    <Table>
                        <thead>
                            <tr>
                                <th className=''>Sản phẩm</th>
                                <th className=''>Giá</th>
                                <th className=''>Số lượng</th>
                                <th className=''>Tổng cộng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map(item => <tr>
                                    <td className='d-flex'>
                                        <img className='image-product-cart' src={item.url} />
                                        <div className='ml-2 d-flex flex-column'>
                                            <p>{item.name}</p>
                                            <Form.Control className='select-size' as="select" size="sm" custom>
                                                <option >{item.size}</option>
                                                {/* {item.size.map(size => <option>{size}</option>)} */}
                                            </Form.Control>
                                            <Button onClick={() => handleRemoveItemCart(item.id)} variant='text' className='text-left'>Xóa</Button>
                                        </div>
                                    </td>
                                    <td className=''>{item.price} đ</td>
                                    <td className='text-center'>{item.quanity}</td>
                                    <td className='text-center'>{item.price * item.quanity} đ</td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                </Container>
                <Container className='p-2 flex-shrink-1 total-price'>
                    <Card>
                        <Card.Body>
                            <h4>Tóm Tắt Đơn Hàng</h4>
                            <div className='d-flex justify-content-between'>
                                <p>Thành tiền:</p>
                                <h4>{subTotal(cart)} đ</h4>
                            </div>
                            <Button onClick={() => handleGoPayment()} className='w-100 btn-dark text-center' type='button'>Thanh Toán</Button>
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
            <SlickCarousel props={productList.data} titleSlick='San pham lien quan' />
        </div>
    );
};

export default CartDesktop;