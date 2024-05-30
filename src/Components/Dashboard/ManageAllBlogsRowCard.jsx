import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ManageAllBlogsRowCard({ blog }) {
  return (
    <tr>
      <th>{blog?.id}</th>
      <td>{blog?.title}</td>
      <td>{blog?.author}</td>
      <td>{blog?.category}</td>
      <td className="flex gap-4">
        <Link
          to={`/dashboard/edit-blog/${blog?.id}`}
          className="btn btn-xs btn-neutral"
        >
          Edit
        </Link>
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
}