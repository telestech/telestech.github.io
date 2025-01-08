import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useTheme } from "../Components/Theme/Theme";
import data from "../webresources/names.json";
import names from "../webresources/names.json";
import { useEffect } from "react";

export function Services() {
    const { isDarkMode } = useTheme();
    useEffect(() => {
        document.title = 'TelesTech - Our Services';
    }, []);

    const servicedata = Object.values(data.serviceList).slice(1);

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
                    <h2 className={`text-3xl sm:text-4xl font-serif font-bold mb-4 ${textColor}`}>
                        {title}
                    </h2>
                    <p className={`text-sm sm:text-lg leading-relaxed mb-6 ${isDarkMode ? "text-white" : "text-black"}`}>{description}</p>
                </div>
            </section>
        );
    };

    return (
        <div className={`min-h-screen ${isDarkMode ? "bg-[#121212]" : "bg-gray-100"}`}>
            <Navbar />
            <div className="h-20 bg-black"></div> {/* Padding for scrollbar */}

            <section className="relative h-[70vh] flex items-center justify-between">
                <div className="relative w-full h-[70vh]">
                    <img
                        className={`absolute w-full h-full ${isDarkMode ? "brightness-[0.25] saturate-0" : "brightness-75"} object-cover`}
                        src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg"
                        alt="About Us Background"
                    />
                    <div className={`absolute inset-0 flex flex-col justify-center items-center text-center ${isDarkMode ? "text-logoyellow" : "text-white"} px-6`}>
                        <h1 className="text-[2.5rem] md:text-[4rem] font-serif font-bold mb-4">
                            {names.services.title}
                        </h1>
                        <h2 className="w-[75%] text-[1.5rem] md:text-[2rem] font-serif mb-4">
                            {names.services.subtitle}
                        </h2>
                    </div>
                </div>
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
