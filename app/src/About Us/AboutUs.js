import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";
import { useTheme } from "../Components/Theme/Theme";
import data from "../webresources/names.json";

export function AboutUs() {
    return (
        <div className="bg-white overflow-x-hidden">
            <Navbar />
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
                    className="absolute w-full h-full brightness-75 object-cover"
                    src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg"
                    alt="About Us Background"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-10">
                    <h1 className="text-[4rem] font-serif font-bold mb-6">{aboutUsData.title}</h1>
                    <h2 className="text-[2rem] font-serif font-bold mb-6">{aboutUsData.subtitle}</h2>
                    <p className="text-lg max-w-[60%] leading-relaxed">
                        {aboutUsData.para1}
                    </p>
                </div>
            </div>

            <div className={`px-10 py-20 ${isDarkMode ? "bg-[#2C2C2C] text-white" : "bg-white text-gray-800"} text-center`}>
                <p
                    className={`text-lg leading-relaxed max-w-[70%] mx-auto mb-6 transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0 delay-0" : "opacity-0 translate-y-4"}`}
                >
                    {aboutUsData.para2}
                </p>

                <p
                    className={`text-lg leading-relaxed max-w-[70%] mx-auto mb-6 transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4"}`}
                >
                    {aboutUsData.para3}
                </p>

                <p
                    className={`text-lg leading-relaxed max-w-[70%] mx-auto transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0 delay-1000" : "opacity-0 translate-y-4"}`}
                >
                    {aboutUsData.para4}
                </p>
            </div>
        </div>
    );
}

function OurTeamSection({ leadersList }) {
    const { isDarkMode } = useTheme();
    return (
        <div id="team" className={`py-20 ${isDarkMode ? "bg-[#1E1E1E]" : "bg-gray-100"}`}>
            <h2 className={`text-center text-[3rem] font-serif font-bold mb-10 ${isDarkMode ? "text-white" : "text-black"}`}>
                Leadership at Teles Tech
            </h2>
            <div className="flex flex-wrap justify-center gap-10 px-10">
                {leadersList.map((member, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center text-center space-y-4"
                        style={{ flex: "1 0 30%", minWidth: "250px" }}
                    >
                        <img
                            src={member.img}
                            alt={`${member.name}`}
                            className="w-[200px] h-[200px] rounded-full shadow-md mb-5 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="relative">
                            <p
                                className={`text-[1.5rem] font-bold cursor-pointer transition-all duration-300 hover:text-background-blue ${isDarkMode ? "text-white" : "text-black"}`}
                            >
                                {member.name}
                            </p>
                            <div className={`mt-4 p-5 rounded-lg shadow-md max-w-sm opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 group-hover:shadow-xl group-hover:translate-y-2 transition-all duration-300 ${isDarkMode ? "bg-[#2C2C2C] text-white" : "bg-white text-black"}`}>
                                <p className="text-[1rem]">{member.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
