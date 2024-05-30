/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
    return (
        <div className="card lg:card-side bg-base-300 shadow-xl hover:bg-sky-900 hover:text-white">
            <figure><img src={blog?.image_url} alt={blog?.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{blog?.title}</h2>
                <h3 className="text-sky-500">{blog?.author}</h3>
                <div className="card-actions">
                    <div className="badge badge-accent w-20 bg-sky-300">{blog?.category}</div>
                </div>
                <p>{blog?.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-sky-300 hover:bg-white hover:text-sky-900">Read</button>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;