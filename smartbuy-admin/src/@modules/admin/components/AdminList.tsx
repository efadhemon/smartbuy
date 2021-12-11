import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";

import { IUser } from "@shared/interfaces";
import { Paths } from "@shared/enums";
import { useNavigate } from "react-router-dom";
import { useAdmins, useDeleteAdmin } from "@shared/hooks";

export const AdminList = () => {
    const navigate = useNavigate();
    const [page, setPage] = useState<number>(1);
    const deleteAdmin = useDeleteAdmin();

    const { data, isLoading } = useAdmins({
        options: {
            page: page,
            take: 10,
        },
    });

    const dataSource = data?.data?.payload?.map((x: IUser) => ({
        key: x._id,
        id: x._id,
        name: x.name || "N/A",
        email: x.email || "N/A",
        phone: x.phone || "N/A",
        gender: x.gender || "N/A",
        address: x.address || "N/A",
    }));

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Gender",
            dataIndex: "gender",
            key: "gender",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Action",
            dataIndex: "id",
            key: "id",
            render: (id: any) => (
                <Space>
                    <Button
                        type="primary"
                        onClick={() => navigate(`${Paths.AdminUpdate}/${id}`)}
                    >
                        Update
                    </Button>
                    <Popconfirm
                        okButtonProps={{
                            loading: false,
                        }}
                        title="Are you sure to delete this admin?"
                        onConfirm={() => deleteAdmin.mutate(id)}
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
