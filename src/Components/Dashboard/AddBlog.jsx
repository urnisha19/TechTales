import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBlog = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/categories");
      if (data?.status === 200) {
        console.log(data?.data);
        setCategories(data?.data);
      }
    }
    load();
  }, []);

  const handleCreateBlog = async (e) => {
    e.preventDefault();

    if (window.confirm("Do you want to proceed with adding this blog?")) {
      const form = e.target;

      const id = form.id.value;
      const title = form.title.value;
      const author = form.author.value;
      const category = form.category.value;
      const description = form.description.value;
      const date = form.date.value;
      const image_url = form.image_url.value;

      const BlogData = { id, category, title, author, date, description, image_url };

      try {
        const response = await axios.post("http://localhost:3000/blogs", BlogData);
        if (response.status === 201 || response.status === 200) {
          toast.success("Blog added successfully!");
          form.reset();
        } else {
          toast.error("Failed to add the blog!");
        }
      } catch (error) {
        toast.error("An error occurred while adding the blog!");
      }
    }
  };

  return (
    <div className="w-full px-16">
      <ToastContainer />
      <h1 className="text-4xl mb-4">Add Blog</h1>
      <form onSubmit={handleCreateBlog} className="w-full">

        <div className="mb-4">
          <label htmlFor="id">Id </label>
          <input type="text" name="id" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="title">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="author">Author </label>
          <input type="text" name="author" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="category">Category </label>
          <select name="category" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option key={category?.id} value={category?.name}>
                {category?.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="description">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="image_url">Image URL</label>
          <input placeholder="Image URL" type="text" name="image_url" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <input
            type="submit"
            value={"Add Blog"}
            className="w-full btn py-3 px-5 border btn-neutral"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
