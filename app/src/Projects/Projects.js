// import Navbar from "../Components/Navbar/Navbar";
// import Footer from "../Components/Footer/Footer";
// import { useTheme } from "../Components/Theme/Theme";

// export function Projects() {
//     const { isDarkMode } = useTheme();

//     const projects = [
//         { title: "pArt Android Application", image: null },
//         { title: "Sama Says Android Application", image: null },
//         { title: "Sama Says Website", image: null },
//         { title: "Human Resource Management System", image: null },
//         { title: "Customer Resource Management", image: null },
//         { title: "Coming Soon", image: null },
//     ];

//     return (
//         <div className={`${isDarkMode ? "bg-[#121212] text-white" : "bg-background-blue text-white"} min-h-screen flex flex-col`}>
//             <Navbar />
//             <div className={`flex flex-col justify-center items-center text-center h-[50vh] ${isDarkMode ? "bg-gradient-to-r from-[#1E1E1E] via-dark-yellow to-[#1E1E1E]" : "bg-gradient-to-r from-background-blue via-dark-yellow to-background-blue"}`}>
//                 <h1 className="text-[12vmin] font-serif font-bold">Our Projects</h1>
//             </div>
//             <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-10 flex-grow ${isDarkMode ? "bg-[#1E1E1E]" : "bg-gray-100"}`}>
//                 {projects.map((project, index) => (
//                     <div
//                         key={index}
//                         className={`relative rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-3xl ${isDarkMode ? "bg-[#2C2C2C]" : "bg-white"}`}
//                     >
//                         {project.image ? (
//                             <img
//                                 src={project.image}
//                                 alt={project.title}
//                                 className="w-full h-64 object-cover"
//                             />
//                         ) : (
//                             <div className={`${isDarkMode ? "bg-[#3A3A3A]" : "bg-gray-300"} w-full h-64`}></div>
//                         )}
//                         <div className="p-6">
//                             {project.title !== "Coming Soon" && (
//                                 <h3 className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
//                                     {project.title}
//                                 </h3>
//                             )}
//                         </div>
//                         {project.title === "Coming Soon" && (
//                             <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-4xl font-bold">
//                                 Coming Soon
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <Footer />
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useTheme } from "../Components/Theme/Theme";
import data from "../webresources/names.json";

export function Projects() {
    const { isDarkMode } = useTheme();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data.projectList || []);
    }, []);

    return (
        <div className={`${isDarkMode ? "bg-[#121212] text-white" : "bg-background-blue text-white"} min-h-screen flex flex-col`}>
            <Navbar />
            <div className={`flex flex-col justify-center items-center text-center h-[50vh] ${isDarkMode ? "bg-gradient-to-r from-[#1E1E1E] via-dark-yellow to-[#1E1E1E]" : "bg-gradient-to-r from-background-blue via-dark-yellow to-background-blue"}`}>
                <h1 className="text-[12vmin] font-serif font-bold">Our Projects</h1>
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
                                className="w-full h-64 object-cover"
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
