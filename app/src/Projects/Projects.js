import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export function Projects() {
    const projects = [
        { title: "pArt Android Application", image: null },
        { title: "Sama Says Android Application", image: null },
        { title: "Sama Says Website", image: null },
        { title: "Human Resource Management System", image: null },
        { title: "Customer Resource Management", image: null },
        { title: "Coming Soon", image: null },
    ];

    return (
        <div className="bg-background-blue min-h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-col justify-center items-center text-center h-[50vh] bg-gradient-to-r from-background-blue via-dark-yellow to-background-blue">
                <h1 className="text-[12vmin] text-white font-serif font-bold">
                    Our Projects
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-10 bg-gray-100 flex-grow">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative bg-white rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-3xl"
                    >
                        {project.image ? (
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-64 object-cover"
                            />
                        ) : (
                            <div className="w-full h-64 bg-gray-300"></div>
                        )}
                        <div className="p-6">
                            {project.title !== "Coming Soon" && (
                                <h3 className="text-3xl font-bold text-gray-800">
                                    {project.title}
                                </h3>
                            )}
                        </div>
                        {project.title === "Coming Soon" && (
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-4xl font-bold">
                                Coming Soon
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}