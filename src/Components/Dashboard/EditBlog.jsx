import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    async function load() {
      const categoriesData = await axios.get(
        "http://localhost:3000/categories"
      );
      if (categoriesData?.status === 200) {
        setCategories(categoriesData?.data);
      }

      const blogData = await axios.get(`http://localhost:3000/blogs/${id}`);
      if (blogData?.status === 200) {
        setBlogDetails(blogData?.data);
      }
    }

    load();
  }, [id]);

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

    const blogData = {id,category,title,author,date,description,image_url};
    console.log("blog: ",blogData);

    await axios.patch(`http://localhost:3000/blogs/${id}`, blogData);
  };
  return (
    <div className="w-full px-16">
      <h1 className="text-4xl mb-4">Edit Blog</h1>
      <form onSubmit={handleCreateBlog} className="w-full">
        <div className="mb-4">
          <label htmlFor="">Title </label>
          <input
            defaultValue={blogDetails?.title}
            type="text"
            name="title"
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Author </label>
          <input
            type="text"
            name="author"
            defaultValue={blogDetails?.author}
            className="w-full py-3 px-5 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="">Category </label>
          <select name="category" id="" className="w-full py-3 px-5 border">
            {categories?.map((category) => (
              <option
                key={category?.title}
                selected={category?.title === blogDetails?.category}
                value={category?.title}
              >
                {category?.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="">Description </label>
          <textarea
            defaultValue={blogDetails?.description}
            name="description"
            className="w-full py-3 px-5 border"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="">Date</label>
          <input defaultValue={blogDetails?.date} type="date" name="date" className="w-full py-3 px-5 border" />
        </div>

        <div className="mb-4">
          <label htmlFor="">Image Upload</label>
          <input defaultValue={blogDetails?.image_url} type="image" name="image_url" className="w-full py-3 px-5 border" />
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

export default EditBlog;