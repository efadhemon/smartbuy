/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button, Divider, Table } from "antd";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import {
    addToCart,
    clearCart,
    clearFromCart,
    removeFromCart,
} from "@shared/redux/cart/cart-slice";
import { selectCartItems, selectTotal } from "@shared/redux/cart/cart-selector";
import { useDispatch, useSelector } from "react-redux";

import AppLayout from "@modules/common/layout/AppLayout";
import Link from "next/link";
import { MdClear } from "react-icons/md";
import React from "react";
import Title from "antd/lib/typography/Title";
import { createStructuredSelector } from "reselect";
import { takaCurrencySign } from "@shared/constant/preference";
import { Paths } from "@shared/constant/routes.constant";

const CheckoutTable = () => {
    const dispatch = useDispatch();
    const { cartItems, total } = useSelector(
        createStructuredSelector({
            cartItems: selectCartItems,
            total: selectTotal,
        })
    );

    const columns: any = [
        {
            key: "image",
            title: "",
            className: "cart-table-cell",
            dataIndex: "image",
            render: (image: any) => (
                <div className="flex justify-center py-2">
                    <img style={{ width: "85px" }} src={image}></img>
                </div>
            ),
            width: 200,
        },
        {
            key: "name",
            title: "Product Name",
            className: "cart-table-cell",
            dataIndex: "name",
            render: (title: any) => {
                return {
                    children: <p>{title}</p>,
                    props: {
                        "data-title": "Product",
                    },
                };
            },
        },
        {
            key: "price",
            title: "Price",
            className: "cart-table-cell font-bold",
            dataIndex: "price",
            render: (price: any) => {
                return {
                    children: <p> {price}</p>,
                    props: {
                        "data-title": "Price",
                    },
                };
            },
        },
        {
            key: "quantity",
            title: "Quantity",
            className: "cart-table-cell font-bold",
            dataIndex: "quantity",
            render: (quantity: any, record: any) => {
                return {
                    children: (
                        <div className="flex justify-center mx-auto xl:justify-start lg:justify-start">
                            <Button
                                onClick={() => dispatch(removeFromCart(record))}
                                size="middle"
                                type="text"
                                icon={
                                    <FiMinusCircle className="mx-auto w-3 h-3 lg:w-5  lg:h-5" />
                                }
                            />

                            <Title
                                style={{
                                    marginBottom: "0px",
                                    alignSelf: "center",
                                }}
                                level={5}
                            >
                                {quantity}
                            </Title>
                            <Button
                                onClick={() => dispatch(addToCart(record))}
                                size="middle"
                                type="text"
                                icon={
                                    <FiPlusCircle className="mx-auto w-3 h-3 lg:w-5  lg:h-5" />
                                }
                            />
                        </div>
                    ),
                    props: {
                        "data-title": "Quantity",
                    },
                };
            },
        },
        {
            key: "image",
            title: "Total",
            className: "cart-table-cell font-bold",
            dataIndex: "total",
            render: (key: React.Key, record: any) => {
                return {
                    children: <p key={key}>{record.price * record.quantity}</p>,
                    props: {
                        "data-title": "Total",
                    },
                };
            },
        },
        {
            key: "img",
            title: "Remove",
            className: "cart-table-cell",
            render: (key: React.Key, record: any) => {
                return {
                    children: (
                        <Button
                            onClick={() => dispatch(clearFromCart(record))}
                            key={key}
                            type="text"
                        >
                            <MdClear className="font-extrabold" />
                        </Button>
                    ),
                    props: {
                        "data-title": "Remove",
                    },
                };
            },
        },
    ];

    return (
        <AppLayout>
            <div className="container pt-16">
                <Table
                    className="cart-table"
                    style={{ backgroundColor: "white" }}
                    columns={columns}
                    dataSource={cartItems}
                    pagination={false}
                    size="small"
                    footer={() => (
                        <div className="text-center mx-auto">
                            <Button onClick={() => dispatch(clearCart())}>
                                Clear Cart
                            </Button>
                        </div>
                    )}
                />
                <Divider />
                <div className="lg:flex lg:justify-end">
                    <div className="lg:w-2/4 border p-6">
                        <p className="font-bold text-xl my-2">Cart Total</p>
                        <hr />
                        <div className="flex justify-between my-3">
                            <p className="text-base text-black">
                                Cart Subtotal
                            </p>
                            <p className="text-base text-black">
                                {takaCurrencySign}
                                {total}
                            </p>
                        </div>
                        <hr />
                        <div className="flex justify-between my-3">
                            <p className="text-base text-black">Shipping</p>
                            <p className="text-base text-black">
                                {takaCurrencySign}
                                {total}
                            </p>
                        </div>
                        <hr />
                        <div className="flex justify-between my-3">
                            <p className="text-base text-black">Total</p>
                            <p className="text-base text-black">
                                {takaCurrencySign}
                                {total}
                            </p>
                        </div>
                        <Link href={Paths.proceedCheckout} passHref>
                            <Button type="primary" size="large">
                                <span className="font-bold text-white">
                                    Proceed to checkout
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default CheckoutTable;
