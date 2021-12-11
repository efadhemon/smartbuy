import { ICreateUser } from "@shared/interfaces";
import { Button, Col, Form, Input, Row, Select } from "antd";
const { Option } = Select;

interface IFProps {
    initialValues?: ICreateUser;
    onFinish?: (values: ICreateUser) => void;
    onFinishFailed?: (errorInfo: any) => void;
    isLoading?: boolean;
}

const CreateUserForm: React.FC<IFProps> = ({
    initialValues,
    onFinish,
    onFinishFailed,
    isLoading,
}) => {
    return (
        <Form
            size="large"
            layout="vertical"
            initialValues={initialValues}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Row gutter={{ sm: 16, md: 20, lg: 30 }}>
                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a name!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter a name" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Phone Number"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "Please input a phone number!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter a phone number" type="tel" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a email!",
                            },
                            { type: "email", message: "Invalid email" },
                        ]}
                    >
                        <Input placeholder="Enter a email" type="email" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a password!",
                            },
                        ]}
                    >
                        <Input.Password placeholder="Enter a password" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[
                            {
                                required: true,
                                message: "Please select a gender!",
                            },
                        ]}
                    >
                        <Select placeholder="Select a gender">
                            <Option value="Male">Male</Option>
                            <Option value="Female">Female</Option>
                            <Option value="Other">Other</Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[
                            {
                                required: true,
                                message: "Please enter a address!",
                            },
                        ]}
                    >
                        <Input placeholder="Enter a address" />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <Form.Item className="text-right">
                        <Button
                            loading={isLoading}
                            type="primary"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

export default CreateUserForm;
