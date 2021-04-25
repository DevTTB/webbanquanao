import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../config/contexts/auth-context';

const LogIn = () => {
    const emailRef = useRef()
    const emailRefForgot = useRef()
    const passwordRef = useRef()
    const { login, resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [errorForgot, setErrorForgot] = useState('')
    const [isForgot, setIsForgot] = useState(false)
    const [loading, setLoading] = useState(false)
    const history = useHistory()

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

    const handleSubmitForgotPassword = async (e) => {
        e.preventDefault()
        try {
            console.log(emailRefForgot, emailRef)
            await resetPassword('deadlovettb@gmail.com')
            setErrorForgot('Đã gửi. Kiểm tra email của bạn!')
            setTimeout(() => {
                setErrorForgot('')
                setIsForgot(false)
            }, 3000)
        } catch {
            setErrorForgot('Email không chính xác!')
        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Đăng nhập</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
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