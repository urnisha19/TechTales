import { useState } from "react";
import Banner from "../Components/Home/Banner";
import { useEffect } from "react";
import CategoryCard from "../Components/Home/CategoryCard";
import BlogCard from "../Components/Home/BlogCard";

const Home = () => {
    const [blogs, setBlogs] = useState();
    const [categories, setCategories] = useState();

    useEffect(() => {
        async function load() {
            //get recipies
            const blogResponse = await fetch("http://localhost:3000/blogs");
            const blogData = await blogResponse.json();
            setBlogs(blogData);

            //get categories
            const categoryResponse = await fetch("http://localhost:3000/categories");
            const categoryData = await categoryResponse.json();
            setCategories(categoryData);
        }
        load();
    }, []);

    return (
        <div>
            <Banner />
            <div className="mx-16">
                <h1 className="text-4xl my-20 text-center">Our blog Categories </h1>
                <div className="grid grid-cols-4 gap-6">
                    {categories?.map((category) => (
                        <CategoryCard key={category?.id} category={category} />
                    ))}
                </div>
            </div>
            <div className="mx-16">
                <h1 className="text-4xl my-20 text-center">Our Newest blogs </h1>
                <div className="grid grid-cols-4 gap-6">
                    {blogs
                        ?.reverse()
                        ?.slice(0, 4)
                        ?.map((blog) => (
                            <BlogCard key={blog?.id} blog={blog} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;