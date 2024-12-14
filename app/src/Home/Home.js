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

const logoYellow = '#debc6b';
const darkYellow = '#977f48';

export default function Home() {
    return (
        <div className="bg-white overflow-x-hidden">
            <Navbar />
            {titleSection()}
            {projectsSection()}
            {servicesSection()}
            {enquirySection()}
            <Footer />
        </div>
    );
}

function titleSection() {
    return (
        <div id="title" className="relative h-screen w-screen">
            <div className="absolute left-0 top-[5vh] w-1/2 h-screen
                            flex flex-col justify-center items-center gap-[3vh]">
                <p className="font-serif text-black text-[6vw]">TELES TECH</p>
                <p className="w-[80%] text-black text-[2vw] text-center">We build quality applications for businesses that scales like a dream</p>
                <div className="flex flex-row justify-center items-center gap-[1vw] pt-[2vh]">
                    <a href="#projects" className={`rounded-full bg-[${darkYellow}] w-auto h-auto flex flex-row px-[2vw] py-[0.5vw]
                                    justify-center items-center text-[1.5vw] font-bold text-black duration-200 hover:bg-black hover:text-white`}>
                        Get Started
                    </a>
                    <a href="#enquiry" className={`rounded-full bg-[${logoYellow}] w-auto h-auto flex flex-row px-[2vw] py-[0.5vw]
                                    justify-center items-center text-[1.5vw] font-bold text-black duration-200 hover:bg-black hover:text-white`}>
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

function projectsSection() {
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
                {projectList.map((value, idx) => placeProjectSummary(value[0], value[1]))}
            </div>

            <a href="/projects" className={`absolute w-1/4 h-1/6 bottom-0 right-0 border-[2vw] border-r-[3vw] border-white text-black text-[3vmin]
                                 bg-[${logoYellow}] flex justify-center items-center italic font-bold duration-200 hover:bg-black hover:text-white`}>
                See all projects →
            </a>
        </div>
    );
}

function placeProjectSummary(projectName, projectDesc) {
    return (
        <div className="relative flex-none w-[45%] h-full group overflow-hidden">
            <img className="w-full h-full brightness-[0.25] duration-200 group-hover:scale-150" src="/resources/240_F_311597945_LuOQuFfk5wGWP4r9eUMpSmBdYES58lsK.jpg" alt="Software Development" />
            <p className="absolute top-[2vmin] left-[2vmin] text-white text-[5vmin] font-bold">{projectName}</p>
            <p className="absolute w-[80%] top-[10vmin] left-[2vmin] text-white text-[2.5vmin]">
                {projectDesc}
            </p>
            <a href="/" className={`absolute bottom-[2vmin] right-[2vmin] text-white text-[3vmin]
                                   italic underline underline-offset-4 duration-200 hover:text-[${logoYellow}]`}>See More →</a>
        </div>
    );
}

function servicesSection() {
    return (
        <div id="services" className="relative h-screen w-screen overflow-hidden">
            <div className="absolute left-0 top-0 w-full h-[40%] flex flex-col justify-center items-center text-center">
                <p className={`text-[8vmin] text-[${darkYellow}] z-10 font-serif font-bold`}>Our Services</p>
                <p className={`w-[80%] text-[3vmin] text-[${darkYellow}] z-10`}>
                    Esse occaecat in qui culpa Lorem sit culpa anim qui minim. Occaecat irure cupidatat aute dolor. Anim officia enim mollit laboris consequat.
                </p>
            </div>
            <div className="absolute bottom-[2vh] left-[15%] w-[70%] h-[60%] flex justify-center items-center">
                {serviceList.map((service, idx) => placeServiceSummary(service))}
            </div>
        </div>
    );
}

function placeServiceSummary(serviceName) {
    return (
        <a href="/" className="flex-none w-[25vw] h-[150vh] m-[-7.5vw] duration-300 hover:translate-y-[-15vh]
                        flex justify-center items-center z-10 group">
            <div className="relative w-full aspect-[4/3] -rotate-[26deg] border-[0.5rem] border-black bg-white
                            cursor-pointer duration-200 group-hover:bg-black">
                <p className="absolute top-[2vmin] left-[2vmin] text-[1.5vw] text-black duration-200 group-hover:text-white">{serviceName}</p>
                <img className="absolute bottom-[2vmin] left-[2vmin] w-[calc(100%-4vmin)] h-[calc(100%-6vw)]" src="/resources/240_F_456986840_BbHQK0bynMEDxMDJP0L3fkCMqnfmJ283.jpg" alt="Development" />
                <p className="absolute top-[1vmin] right-[2vmin] text-[2vw] text-black duration-200 group-hover:text-white">→</p>
            </div>  
        </a>
    );
}

function enquirySection() {
    return (
        <div id="enquiry" className="relative h-screen w-screen overflow-hidden">
            <div className="absolute left-[2vw] top-0 w-[45%] h-full flex flex-col justify-evenly items-center">
                <p className="">Message Us</p>
                <form id="enquiry-form" action="/" className="w-full h-full flex flex-col justify-center items-start text-center gap-[2vh]">
                    <label for="name" className="text-black text-[1.5vw]">My name is:</label>
                    <input id="name" name="name" type="text" placeholder="..." maxLength={128}
                           className="w-[90%] h-[3vw] border-[2px] border-gray-300 p-2 rounded-lg text-black text-[1.5vw]
                                     focus:border-black focus:outline-none focus:ring-0" />
                    <label for="email" className="text-black text-[1.5vw]">My email is:</label>
                    <input id="email" name="email" type="text" placeholder="..." maxLength={128}
                           className="w-[90%] h-[3vw] border-[2px] border-gray-300 p-2 rounded-lg text-black text-[1.5vw]
                           focus:border-black focus:outline-none focus:ring-0" />
                    <label for="message" className="text-black text-[1.5vw]">Let's talk about:</label>
                    <textarea id="message" name="message" placeholder="..." maxLength={512} rows={5}
                           className="w-[90%] h-auto border-[2px] border-gray-300 p-2 rounded-lg text-black text-[1.5vw]
                           focus:border-black focus:outline-none focus:ring-0 text-start resize-none"></textarea>
                </form>
            </div>
            <div className="absolute bottom-0 right-0 w-[45%] h-full flex justify-center items-center">
            </div>
        </div>
    );
}