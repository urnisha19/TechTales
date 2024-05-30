import { Fragment, useState } from "react";

const About = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const accordionItems = [
        {
            title: "Our Story",
            content: "TechTales was created to serve as a comprehensive resource for anyone interested in web development and machine learning. We are a team of passionate developers, educators, and enthusiasts dedicated to sharing our knowledge and experiences with the community.",
        },
        {
            title: "Our Mission",
            content: "Our mission is to empower individuals with the knowledge and skills needed to excel in web development and machine learning. We strive to provide clear, practical, and up-to-date content that caters to both beginners and advanced learners.",
        },
        {
            title: "Join Our Community",
            content: "We believe in building a supportive and interactive community where readers can learn, share, and grow together. Join us on our journey by:",
            subItems: [
                { title: "Subscribing to Our Newsletter", content: "Get the latest posts and updates delivered straight to your inbox." },
                { title: "Following Us on Social Media", content: "Stay connected and join the conversation on our social media platforms]." },
                { title: "Engaging with Our Content", content: "Leave comments, share your thoughts, and participate in discussions." },
            ],
        },
        {
            title: "Contact Us",
            content: "We love hearing from our readers! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us at techtales@gmail.com.",
        },
    ];

    return (
        <>
            {/* Hero section */}
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/front-view-woman-working-desk_23-2148471005.jpg?t=st=1717025174~exp=1717028774~hmac=6e6dffdf6eac989c7da91ccc1189157355a46bc2bc86281a224cee6050b0dfd3&w=900)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About US</h1>
                        <p className="mb-5">At TechTales, we are passionate about delivering high-quality content that informs, educates, and inspires our readers. Our mission is to create a platform where individuals can explore a wide range of topics, from technology and science to arts and culture, in an engaging and accessible way.</p>
                    </div>
                </div>
            </div>
            {/* End of Hero section */}

{/* our team */}
<div className="mx-16 mb-5">
                    <h1 className="text-4xl text-center my-10">Meet Our Team</h1>
                    <p className="text-xl text-center mb-10">Behind every great blog is a dedicated team of individuals committed to delivering excellence. Meet the talented creators, writers, and editors who bring TechTales to life:</p>
                    <div className="-mx-4 flex flex-wrap justify-center p-3">

                        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                            <div className="mb-9 rounded-xl py-8 px-7 sm:p-9 lg:px-6 xl:px-9 bg-base-200 hover:bg-gradient-to-t from-sky-700 via-sky-800 to-sky-900 transition-all duration-300 ease-in-out hover:text-white">
                                <div className="mx-auto mb-7 inline-block">
                                    <img src="https://img.freepik.com/free-photo/3d-rendering-cute-girl-with-glasses-working-her-laptop_1057-45909.jpg?t=st=1717027449~exp=1717031049~hmac=097fbe046e8e8106ebfb9fba219ce81eed770c306f9aac0820e8558285195aba&w=740" alt="" className="h-50 w-50" />
                                </div>
                                <div>
                                    <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-center">Member 1</h3>
                                    <h3 className="text-sky-500 text-center"> Founder & Editor-in-Chief</h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                            <div className="mb-9 rounded-xl py-8 px-7 sm:p-9 lg:px-6 xl:px-9 bg-base-200 hover:bg-gradient-to-t from-sky-700 via-sky-800 to-sky-900 transition-all duration-300 ease-in-out hover:text-white">
                                <div className="mx-auto mb-7 inline-block">
                                    <img src="https://img.freepik.com/free-photo/3d-rendered-illustration-businessman-with-laptop-books_1057-45897.jpg?t=st=1717027423~exp=1717031023~hmac=ddae02429b8518221c79f3ec8e840368eef5809054c9cb105ee314faf0a83843&w=740" alt="" className="h-50 w-50" />
                                </div>
                                <div>
                                    <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-center">Member 2</h3>
                                    <h3 className="text-sky-500 text-center"> HTML & CSS Specialist</h3>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
                            <div className="mb-9 rounded-xl py-8 px-7 sm:p-9 lg:px-6 xl:px-9 bg-base-200 hover:bg-gradient-to-t from-sky-700 via-sky-800 to-sky-900 transition-all duration-300 ease-in-out hover:text-white">
                                <div className="mx-auto mb-7 inline-block">
                                    <img src="https://img.freepik.com/free-photo/portrait-young-businessman-with-mustache-glasses-3d-rendering_1142-51509.jpg?t=st=1717027410~exp=1717031010~hmac=01b61f3abfb5b09e476eb7c07887554f07a6072e8a70e6e3175ca628f507dbda&w=740" alt="" className="h-50 w-50" />
                                </div>
                                <div>
                                    <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-center">Member 3</h3>
                                    <h3 className="text-sky-500 text-center"> JavaScript and React</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* End of our team */}

{/* Accordion section */}
            <div className="container mx-auto p-6 bg-base-200">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-4xl font-bold mb-8 text-center">Learn More</h1>

                    {accordionItems.map((item, index) => (
                        <Fragment key={index}>
                            <div className="border-b border-gray-200 mb-4">
                                <button
                                    className={`flex items-center justify-between w-full py-2 px-4 text-lg font-semibold text-left bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span>{item.title}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-6 w-6 transition-transform transform ${activeAccordion === index ? "rotate-0" : "rotate-180"}`}
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 15.5a1 1 0 01-.707-.293l-5-5a1 1 0 111.414-1.414L10 13.086l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-.707.293z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                                {activeAccordion === index && (
                                    <div className="p-4 bg-gray-200 rounded-b-lg">
                                        <p className="text-base text-gray-800">{item.content}</p>
                                        {item.subItems && (
                                            <ul className="list-disc list-inside mt-4">
                                                {item.subItems.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="text-base text-gray-800 mb-2">
                                                        <strong>{subItem.title}:</strong> {subItem.content}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )}
                            </div>
                        </Fragment>
                    ))}

                </div>
            </div>
            {/* End of Accordion section */}
        </>
    )
}

export default About;