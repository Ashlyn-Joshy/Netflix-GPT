import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Login from "./login";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Body;
