/* eslint-disable @next/next/no-img-element */
import { takaCurrencySign } from "@shared/constant/preference";
import { addToCart, toggleCartDrawer } from "@shared/redux/cart/cart-slice";
import {
    addToWishList,
    toggleWishlistDrawer,
} from "@shared/redux/wishlist/wishlist-slice";
import { Col, Modal, Row, Tooltip } from "antd";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import ReactImageGallery from "react-image-gallery";
import { useDispatch } from "react-redux";
import ProductDescription from "./product-info.component";

interface IFProps {
    product: any;
}
const ProductCardInteractive: React.FC<IFProps> = ({ product }) => {
    const dispatch = useDispatch();
    const [modalState, setModalState] = useState(false);

    const images = [
        {
            original: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
            thumbnail: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
        },
        {
            original: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
            thumbnail: "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
        },
    ];

    return (
        <div className="product-card-interactive">
            <div className="product-card-top">
                <div className="product-image">
                    <img src={product.img} alt="Product-image" />
                </div>
                <div className="product-card-actions">
                    <Tooltip placement="rightTop" title="Add To Wishlist">
                        <button
                            onClick={() => {
                                dispatch(addToWishList(product));
                                dispatch(toggleWishlistDrawer());
                            }}
                        >
                            <AiOutlineHeart />
                        </button>
                    </Tooltip>

                    <Tooltip placement="rightTop" title="Quick View">
                        <button onClick={() => setModalState(true)}>
                            <AiOutlineEye />
                        </button>
                    </Tooltip>
                </div>
                <ul className="product-badge">
                    <li className="badge">30%</li>
                </ul>
            </div>
            <div className="product-card-middle">
                <Link href={`/products/${product.id}`}>
                    <a>
                        <h6 className="product-name">{product.name}</h6>
                    </a>
                </Link>
                <div className="product-price-clone">
                    {takaCurrencySign + product.price}
                    <span className="previous-price">
                        {takaCurrencySign + product.price + 200}
                    </span>
                </div>
            </div>
            <div className="product-card-bottom">
                <div className="product-price">
                    ৳111,900
                    <span className="previous-price">৳140,900</span>
                </div>
                <Link href={`/products/${product.id}`}>
                    <a className="shop-now-btn">Shop Now</a>
                </Link>
            </div>

            <Modal
                centered
                visible={modalState}
                footer={null}
                width={1200}
                onCancel={() => setModalState(false)}
            >
                <Row
                    gutter={[
                        { md: 20, lg: 30 },
                        { xs: 20, sm: 20, md: 20 },
                    ]}
                >
                    <Col xs={24} sm={24} md={24} lg={8} xl={10}>
                        <div className="product-image-gallery">
                            <ReactImageGallery
                                showNav={false}
                                showPlayButton={false}
                                items={images}
                            />
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={16} xl={14}>
                        <ProductDescription product={product} />
                    </Col>
                </Row>
            </Modal>
        </div>
    );
};

export default ProductCardInteractive;
