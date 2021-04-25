import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../config/contexts/auth-context';

const UserPage = () => {
    const [error, setError] = useState('')
    const { logout, currentUser } = useAuth()
    const history = useHistory()

    const handleLogout = async () => {
        setError('')
        try {
            await logout()
            history.push('/')
        } catch {

        }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Thông tin tài khoản</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {/* <strong>Email:</strong> {currentUser.email === null ? '' : currentUser.email} */}
                    <Link to='/update-profile' className='btn btn-primary w-100 mt-3'>Chỉnh sửa thông tin</Link>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' onClick={handleLogout}>
                    Đăng xuất
            </Button>
            </div>
        </>
    );
};

export default UserPage;