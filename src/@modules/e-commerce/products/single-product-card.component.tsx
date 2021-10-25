import { addToCart, toggleCartDrawer } from "@shared/redux/cart/cart-slice";
import React from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { addToWishList, toggleWishlistDrawer } from "@shared/redux/wishlist/wishlist-slice";

const SingleProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const onAddToCart = (product: any) => {
    dispatch(addToCart(product));
    dispatch(toggleCartDrawer());
  };
  
  const onAddToWishlist = (product: any) => {
    dispatch(addToWishList(product));
    dispatch(toggleWishlistDrawer());
  }
  return (
    <div className="single-product-item">
      <div className="img-holder">
        <img src={product.img} alt="" />
        <div className="img-overlay"></div>
        <div className="cart-btn">
          <button onClick={() => onAddToCart(product)}>Add To Cart</button>
          <button onClick={() => onAddToWishlist(product)}>Add To Wishlist</button>
        </div>
      </div>
      <div className="title-holder">
        <h4>
          <Link href={`/products/${product.title}`}>
            <a>{product.title}</a>
          </Link>
        </h4>
        <div className="price-box">
          <span>{product.price}</span> <del>{product.price}</del>
        </div>
      </div>
    </div>
  );
};

export default SingleProductCard;
