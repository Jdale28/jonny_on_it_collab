import React, { Component } from 'react';
import UserNavBar from './UserNavBar'
import UserDashboardPayment from './UserPayment';
import UserAccountPage from './UserAccountPage';

class PaymentMethods extends Component {
    render() {
        return (
            <div>
                 <h1>Payment Methods</h1>
                <UserNavBar/>
              
                {/* <UserDashboardPayment/> */}
               
            </div>
        );
    }
}

export default PaymentMethods;