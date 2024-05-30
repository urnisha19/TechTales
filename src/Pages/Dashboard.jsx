import { useEffect, useState } from "react";
import BlogCard from "../Components/Home/BlogCard";
import { auth } from "../Firebase/firebase.config.js"; // Import your auth config
import ProfileCard from "../Components/Dashboard/ProfileCard.jsx";

const Dashboard = () => {
    const [blogs, setBlogs] = useState([]);
    const [user, setUser] = useState(null);
    console.log(user);

    useEffect(() => {
        async function loadBlogs() {
            // Get blogs
            const blogResponse = await fetch("http://localhost:3000/blogs");
            const blogData = await blogResponse.json();
            setBlogs(blogData);
        }

        async function loadUser() {
            // Assume you have a function to fetch user data
            const user = auth.currentUser;
            setUser(user);
        }

        loadBlogs();
        loadUser();
    }, []);

    return (
        <div className="mx-16">
            <ProfileCard/>
            <h1 className="text-4xl my-10 text-center">Our Blogs</h1>
            <div className="grid grid-cols-2 gap-10 mb-10">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
