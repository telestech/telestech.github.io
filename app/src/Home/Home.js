import { useState } from "react";
import { SiOnlyfans, SiInstagram, SiX, SiLinkedin, SiGithub } from "react-icons/si";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const projectList = [
    ["Skibidi", "Nisi dolor fugiat cillum id eu labore ex esse quis esse in. Consequat magna aute est dolore cillum sunt."],
    ["Toilet", "Duis mollit in irure ea irure qui adipisicing eiusmod adipisicing. In sint incididunt nulla commodo in voluptate nostrud eiusmod ipsum qui laborum esse consequat labore."],
    ["Dop Dop", "Incididunt id ea consectetur ea eiusmod nulla dolore elit reprehenderit consequat duis veniam. Qui sint officia consectetur pariatur excepteur est ullamco consequat dolore irure."],
    ["Yes Yes", "Dolor exercitation occaecat velit tempor ea commodo enim do occaecat proident magna. Eu aliqua fugiat exercitation aliqua proident do aliquip velit."]
]

const serviceList = [
    "Software Development",
    "Web Development",
    "Application Production",
    "Data Analytics",
    "Technical Consulting",
    "Project Management"
]

export default function Home() {
    servicesSectionEffects();

    return (
        <div className="bg-white overflow-x-hidden">
            <Navbar />
            {TitleSection()}
            {ProjectsSection()}
            {ServicesSection()}
            {EnquirySection()}
            <Footer />
        </div>
    );
}

function servicesSectionEffects() {
    const serviceSummaries = document.getElementsByClassName("service-summary");
    Array.from(serviceSummaries).forEach(element => {
        element.addEventListener('mouseenter', function() {
            document.getElementById("services-title").style.opacity = 0;
        });    
    });

    Array.from(serviceSummaries).forEach(element => {
        element.addEventListener('mouseleave', function() {
            document.getElementById("services-title").style.opacity = 1;
        });    
    });
}

function TitleSection() {
    return (
        <div id="title" className="relative h-screen w-screen">
            <div className="absolute left-0 top-[5vh] w-1/2 h-screen
                            flex flex-col justify-center items-center gap-[3vh]">
                <p className="font-serif text-black text-[6vw]">TELES TECH</p>
                <p className="w-[80%] text-black text-[2vw] text-center">We build quality applications for businesses that scales like a dream</p>
                <div className="flex flex-row justify-center items-center gap-[1vw] pt-[2vh]">
                    <a href="#projects" className="rounded-full bg-logodarkyellow w-auto h-auto flex flex-row px-[2vw] py-[0.5vw]
                                    justify-center items-center text-[1.5vw] font-bold text-black duration-200 hover:bg-black hover:text-white">
                        Get Started
                    </a>
                    <a href="#enquiry" className="rounded-full bg-logoyellow w-auto h-auto flex flex-row px-[2vw] py-[0.5vw]
                                    justify-center items-center text-[1.5vw] font-bold text-black duration-200 hover:bg-black hover:text-white">
                        Contact Us
                    </a>
                </div>
                
            </div>

            <div className="absolute right-0 top-[5vh] w-1/2 h-screen">
                <div className="absolute w-full h-full flex justify-center items-center">
                    <img src="/resources/just_the_T[1].png" className="absolute w-full h-auto p-[20%]" alt="Company Logo" />
                </div>
                {/* <div className="absolute w-full h-full flex justify-center items-center">
                    <div className="absolute w-full h-full bg-gradient-to-tl from-white from-25% to-transparent"></div>
                </div> */}
            </div>
        </div>
    )
}

function ProjectsSection() {
    return (
        <div id="projects" className="relative h-screen w-screen">
            <div className="absolute w-screen h-1/2 top-0 left-0 border-white border-[2vw] border-r-[3vw]
                            flex flex-col text-center justify-center items-center gap-[5%]">
                <img className="absolute w-full h-full brightness-75"
                     src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg" alt="background" />
                <p className="w-[80%] text-[8vmin] text-white z-10 font-serif font-bold">Our Projects</p>
                <p className="w-[60%] text-[3vmin] text-white z-10">
                    Ea voluptate id dolore non exercitation voluptate irure pariatur cillum.
                    Deserunt ut Lorem ad sunt duis Lorem consequat proident.
                    Elit cillum pariatur consequat quis aliqua sint proident occaecat nostrud sunt.
                </p>
            </div>

            <div className="absolute inline-flex style-scrollbar gap-[2vw] overflow-x-auto overflow-y-hidden
                            w-3/4 h-1/2 bottom-0 left-0 border-white border-[2vw] pb-4">
                {projectList.map((value, idx) => ProjectSummary(value[0], value[1]))}
            </div>

            <a href="/projects" className="absolute w-1/4 h-1/6 bottom-0 right-0 border-[2vw] border-r-[3vw] border-white text-black text-[3vmin]
                                 bg-logoyellow flex justify-center items-center italic font-bold duration-200 hover:bg-black hover:text-white">
                See all projects →
            </a>
        </div>
    );
}

function ProjectSummary(projectName, projectDesc) {
    return (
        <div key={projectName} className="relative flex-none w-[45%] h-full group overflow-hidden">
            <img className="w-full h-full brightness-[0.25] duration-200 group-hover:scale-150" src="/resources/240_F_311597945_LuOQuFfk5wGWP4r9eUMpSmBdYES58lsK.jpg" alt="Software Development" />
            <p className="absolute top-[2vmin] left-[2vmin] text-white text-[5vmin] font-bold">{projectName}</p>
            <p className="absolute w-[80%] top-[10vmin] left-[2vmin] text-white text-[2.5vmin]">
                {projectDesc}
            </p>
            <a href="/" className="absolute bottom-[2vmin] right-[2vmin] text-white text-[3vmin]
                                   italic underline underline-offset-4 duration-200 hover:text-logoyellow">See More →</a>
        </div>
    );
}

