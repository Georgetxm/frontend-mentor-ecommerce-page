import React from "react";
import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({ children, cart, setCart }) => {
  return (
    <>
      <Meta />
      <Nav cart={cart} />
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
