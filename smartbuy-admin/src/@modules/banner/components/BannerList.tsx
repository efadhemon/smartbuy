import { Card, Pagination, Popconfirm } from "antd";
import { EditOutlined, DeleteOutlined, LinkOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import EditBannerForm from "./BannerEditForm";
import Modal from "antd/lib/modal/Modal";
import { Purify } from "@shared/utils";
import { useState } from "react";
import { useBanners, useDeleteBanner } from "@shared/hooks";
import { IBanner } from "@shared/interfaces";

const { Meta } = Card;

const BannerList = () => {
    const deleteBanner = useDeleteBanner();
    const navigate = useNavigate();
    const { search } = useLocation();

    const [page, setPage] = useState<number>(1);
    console.log(page);

    const { data, isLoading } = useBanners({
        options: {
            page: page,
            take: 10,
        },
    });

    const BannerData: IBanner[] = data?.data?.payload;

    return (
        <Purify
            loading={isLoading}
            // empty={BannerData.length > 0 ? false : true}
        >
            <div className="grid grid-cols-5 gap-4">
                {BannerData?.map((banner: IBanner) => (
                    <Card
                        key={banner._id}
                        cover={<img alt="banner_image" src={banner.image} />}
                        actions={[
                            <LinkOutlined
                                key="url"
                                onClick={() => window.open(banner.url)}
                            />,

                            <EditOutlined
                                key="edit"
                                onClick={() => navigate(`?edit=${banner._id}`)}
                            />,
                            <Popconfirm
                                key="delete"
                                title="Are you sure to delete this banner?"
                                onConfirm={() =>
                                    deleteBanner.mutateAsync(banner._id)
                                }
                                okText="Yes"
                                cancelText="No"
                            >
                                <DeleteOutlined />
                            </Popconfirm>,
                        ]}
                    >
                        <Meta title={banner.title} description={banner.type} />
                    </Card>
                ))}
            </div>

            <div className="text-center py-10">
                <Pagination
                    pageSize={10}
                    total={data?.data?.total}
                    onChange={(page) => setPage(page)}
                />
            </div>

            <Modal
                centered
                title="Update Banner"
                width={700}
                maskClosable={false}
                visible={search.startsWith("?edit") ? true : false}
                onCancel={() => navigate("")}
                footer={false}
            >
                <EditBannerForm />
            </Modal>
        </Purify>
    );
};

export default BannerList;
