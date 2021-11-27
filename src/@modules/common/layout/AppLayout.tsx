import AppMainHeader from "./headers/app-main-header";
import React from "react";
import AppMainFooter from "./footers/app-main-footer";

const AppLayout = ({ children }) => {
    return (
        <>
            <AppMainHeader />
            <main className="app-core-content">{children}</main>
            <AppMainFooter />
        </>
    );
};

export default AppLayout;
