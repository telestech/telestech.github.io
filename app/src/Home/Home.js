import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import MediaQuery from 'react-responsive'
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useTheme } from "../Components/Theme/Theme";
import names from "../webresources/names.json";
import { EnquirySection } from "../Components/Enquiry/Enquiry";

export default function Home() {
    const [width, setWidth] = useState(window.innerWidth);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [width]);

    useEffect(() => {
        width >= 1000 && servicesSectionEffects();
    });

    useEffect(() => {
        emailInit();
    }, []);

    return (
        <div className={`overflow-x-hidden bg-gradient-to-r ${ isDarkMode ? "from-logodarkyellow to-black" : "from-white to-logoyellow" }`}>
            <Navbar />
            <div className="h-20 bg-black"></div> {/* Padding for scrollbar */}
            <TitleSection />
            <AboutUsSection />
            <WhyUsSection />
            <ServicesSection />
            <ProjectsSection />
            <EnquirySection />
            <Footer />
        </div>
    );
}

function emailInit() {
    emailjs.init({
        publicKey: 'lVvv1aogyTOl-q7no',
        // Do not allow headless browsers
        blockHeadless: true,
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
    });
}

function servicesSectionEffects() {
    const serviceSummaries = document.getElementsByClassName("service-summary");
    Array.from(serviceSummaries).forEach(element => {
        element.addEventListener('mouseenter', function() {
            document.getElementById("services-title").style.opacity = 0;
            document.querySelector(`p.slogan[slogan="${element.getAttribute("slogan")}"]`).style.opacity = 1;
        });
    });

    Array.from(serviceSummaries).forEach(element => {
        element.addEventListener('mouseleave', function() {
            document.getElementById("services-title").style.opacity = 1;
            document.querySelector(`p.slogan[slogan="${element.getAttribute("slogan")}"]`).style.opacity = 0;
        });
    });
}

function TitleSection() {
    const { isDarkMode } = useTheme();

    return (
        <div id="title" className="relative h-screen w-full flex flex-col lg:flex-row justify-center items-center">
            <div className="relative w-full h-full z-10
                            flex flex-col justify-center items-center gap-[3vh]">
                <p className={`font-serif font-bold ${isDarkMode ? "text-white" : "text-logodarkyellow"} text-[12vmin] text-center`}>Teles Technological Services</p>
                <p className={`w-[80%] ${isDarkMode ? "text-white" : "text-logodarkyellow"} text-[4vmin] text-center`}>{names.home.title.desc}</p>
                <div className="flex flex-row justify-center items-center gap-[2vmin] pt-[2vmin]">
                    <a href="#about-us" className="rounded-full bg-logodarkyellow w-auto h-auto flex flex-row px-[4vmin] py-[1vmin]
                                    justify-center items-center text-[3vmin] font-bold text-black duration-200 hover:bg-black hover:text-white">
                        Get Started
                    </a>
                    <a href="#enquiry" className="rounded-full bg-logoyellow w-auto h-auto flex flex-row px-[4vmin] py-[1vmin]
                                    justify-center items-center text-[3vmin] font-bold text-black duration-200 hover:bg-black hover:text-white">
                        Contact Us
                    </a>
                </div>
            </div>

            <div className="absolute w-full h-full flex justify-center items-center">
                <div className="gradient "></div>
                <img src="/resources/just_the_T[1].png" className="absolute w-auto h-[70%] opacity-25" alt="Company Logo" />
            </div>
        </div>
    )
}

function AboutUsSection() {
    const { isDarkMode } = useTheme();

    return (
        <div id="about-us" className="relative h-screen w-full overflow-hidden grid grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 border-[4vmin] border-transparent">
            <img className={`w-full h-full object-cover object-right-top brightness-50 duration-200 lg:hover:brightness-100 p-2 border-4 ${ isDarkMode ? "border-logoyellow" : "border-logodarkyellow"}`}
                src="/resources/240_F_550456541_mMBkyPx1G6XtqPYrT8mG12O8Uz5XBTCZ.jpg" alt="Software Development" />
            <div className="flex flex-col justify-center items-center text-center gap-[2vmin] lg:p-[5vmin]">
                <p className={`text-[3.5vmin] lg:text-[4vmin] ${ isDarkMode ? "text-white" : "text-black"} font-serif font-bold`}>
                    {names.home.aboutUs.div1.title}
                </p>
                <p className={`text-[3vmin] lg:text-[3vmin] ${ isDarkMode ? "text-white" : "text-black"}`}>
                    {names.home.aboutUs.div1.desc}
                </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-[2vmin] lg:p-[5vmin]">
                <p className={`text-[3.5vmin] lg:text-[4vmin] ${ isDarkMode ? "text-white" : "text-black"} font-serif font-bold`}>
                    {names.home.aboutUs.div2.title}
                </p>
                <p className={`text-[3vmin] lg:text-[3vmin] ${ isDarkMode ? "text-white" : "text-black"}`}>
                    {names.home.aboutUs.div2.desc}
                </p>
            </div>
            <img className={`w-full h-full object-cover object-right-top brightness-50 duration-200 lg:hover:brightness-100 p-2 border-4 ${ isDarkMode ? "border-logoyellow" : "border-logodarkyellow"}`}
                src="/resources/240_F_340591403_1a5sd1hXg78FIq4n6oeoXZtHP9Mjucsm.jpg" alt="Software Development" />
        </div>
    );
}

