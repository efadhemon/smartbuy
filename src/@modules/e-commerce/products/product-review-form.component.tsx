import { Button, Col, Form, Input, Rate, Row } from "antd";

const validateMessages = {
    required: "${label} is required!",
    types: {
        email: "${label} is not a valid email!",
        number: "${label} is not a valid number!",
    },
    number: {
        range: "${label} must be between ${min} and ${max}",
    },
};

const ProductReviewForm = () => {
    const onFinish = (values: any) => {
        console.log(values);
    };
    return (
        <div className="product-review-form">
            <div className="intro-message">
                <h2>Add Your Comments</h2>
                <p>
                    Your email address will not be published. Required fields
                    are marked <b>*</b>
                </p>
            </div>

            <div className="review-form">
                <Form
                    size="large"
                    layout="vertical"
                    name="reviewMessages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <Row gutter={{ sm: 20, md: 20, lg: 30 }}>
                        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                            <Form.Item
                                name={["user", "name"]}
                                label="Name"
                                rules={[{ required: true }]}
                            >
                                <Input placeholder="Enter your name" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                            <Form.Item
                                name={["user", "email"]}
                                label="Email"
                                rules={[{ type: "email", required: true }]}
                            >
                                <Input placeholder="Enter your email" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12} md={12} lg={8} xl={8}>
                            <Form.Item
                                name={["user", "rating"]}
                                label="Rating"
                                rules={[{ required: true }]}
                            >
                                <Rate allowHalf />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Form.Item
                                name={["user", "comment"]}
                                label="Comment"
                                rules={[{ required: true }]}
                            >
                                <Input.TextArea placeholder="Type Here" />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Form.Item>
                                <Button
                                    style={{ width: 150 }}
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
};

export default ProductReviewForm;
