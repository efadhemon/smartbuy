import { PageHeader, Table } from 'antd';

const columns:object[] = [
    {
        title: 'Product name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Order code',
        dataIndex: 'order_code',
        key: 'order_code',

    },
    { 
        title: 'Order date', 
        dataIndex: 'date', 
        key: 'date' ,
    },
    {
        title: 'Action',
        key: 'operation',
        render: () => <> <a>Delete</a> <a>Details</a> </>
    },
];

const data:object[] = [
    {
        key: 1,
        name: 'John Brown',
        date: 32,
        order_code: 'New York No. 1 Lake Park',
    },
    {
        key: 2,
        name: 'Jim Green',
        date: 42,
        order_code: 'London No. 1 Lake Park',
    },
    {
        key: 3,
        name: 'Not Expandable',
        date: 29,
        order_code: 'Jiangsu No. 1 Lake Park',
    },
    {
        key: 4,
        name: 'Joe Black',
        date: 32,
        order_code: 'Sidney No. 1 Lake Park',
    }, {
        key: 5,
        name: 'John Brown',
        date: 32,
        order_code: 'New York No. 1 Lake Park',
    },
    {
        key: 6,
        name: 'Jim Green',
        date: 42,
        order_code: 'London No. 1 Lake Park',
    },
    {
        key: 7,
        name: 'Not Expandable',
        date: 29,
        order_code: 'Jiangsu No. 1 Lake Park',
    },
    {
        key: 8,
        name: 'Joe Black',
        date: 32,
        order_code: 'Sidney No. 1 Lake Park',
    }
    , {
        key: 9,
        name: 'John Brown',
        date: 32,
        order_code: 'New York No. 1 Lake Park',
    },
    {
        key: 10,
        name: 'Jim Green',
        date: 42,
        order_code: 'London No. 1 Lake Park',
    },
    {
        key: 11,
        name: 'Not Expandable',
        date: 29,
        order_code: 'Jiangsu No. 1 Lake Park',
    }
    , {
        key: 12,
        name: 'Joe Black',
        date: 32,
        order_code: 'Sidney No. 1 Lake Park',
    }
];

const onSelect = () => {

}

const OrdersListContainer = () => {
    return (
        <div className="orders-list-container">
            <PageHeader
                ghost={false}
                title="Orders List"
            >
                <div className="order-table">
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered={true}
                        // onSelect={onSelect}
                    />
                </div>
            </PageHeader>
        </div>
    )
}

export default OrdersListContainer;