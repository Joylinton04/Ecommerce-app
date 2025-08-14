import React from "react";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";
import Categories from "@/pages/Categories";
import Product from "@/pages/Product";

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
    ],
  },
]);
export default Approute;
