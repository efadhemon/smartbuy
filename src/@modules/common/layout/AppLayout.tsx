import AppFooter from "./footers/app-footer.component";
import AppMainHeader from "./headers/app-main-header.component";
import React from "react";

const AppLayout = ({ children }) => {
  return (
    <>
      <AppMainHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default AppLayout;
