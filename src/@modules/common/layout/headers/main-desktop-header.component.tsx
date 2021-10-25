import { FiPhone, FiShoppingBag } from "react-icons/fi";
import { useEffect, useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import Link from "next/link";
import { Paths } from "@shared/constant/routes.constant";
import { Select } from "antd";
import { useRouter } from "next/dist/client/router";

const { Option } = Select;

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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    });
  }, []);

  function handleChange(value) {}

  return (
    <header>
      <div
        className={
          isFixed
            ? "app-header fixed top-0 left-0 right-0 shadow-sm"
            : "app-header relative"
        }
      >
        <div className="container">
          <div className="app-hdr-inr">
            <div className="app-logo-blk">
              <Link href={Paths.root}>
                <a>
                  <img src="/images/logo.png" alt="logo" />
                </a>
              </Link>
            </div>
            <div className="app-search-blk">
              <input
                type="search"
                name="title"
                placeholder="Search your product"
              />
              <button>Search</button>
            </div>
            <div className="app-nav-blk">
              <ul>
                <li className="hot-line">
                  <a href="#">
                    <FiPhone />
                    <div>
                      <p>Hotline</p>
                      <p>01998200160</p>
                    </div>
                  </a>
                </li>
                <li onClick={onClickWishlist}>
                  <AiOutlineHeart />
                </li>
                <li onClick={onClickShoppingBag}>
                  <FiShoppingBag />
                </li>
                <li onClick={() => router.push(Paths.authLogin)}>
                  <FaRegUserCircle />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="app-hdr-dwn-menu">
        <div className="container">
          <div className="app-hdr-dwn-inr">
            <div className="category-menu">
              <Select
                defaultValue="Product Category"
                style={{ width: 280 }}
                bordered={false}
                disabled={router.pathname === "/shop" && true}
              >
                <Option
                  style={{ padding: "10px 22px" }}
                  className="ant-list-item-border"
                  value="Phone"
                >
                  Phone
                </Option>
                <Option
                  style={{ padding: "10px 22px" }}
                  className="ant-list-item-border"
                  value="dog"
                >
                  Dog
                </Option>
                <Option
                  style={{ padding: "10px 22px" }}
                  className="ant-list-item-border"
                  value="bird"
                >
                  Bird
                </Option>
                <Option
                  style={{ padding: "10px 22px" }}
                  className="ant-list-item-border"
                  value="fish"
                >
                  Fish
                </Option>
                <Option
                  style={{ padding: "10px 22px" }}
                  className="ant-list-item-border"
                  value="rabbit"
                >
                  Rabbit
                </Option>
                <Option style={{ padding: "10px 22px" }} value="littlePet">
                  Little Pet
                </Option>
              </Select>
            </div>

            <div className="crt-shop-btn">
              <Link href={Paths.root} passHref>
                <button>
                   Create your shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainDesktopHeader;