function WhyUsSection() {
    const { isDarkMode } = useTheme();

    return (
        <div id="why-us" className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center">
            <div className={`relative w-full h-[50%] border-[4vmin] border-transparent
                            flex flex-col justify-center items-center gap-[5%] ${isDarkMode ? "text-logoyellow" : "text-white"}`}>
                <img className={`absolute w-full h-full top-0 left-0 ${isDarkMode ? "brightness-[0.25] saturate-0" : "brightness-75"}`}
                     src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg" alt="background" />
                <p className="text-[5vmin] font-serif font-bold z-10">
                    {names.home.whyUs.title}
                </p>
                <p className="text-[3vmin] z-10">
                    {names.home.whyUs.desc}
                </p>
            </div>
            <div className="relative h-[50%] w-full flex flex-row justify-between items-center border-[4vmin] border-t-0 border-transparent divide-x-2 divide-footergray
                            [&>div]:h-full [&>div]:w-[25%] [&>div]:flex [&>div]:flex-col [&>div]:justify-between [&>div]:items-center [&>div]:z-10
                            [&>div]:text-white [&>div]:text-[3vmin] px-[1.5vmin] py-[3vmin]">
                <img className="absolute w-full h-full top-0 left-0 brightness-75" alt="background" src="/resources/240_F_1001484691_7eVbQvSmX7xBzzkHJ0rZCTkw2Rv6fUrP.jpg" />
                <div className="items-start border-none">
                    <p className="opacity-0">Empty</p>
                    {names.home.whyUs.table.col.map((val) => {
                        return (
                            <p key={val}>{val}</p>
                        );
                    })}
                </div>
                <div>
                    <p className="font-serif font-bold">{names.home.whyUs.table.row[0]}</p>
                    <p>✔</p>
                    <p>✔</p>
                    <p className="opacity-0">✔</p>
                    <p className="opacity-0">✔</p>
                    <p className="opacity-0">✔</p>
                    <p>✔</p>
                </div>
                <div>
                    <p className="font-serif font-bold">{names.home.whyUs.table.row[1]}</p>
                    <p className="opacity-0">✔</p>
                    <p className="opacity-0">✔</p>
                    <p>✔</p>
                    <p className="opacity-0">✔</p>
                    <p>✔</p>
                    <p className="opacity-0">✔</p>
                </div>
                <div className="relative border-l-2 *:text-logoyellow">
                    <div className="absolute w-full h-full -z-10"></div>
                    <p className="font-serif font-bold">{names.home.whyUs.table.row[2]}</p>
                    <p>✔</p>
                    <p>✔</p>
                    <p>✔</p>
                    <p>✔</p>
                    <p>✔</p>
                    <p>✔</p>
                </div>
            </div>

            <a href="#enquiry" className="px-[4vmin] py-[2vmin] text-black text-[3vmin]
                                        bg-logoyellow flex justify-center items-center italic font-bold duration-200 lg:hover:bg-black lg:hover:text-white">
                Request a proposal
            </a>
        </div>
    );
}

function ProjectsSection() {
    const { isDarkMode } = useTheme();

    return (
        <div id="projects" className="relative h-screen w-full">
            <div className={`absolute w-full h-1/2 top-0 left-0 border-transparent border-[4vmin]
                            flex flex-col text-center justify-center items-center gap-[5%] ${isDarkMode ? "text-logoyellow" : "text-white"}`}>
                <img className={`absolute w-full h-full ${isDarkMode ? "brightness-[0.25] saturate-0" : "brightness-75"}`}
                     src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg" alt="background" />
                <p className="w-[80%] text-[8vmin] z-10 font-serif font-bold">
                    {names.home.ourProjects.title}
                </p>
                <p className="w-[60%] text-[3vmin] z-10">
                    {names.home.ourProjects.subtitle}
                </p>
            </div>
            <div className="absolute w-full h-1/2 bottom-0 left-0 flex flex-col lg:flex-row justify-center items-center">
                <div className="relative inline-flex style-scrollbar border-x-[4vmin] gap-[2vw] overflow-x-auto overflow-y-hidden
                                w-full h-full bottom-0 left-0 border-transparent border-[2vw] pb-4">
                    {names.projectList.map((value) => ProjectSummary(value.name, value.desc))}
                </div>

                <div className="relative h-[20%] lg:h-full w-full lg:w-[30%] border-[2vw] border-transparent">
                    <a href="/projects" className="absolute w-full h-full lg:h-auto bottom-0 right-0 py-[2vmin] text-white text-[3vmin]
                                        bg-logodarkyellow flex justify-center items-center italic font-bold duration-200 lg:hover:bg-black lg:hover:text-white">
                        See all projects →
                    </a>
                </div>
            </div>
        </div>
    );
}

