import PureResponsive from "@modules/common/container/pure-responsive-container.component";
import React from "react";
import AppFooterNav from "./app-footer-nav.component";
import AppFooter from "./app-footer.component";

const AppMainFooter = () => {
    return (
        <>
            <AppFooter />
            <AppFooterNav />
        </>
    );
};

export default AppMainFooter;
