import React from 'react';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../../../config/contexts/auth-context';
import UserPage from './user';

const AccountPage = () => {
    return (
        <AuthProvider>
            <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                <div className='w-100' style={{ maxWidth: '400px' }}>
                    {/*<UserPage />*/}
                    <div className="fb-cmt">
                        <div className="fb-comment-embed"
                             data-href="https://www.facebook.com/zuck/posts/10102735452532991?comment_id=1070233703036185"
                             data-width="500"></div>
                    </div>
                </div>
            </Container>
        </AuthProvider>
    );
};

export default AccountPage;