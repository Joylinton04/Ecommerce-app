import React from "react";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "@/layout/Layout";

const Approute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
export default Approute;
