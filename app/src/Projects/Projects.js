import React, { useEffect, useState } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useTheme } from "../Components/Theme/Theme";
import names from "../webresources/names.json";

export function Projects() {
    const { isDarkMode } = useTheme();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        document.title = 'TelesTech - Our Projects';
    }, []);

    useEffect(() => {
        setProjects(names.projectList || []);
    }, []);

    return (
        <div className={`${isDarkMode ? "bg-[#121212] text-white" : "bg-background-blue text-white"} min-h-screen flex flex-col`}>
            <Navbar />
            <div className="h-20 bg-black"></div> {/* Padding for scrollbar */}
            
            <div className="relative w-full h-[70vh]">
                <img
                    className={`absolute w-full h-full ${isDarkMode ? "brightness-[0.25] saturate-0" : "brightness-75"} object-cover`}
                    src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg"
                    alt="About Us Background"
                />
                <div className={`absolute inset-0 flex flex-col justify-center items-center text-center ${isDarkMode ? "text-logoyellow" : "text-white"} px-6`}>
                    <h1 className="text-[2.5rem] md:text-[4rem] font-serif font-bold mb-4">
                        {names.projects.title}
                    </h1>
                    <h2 className="w-[75%] text-[1.5rem] md:text-[2rem] font-serif mb-4">
                        {names.projects.subtitle}
                    </h2>
                </div>
            </div>
            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-10 flex-grow ${isDarkMode ? "bg-[#1E1E1E]" : "bg-gray-100"}`}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`relative rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-3xl ${isDarkMode ? "bg-[#2C2C2C]" : "bg-white"}`}
                    >
                        {project.img ? (
                            <img
                                src={project.img}
                                alt={project.name}
                                className="w-full h-64 object-contain"
                            />
                        ) : (
                            <div className={`${isDarkMode ? "bg-[#3A3A3A]" : "bg-gray-300"} w-full h-64`}></div>
                        )}
                        <div className="p-6">
                            <h3 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                                {project.name}
                            </h3>
                            <p className={`text-sm mt-2 ${isDarkMode ? "text-white" : "text-gray-500"}`}>
                                {project.desc}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
