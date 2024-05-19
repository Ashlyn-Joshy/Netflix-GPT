import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Login from "./login";
import Browse from "./Browse";
import Error from "./Error";

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <Error />,
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
