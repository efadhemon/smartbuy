/* eslint-disable @next/next/no-img-element */
import { Menu } from "antd";
import {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const SidebarMenu = () => {
    const categoryData = [
        {
            id: 1,
            title: "Groceries",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/Uv2onBRA.Grocery.png",
        },
        {
            id: 2,
            title: "Mobile Phone",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/XCvlxt5n.mobile.png",
        },
        {
            id: 3,
            title: "Automobil",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/U03eFH9K.Automobil.png",
        },
        {
            id: 4,
            title: "Fashion",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/rUP2lDyA.Fashion.png",
        },
        {
            id: 5,
            title: "Beauty & Health",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/pdsx7Zyy.beauty.png",
        },
        {
            id: 6,
            title: "Food",
            image: "https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/categories/2hJPqpDy.Food.png",
        },
    ];

    function handleClick(e) {
        console.log("click", e);
    }

    return (
        <Menu onClick={handleClick} mode="vertical">
            {categoryData.map((ct) => (
                <Menu.Item
                    key={ct.id}
                    icon={
                        <img
                            style={{
                                width: 30,
                                height: 30,
                                display: "inline",
                            }}
                            src={ct.image}
                            alt="menu-icon"
                        ></img>
                    }
                >
                    {ct.title}
                </Menu.Item>
            ))}

            {/* <SubMenu
                    key="sub1"
                    icon={<MailOutlined />}
                    title="Navigation One"
                >
                    <Menu.Item key="1">Option 1</Menu.Item>
                    <Menu.Item key="2">Option 2</Menu.Item>
                    <Menu.Item key="3">Option 3</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    icon={<AppstoreOutlined />}
                    title="Navigation Two"
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    icon={<SettingOutlined />}
                    title="Navigation Three"
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu> */}
        </Menu>
    );
};

export default SidebarMenu;
