import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook for navigation
  const [blogDetails, setBlogDetails] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const categoriesData = await axios.get("http://localhost:3000/categories");
        if (categoriesData?.status === 200) {
          setCategories(categoriesData?.data);
        }
        const blogData = await axios.get(`http://localhost:3000/blogs/${id}`);
        if (blogData?.status === 200) {
          setBlogDetails(blogData?.data);
        }
      } catch (error) {
        toast.error("Failed to load data!");
      }
    }
    load();
  }, [id]);

  const handleCreateBlog = async (e) => {
    e.preventDefault();

    if (window.confirm("Do you want to proceed with updating this blog?")) {
      const form = e.target;
      const updatedBlog = {
        title: form.title.value,
        author: form.author.value,
        category: form.category.value,
        description: form.description.value,
        date: form.date.value,
        image_url: form.image_url.value,
      };

      try {
        const response = await axios.patch(`http://localhost:3000/blogs/${id}`, updatedBlog);
        if (response.status === 200) {
          toast.success("Blog updated successfully!");
          setTimeout(() => {
            navigate("/dashboard/manage-Blogs"); // Redirect after success
          }, 2000); // Delay to allow user to see the toast
        } else {
          toast.error("Failed to update the blog!");
        }
      } catch (error) {
        toast.error("An error occurred while updating the blog!");
      }
    }
  };

  return (
    <div className="w-full px-16">
      <ToastContainer />
      <h1 className="text-4xl mb-4">Edit Blog</h1>
      <form onSubmit={handleCreateBlog} className="w-full">
        <div className="mb-4">
          <label htmlFor="title">Title </label>
          <input
            defaultValue={blogDetails?.title}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author">Author </label>
          <input
            type="text"
            name="author"
            defaultValue={blogDetails?.author}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category">Category </label>
          <select name="category" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option
                key={category?.name}
                value={category?.name}
                selected={category?.name === blogDetails?.category}
              >
                {category?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="description">Description </label>
          <textarea
            defaultValue={blogDetails?.description}
            name="description"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date">Date</label>
          <input
            defaultValue={blogDetails?.date}
            type="date"
            name="date"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image_url">Image URL</label>
          <input
            placeholder="Image URL"
            type="text"
            name="image_url"
            defaultValue={blogDetails?.image_url}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <input
            type="submit"
            value={"Update"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
