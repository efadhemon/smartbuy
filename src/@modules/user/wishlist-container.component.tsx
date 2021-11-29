/* eslint-disable @next/next/no-img-element */
import { takaCurrencySign } from "@shared/constant/preference";
import { Paths } from "@shared/constant/routes.constant";
import { Button, PageHeader, Rate } from "antd";
import productData from "productData";
import Link from "next/link";

const WishlistContainer = () => {
    return (
        <div className="wishlist-container">
            <PageHeader ghost={false} title="Wishlist">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 ">
                    {productData.map((pd) => (
                        <div key={pd.id} className="wishlist-card">
                            <div className="product-image">
                                <img src={pd.img} alt="product-img" />
                            </div>
                            <div className="product-info">
                                <Link href={`${Paths.products}/${pd.id}`}>
                                    <a>
                                        <h4 className="product-name">
                                            {pd.name}
                                        </h4>
                                    </a>
                                </Link>

                                <Rate
                                    style={{ fontSize: 14 }}
                                    disabled
                                    allowHalf
                                    defaultValue={4.5}
                                />

                                <h2 className="product-price">
                                    {takaCurrencySign + pd.price}
                                </h2>
                                <div className="text-right">
                                    <Button>Remove</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </PageHeader>
        </div>
    );
};

export default WishlistContainer;
