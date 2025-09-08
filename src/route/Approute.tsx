import React from "react";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import Categories from "@/pages/Categories";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import Order from "@/pages/Order";

const Approute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'categories',
        element: <Categories/>,
      },
      {
        path: 'product/:id',
        element: <Product/>,
      },
      {
        path: 'cart',
        element: <Cart/>,
      },
      {
        path: 'order',
        element: <Order/>,
      },
    ],
  },
]);
export default Approute;
