import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Page404 from "../pages/Page404/Page404";
import Login from "../pages/LogIn/Login";
import PrivateRoute from "./PrivateRoute";
import AddProject from "../pages/Dashboard/AddProject/AddProject";
import DeleteProject from "../pages/Dashboard/DeleteProject/DeleteProject";
import AddBlog from "../pages/Dashboard/AddBlog/AddBlog";
import DeleteBlog from "../pages/Dashboard/DeleteBlog/DeleteBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "add-project",
        element: (
          <PrivateRoute>
            <AddProject />
          </PrivateRoute>
        ),
      },
      {
        path: "delete-project",
        element: (
          <PrivateRoute>
            <DeleteProject />
          </PrivateRoute>
        ),
      },
      {
        path: "add-blog",
        element: (
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        ),
      },
      {
        path: "delete-blog",
        element: (
          <PrivateRoute>
            <DeleteBlog />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Page404></Page404>,
  },
]);

export default router;
