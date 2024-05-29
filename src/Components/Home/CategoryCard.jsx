/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
    console.log("category: ", category)
    return (
        <div className="card  bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{category?.name}</h2>
                <p>
                    {category?.description?.length > 50
                        ? category?.description?.slice(0, 50)
                        : category?.description}
                </p>
            </div>
        </div>
    );
}