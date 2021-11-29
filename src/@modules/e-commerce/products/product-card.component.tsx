/* eslint-disable @next/next/no-img-element */
import { takaCurrencySign } from "@shared/constant/preference";
import { addToCart, toggleCartDrawer } from "@shared/redux/cart/cart-slice";
import {
    addToWishList,
    toggleWishlistDrawer,
} from "@shared/redux/wishlist/wishlist-slice";
import { Col, Modal, Rate, Row, Tooltip } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
    AiOutlineEye,
    AiOutlineHeart,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import ReactImageGallery from "react-image-gallery";
import { useDispatch } from "react-redux";
import ProductDescription from "./product-info.component";

interface IFProps {
    product: any;
}
const ProductCard: React.FC<IFProps> = ({ product }) => {
    const dispatch = useDispatch();
    const [modalState, setModalState] = useState(false);

    const images = [
        {
            original:
                "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
            thumbnail:
                "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
        },
        {
            original:
                "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
            thumbnail:
                "https://heriken.com/assets/products/1ccd82c9f1454776695ab5959f9e1c9f.jpg",
        },
    ];

    return (
        <div className="product-card">
            <Link href={`/products/${product.id}`}>
                <a>
                    <div className="card-inner-item">
                        <div className="card-image">
                            <img src={product.img} alt="product-img" />
                        </div>

                        <div className="card-content">
                            <h5 className="product-name">{product.name}</h5>
                            <hr className="my-2" />
                            <h4 className="product-price">
                                {takaCurrencySign + product.price}
                            </h4>
                        </div>
                    </div>
                </a>
            </Link>
            <div className="card-actions">
                <ul>
                    <li>
                        <Tooltip placement="rightTop" title="Add To Cart">
                            <button
                                onClick={() => {
                                    dispatch(addToCart(product));
                                    dispatch(toggleCartDrawer());
                                }}
                            >
                                <AiOutlineShoppingCart />
                            </button>
                        </Tooltip>
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <Tooltip placement="rightTop" title="Quick View">
                            <button onClick={() => setModalState(true)}>
                                <AiOutlineEye />
                            </button>
                        </Tooltip>
                    </li>
                </ul>
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

export default ProductCard;
