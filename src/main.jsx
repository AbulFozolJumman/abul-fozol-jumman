import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main/Main.jsx";
import Home from "./Layout/Home/Home.jsx";
import AllProjects from "./Layout/AllProjects/AllProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "allProjects",
        element: <AllProjects></AllProjects>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
  </React.StrictMode>
);
