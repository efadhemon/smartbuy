import { ICategory, ICreateProduct } from "@shared/interfaces";
import {
    Button,
    Col,
    Form,
    Input,
    message,
    Modal,
    Radio,
    Row,
    Select,
    Upload,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { ENV } from "@shared/config";
import { useCategories } from "@shared/hooks";

const { Option } = Select;

interface IFProps {
    initialValues?: ICreateProduct;
    onFinish?: (values: ICreateProduct) => void;
    onFinishFailed?: (errorInfo: any) => void;
    isLoading?: boolean;
}

const ProductCreateForm: React.FC<IFProps> = ({
    initialValues,
    onFinish,
    onFinishFailed,
    isLoading,
}) => {
    const [images, setImages] = useState({
        url: [],
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
            setImages({
                url: [...images.url],
                isLoading: true,
            });
            return;
        }
        if (file.status === "done") {
            setImages({
                url: [...images.url, file?.response?.url],
                isLoading: false,
            });
        }
    };

    const [previewImage, setPreviewImage] = useState<string>("");

    const [categorySearchTerm, setCategorySearchTerm] = useState<string>("");
    const categoryData = useCategories({
        options: {
            searchTerm: categorySearchTerm,
        },
    });

    const handleSubmitForm = (values: any) => {
        values.category = JSON.parse(values.category);
        values.images = images.url;
        values.code = Math.floor(Math.random() * (99999 - 9999)) + 9999;
        onFinish(values);
    };

    return (
        <>
            <Form
                size="large"
                layout="vertical"
                initialValues={initialValues}
                onFinish={handleSubmitForm}
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
                            label="Price"
                            name="price"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a price!",
                                },
                            ]}
                        >
                            <Input placeholder="Enter a price" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Brand"
                            name="brand"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a brand name!",
                                },
                            ]}
                        >
                            <Input placeholder="Enter a brand name" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Category"
                            name="category"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select a category!",
                                },
                            ]}
                        >
                            <Select
                                placeholder="Select your pet type"
                                style={{ width: "100%" }}
                                showSearch
                                optionFilterProp="children"
                                onSearch={(val) => setCategorySearchTerm(val)}
                                filterOption={(input, option: any) =>
                                    option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {categoryData?.data?.data?.payload.map(
                                    (ct: ICategory) => (
                                        <Option
                                            key={ct._id}
                                            value={JSON.stringify(ct)}
                                        >
                                            {ct.name}
                                        </Option>
                                    )
                                )}
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Is Available"
                            name="isAvailable"
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

                    <Col xs={24} sm={24} md={12} lg={8} xl={8}>
                        <Form.Item
                            label="Is Popular"
                            name="isPopular"
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
                        <Form.Item
                            label="Description"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: "Please write some description",
                                },
                            ]}
                        >
                            <Input.TextArea
                                style={{ height: 100 }}
                                placeholder="Product description"
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                        <Form.Item
                            label="Images"
                            name="images"
                            rules={[
                                {
                                    required: true,
                                    message: "Please upload some images",
                                },
                            ]}
                        >
                            <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={true}
                                maxCount={5}
                                onPreview={({ response }) =>
                                    setPreviewImage(response?.payload?.imageUrl)
                                }
                                action={`${ENV.CORE_END_POINT}upload/image`}
                                beforeUpload={beforeUpload}
                                onChange={handleImageUpload}
                            >
                                <div>
                                    {images.isLoading ? (
                                        <LoadingOutlined />
                                    ) : (
                                        <PlusOutlined />
                                    )}
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            </Upload>
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

            <Modal
                visible={previewImage ? true : false}
                footer={null}
                onCancel={() => setPreviewImage("")}
            >
                <img alt="" style={{ width: "100%" }} src={previewImage} />
            </Modal>
        </>
    );
};

export default ProductCreateForm;
