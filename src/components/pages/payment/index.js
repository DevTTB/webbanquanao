import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import PayPal from './paypal';

const PaymentPage = () => {
    const [checkout, setCheckOut] = useState()
    return (
        <div>
            {
                checkout ? (<PayPal />) : <Button onClick={() => setCheckOut(true)}>Check Out</Button>
            }
        </div>
    );
};

export default PaymentPage;