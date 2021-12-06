import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";

import { ICategory } from "@shared/interfaces";
import { Paths } from "@shared/enums";
import { useNavigate } from "react-router-dom";
import { useCategories, useDeleteCategory } from "@shared/hooks";

const CategoryList = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);

    const deleteCategory = useDeleteCategory();

    const { data, isLoading } = useCategories({
        options: {
            page: page,
            take: 10,
        },
    });

    const dataSource = data?.data?.payload?.map((x: ICategory) => ({
        key: x._id,
        id: x._id,
        name: x.name,
        image: x.image,
        isActive: x.isActive.toString().toUpperCase(),
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
            title: "Is Active",
            dataIndex: "isActive",
            key: "isActive",
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (id: any) => (
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            navigate(`${Paths.CategoryUpdate}/${id}`)
                        }
                    >
                        Update
                    </Button>
                    <Popconfirm
                        okButtonProps={{
                            loading: false,
                        }}
                        title="Are you sure to delete this category?"
                        onConfirm={() => deleteCategory.mutate(id)}
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

export default CategoryList;
