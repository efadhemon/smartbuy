import {
    Button,
    Col,
    Form,
    Input,
    Row,
    Select,
    Upload,
    message,
    notification,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { AxiosResponse } from "axios";

import { ICreateBanner } from "@shared/interfaces";
import { ENV, queryClient } from "@shared/config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCreateBanner } from "@shared/hooks";
import { Paths } from "@shared/enums";
import { BannerService } from "@shared/services";

const { Option } = Select;

const CreateBannerForm = () => {
    const navigate = useNavigate();

    const CreateBannerMutation = useCreateBanner({
        config: {
            onSuccess: (res: AxiosResponse) => {
                if (res?.data?.success) {
                    navigate(Paths.BannerList);
                    queryClient.invalidateQueries(BannerService.NAME);
                    notification.success({
                        type: "success",
                        message: res?.data?.message,
                    });
                } else {
                    notification.error({
                        type: "error",
                        message: res?.data?.message || "Something is wrong!",
                    });
                }
            },
        },
    });

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
                url: file?.response?.url,
                isLoading: false,
            });
        }
    };

    const uploadButton = (
        <div>
            {image.isLoading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload Image</div>
        </div>
    );

    const [form] = Form.useForm();
    const onFinish = (values: ICreateBanner) => {
        values.image = image.url;
        CreateBannerMutation.mutateAsync(values);
        form.resetFields();
        setImage({
            url: "",
            isLoading: false,
        });
    };

    return (
        <div className="banner-create-form">
            <Form
                form={form}
                size="large"
                layout="vertical"
                onFinish={onFinish}
            >
                <Row gutter={{ xs: 10, sm: 16, md: 24, lg: 32 }} align="middle">
                    <Col span={10}>
                        <Form.Item
                            name="image"
                            rules={[
                                {
                                    required: true,
                                    message: "Please upload a image!",
                                },
                            ]}
                        >
                            <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                onPreview={() => window.open(image.url)}
                                action={`${ENV.CORE_END_POINT}upload/image`}
                                beforeUpload={beforeUpload}
                                onChange={handleImageUpload}
                            >
                                {image.url ? (
                                    <img
                                        src={image.url}
                                        alt="banner_image"
                                        style={{ width: "100%" }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </Form.Item>
                    </Col>

                    <Col span={14}>
                        <Form.Item
                            label="Title"
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a title!",
                                },
                            ]}
                        >
                            <Input placeholder="Banner title"></Input>
                        </Form.Item>

                        <Form.Item
                            label="URL"
                            name="url"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter a url!",
                                },
                            ]}
                        >
                            <Input placeholder="Banner url"></Input>
                        </Form.Item>

                        <Form.Item
                            label="Banner Type"
                            name="type"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input a title!",
                                },
                            ]}
                        >
                            <Select placeholder="Select a type">
                                <Option value="HERO_SLIDER">HERO_SLIDER</Option>
                                <Option value="CAMPAIGN_SLIDER">
                                    CAMPAIGN_SLIDER
                                </Option>
                                <Option value="OFFER_SLIDER">
                                    OFFER_SLIDER
                                </Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <div className="text-right">
                    <Button
                        loading={CreateBannerMutation.isLoading}
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default CreateBannerForm;
