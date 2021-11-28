/* eslint-disable @next/next/no-img-element */
import AppLayout from "@modules/common/layout/AppLayout";
import { Paths } from "@shared/constant/routes.constant";
import { Col, Row, Menu } from "antd";
import { useRouter } from "next/router";
import {
    AiOutlineHeart,
    AiOutlineLock,
    AiOutlineUnorderedList,
} from "react-icons/ai";
import { RiLogoutCircleRLine, RiUserSettingsLine } from "react-icons/ri";

const DashboardLayout = ({ children }) => {
    const router = useRouter();
    const onSelect = ({ key }) => {
        router.push(key);
    };

    return (
        <AppLayout>
            <div className="dashboard-wrapper">
                <div className="container">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 30 }}>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <div className="dashboard-menu">
                                <div className="user-info">
                                    <div className="user-image">
                                        <img
                                            src="https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/default-profile-image.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="info-meta">
                                        <h2 className="name">Emon Hossain</h2>
                                        <p>emonhossain.me@gmail.com</p>
                                        <p>01871257744</p>
                                    </div>
                                </div>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={[router.pathname]}
                                    onSelect={onSelect}
                                >
                                    <Menu.Item
                                        icon={<AiOutlineUnorderedList />}
                                        key={Paths.ordersList}
                                    >
                                        Order List
                                    </Menu.Item>
                                    <Menu.Item
                                        icon={<AiOutlineHeart />}
                                        key={Paths.wishList}
                                    >
                                        Wishing List
                                    </Menu.Item>
                                    <Menu.Item
                                        icon={<RiUserSettingsLine />}
                                        key={Paths.profile}
                                    >
                                        Edit Profile
                                    </Menu.Item>
                                    <Menu.Item
                                        icon={<AiOutlineLock />}
                                        key={Paths.changePassword}
                                    >
                                        Change Password
                                    </Menu.Item>
                                    <Menu.Item
                                        icon={<RiLogoutCircleRLine />}
                                        key={Paths.logout}
                                    >
                                        Log Out
                                    </Menu.Item>
                                </Menu>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                            <div className="dashboard-content">{children}</div>
                        </Col>
                    </Row>
                </div>
            </div>
        </AppLayout>
    );
};

export default DashboardLayout;