function ProjectSummary(projectName, projectDesc) {
    return (
        <div key={projectName} className="relative flex-none w-[45%] h-full lg:group overflow-hidden">
            <img className="w-full h-full brightness-[0.25] duration-200 lg:group-hover:scale-150" src="/resources/240_F_311597945_LuOQuFfk5wGWP4r9eUMpSmBdYES58lsK.jpg" alt="Software Development" />
            <p className="absolute top-[2vmin] left-[2vmin] text-white text-[3vmin] lg:text-[4vmin] font-bold">{projectName}</p>
            <p className="absolute w-[80%] top-[10vmin] left-[2vmin] text-white text-[2vmin] opacity-80 lg:hover:opacity-100 lg:duration-200">
                {projectDesc}
            </p>
            <a href="/projects" className="absolute bottom-[2vmin] right-[2vmin] text-white text-[3vmin]
                                   italic underline underline-offset-4 duration-200 lg:hover:text-logoyellow">See More →</a>
        </div>
    );
}

function ServicesSection() {
    const { isDarkMode } = useTheme();
    
    return (
        <div>
            <MediaQuery minWidth={1000}>
                <div id="services" className="relative h-screen w-full overflow-hidden">
                    <div id="services-title" className="absolute left-0 top-0 w-full h-[40%] flex flex-col justify-center items-center text-center transition-opacity duration-200">
                        <p className={`text-[8vmin] ${ isDarkMode ? "text-white" : "text-black" } z-10 font-serif font-bold`}>Our Services</p>
                        <p className={`w-[80%] text-[3vmin] ${ isDarkMode ? "text-white" : "text-black" } z-10`}>
                            {names.home.ourServices.desc}
                        </p>
                    </div>
                    <div className="absolute bottom-[-30%] left-[15%] w-[70%] h-[60%] flex flex-row justify-center items-center">
                        {names.serviceList.names.map((service) => ServiceSummaryPC(names.serviceList[service]))}
                    </div>
                    <div className={`absolute top-[5rem] left-[5%] w-[90%] h-[30%]
                                    *:absolute *:top-0 *:${ isDarkMode ? "text-white" : "text-black" } *:text-[3.5vmin] *:opacity-0 *:duration-200`}>
                        <p slogan="Software Development" className="slogan right-0 w-[65%] text-right">
                            {names.serviceList.softwareDevelopment.shortDesc}
                        </p>
                        <p slogan="Web Development" className="slogan right-0 w-[55%] text-right">
                            {names.serviceList.webDevelopement.shortDesc}
                        </p>
                        <p slogan="Application Production" className="slogan right-0 w-[40%] text-right">
                            {names.serviceList.applicationProduction.shortDesc}
                        </p>
                        <p slogan="Data Analytics" className="slogan left-0 w-[40%] text-left">
                            {names.serviceList.dataAnalytics.shortDesc}
                        </p>
                        <p slogan="Technical Consulting" className="slogan left-0 w-[55%] text-left">
                            {names.serviceList.technicalConsulting.shortDesc}
                        </p>
                        <p slogan="Project Management" className="slogan left-0 w-[65%] text-left">
                            {names.serviceList.projectManagement.shortDesc}
                        </p>
                    </div>
                </div>
            </MediaQuery>
        </div>
    );
}

function ServiceSummaryPC(service) {
    return (
        <a key={service.name} slogan={service.name} href="/" className="service-summary flex-none w-[50vmin] h-[60%] m-[-15vmin] duration-300 hover:translate-y-[-25vh]
                        flex justify-center items-center z-10 group">
            <div className="relative w-full aspect-[4/3] -rotate-[26deg] border-[1.5vmin] border-black bg-white
                            cursor-pointer duration-200 mb-[70vh] group-hover:bg-black">
                <p className="absolute top-[2vmin] left-[2vmin] text-[3vmin] text-black duration-200 group-hover:text-white">{service.name}</p>
                <div className="absolute bottom-[2vmin] left-[2vmin] w-[calc(100%-4vmin)] h-[calc(100%-12vmin)]">
                    <img className="w-full h-full object-cover object-top" src={service.img} alt="Development" />
                </div>
                <p className="absolute top-[1vmin] right-[2vmin] text-[4vmin] text-black duration-200 group-hover:text-white">→</p>
            </div>  
        </a>
    );
}