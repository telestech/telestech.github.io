import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
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


export function Process() {
  return (
    <div className="">
        <Navbar />
        <div className="h-20"></div> {/* Padding for scrollbar */}
        {TitleSection()}
        {ISOSection()}
        {SloganSection()}
        {TimelineSection()}
        <Footer />
    </div>
  );
}

function TitleSection() {
    return (
        <div id="title" className="relative h-screen w-full flex flex-col lg:flex-row justify-center items-center">
            <div className="relative w-full h-full
                            flex flex-col justify-center items-center gap-[3vh]">
                <p className="font-serif text-logodarkyellow text-[12vmin] font-bold">Our Process</p>
                <p className="w-[80%] text-logodarkyellow text-[4vmin] text-center">We're an Agile Team. That means we can flexibly incorporate any changes you might have.</p>
            </div>
            <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <img src="/resources/just_the_T[1].png" className="absolute w-full h-auto p-[20%]" alt="Company Logo" />
                </div>
            </div>
        </div>
    );
}

function ISOSection() {
    return (
        <div className="bg-slate-200">
            <div className="text-center text-2xl font-bold p-6 text-slate-800">
                Certified By
            </div>
            <div className="flex justify-center space-x-7 pb-4">
            <img
                width="72px"
                height="72px"
                src="/resources/iso-9001-certified-logo-AC594FAD01-seeklogo.com.png"
                alt="ISO 9001 Certified"
            />
            <img
                width="72px"
                height="72px"
                src="/resources/ISO-27001-Certification-Novolyze.png"
                alt="ISO 27001 Certified"
            />
            </div>
        </div>
    );
}

function SloganSection() {
    return (
        <div className="p-8 grid lg:grid-cols-2">
            <div className="flex flex-col justify-center">
            <p className="text-3xl lg:text-4xl font-bold lg:text-start text-center font-serif text-logodarkyellow">
                We're coding magicians
            </p>
            <p className="lg:text-2xl mt-2 lg:text-start text-center text-logodarkyellow">
                You imagine it, we build it
            </p>
            </div>
            <div className="overflow-x-scroll no-scrollbar">
                <MyCodeBlock code={code} language={"js"} />
            </div>
        </div>
    );
}

function TimelineSection() {
    return (
        <div className="bg-slate-200">
            <VerticalTimeline> 
            <VerticalTimelineElement
            
                contentStyle={{padding:'0px'}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                iconStyle={{ background: logoYellow, color: "white", }}
                icon={<SiKakaotalk  />}
            >
                <div className="p-4 rounded hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
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
                contentStyle={{padding:'0px'}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                iconStyle={{ background: logoYellow, color: "white", }}
                icon={<FaMagnifyingGlass   />}
            >
                <div className="p-4 rounded hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
                    <h3 className="font-bold text-lg">
                        Research
                    </h3>
                    <p>
                        We study and revise the best approach to solving your problems
                    </p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                
                contentStyle={{padding:'0px'}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                iconStyle={{ background: logoYellow, color: "white", }}
                icon={<FaPencilAlt />}
            >
                <div className="p-4 rounded hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
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
                contentStyle={{padding:'0px'}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                iconStyle={{ background: logoYellow, color: "white", }}
                icon={<HiMiniPresentationChartBar   />}
            >
                <div className="p-4 rounded hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
                    <h3 className="font-bold text-lg">
                        Present
                    </h3>
                    <p>
                        We present the optimal solution to you to gather your feedback
                    </p>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                
                contentStyle={{padding:'0px'}}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                iconStyle={{ background: 'green', color: "white", }}
                icon={<HiMiniRocketLaunch />}
            >
                <div className="p-4 rounded hover:shadow-xl transition-shadow duration-300 hover:cursor-pointer">
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