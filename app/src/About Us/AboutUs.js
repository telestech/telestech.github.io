import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useEffect, useState } from "react";

export function AboutUs() {
    return (
        <div className="bg-white overflow-x-hidden">
            <Navbar />
            <AboutUsSection />
            <OurTeamSection />
            <Footer />
        </div>
    );
}

export function AboutUsSection() {
    const [inView, setInView] = useState(false);

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
        <div id="about" className="relative w-screen bg-gray-100">
            <div className="relative w-full h-[70vh]">
                <img
                    className="absolute w-full h-full brightness-75 object-cover"
                    src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg"
                    alt="About Us Background"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-10">
                    <h1 className="text-[4rem] font-serif font-bold mb-6">About Us</h1>
                    <h2 className="text-[2rem] font-serif font-bold mb-6">A trusted partner for taking your business to new heights!</h2>
                    <p className="text-lg max-w-[60%] leading-relaxed">
                        Teles Technological Services LLP is a dynamic technology company dedicated
                        to delivering innovative solutions that cater to the unique needs of
                        businesses across various industries.
                    </p>
                </div>
            </div>

            <div className="px-10 py-20 bg-white text-gray-800 text-center">
                <p
                    className={`text-lg leading-relaxed max-w-[70%] mx-auto mb-6 transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0 delay-0" : "opacity-0 translate-y-4" }`}
                >
                    Specializing in custom software development, website development, and app
                    development, Teles Tech excels in creating bespoke applications that are
                    scalable, robust, and seamlessly integrated with existing systems.
                    Our expertise extends to developing responsive, user-friendly websites,
                    including e-commerce platforms with secure payment gateways and content
                    management systems (CMS) for easy updates. In the realm of app
                    development, we create mobile, web, and desktop applications designed for
                    optimal performance and user engagement.
                </p>

                <p
                    className={`text-lg leading-relaxed max-w-[70%] mx-auto mb-6 transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-4" }`}
                >
                    Additionally, we are at the forefront of AI and machine learning,
                    developing custom algorithms that enhance decision-making, automate
                    processes, and provide actionable insights. Our dedicated support
                    personnel ensure that clients receive ongoing technical assistance,
                    troubleshooting, and optimization, reinforcing our commitment to client
                    satisfaction and operational success.
                </p>

                <p
                    className={`text-lg leading-relaxed max-w-[70%] mx-auto transition-all duration-1000 transform ${inView ? "opacity-100 translate-y-0 delay-1000" : "opacity-0 translate-y-4" }`}
                >
                    Furthermore, our offshore development team brings a wealth of expertise,
                    offering flexible scaling of resources, faster turnaround times, and
                    access to a diverse talent pool, enabling us to deliver high-quality
                    solutions at competitive costs. By leveraging technology to solve
                    business challenges, Teles Technological Services aims to empower
                    organizations to achieve their goals, drive innovation, and enhance their
                    operational efficiency.
                </p>
            </div>
        </div>
    );
}

function OurTeamSection() {
    const teamMembers = [
        { name: "Aaron", img: "/resources/13.png", summary: "TBF" },
        { name: "Ash", img: "/resources/17.png", summary: "TBF" },
        { name: "Vinit", img: "/resources/4.png", summary: `Vinit, one of the Partners of Teles Technological Services LLP, holds a Master in IT and a Master in IT Management from the University of Sydney. As a skilled data engineer and project manager, he brings a wealth of technical expertise and leadership to the firm. Outside of his professional pursuits, Vinit enjoys playing badminton, traveling, and indulging in photography.` },
    ];
    return (
        <div id="team" className="py-20 bg-gray-100">
            <h2 className="text-center text-[3rem] font-serif font-bold text-black mb-10">
                Leadership at Teles Tech
            </h2>
            <div className="flex flex-wrap justify-center gap-10 px-10">
                {teamMembers.map((member, index) => (
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
                                className="text-[1.5rem] font-bold text-black cursor-pointer transition-all duration-300 hover:text-indigo-600"
                            >
                                {member.name}
                            </p>
                            <div className="mt-4 bg-white text-black p-5 rounded-lg shadow-md max-w-sm opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 group-hover:shadow-xl group-hover:translate-y-2 transition-all duration-300">
                                <p className="text-[1rem]">{member.summary}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}