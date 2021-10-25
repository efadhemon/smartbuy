import { addToCart, toggleCartDrawer } from "@shared/redux/cart/cart-slice";
import {
  addToWishList,
  toggleWishlistDrawer,
} from "@shared/redux/wishlist/wishlist-slice";

import { AiFillStar } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import React from "react";
import { Typography } from "antd";
import { takaCurrencySign } from "@shared/constant/preference";
import { useDispatch } from "react-redux";

const { Title, Text } = Typography;

const ProductCardSingle = ({ product }) => {
  const dispatch = useDispatch();

  const onAddToCart = (product: any) => {
    dispatch(addToCart(product));
    dispatch(toggleCartDrawer());
  };

  const onAddToWishlist = (product: any) => {
    dispatch(addToWishList(product));
    dispatch(toggleWishlistDrawer());
  };
  return (
    <div className="product-card-single">
      <div className="img-holder">
        <img
          src={product.img}
          alt=""
        />
      </div>
      <div className="product-description">
        <div className="title-holder">
          <Title className="ant-text-fix" level={4} ellipsis={true}>
            <Link href={`/products/${product.title}`}>
              <a>{product.title}</a>
            </Link>
          </Title>
          <button onClick={() => onAddToWishlist(product)}>
            <FaRegHeart />
          </button>
        </div>
        <div className="category-btn">
          <button>Decoration</button>
        </div>
        <div className="review-box">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <span>(245)</span>
        </div>
        <div className="price-box">
          <Title className="ant-text-fix" level={3} ellipsis={true}>
            {takaCurrencySign} {product.price}
          </Title>
          <Title className="ant-text-fix" level={5} type="secondary" delete>
            {takaCurrencySign} {product.price}
          </Title>
          <Title className="ant-text-fix" level={5} type="success">
            50% off
          </Title>
        </div>
        <div className="cart-btn">
          <button onClick={() => onAddToCart(product)}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSingle;
