import React from "react";
import { Attribution } from "./Attribution";
import Meta from "./Meta";
import Nav from "./Nav";

const Layout = ({ children, cart, setCart }) => {
  return (
    <>
      <Meta />
      <Nav cart={cart} />
      <div>
        <main>{children}</main>
        <Attribution />
      </div>
    </>
  );
};

export default Layout;
