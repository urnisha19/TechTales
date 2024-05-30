import axios from "axios";
import { useEffect, useState } from "react";

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

    const form = e.target;

    const id = form.id.value;
    const title = form.title.value;
    const author = form.author.value;
    const category = form.category.value;
    const description = form.description.value;
    const date = form.date.value;
    const image_url = form.image_url.value

    const BlogData = {id,category,title,author,date,description,image_url};

    await axios.post("http://localhost:3000/Blogs", BlogData);
  };

  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Add Blog</h1>
      <form onSubmit={handleCreateBlog} className="w-full">

        <div className="mb-4">
          <label htmlFor="">Id </label>
          <input type="text" name="id" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input type="text" name="title" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="">Author </label>
          <input type="text" name="author" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="">Category </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option key={category?.id} value={category?.title}>
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea name="description" className="w-full py-3 px-5 border" />
        </div>
        
        <div className="mb-4">
          <label htmlFor="">Date</label>
          <input type="date" name="date" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="">Image Upload</label>
          <input type="file" name="image_url" className="w-full py-3 px-5 border" />
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