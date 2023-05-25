import React from "react";
import { Mobile, TabletPC } from "../../../utils/mediaQuery";
import Footer from "./Footer";
import Header from "./Header";
// import MobileHeader from "./MobileHeader";
// import SimpleFooter from "./SimpleFooter";
// import SimpleHeader from "./SimpleHeader";

function Layout({ simple, children }) {
  return (
    <>
      <Mobile>Mobile</Mobile>
      <TabletPC>
        <Header />
      </TabletPC>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
