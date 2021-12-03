import DashboardLayout from '@modules/user/dashboard-layout';
import OrdersListContainer from '@modules/user/orders-list-container.component';

const orders = () => {
    return (
        <DashboardLayout>
            <OrdersListContainer/>
        </DashboardLayout>
    );
};

export default orders;