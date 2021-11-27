import { takaCurrencySign } from "@shared/constant/preference";
import { Paths } from "@shared/constant/routes.constant";
import { addToCart, toggleCartDrawer } from "@shared/redux/cart/cart-slice";
import {
    addToWishList,
    toggleWishlistDrawer,
} from "@shared/redux/wishlist/wishlist-slice";
import { Rate } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
    AiOutlineHeart,
    AiOutlineShopping,
    AiOutlineShoppingCart,
} from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProductInfo = ({ product }) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const [productQuantity, setProductQuantity] = useState<number>(1);

    return (
        <div className="product-info-box">
            <div className="info-meta-1">
                <h2 className="product-name">{product.name}</h2>
                <div className="meta-list">
                    <span>In Stock</span>
                    <span>|</span>
                    <Rate disabled allowHalf defaultValue={5} />
                    <span>|</span>
                    <span>(25 reviews)</span>
                </div>
            </div>

            <h3 className="product-price">
                {takaCurrencySign}
                {product.price}{" "}
                <del>
                    {takaCurrencySign}
                    {parseInt(product.price) + 200}
                </del>
            </h3>

            <div className="info-meta-2">
                <ul>
                    <li>
                        <span>Brand: </span> Samsung
                    </li>
                    <li>
                        <span>Category: </span> Airbus
                    </li>
                    <li>
                        <span>Product Code: </span> 4657
                    </li>
                </ul>
            </div>

            <div className="info-meta-3">
                <div className="product-quantity">
                    <button
                        onClick={() =>
                            setProductQuantity((prevQuantity) =>
                                prevQuantity > 1 ? prevQuantity - 1 : 1
                            )
                        }
                    >
                        -
                    </button>
                    <span>{productQuantity}</span>
                    <button
                        onClick={() =>
                            setProductQuantity(
                                (prevQuantity) => prevQuantity + 1
                            )
                        }
                    >
                        +
                    </button>
                </div>

                <div className="cart-btn">
                    <button
                        onClick={() => {
                            dispatch(addToCart({...product, quantity: productQuantity}));
                            dispatch(toggleCartDrawer());
                        }}
                    >
                        <AiOutlineShoppingCart /> Add To Cart
                    </button>
                </div>
                <div className="wishlist-btn">
                    <button
                        onClick={() => {
                            dispatch(addToWishList(product));
                            dispatch(toggleWishlistDrawer());
                        }}
                    >
                        <AiOutlineHeart /> Add To Wishlist
                    </button>
                </div>
                <div className="buy-now-btn">
                    <button
                        onClick={() => {
                            dispatch(addToCart({}));
                            router.push(Paths.checkout);
                        }}
                    >
                        <AiOutlineShopping /> Buy Now
                    </button>
                </div>
            </div>

            <div className="share-product">
                <h5>Share:</h5>
                <div className="socials">
                    <a style={{ backgroundColor: "#3b5999" }} href="#">
                        <FaFacebookF />
                    </a>
                    <a style={{ backgroundColor: "#55acee" }} href="#">
                        <FaTwitter />
                    </a>
                    <a style={{ backgroundColor: "#0077B5" }} href="#">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
