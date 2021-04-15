import React from "react";
import setupMockServer from "../src/api/mock-server"
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./contexts/cart-context";
import { ProductProvider } from "./contexts/product-context";
import { WishlistProvider } from "./contexts/wishlist-context";

setupMockServer()

ReactDOM.render(
   <React.StrictMode>
      <ProductProvider>
         <CartProvider>
            <WishlistProvider>
               <App />
            </WishlistProvider>
         </CartProvider>
      </ProductProvider>
   </React.StrictMode>,
   document.getElementById("root")
);
