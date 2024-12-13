import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {
    return (
        <div className="bg-white overflow-x-hidden">
            <Navbar />
            {titlePage()}
            {projectsPage()}
            <Footer />
        </div>
    );
}

function titlePage() {
    return (
        <div className="h-screen w-screen">
            <div className="absolute left-0 top-[5vh] w-1/2 h-screen
                            flex flex-col justify-center items-center gap-[3vh]">
                <p className="font-serif text-black text-[6vw]">TELES TECH</p>
                <p className="w-[80%] text-black text-[2vw] text-center">We build quality applications for businesses that scales like a dream</p>
                <div className="flex flex-row justify-center items-center gap-[1vw] pt-[2vh]">
                    <button className="rounded-full bg-[#977f48] w-auto h-auto flex flex-row px-[2vw] py-[0.5vw]
                                    justify-center items-center text-[1.5vw] font-bold text-black duration-200 hover:bg-black hover:text-white">
                        Get Started
                    </button>
                    <button className="rounded-full bg-[#debc6b] w-auto h-auto flex flex-row px-[2vw] py-[0.5vw]
                                    justify-center items-center text-[1.5vw] font-bold text-black duration-200 hover:bg-black hover:text-white">
                        Contact Us
                    </button>
                </div>
                
            </div>

            <div className="absolute right-0 top-[5vh] w-1/2 h-screen">
                <div className="absolute w-full h-full flex justify-center items-center">
                    <img src="/resources/just_the_T[1].png" className="absolute w-full h-auto p-[20%]" alt="Company Logo" />
                </div>
                <div className="absolute w-full h-full flex justify-center items-center">
                    <div className="absolute w-full h-full bg-gradient-to-tl from-white from-25% to-transparent"></div>
                </div>
            </div>
        </div>
    )
}

function projectsPage() {
    return (
        <div className="relative h-screen w-screen">
            <div className="absolute w-screen h-1/2 top-0 left-0 border-[2vw] border-white border-r-[3vw]
                            flex justify-center items-center">
                <img className="absolute w-full h-full brightness-75"
                     src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg" alt="background" />
                <p className="text-[4vw] text-white z-10">Our Projects</p>
            </div>
        </div>
    );
}