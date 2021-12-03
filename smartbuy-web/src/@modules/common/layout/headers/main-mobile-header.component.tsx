/* eslint-disable @next/next/no-img-element */
import {
    AiOutlineAlignRight,
    AiOutlineGift,
    AiOutlineShopping,
    AiOutlineTag,
    AiOutlineUnorderedList,
} from "react-icons/ai";
import { Button, Card, Drawer, Input, Menu } from "antd";
import { FaRegHandshake, FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import { MdPayment } from "react-icons/md";
import { Paths } from "@shared/constant/routes.constant";
import { RiShoppingBag2Line } from "react-icons/ri";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const { SubMenu } = Menu;
const { Search } = Input;

interface IFProps {
    onClickShoppingBag: () => void;
}
const MainMobileHeader: React.FC<IFProps> = ({ onClickShoppingBag }) => {
    const user: boolean = false;

    const route = useRouter();
    const [uiState, setUiState] = useState({
        sidebar: false,
    });

    const [isScroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        });
    }, []);

    const onSearch = (e): any => {
        console.log(e);
    };

    return (
        <>
            <header
                className={
                    isScroll
                        ? "app-mobile-header sticky left-0 right-0 top-0"
                        : "app-mobile-header relative"
                }
            >
                {!isScroll ? (
                    <div className="container">
                        <div className="app-mbl-top-hd-blk">
                            <button
                                onClick={() =>
                                    setUiState({
                                        ...uiState,
                                        sidebar: true,
                                    })
                                }
                            >
                                <AiOutlineAlignRight />
                            </button>

                            <div className="app-name">
                                <h2>Smart Buy</h2>
                            </div>

                            <button onClick={onClickShoppingBag}>
                                <AiOutlineShopping />
                            </button>
                        </div>
                        <div className="app-mbl-btm-hd-blk">
                            <Search
                                style={{ width: "100%" }}
                                placeholder="input search text"
                                allowClear
                                size="large"
                                onSearch={onSearch}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <div className="app-mobile-scroll-header">
                            <button
                                onClick={() =>
                                    setUiState({ ...uiState, sidebar: true })
                                }
                            >
                                <AiOutlineAlignRight />
                            </button>
                            <div className="app-mobile-sc-src">
                                <Search
                                    style={{ width: "100%" }}
                                    placeholder="input search text"
                                    allowClear
                                    size="large"
                                    onSearch={onSearch}
                                />
                            </div>

                            <button onClick={onClickShoppingBag}>
                                <AiOutlineShopping />
                            </button>
                        </div>
                    </div>
                )}
            </header>

            <Drawer
                placement="left"
                closable={false}
                bodyStyle={{ padding: 0 }}
                onClose={() => setUiState({ ...uiState, sidebar: false })}
                visible={uiState.sidebar}
                key="left"
            >
                <Card
                    style={{
                        marginBottom: 25,
                        marginTop: 0,
                        borderTop: 0,
                        textAlign: "center",
                    }}
                >
                    <img
                        src="/images/logo-text.png"
                        style={{
                            maxWidth: 150,
                            margin: "0 auto",
                            paddingBottom: 20,
                        }}
                        alt="logo"
                    />
                    {user ? (
                        <Button
                            size="middle"
                            style={{ width: "100%" }}
                            type="primary"
                        >
                            Logout
                        </Button>
                    ) : (
                        <Link href={"/"} passHref>
                            <Button
                                size="middle"
                                style={{ width: "100%" }}
                                type="primary"
                            >
                                Sign In
                            </Button>
                        </Link>
                    )}
                </Card>
                <Menu
                    defaultSelectedKeys={[String(route.pathname)]}
                    defaultOpenKeys={[String(route.pathname)]}
                    mode="inline"
                >
                    <Menu.Item
                        onClick={() => route.push("/test")}
                        icon={<AiOutlineUnorderedList />}
                        key={String("/test")}
                    >
                        Order
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => route.push("/test")}
                        icon={<AiOutlineGift />}
                        key={String("/test")}
                    >
                        Gift Card
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => route.push("/test")}
                        icon={<AiOutlineTag />}
                        key={String("/test")}
                    >
                        Offer Zone
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => route.push("/test")}
                        icon={<RiShoppingBag2Line />}
                        key={String("/test")}
                    >
                        Shops
                    </Menu.Item>
                    <Menu.Item
                        onClick={() => route.push("/test")}
                        icon={<FaRegHandshake />}
                        key={String("/test")}
                    >
                        Career
                    </Menu.Item>
                    <SubMenu key="sub4" icon={<MdPayment />} title="Payment">
                        <Menu.Item
                            onClick={() => route.push("/test")}
                            key={String("/test")}
                        >
                            Option 9
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => route.push("/test")}
                            key={String("/test")}
                        >
                            Option 10
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => route.push("/test")}
                            key={String("/test")}
                        >
                            Option 11
                        </Menu.Item>
                        <Menu.Item
                            onClick={() => route.push("/test")}
                            key={String("/test")}
                        >
                            Option 12
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Drawer>
        </>
    );
};

export default MainMobileHeader;
