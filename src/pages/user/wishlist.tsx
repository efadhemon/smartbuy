import DashboardLayout from "@modules/user/dashboard-layout";
import WishlistContainer from "@modules/user/wishlist-container.component";
import React from "react";

const Wishlist = () => {
    return (
        <DashboardLayout>
            <WishlistContainer />
        </DashboardLayout>
    );
};

export default Wishlist;
