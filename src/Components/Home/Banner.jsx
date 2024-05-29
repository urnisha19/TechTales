const Banner = () => {
    return (
        <div className="hero h-[600px] bannerBg">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to</h1>
                    <h1 className="mb-5 text-5xl font-bold">TechTales</h1>
                    <p className="mb-5">
                        Discover the latest in web development and machine learning. Stay updated with comprehensive guides, tutorials, and insights from industry experts.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;