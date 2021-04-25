import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../../../../config/contexts/auth-context"


export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Đã gửi. Kiểm tra email của bạn!")
        } catch {
            setError("Email không chính xác!")
        }

        setLoading(false)
    }

    return (
        <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <div className='w-100' style={{ maxWidth: '400px' }}>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Lấy lại mật khẩu</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit">
                                Gửi
            </Button>
                        </Form>
                        <div className="w-100 text-center mt-3">
                            <Link to="/login">Đăng nhập</Link>
                        </div>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Bạn chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
                </div>
            </div>
        </Container>

    )
}