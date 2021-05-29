import React, {useEffect, useRef, useState} from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../config/contexts/auth-context';
import {signinUser} from "../../../redux/slice/userSignin-slice";
import {unwrapResult} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

const LogIn = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login, resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()
    const {userInfo} = useSelector(state => state.userSignin)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Tài khoản hoặc mật khẩu chưa chính xác!')
        }
        setLoading(false)
    }

    const signIn = async (data) => {
        const actionResult = await dispatch(signinUser(data))
        const dataUser = unwrapResult(actionResult)
        console.log(dataUser)
    }

    const handleSubmitSignin = async (e) => {
        e.preventDefault()
        try {
            const data = {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }
            signIn(data)
        } catch (err) {
            console.log('Email không chính xác!', err)
        }
    }

    useEffect(() => {
        if(userInfo) {
            history.push('/')
        } else console.log('failed')
    }, [userInfo])

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Đăng nhập</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmitSignin}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='Mật khẩu'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 text-center mt-2' type='submit'>Đăng nhập</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w100 text-center mt-2'>
                <Link to='forgot-password'>Quên mật khẩu?</Link>
            </div>
            <div className='w100 text-center mt-2'>
                Bạn chưa có toàn khoản? <Link to='/signup'>Đăng ký</Link>
            </div>
        </>
    );
};

export default LogIn;