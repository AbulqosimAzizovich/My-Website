import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "./../pages/About/About";
import Error from "./../pages/Error/Error";
import Layout from "./../pages/Layout";
import Project from "./../pages/Project/Project";
import Blog from './../pages/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Error />,
      },
      {
        path: "/about",
        element: <Error />,
      },
      {
        path: "/project",
        element: <Error />,
      },
      {
        path: "/blog",
        element: <Error />,
      },
    ],
  },
]);
export default router;
