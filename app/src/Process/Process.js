import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import names from "../webresources/names.json";
import { useEffect } from "react";
import { useTheme } from "../Components/Theme/Theme";
import { MyCodeBlock } from "../Components/MyCodeBlock/MyCodeBlock";
import { SiKakaotalk } from "react-icons/si";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { HiMiniRocketLaunch } from "react-icons/hi2";
  
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

async function code(axios,destination,address,type){
    
    const googleId = await axios.get('http://localhost:4000/api/users/googleId', { withCredentials: true,
        transformResponse: (res) => {
            return res;
    }});
    await axios.post('http://localhost:4002/api/addRecord',{
        googleId:googleId.data,
        destination:destination,
        address:address,
        type:type,
    }).catch((err)=>{console.log(err)});
    
}

const logoYellow = '#debc6b';
const logoDarkYellow = '#977f48';

export function Process() {
    useEffect(() => {
        document.title = 'TelesTech - Our Process';
    }, []);

    return (
        <div className="">
            <Navbar />
            <div className="h-20 bg-black"></div> {/* Padding for scrollbar */}
            <TitleSection />
            {/* <ISOSection /> */}
            <SloganSection />
            <TimelineSection />
            <Footer />
        </div>
    );
}

function TitleSection() {
    const { isDarkMode } = useTheme();

    return (
        <div className="relative w-full h-[70vh]">
            <img
                className={`absolute w-full h-full ${isDarkMode ? "brightness-[0.25] saturate-0" : "brightness-75"} object-cover`}
                src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg"
                alt="About Us Background"
            />
            <div className={`absolute inset-0 flex flex-col justify-center items-center text-center ${isDarkMode ? "text-logoyellow" : "text-white"} px-6`}>
                <h1 className="text-[2.5rem] md:text-[4rem] font-serif font-bold mb-4">
                    {names.process.title}
                </h1>
                <h2 className="w-[75%] text-[1.5rem] md:text-[2rem] font-serif mb-4">
                    {names.process.subtitle}
                </h2>
            </div>
        </div>
    );
}

// function ISOSection() {
//     const { isDarkMode } = useTheme();

//     return (
//         <div className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
//             <div className="text-center text-2xl font-bold p-6">
//                 Certified By
//             </div>
//             <div className="flex justify-center space-x-7 pb-4">
//             <img
//                 width="72px"
//                 height="72px"
//                 src="/resources/iso-9001-certified-logo-AC594FAD01-seeklogo.com.png"
//                 alt="ISO 9001 Certified"
//             />
//             <img
//                 width="72px"
//                 height="72px"
//                 src="/resources/ISO-27001-Certification-Novolyze.png"
//                 alt="ISO 27001 Certified"
//             />
//             </div>
//         </div>
//     );
// }

function SloganSection() {
    const { isDarkMode } = useTheme();

    return (
        <div className={`p-8 grid lg:grid-cols-2 ${isDarkMode ? "bg-black text-logoyellow" : "bg-white text-logodarkyellow"}`}>
            <div className="flex flex-col justify-center">
                <p className="text-3xl lg:text-4xl font-bold lg:text-start text-center font-serif">
                    We're coding magicians
                </p>
                <p className="lg:text-2xl mt-2 lg:text-start text-center">
                    You imagine it, we build it
                </p>
                </div>
            <div className={`overflow-x-hidden border-4 p-2 ${isDarkMode ? "border-logoyellow" : "border-logodarkyellow"}`}>
                <MyCodeBlock code={code} language={"js"} />
            </div>
        </div>
    );
}

function TimelineSection() {
    const { isDarkMode } = useTheme();

    return (
        <div className={`bg-gradient-to-b ${ isDarkMode ? "from-black to-logodarkyellow text-logoyellow" : "from-white to-logoyellow text-logodarkyellow" }`}>
            <VerticalTimeline> 
            <VerticalTimelineElement
                contentStyle={{padding:'0px', boxShadow: "none", background: "transparent"}}
                contentArrowStyle={{ borderRight: `7px solid ${isDarkMode ? "#debc6b" : "#977f48"}` }}
                iconStyle={{ background: isDarkMode ? logoYellow : logoDarkYellow, color: isDarkMode ? "black" : "white" }}
                icon={<SiKakaotalk  />}
            >
                <div className={`p-4 rounded border-4 ${isDarkMode ? "border-logoyellow bg-black" : "border-logodarkyellow bg-white"}`}>
                    <h3 className="font-bold text-lg">
                        Consultation
                    </h3>
                    <p>
                        We ask you about what you want to see from the product
                    </p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="flex justify-end"
                contentStyle={{padding:'0px', boxShadow: "none", background: "transparent"}}
                contentArrowStyle={{ borderRight: `7px solid ${isDarkMode ? "#debc6b" : "#977f48"}` }}
                iconStyle={{ background: isDarkMode ? logoYellow : logoDarkYellow, color: isDarkMode ? "black" : "white" }}
                icon={<FaMagnifyingGlass   />}
            >
                <div className={`p-4 rounded border-4 ${isDarkMode ? "border-logoyellow bg-black" : "border-logodarkyellow bg-white"}`}>
                    <h3 className="font-bold text-lg">
                        Research
                    </h3>
                    <p>
                        We study and revise the best approach to solving your problems
                    </p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{padding:'0px', boxShadow: "none", background: "transparent"}}
                contentArrowStyle={{ borderRight: `7px solid ${isDarkMode ? "#debc6b" : "#977f48"}` }}
                iconStyle={{ background: isDarkMode ? logoYellow : logoDarkYellow, color: isDarkMode ? "black" : "white" }}
                icon={<FaPencilAlt />}
            >
                <div className={`p-4 rounded border-4 ${isDarkMode ? "border-logoyellow bg-black" : "border-logodarkyellow bg-white"}`}>
                    <h3 className="font-bold text-lg">
                        Sketch
                    </h3>
                    <p>
                        We illustrate solutions to visualize how they are going to look and perform
                    </p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="flex justify-end"
                contentStyle={{padding:'0px', boxShadow: "none", background: "transparent"}}
                contentArrowStyle={{ borderRight: `7px solid ${isDarkMode ? "#debc6b" : "#977f48"}` }}
                iconStyle={{ background: isDarkMode ? logoYellow : logoDarkYellow, color: isDarkMode ? "black" : "white" }}
                icon={<HiMiniPresentationChartBar   />}
            >
                <div className={`p-4 rounded border-4 ${isDarkMode ? "border-logoyellow bg-black" : "border-logodarkyellow bg-white"}`}>
                    <h3 className="font-bold text-lg">
                        Present
                    </h3>
                    <p>
                        We present the optimal solution to you to gather your feedback
                    </p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                contentStyle={{padding:'0px', boxShadow: "none", background: "transparent"}}
                contentArrowStyle={{ borderRight: `7px solid ${isDarkMode ? "#debc6b" : "#977f48"}` }}
                iconStyle={{ background: isDarkMode ? logoYellow : logoDarkYellow, color: isDarkMode ? "black" : "white" }}
                icon={<HiMiniRocketLaunch />}
            >
                <div className={`p-4 rounded border-4 ${isDarkMode ? "border-logoyellow bg-black" : "border-logodarkyellow bg-white"}`}>
                    <h3 className="font-bold text-lg">
                        Launch
                    </h3>
                    <p>
                        We deploy the solution that best fits your expectations
                    </p>
                </div>
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}