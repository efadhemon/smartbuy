import { Button, Layout, Menu } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PoweroffOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";

import { IMAGES } from "@shared/assets";
import { Paths } from "@shared/enums";
import { useNavigate } from "react-router-dom";
import { useResponsive } from "ahooks";
import { useAuth } from "@shared/hooks";
import { AiOutlineBorderlessTable, AiOutlineUnorderedList, AiOutlineWifi } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";

const { Header, Sider, Content } = Layout;

interface IFProps {
    children: any;
}
const AppLayout: React.FC<IFProps> = ({ children }) => {
    const navigate = useNavigate();
    const { md } = useResponsive();
    const auth = useAuth();
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    let pathname = window.location.pathname;
    const styles = {
        sider: {
            boxShadow: "0 0 20px #0815420d",
            borderRight: "1px solid #ecf3fa",
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: !md && isCollapsed ? "-100%" : 0,
            zIndex: 9,
        },

        header: {
            position: "fixed",
            width: "100%",
            background: "#fff",
            padding: "0 15px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 8,
            paddingLeft: !md
                ? isCollapsed
                    ? 20
                    : 220
                : isCollapsed
                ? 100
                : 220,
            right: 0,
            boxShadow: "0 0 20px #0815420d",
            borderBottom: "1px solid #ecf3fa",
        },
        layout: {
            background: "#f6f8fa",
            marginLeft: !md ? 0 : isCollapsed ? 80 : 200,
            padding: 14,
            paddingTop: 0,
        },

        content: {
            borderRadius: 5,
            padding: 14,
            minHeight: 280,
            background: "#fff",
            marginTop: 77,
            marginLeft: 0,
            marginRight: 14,
        },
    };
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                style={styles.sider as any}
                breakpoint="md"
                onBreakpoint={(broken) => {
                    if (broken === true) {
                        setIsCollapsed(true);
                    }
                }}
                trigger={null}
                collapsible
                collapsed={isCollapsed}
            >
                <div
                    style={{
                        margin: 15,
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {isCollapsed ? (
                        <img
                            className="logo"
                            src={IMAGES.LogoSmall}
                            style={{ width: 30 }}
                            alt="logo"
                        />
                    ) : (
                        <img
                            className="logo"
                            src={IMAGES.Logo}
                            style={{ width: 110 }}
                            alt="logo"
                        />
                    )}
                </div>

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[String(pathname)]}
                    defaultOpenKeys={[String(pathname)]}
                >
                    <Menu.Item
                        icon={<AiOutlineWifi />}
                        onClick={() => navigate(Paths.Admin, { replace: true })}
                        key={Paths.Admin}
                    >
                        Admins
                    </Menu.Item>

                    <Menu.Item
                        icon={<HiOutlineUsers />}
                        onClick={() => navigate(Paths.User, { replace: true })}
                        key={Paths.User}
                    >
                        Users
                    </Menu.Item>

                    <Menu.Item
                        icon={<BiCategory />}
                        onClick={() =>
                            navigate(Paths.Category, { replace: true })
                        }
                        key={Paths.Category}
                    >
                        Categories
                    </Menu.Item>

                    <Menu.Item
                        icon={<MdProductionQuantityLimits />}
                        onClick={() =>
                            navigate(Paths.Product, { replace: true })
                        }
                        key={Paths.Product}
                    >
                        Products
                    </Menu.Item>

                    <Menu.Item
                        icon={<AiOutlineBorderlessTable />}
                        onClick={() =>
                            navigate(Paths.Banner, { replace: true })
                        }
                        key={Paths.Banner}
                    >
                        Banners
                    </Menu.Item>

                    <Menu.Item
                        icon={<AiOutlineUnorderedList />}
                        onClick={() =>
                            navigate(Paths.Orders, { replace: true })
                        }
                        key={Paths.Orders}
                    >
                        Orders
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={styles.layout as any}>
                <Header style={styles.header as any}>
                    <div
                        style={{ fontSize: 22, cursor: "pointer" }}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                    >
                        {isCollapsed ? (
                            <MenuUnfoldOutlined />
                        ) : (
                            <MenuFoldOutlined />
                        )}
                    </div>

                    <Button
                        onClick={() => {
                            auth.logoutFn();
                        }}
                        icon={<PoweroffOutlined />}
                    >
                        Logout
                    </Button>
                </Header>
                <Content style={styles.content as any}>{children}</Content>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
