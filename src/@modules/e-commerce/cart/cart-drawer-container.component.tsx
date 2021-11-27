import {
    addToCart,
    clearFromCart,
    removeFromCart,
    toggleCartDrawer,
} from "@shared/redux/cart/cart-slice";
import { configResponsive, useResponsive } from "ahooks";
import {
    selectCartItems,
    selectCartToggle,
    selectTotal,
} from "@shared/redux/cart/cart-selector";
import { useDispatch, useSelector } from "react-redux";

import CartDrawerProductItem from "./elements/cart-drawer-product-item.component";
import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import Text from "antd/lib/typography/Text";
import Title from "antd/lib/typography/Title";
import { createStructuredSelector } from "reselect";
import { responsiveBreakPoint } from "@modules/common/container/pure-responsive-container.component";
import { takaCurrencySign } from "@shared/constant/preference";

configResponsive(responsiveBreakPoint);
const CartDrawerContainer = () => {
    const responsive = useResponsive();
    const isMobileView = responsive.lg === false;
    const dispatch = useDispatch();

    const { drawerVisible, cartItems, total } = useSelector(
        createStructuredSelector({
            drawerVisible: selectCartToggle,
            cartItems: selectCartItems,
            total: selectTotal,
        })
    );

    return (
        <Drawer
            title="Shopping Cart"
            placement="right"
            footerStyle={{ paddingBottom: isMobileView ? 70 : 20 }}
            width={isMobileView ? "100%" : 370}
            closable={true}
            onClose={() => dispatch(toggleCartDrawer())}
            visible={drawerVisible}
            footer={
                <div className="mx-auto my-4">
                    <div className="flex justify-between">
                        <Title level={4}>Subtotal:</Title>
                        <Text>
                            {takaCurrencySign} <span>{total}</span>
                        </Text>
                    </div>
                    <div className="text-center">
                        <Link href="/checkout" passHref>
                            <button
                                onClick={() => dispatch(toggleCartDrawer())}
                                className="w-full py-2 rounded text-white font-bold bg-orange"
                            >
                                View Cart
                            </button>
                        </Link>
                    </div>
                </div>
            }
        >
            <ul>
                {cartItems.map((ci: any) => (
                    <li key={ci?.id}>
                        <CartDrawerProductItem
                            image={ci.img}
                            title={ci.name}
                            price={ci.mrp}
                            quantity={ci.quantity}
                            onIncrement={() => dispatch(addToCart(ci))}
                            onDecrement={() => dispatch(removeFromCart(ci))}
                            onDelete={() => dispatch(clearFromCart(ci))}
                        />
                    </li>
                ))}
            </ul>
        </Drawer>
    );
};

export default CartDrawerContainer;
