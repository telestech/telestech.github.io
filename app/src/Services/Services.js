import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export function Services() {
    const serviceList = [
        {
            title: "Software Development",
            description:
            "Empowering businesses with custom software solutions designed to drive innovation, enhance efficiency, and scale seamlessly.",
            image: "a.png",
        },
        {
            title: "Web Development",
            description:
            "Transform your online presence with cutting-edge web development that combines stunning design, robust functionality, and unmatched user experience.",
            image: "b.png",
        },
        {
            title: "Application Production",
            description:
            "Bringing your ideas to life with scalable, intuitive, and high-performing applications that redefine user engagement and functionality.",
            image: "c.png",
        },
        {
            title: "Data Analytics",
            description:
            "Unlock the power of your data with advanced analytics, delivering actionable insights to fuel smarter decision-making and business growth.",
            image: "d.png",
        },
        {
            title: "Technical Consulting",
            description:
            "Navigate complex technical challenges with expert consulting services tailored to optimize your IT infrastructure and strategy.",
            image: "e.png",
        },
        {
            title: "Project Management",
            description:
            "Ensuring your IT projects succeed on time, within budget, and beyond expectations with industry-leading project management expertise.",
            image: "f.png",
        },
    ];

    const ServiceSection = ({ title, description, image, textColor, reverse }) => {
        return (
            <section
                className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center justify-between w-[90%] mx-auto my-10 p-5 rounded-lg shadow-md bg-white hover:scale-105 transform transition duration-300`}
            >
                <div className="w-full md:w-1/2 flex justify-center mb-5 md:mb-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-[60%] h-auto rounded-lg transform rotate-3 shadow-lg" // Reduced image size to 60%
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className={`text-4xl font-serif font-bold mb-4 ${textColor}`}>
                        {title}
                    </h2>
                    <p className="text-2lg leading-relaxed mb-6">{description}</p>
                </div>
            </section>
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />

            <section className="relative h-[70vh] flex items-center justify-between px-10">
                <div className="relative z-10 text-left text-white max-w-[50%]">
                    <h1 className="text-[4rem] font-serif font-bold mb-6">Our Services</h1>
                    <h2 className="text-[2rem] font-serif font-bold mb-6">
                        "Money can be exchanged for goods and services." - Homer Simpson
                    </h2>
                </div>

                <div className="relative z-10 w-[40%]">
                    <img
                        src="/resources/services.png"
                        alt="Heading Illustration"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>

                <img
                    src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg"
                    alt="Our Services Background"
                    className="absolute top-0 left-0 w-full h-full brightness-75 object-cover"
                />
            </section>

            {serviceList.map((service, index) => (
                <ServiceSection
                    key={index}
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    textColor={index % 2 === 0 ? "text-logo-yellow" : "text-background-blue"}
                    reverse={index % 2 !== 0}
                />
            ))}

            <Footer />
        </div>
    );
}