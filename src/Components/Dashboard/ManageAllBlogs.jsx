import axios from "axios";
import { useEffect, useState } from "react";
import ManageAllBlogsRowCard from "./ManageAllBlogsRowCard";

export default function ManageAllBlogs() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    async function load() {
      const data = await axios.get("http://localhost:3000/blogs");
      if (data?.status === 200) {
        setBlogs(data?.data);
      }
    }
    load();
  }, []);

  return (
    <div className="overflow-x-auto w-full px-16 mt-10">
      <h1 className="text-3xl mb-4">Mange All Blog</h1>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((blog) => (
            <ManageAllBlogsRowCard key={blog?.id} blog={blog} />
          ))}
        </tbody>
      </table>
    </div>
  );
}