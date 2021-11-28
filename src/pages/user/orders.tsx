import DashboardLayout from '@modules/user/dashboard-layout';
import OrdersList from '@modules/user/orders-list.component';
import React from 'react';

const orders = () => {
    return (
        <DashboardLayout>
            <OrdersList/>
        </DashboardLayout>
    );
};

export default orders;