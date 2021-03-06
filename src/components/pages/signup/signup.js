import React, { useRef, useState } from 'react';
import { Form, Container, Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../../../config/contexts/auth-context';
const SignUp = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup, currentUser } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Password do not match')
        }

        try {
            setError('')
            setLoading(true)
            signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            setError('Failed to create account')
        }
        setLoading(false)
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Đăng ký</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Mật khẩu</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>Xác nhận lại mật khẩu</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 text-center mt-2' type='submit'>Đăng Ký</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w100 text-center mt-2'>
                Bạn đã có toàn khoản? <Link to='/login'>Đăng nhập</Link>
            </div>
        </>
    );
};

export default SignUp;