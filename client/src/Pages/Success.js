import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Success = () => (
    <Result
        status="success"
        title="Your Order is Successfully Placed!"
        subTitle="Order number: 2017182818828182881, It will be delivered in 3-5 working days."
        extra={[
            <Link to={'/cart'}>
                <Button type="primary" key="Go Back">
                    Go Back
                </Button>
            </Link>,
            <Link to={'/'}>
                <Button key="buy">Buy Again</Button>
            </Link>,
        ]}
    />
);
export default Success;