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
            title: "What We Offer",
            content: "Explore our blog categories:",
            subItems: [
                { title: "HTML", content: "Learn the fundamentals of web development with our in-depth HTML tutorials and guides. Whether you're starting from scratch or looking to refine your skills, we've got you covered." },
                { title: "CSS", content: "Discover the art of styling websites with our comprehensive CSS resources. From basic styling techniques to advanced animations and layouts, we'll help you make your websites look stunning." },
                { title: "JavaScript", content: "Dive into the world of JavaScript with our tutorials that cover everything from basic syntax to advanced programming concepts. Enhance your web development skills and create interactive, dynamic websites." },
                { title: "Machine Learning", content: "Explore the exciting field of machine learning with our detailed articles and projects. Learn about algorithms, data preprocessing, model building, and real-world applications of machine learning." },
            ],
        },
        {
            title: "Meet Our Team",
            content: "We have a dedicated team of professionals who are passionate about web development and machine learning. Meet our team members:",
            subItems: [
                { title: "[Nahia Nowreen Urnisha]", content: "Founder & Editor-in-Chief" },
                { title: "[Team Member 1]", content: "HTML & CSS Specialist" },
                { title: "[Team Member 2]", content: "JavaScript Guru" },
                { title: "[Team Member 3]", content: "Machine Learning Expert" },
            ],
        },
        {
            title: "Join Our Community",
            content: "We believe in building a supportive and interactive community where readers can learn, share, and grow together. Join us on our journey by:",
            subItems: [
                { title: "Subscribing to Our Newsletter", content: "Get the latest posts and updates delivered straight to your inbox." },
                { title: "Following Us on Social Media", content: "Stay connected and join the conversation on [list your social media platforms]." },
                { title: "Engaging with Our Content", content: "Leave comments, share your thoughts, and participate in discussions." },
            ],
        },
        {
            title: "Contact Us",
            content: "We love hearing from our readers! If you have any questions, suggestions, or just want to say hello, feel free to reach out to us at techtales@gmail.com.",
        },
    ];

    return (
        <div className="container mx-auto p-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>

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
    )
}

export default About;