function ServicesSection() {
    return (
        <div id="services" className="relative h-screen w-screen overflow-hidden">
            <div id="services-title" className="absolute left-0 top-0 w-full h-[40%] flex flex-col justify-center items-center text-center duration-200">
                <p className="text-[8vmin] text-logodarkyellow z-10 font-serif font-bold">Our Services</p>
                <p className="w-[80%] text-[3vmin] text-logodarkyellow z-10">
                    Esse occaecat in qui culpa Lorem sit culpa anim qui minim. Occaecat irure cupidatat aute dolor. Anim officia enim mollit laboris consequat.
                </p>
            </div>
            <div className="absolute bottom-[-30vh] left-[15%] w-[70%] h-[60%] flex justify-center items-center">
                {serviceList.map((service, idx) => ServiceSummary(service))}
            </div>
        </div>
    );
}

function ServiceSummary(serviceName) {
    return (
        <a key={serviceName} href="/" className="service-summary flex-none w-[50vmin] h-[60vh] m-[-15vmin] duration-300 hover:translate-y-[-25vh]
                        flex justify-center items-center z-10 group">
            <div className="relative w-full aspect-[4/3] -rotate-[26deg] border-[1.5vmin] border-black bg-white
                            cursor-pointer duration-200 mb-[70vh] group-hover:bg-black">
                <p className="absolute top-[2vmin] left-[2vmin] text-[3vmin] text-black duration-200 group-hover:text-white">{serviceName}</p>
                <img className="absolute bottom-[2vmin] left-[2vmin] w-[calc(100%-4vmin)] h-[calc(100%-12vmin)]" src="/resources/240_F_456986840_BbHQK0bynMEDxMDJP0L3fkCMqnfmJ283.jpg" alt="Development" />
                <p className="absolute top-[1vmin] right-[2vmin] text-[4vmin] text-black duration-200 group-hover:text-white">→</p>
            </div>  
        </a>
    );
}

function EnquirySection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${name} ${email} ${message}`)
    }

    return (
        <div id="enquiry" className="relative h-screen w-screen overflow-hidden">
            <div className="absolute left-[4vmin] top-0 w-[45%] h-full flex flex-col justify-center items-center gap-[2vmin]">
                <p className="text-[8vmin] text-logodarkyellow font-serif font-bold">Message Us</p>
                <form id="enquiry-form" action="/" className="w-full h-auto flex flex-col justify-center items-start text-center gap-[2vh]"
                      onSubmit={handleSubmit}>
                    <label htmlFor="name" className="text-black text-[3vmin]">My name is:</label>
                    <input id="name" name="name" type="text" placeholder="..." maxLength={128} rows={1}
                           className="w-[90%] border-[2px] border-enquirygray p-[1vmin] rounded-lg text-black text-[3vmin]
                                     focus:border-logodarkyellow focus:outline-none focus:ring-0"
                           value={name}
                           onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email" className="text-black text-[3vmin]">My email is:</label>
                    <input id="email" name="email" type="text" placeholder="..." maxLength={128} rows={1}
                           className="w-[90%] border-[2px] border-enquirygray p-[1vmin] rounded-lg text-black text-[3vmin]
                           focus:border-logodarkyellow focus:outline-none focus:ring-0"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="message" className="text-black text-[3vmin]">Let's talk about:</label>
                    <textarea id="message" name="message" placeholder="..." maxLength={512} rows={5}
                           className="w-[90%] h-auto border-[2px] border-enquirygray p-[1vmin] rounded-lg text-black text-[3vmin]
                           focus:border-logodarkyellow focus:outline-none focus:ring-0 text-start resize-none"
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}></textarea>
                    <input className="border-[2px] border-enquirygray rounded-md px-[2vmin] py-[1vmin] cursor-pointer duration-200 text-black text-[3vmin]
                                     hover:border-logodarkyellow hover:bg-logodarkyellow hover:text-white" id="submit" name="submit" type="submit" value="Submit"></input>
                </form>
            </div>
            <div className="absolute bottom-0 right-[4vmin] w-[45%] h-full flex flex-col justify-center items-center gap-[1vh] border-transparent border-y-[4vmin]">
                <img className="absolute top-0 left-0 w-full h-full brightness-75" src="/resources/240_F_723820135_tcfTiQlaVjadRhGdI5XlLdvOmUeZmwmY.jpg" alt="Background" />
                <p className="text-[8vmin] text-white font-serif font-bold z-10">Contact Us</p>
                <img className="w-auto h-[50%] z-10" src="/resources/WHITE_LOGO_WITHOUT_TAGLINE[1].png" alt='Company Logo' />
                <p className="text-[3vmin] text-white z-10">Mobile: +611 2345 67 89</p>
                <p className="text-[3vmin] text-white z-10">Email: vinit@telestech.com</p>
                <div className="w-auto h-[5vmin] grid grid-cols-5 gap-x-[2vmin] z-10 p-[1vmin]
                                *:text-[4vmin] *:text-white">
                    <a href="/">
                        <SiInstagram />
                    </a>
                    <a href="/">
                        <SiGithub />
                    </a>
                    <a href="/">
                        <SiX />
                    </a>
                    <a href="/">
                        <SiLinkedin />
                    </a>
                    <a href="/">
                        <SiOnlyfans />
                    </a>
                </div>
            </div>
        </div>
    );
}