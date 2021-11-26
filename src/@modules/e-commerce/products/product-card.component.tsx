import { addToCart } from "@shared/redux/cart/cart-slice";
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

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const [modalState, setModalState] = useState(false);

    const images = [
        {
            original: "https://i.ibb.co/378yD4v/shop-single-1-1.jpg",
            thumbnail: "https://i.ibb.co/RNsR6SM/shop-single-thumb-1-1.jpg",
        },
        {
            original: "https://i.ibb.co/378yD4v/shop-single-1-1.jpg",
            thumbnail: "https://i.ibb.co/RNsR6SM/shop-single-thumb-1-1.jpg",
        },
    ];

    return (
        <div className="product-card-int">
            <div className="product-card-top">
                <div className="product-image">
                    <img
                        src="https://cdnprod.mafretailproxy.com/sys-master-root/hb6/hfe/8953749831710/1262777_main.jpg_480Wx480H"
                        alt=""
                    />
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
                    <li className="badge">50%</li>
                </ul>
            </div>
            <div className="product-card-middle">
                <Link href={`/products/${product.name}`}>
                    <a>
                        <h6 className="product-name">
                            Samsung 700 L - RS72R5001M9/D2 No Frost Side-by-Side
                            Double Door
                        </h6>
                    </a>
                </Link>
                <div className="product-price-clone">
                    ৳111,900
                    <span className="previous-price">৳140,900</span>
                </div>
            </div>
            <div className="product-card-bottom">
                <div className="product-price">
                    ৳111,900
                    <span className="previous-price">৳140,900</span>
                </div>
                <Link href="/checkout">
                    <a onClick={()=>dispatch(addToCart(product))} className="shopnow-btn">Shop Now</a>
                </Link>
            </div>

            <Modal
                // title="Vertically centered modal dialog"
                centered
                visible={modalState}
                footer={null}
                width={1000}
                //   onOk={() => this.setModal2Visible(false)}
                onCancel={() => setModalState(false)}
            >
                <section className="single-product-area">
                    <div className="container">
                        <Row
                            gutter={[
                                { xs: 8, sm: 16, md: 24, lg: 30 },
                                { xs: 8, sm: 16, md: 24, lg: 30 },
                            ]}
                        >
                            <Col
                                md={24}
                                lg={12}
                                xl={10}
                                className="product-gallery"
                            >
                                <ReactImageGallery
                                    showNav={false}
                                    showPlayButton={false}
                                    items={images}
                                />
                            </Col>
                            <Col md={24} lg={12} xl={14}>
                                <ProductDescription title="Samsung 700 L - RS72R5001M9/D2 No Frost Side-by-SideDouble Door" />
                            </Col>
                        </Row>
                    </div>
                </section>
            </Modal>
        </div>
    );
};

export default ProductCard;
