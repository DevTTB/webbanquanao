import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../../../config/contexts/auth-context';
import UserPage from './user';

const AccountPage = () => {
    return (
        <AuthProvider>
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    <UserPage />
                </div>
            </Container>
        </AuthProvider>
    );
};

export default AccountPage;