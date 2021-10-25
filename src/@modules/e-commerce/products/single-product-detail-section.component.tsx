import React, { useState } from 'react';
import { AiFillStar } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const SingleProductDescription = ({title}) => {
    const [productCount, setProductCount] = useState(0);
    return (
        <div className="single-product-info-box">
                <div className="product-title">
                  <p>Wet Food</p>
                  <h2>{title}</h2>
                </div>
                <div className="product-value">
                  <h3>
                    £245.00 <del>£399.99</del>
                  </h3>
                  <div className="review-box">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <span>(25 Customer review)</span>
                  </div>
                </div>
                <div className="product-text">
                  <p>
                    Sweet as can be, the darling Lucy Love Sophia Rust Red
                    Embroidered Dress is here to brighten your day! Slender
                    straps support the apron neckline of this gauzy, woven dress
                    bedecked in floral embroidery. Sheath silhouette ends at a
                    mini hem. Sleek, polished, and boasting an impeccably
                    polished modern fit, this blue, 2-button Lazio suit features
                    a notch lapel, flap pockets, and accompanying flat front
                    trousers—all in pure wool by Vitale Barberis Canonico.
                  </p>
                  <div className="bottom">
                    <p>
                      <span>Availability:</span> In stock{" "}
                    </p>
                    <p>
                      <span>Tags:</span> Fashion, Hood, Classic
                    </p>
                    <p>
                      <span>Product Code:</span> #4657
                    </p>
                  </div>
                </div>
                <div className="product-cart-box">
                  <div className="input-box">
                    <div className="title">
                      <h4>Quantity</h4>
                    </div>
                    <div className="product-item-counter-btn border w-40">
                      <div className="flex h-14 w-ful relative bg-transparent">
                        <button
                          data-action="decrement"
                          className=" bg-white h-full w-20 "
                          onClick={() =>
                            setProductCount((prevCount: any) => prevCount - 1)
                          }
                        >
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="bg-white text-center w-full texg-2xl font-bold "
                          name="cartProductCount"
                          value={productCount}
                          readOnly
                        ></input>
                        <button
                          data-action="increment"
                          className="bg-white h-full w-20"
                          onClick={() =>
                            setProductCount((prevCount: any) => prevCount + 1)
                          }
                        >
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="product-details-button-box">
                    <div className="addto-cart-button">
                      <button className="btn-one addtocart" type="submit">
                        Add To Cart
                      </button>
                    </div>
                    <div className="wishlist-button">
                      <button className="btn-one wishlist" type="submit">
                        Add To Wishlist
                      </button>
                    </div>
                  </div>
                  <div className="share-products-socials">
                    <h5>Share This:</h5>
                    <div className="about-social-icon">
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
              </div>
    );
};

export default SingleProductDescription;