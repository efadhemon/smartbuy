/* eslint-disable @next/next/no-img-element */
import { takaCurrencySign } from "@shared/constant/preference";
import { addToCart, toggleCartDrawer } from "@shared/redux/cart/cart-slice";
import {
    addToWishList,
    toggleWishlistDrawer,
} from "@shared/redux/wishlist/wishlist-slice";
import { Tooltip } from "antd";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";

interface IFProps {
    product: any;
}
const ProductCard: React.FC<IFProps> = ({ product }) => {
    const dispatch = useDispatch();

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
                </ul>
            </div>
        </div>
    );
};

export default ProductCard;
