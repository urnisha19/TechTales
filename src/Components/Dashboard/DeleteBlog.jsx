import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const DeleteBlog = ({ blogId }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await axios.delete(`http://localhost:3000/blogs/${blogId}`);
        if (response.status === 200) {
          toast.success("Blog deleted successfully!");
          setTimeout(() => {
            navigate("/dashboard/manage-Blogs");
          }, 2000);
        } else {
          toast.error("Failed to delete the blog!");
        }
      } catch (error) {
        toast.error("An error occurred while deleting the blog!");
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <button onClick={handleDelete} className="btn btn-xs btn-error">
        Delete
      </button>
    </>
  );
};

export default DeleteBlog;
