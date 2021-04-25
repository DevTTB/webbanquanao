import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../../../config/contexts/auth-context';
import SignUp from './signup';

const SignupPage = () => {

    return (
        <AuthProvider>
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    <SignUp />
                </div>
            </Container>
        </AuthProvider>
    );
}

export default SignupPage;