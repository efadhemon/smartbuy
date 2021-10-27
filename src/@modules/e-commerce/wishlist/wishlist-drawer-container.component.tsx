import {
  removeFromWishlist,
  toggleWishlistDrawer,
} from "@shared/redux/wishlist/wishlist-slice";
import {
  selectToggleWishlistDrawer,
  selectWishlistItem,
} from "@shared/redux/wishlist/wishlist-selector";
import { useDispatch, useSelector } from "react-redux";

import { Drawer } from "antd";
import Link from "next/link";
import React from "react";
import WishListDrawerItem from "./elements/wishlist-drawer-item.component";
import { createStructuredSelector } from "reselect";
import { useResponsive } from "ahooks";

const WishlistDrawerContainer = () => {
  const responsive = useResponsive();
  const isMobileView = responsive.lg === false;
  const dispatch = useDispatch();

  const { wishlistItem, drawerVisible } = useSelector(
    createStructuredSelector({
      wishlistItem: selectWishlistItem,
      drawerVisible: selectToggleWishlistDrawer,
    })
  );

  // const clearCartHandle = () => {
  //   dispatch(clearWishlist());
  //   dispatch(toggleWishlistDrawer());
  // };

  return (
    <Drawer
      title="Wishlist"
      placement="right"
      closable={true}
      footerStyle={{ paddingBottom: isMobileView ? 70 : 20 }}
      width={isMobileView ? "100%" : 370}
      visible={drawerVisible}
      onClose={() => dispatch(toggleWishlistDrawer())}
      footer={
        <div>
          <Link href="/checkout" passHref>
            <button className="w-full py-2 rounded text-white font-bold bg-orange">
              Go To Checkout
            </button>
          </Link>
        </div>
      }
    >
      <ul>
        {wishlistItem.map((wi: any) => (
          <li key={wi.id}>
            <WishListDrawerItem
              img={wi.img}
              title={wi.name}
              onDelete={() => dispatch(removeFromWishlist(wi))}
            />
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default WishlistDrawerContainer;
