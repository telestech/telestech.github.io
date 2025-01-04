import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import { useTheme } from "../Components/Theme/Theme";
import data from "../webresources/names.json";
import { useMediaQuery } from 'react-responsive';

export function AboutUs() {
    return (
        <div className="bg-white overflow-x-hidden">
            <Navbar />
            <div className="h-20 bg-black"></div> {/* Padding for navbar */}
            <AboutUsSection aboutUsData={data.aboutUs} />
            <OurTeamSection leadersList={data.leadersList} />
            <Footer />
        </div>
    );
}

export function AboutUsSection({ aboutUsData }) {
    const [inView, setInView] = useState(false);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("about");
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight) {
                setInView(true);
            } else {
                setInView(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="about" className={`relative w-screen ${isDarkMode ? "bg-[#1E1E1E]" : "bg-gray-100"}`}>
            <div className="relative w-full h-[70vh]">
                <img
                    className={`absolute w-full h-full ${isDarkMode ? "brightness-[0.25] saturate-0" : "brightness-75"} object-cover`}
                    src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg"
                    alt="About Us Background"
                />
                <div className={`absolute inset-0 flex flex-col justify-center items-center text-center ${isDarkMode ? "text-logoyellow" : "text-white"} px-6`}>
                    <h1 className="text-[2.5rem] md:text-[4rem] font-serif font-bold mb-4">
                        {aboutUsData.title}
                    </h1>
                    <h2 className="text-[1.5rem] md:text-[2rem] font-serif font-bold mb-4">
                        {aboutUsData.subtitle}
                    </h2>
                    <p className="text-sm md:text-lg max-w-[80%] md:max-w-[60%] leading-relaxed">
                        {aboutUsData.para1}
                    </p>
                </div>
            </div>

            <div
                className={`px-6 py-16 ${isDarkMode ? "bg-[#2C2C2C] text-white" : "bg-white text-gray-800"} text-center`}
            >
                {["para2", "para3", "para4"].map((key, index) => (
                    <p
                        key={key}
                        className={`text-sm md:text-lg leading-relaxed max-w-[90%] md:max-w-[70%] mx-auto mb-6 transition-all duration-1000 transform ${
                            inView ? `opacity-100 translate-y-0 delay-${index * 500}` : "opacity-0 translate-y-4"
                        }`}
                    >
                        {aboutUsData[key]}
                    </p>
                ))}
            </div>
        </div>
    );
}

function OurTeamSection({ leadersList }) {
    const { isDarkMode } = useTheme();
    
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <div id="team" className={`py-20 ${isDarkMode ? "bg-[#1E1E1E]" : "bg-gray-100"}`}>
            <h2
                className={`text-center text-[2rem] md:text-[3rem] font-serif font-bold mb-10 ${
                    isDarkMode ? "text-white" : "text-black"
                }`}
            >
                Leadership at Teles Tech
            </h2>
            <div className="flex flex-wrap justify-center gap-10 px-6">
                {leadersList.map((member, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center text-center space-y-4"
                        style={{ flex: "1 0 30%", minWidth: "200px" }}
                    >
                        <img
                            src={member.img}
                            alt={`${member.name}`}
                            className="w-[150px] md:w-[200px] h-[150px] md:h-[200px] rounded-full shadow-md mb-4 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="relative">
                            <p
                                className={`text-[1.25rem] md:text-[1.5rem] font-bold cursor-pointer transition-all duration-300 hover:text-background-blue ${
                                    isDarkMode ? "text-white" : "text-black"
                                }`}
                            >
                                {member.name}
                            </p>

                            <div
                                className={`mt-4 p-5 rounded-lg shadow-md max-w-sm transition-all duration-300 ${
                                    isDarkMode ? "bg-[#2C2C2C] text-white" : "bg-white text-black"
                                } 
                                ${isMobile ? "opacity-100 scale-100 translate-y-0" : "opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 group-hover:shadow-xl group-hover:translate-y-2"}`}
                            >
                                <p className="text-sm md:text-[1rem]">{member.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
