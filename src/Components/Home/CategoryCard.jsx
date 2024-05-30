/* eslint-disable react/prop-types */
export default function CategoryCard({ category }) {
    //console.log("category: ", category)

    return (
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
            <div className="mb-9 rounded-xl py-8 px-7 sm:p-9 lg:px-6 xl:px-9 bg-base-200 hover:bg-gradient-to-t from-sky-700 via-sky-800 to-sky-900 transition-all duration-300 ease-in-out hover:text-white">
                <div className="mx-auto mb-7 inline-block">
                    <img src={category?.image_url} alt="Dynamic Image" className="h-20 w-20" />
                </div>
                <div>
                    <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl">{category?.name}</h3>
                    <p className="text-base font-medium text-body-color">{category?.description.split(' ').slice(0, 10).join(' ')+"..."}</p> 
                </div>
            </div>
        </div>
    );
}