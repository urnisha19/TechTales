import { useLoaderData } from "react-router-dom";

const SingleBlogDetails = () => {
    const blog = useLoaderData();

    const { category, title, author, detailed_description, date, image_url } = blog;

    return (
        <div className="m-20 text-center">
            <h1 className="text-5xl text-center font-bold mb-10">{title}</h1>
            <div className="">
                <img className="mx-auto" src={image_url} alt="product image" style={{ width: '300px', height: '200px', display: 'block' }} />
            </div>
            <h4 className="text-2xl font-semibold">Author: {author}</h4>
            <p className="mb-10">Published: {date}</p>
            <p className="badge badge-accent w-auto h-auto bg-sky-300">{category}</p>
            <p className="text-lg font-light">{detailed_description}</p>
        </div>
    );
};

export default SingleBlogDetails;