import { ICreateCategory } from "@shared/interfaces";
import { Button, Col, Form, Input, message, Radio, Row, Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import ImgCrop from "antd-img-crop";

interface IFProps {
    initialValues?: ICreateCategory;
    onFinish?: (values: ICreateCategory) => void;
    onFinishFailed?: (errorInfo: any) => void;
    isLoading?: boolean;
}

const CategoryUpdateForm: React.FC<IFProps> = ({
    initialValues,
    onFinish,
    onFinishFailed,
    isLoading,
}) => {
    const [image, setImage] = useState({
        url: "",
        isLoading: false,
    });

    const beforeUpload = (file) => {
        const isJpgOrPng =
            file.type === "image/jpeg" || file.type === "image/png";
        if (!isJpgOrPng) {
            message.error("You can only upload JPG/PNG file!");
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error("Image must smaller than 2MB!");
        }
        return isJpgOrPng && isLt2M;
    };

    const handleImageUpload = ({ file }) => {
        if (file.status === "uploading") {
            setImage({
                url: "",
                isLoading: true,
            });
            return;
        }
        if (file.status === "done") {
            setImage({
                url: file?.response?.payload?.imageUrl,
                isLoading: false,
            });
        }
    };

    const handleSubmitForm = (values: any) => {
        values.image = image.url || initialValues.image;
        onFinish(values);
    };

    // reset form value
    const [form] = Form.useForm();
    useEffect(() => {
        form.resetFields();
    }, [form, initialValues]);

    return (
        <div className="lg:w-1/2 xl:w-max mt-20 mx-auto p-6 shadow-lg rounded-lg border">
            <Form
                form={form}
                size="large"
                layout="vertical"
                initialValues={initialValues}
                onFinish={handleSubmitForm}
                onFinishFailed={onFinishFailed}
            >
                <Row gutter={{ sm: 16, md: 20, lg: 30 }}>
                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
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

                    <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                        <Form.Item
                            label="Is Active"
                            name="isActive"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select a value!",
                                },
                            ]}
                        >
                            <Radio.Group buttonStyle="solid" className="w-full">
                                <Radio.Button
                                    className="w-1/2 text-center"
                                    value={true}
                                >
                                    True
                                </Radio.Button>
                                <Radio.Button
                                    className="w-1/2 text-center"
                                    value={false}
                                >
                                    False
                                </Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <p className="text-md text-black">
                            <span className="text-red-400">*</span> Image
                        </p>
                        <div className="flex gap-4 items-center">
                            <div className="image-preview">
                                <div className="ant-upload ant-upload-select-picture-card">
                                    <img
                                        src={image.url || initialValues.image}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <ImgCrop rotate>
                                <Upload
                                    name="image"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    onPreview={() => window.open(image.url)}
                                    action="http://localhost:3000/upload/images"
                                    beforeUpload={beforeUpload}
                                    onChange={handleImageUpload}
                                >
                                    <div>
                                        {image.isLoading ? (
                                            <LoadingOutlined />
                                        ) : (
                                            <PlusOutlined />
                                        )}
                                        <div style={{ marginTop: 8 }}>
                                            Upload
                                        </div>
                                    </div>
                                </Upload>
                            </ImgCrop>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <div className="flex items-end justify-end h-full">
                            <Button
                                loading={isLoading}
                                type="primary"
                                htmlType="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={8} xl={8}></Col>
                </Row>
            </Form>
        </div>
    );
};

export default CategoryUpdateForm;
