/* eslint-disable @next/next/no-img-element */
import SidebarMenu from "@modules/e-commerce/home/elements/sidebar-menu.component";
import { Paths } from "@shared/constant/routes.constant";
import { selectCartItemsQuantity } from "@shared/redux/cart/cart-selector";
import { selectWishlistItem } from "@shared/redux/wishlist/wishlist-selector";
import { Col, Dropdown, Input, Popover, Row } from "antd";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { FiPhone, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FaBars } from "react-icons/fa";

const { Search } = Input;

interface IFProps {
    onClickShoppingBag: () => void;
    onClickWishlist: () => void;
}
const MainDesktopHeader: React.FC<IFProps> = ({
    onClickShoppingBag,
    onClickWishlist,
}) => {
    const router = useRouter();
    const [isFixed, setIsFixed] = useState(false);

    const { cartItemQuantity, wishlistItemQuantity } = useSelector(
        createStructuredSelector({
            cartItemQuantity: selectCartItemsQuantity,
            wishlistItemQuantity: selectWishlistItem,
        })
    );

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        });
    }, []);

    const onSearch = (e): any => {
        console.log(e);
    };

    const loginContent = (
        <div className="auth-links">
            <p>
                <Link href={Paths.authLogin}>
                    <a>Login</a>
                </Link>
            </p>
            <p>
                <Link href={Paths.authRegister}>
                    <a>Register</a>
                </Link>
            </p>
        </div>
    );

    return (
        <>
            <header
                className={
                    isFixed
                        ? "app-header sticky top-0 left-0 right-0 shadow-lg"
                        : "app-header relative"
                }
            >
                <div className="container">
                    <div className="header-wrapper">
                        <div className="app-logo">
                            <Link href={Paths.root}>
                                <a>
                                    <img
                                        src="/images/logo.png"
                                        alt="app logo"
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="header-search-input">
                            <Search
                                style={{ width: "100%" }}
                                placeholder="input search text"
                                allowClear
                                enterButton="Search"
                                size="large"
                                onSearch={onSearch}
                            />
                        </div>
                        <div className="header-nav">
                            <ul>
                                <li
                                    className="wishlist-icn"
                                    onClick={onClickWishlist}
                                >
                                    <AiOutlineHeart />
                                    <span className="item-counter">
                                        {wishlistItemQuantity.length}
                                    </span>
                                </li>
                                <li
                                    className="cart-icn"
                                    onClick={onClickShoppingBag}
                                >
                                    <FiShoppingBag />
                                    <span className="item-counter">
                                        {cartItemQuantity}
                                    </span>
                                </li>
                                <li className="auth-btn">
                                    <Popover
                                        content={loginContent}
                                        placement="bottomRight"
                                    >
                                        <AiOutlineUser />
                                    </Popover>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <div className="app-hdr-dwn-menu">
                <div className="container">
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 30 }}>
                        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
                            <div className="category-menu">
                                <Dropdown
                                    overlay={SidebarMenu}
                                    trigger={["click"]}
                                    disabled={router.pathname=="/" && true}
                                >
                                    <button className="menu-btn">
                                        <FaBars /> All Categories
                                    </button>
                                </Dropdown>
                            </div>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
                            <div className="hot-line">
                                <a href="callTo: +8801511-782511">
                                    <FiPhone />
                                    <span>Hot Line: </span>
                                    +8801511-782511
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default MainDesktopHeader;
