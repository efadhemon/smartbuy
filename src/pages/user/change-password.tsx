import DashboardLayout from "@modules/user/dashboard-layout";
import { Button, Form, Input, PageHeader } from "antd";
import React from "react";

const ChangePassword = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <DashboardLayout>
            <PageHeader ghost={false} title="change password">
                <Form
                    className="lg:w-2/4"
                    size="large"
                    layout="vertical"
                    name="password change form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        rules={[{ required: true, message: "" }]}
                        name="currentPassword"
                    >
                        <Input placeholder="Current Password" />
                    </Form.Item>

                    <Form.Item rules={[{ required: true, message: "" }]} name="newPassword">
                        <Input placeholder="New Password" />
                    </Form.Item>

                    <Form.Item
                        rules={[{ required: true, message: "" }]}
                        name="reTypeNewPassword"
                    >
                        <Input placeholder="Re-Type New Password" />
                    </Form.Item>

                    <div className="text-right">
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </div>
                </Form>
            </PageHeader>
        </DashboardLayout>
    );
};

export default ChangePassword;
