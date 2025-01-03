import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useTheme } from "../Components/Theme/Theme";
import data from "../webresources/names.json";

export function Services() {
    const { isDarkMode } = useTheme();

    const servicedata = Object.values(data.serviceList);

    const ServiceSection = ({ title, description, image, textColor, reverse }) => {
        return (
            <section
                className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center justify-between w-[90%] mx-auto my-10 p-5 rounded-lg shadow-md ${isDarkMode ? "bg-[#2C2C2C]" : "bg-white"} hover:scale-105 transform transition duration-300`}
            >
                <div className="w-full md:w-1/2 flex justify-center mb-5 md:mb-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-[60%] h-auto rounded-lg transform rotate-3 shadow-lg"
                    />
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className={`text-4xl font-serif font-bold mb-4 ${textColor}`}>
                        {title}
                    </h2>
                    <p className={`text-2lg leading-relaxed mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>{description}</p>
                </div>
            </section>
        );
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-[#121212]" : "bg-gray-100"}`}>
            <Navbar />
            <div className="h-20"></div> {/* Padding for scrollbar */}

            <section className="relative h-[70vh] flex items-center justify-between px-10">
                <div className="relative z-10 text-left text-white max-w-[50%]">
                    <h1 className="text-[4rem] font-serif font-bold mb-6">Our Services</h1>
                    <h2 className="text-[2rem] font-serif font-bold mb-6">
                        Tailored tech solutions to empower your business and drive innovation.
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

            {servicedata.map((service, index) => (
                <ServiceSection
                    key={index}
                    title={service.name}
                    description={service.longDesc}
                    image={service.img}
                    textColor={index % 2 === 0 ? "text-logoyellow" : "text-background-blue"}
                    reverse={index % 2 !== 0}
                />
            ))}

            <Footer />
        </div>
    );
}
