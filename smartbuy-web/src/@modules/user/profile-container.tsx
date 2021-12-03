import { Col, PageHeader, Row, Form, Input, Button } from "antd";
import React from "react";

const ProfileContainer = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <div className="profile-container">
            <PageHeader ghost={false} title="Edit Profile">
                <Form
                    size="large"
                    layout="vertical"
                    initialValues={{ remember: true }}
                    name="user info form"
                    onFinish={onFinish}
                >
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                            <Form.Item label="Full Name" name="name">
                                <Input placeholder="Enter your full name" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                            <Form.Item label="Phone Number" name="phone">
                                <Input placeholder="Enter your phone number" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={12} md={24} lg={8} xl={8}>
                            <Form.Item label="Email" name="email">
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Form.Item label="Address" name="address">
                                <Input.TextArea
                                    rows={4}
                                    placeholder="Enter your address"
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <div className="text-right">
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </div>
                </Form>
            </PageHeader>
        </div>
    );
};

export default ProfileContainer;
