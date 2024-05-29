import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import ManageAllBlogs from "../Components/Dashboard/ManageAllBlogs";
import AddBlog from "../Components/Dashboard/AddBlog";
import EditBlog from "../Components/Dashboard/EditBlog";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />,
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path:"/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout/>
            </PrivateRoute>
        ),
        children:[
            {
                index: true,
                element: <Dashboard />,
              },
              {
                path: "manage-all-blogs",
                element: <ManageAllBlogs/>,
              },
              {
                path: "add-blog",
                element: <AddBlog />,
              },
              {
                path: "edit-blog/:id",
                element: <EditBlog />,
              },
        ]
    }
])
