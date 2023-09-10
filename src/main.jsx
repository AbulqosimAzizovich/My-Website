import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Provider } from "react-redux";
import router from "./Router/index.jsx";
import { store } from "./redux/store/store.js";
import "./index.css";
import Layout from "./pages/Layout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
      <Layout />
  </RouterProvider>
);
