import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Login from "./login";
import Browse from "./Browse";
import Error from "./Error";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Body;
