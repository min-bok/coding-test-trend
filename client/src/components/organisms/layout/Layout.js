import React from "react";
import { Mobile, TabletPC } from "../../../utils/mediaQuery";
import Footer from "./Footer";
import Header from "./Header";
import SimpleHeader from "./SimpleHeader";
import MobileHeader from "./MobileHeader";
// import SimpleFooter from "./SimpleFooter";
// import SimpleHeader from "./SimpleHeader";

function Layout({ simple, children }) {
  return (
    <>
      {simple ? (
        <SimpleHeader>{children}</SimpleHeader>
      ) : (
        <>
          <Mobile>
            <MobileHeader />
          </Mobile>
          <TabletPC>
            <Header />
          </TabletPC>
          {children}
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
