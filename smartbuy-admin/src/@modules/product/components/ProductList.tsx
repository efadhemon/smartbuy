import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";

import { IProduct } from "@shared/interfaces";
import { Paths } from "@shared/enums";
import { useNavigate } from "react-router-dom";
import { useProducts, useDeleteProduct } from "@shared/hooks";

const ProductList = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);

    const deleteProductMutation = useDeleteProduct();

    const { data, isLoading } = useProducts({
        options: {
            page: page,
            take: 10,
        },
    });

    const dataSource = data?.data?.payload?.map((x: IProduct) => ({
        key: x._id,
        id: x._id,
        image: x.images[0],
        name: x.name,
        category: x.category?.name,
        price: x.price,
        brand: x.brand,
        code: x.code,
        isAvailable: x.isAvailable?.toString().toUpperCase(),
        isPopular: x.isPopular?.toString().toUpperCase(),
    }));

    const columns = [
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image: any) => (
                <a href={image} target="_blank" rel="noreferrer">
                    <img
                        style={{ width: 80, height: 80, borderRadius: 5 }}
                        src={image}
                        alt=""
                    />
                </a>
            ),
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Code",
            dataIndex: "code",
            key: "code",
        },
        {
            title: "Is Available",
            dataIndex: "isAvailable",
            key: "isAvailable",
        },
        {
            title: "Is Popular",
            dataIndex: "isPopular",
            key: "isPopular",
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (id: any) => (
                <Space>
                    <Button
                        type="primary"
                        onClick={() => navigate(`${Paths.ProductUpdate}/${id}`)}
                    >
                        Update
                    </Button>
                    <Popconfirm
                        okButtonProps={{
                            loading: false,
                        }}
                        title="Are you sure to delete this Product?"
                        onConfirm={() => deleteProductMutation.mutate(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger type="primary">
                            Delete
                        </Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    return (
        <Table
            bordered
            columns={columns}
            dataSource={dataSource}
            loading={isLoading}
            pagination={{
                pageSize: 10,
                total: data?.data?.total,
                onChange: (page: number) => {
                    setPage(page);
                },
            }}
        />
    );
};

export default ProductList;
