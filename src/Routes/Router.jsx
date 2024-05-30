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
import SingleBlogDetails from "../Pages/SingleBlogDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('http://localhost:3000/blogs'),
            },
            {
                path: "/blogs/:id", //ekane single product details dekar jonno product id different differnt hobe tai id age : symbol use kora hoyeche
                element: <SingleBlogDetails />,
                loader: ({ params }) => fetch(`http://localhost:3000/blogs/${params.id}`),
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
                loader: () => fetch('http://localhost:3000/blogs')
              },
              {
                path: "manage-blogs",
                element: <ManageAllBlogs/>,
              },
              {
                path: "add-blog",
                element: <AddBlog />,
              },
              {
                path: "edit-blog/:id",
                element: <EditBlog />,
                loader: ({ params }) => fetch(`http://localhost:3000/blogs/${params.id}`),
              },
        ]
    }
])
