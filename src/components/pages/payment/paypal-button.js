import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";
function PaypalBtn({ props }) {
    const amount = props.amount
    return (
        <PayPalButton
            amount={amount}
            onSuccess={(details, data) => {
                alert('Success' + details.payer.name.given_name)
            }}
            options={{
                clientId: 'ASF5du6Fvrn0Ub-Xl1mxe6eIYiyqlx5YOW9RgI-jtxNz0a5Bj-d5kvE3v12gr8mQPi9HuhFaZiuiKeW6'
            }}
        />
    );
}

export default PaypalBtn