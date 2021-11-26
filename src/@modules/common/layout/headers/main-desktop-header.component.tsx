import { Paths } from "@shared/constant/routes.constant";
import { selectCartItemsQuantity } from "@shared/redux/cart/cart-selector";
import { selectWishlistItem } from "@shared/redux/wishlist/wishlist-selector";
import { Button, Input, Popover, Select } from "antd";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { FiPhone, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

const { Option } = Select;
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
      <Link href={Paths.authLogin}>
        <a>Login</a>
      </Link>
      <Link href={Paths.authRegister}>
        <a>Register</a>
      </Link>
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
          <div className="app-hdr-inr">
            <div className="app-logo-blk">
              <Link href={Paths.root}>
                <a>
                  <img src="/images/logo.png" alt="app logo" />
                </a>
              </Link>
            </div>
            <div className="app-search-blk">
              <Search
                style={{ width: "100%" }}
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </div>
            <div className="app-nav-blk">
              <ul>
                <li className="hot-line">
                  <a href="#">
                    <FiPhone />
                    <div>
                      <p>Hotline</p>
                      <p>+8801511-782511</p>
                    </div>
                  </a>
                </li>
                <li className="wishlist-icn" onClick={onClickWishlist}>
                  <AiOutlineHeart />
                  <span className="mini-item-counter">
                    {wishlistItemQuantity.length}
                  </span>
                </li>
                <li className="cart-icn" onClick={onClickShoppingBag}>
                  <FiShoppingBag />
                  <span className="mini-item-counter">{cartItemQuantity}</span>
                </li>
                <li className="auth-btn">
                  <Popover content={loginContent} trigger="click">
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
          <div className="app-hdr-dwn-inr">
            <div className="category-menu">
              <Select
                defaultValue="Shop By Pets"
                style={{ width: 230 }}
                bordered={false}
                // defaultOpen = {router.pathname === "/shop" && true}
                disabled={router.pathname === "/shop" && true}
              >
                {[1, 2, 3, 4, 5].map((d: number) => (
                  <Option
                    key={d}
                    style={{ padding: "10px 22px" }}
                    className="ant-list-item-border"
                    value="cat"
                  >
                    Link
                  </Option>
                ))}
                <Option
                  style={{ padding: "10px 22px" }}
                  className="ant-list-item-border"
                  value="all"
                >
                  <Link href="/departments">View All</Link>
                </Option>
              </Select>
            </div>

            <div className="create-shop-btn">
              <Link href={Paths.contact}>
                <a>
                  <Button>Contact Us</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDesktopHeader;
