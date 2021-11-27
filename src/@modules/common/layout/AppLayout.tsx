import AppMainHeader from "./headers/app-main-header";
import React from "react";
import AppMainFooter from "./footers/app-main-footer";

const AppLayout = ({ children }) => {
    return (
        <>
            <AppMainHeader />
            <main>{children}</main>
            <AppMainFooter />
        </>
    );
};

export default AppLayout;
