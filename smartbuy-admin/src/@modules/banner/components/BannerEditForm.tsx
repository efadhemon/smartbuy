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
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Purify } from "@shared/utils";
import { ENV, queryClient } from "@shared/config";
import { useBanner, useUpdateBanner } from "@shared/hooks";
import { Paths } from "@shared/enums";
import { BannerService } from "@shared/services";

const { Option } = Select;

const EditBannerForm = () => {
    const navigate = useNavigate();
    const id = useLocation().search.split("=")[1];

    const UpdateBannerMutation = useUpdateBanner({
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

    const { data, isLoading } = useBanner({ id });

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

    const onFinish = (values: any) => {
        values.image = image.url || data?.data?.payload?.image;
        UpdateBannerMutation.mutateAsync({ ...values, id });
    };

    const [form] = Form.useForm();

    useEffect(() => {
        form.resetFields();
    }, [form, data, id]);

    return (
        <Purify loading={isLoading}>
            <div className="banner-create-form">
                <Form
                    form={form}
                    initialValues={data?.data?.payload}
                    size="large"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Row
                        gutter={{ xs: 10, sm: 16, md: 24, lg: 32 }}
                        align="middle"
                    >
                        <Col span={10}>
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
                                <img
                                    src={
                                        image.url
                                            ? image.url
                                            : data?.data?.payload?.image
                                    }
                                    alt="banner_image"
                                    style={{ width: "100%" }}
                                />
                            </Upload>
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
                                    <Option value="HERO_SLIDER">
                                        HERO_SLIDER
                                    </Option>
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
                            loading={UpdateBannerMutation.isLoading}
                            type="primary"
                            htmlType="submit"
                        >
                            Update
                        </Button>
                    </div>
                </Form>
            </div>
        </Purify>
    );
};

export default EditBannerForm;
