const BlogCard = ({ blog }) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure>
                <img src={blog?.image_url} alt={blog?.title} className="max-w-50" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{blog?.title}</h2>
                <h2 className="card-title">{blog?.author}</h2>
                <p>
                    {blog?.description?.length > 30
                        ? blog?.description?.slice(0, 30)
                        : blog?.description}
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">{blog?.category}</div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;