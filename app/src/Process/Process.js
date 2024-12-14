import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
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
      <div className=" bg-background-blue grid lg:grid-cols-2 p-12">
        <div className="h-full flex flex-col justify-center">
          <div className="text-white">
            <p className="text-3xl lg:text-5xl font-bold lg:mt-0 mt-8">
              We're an Agile Team.
            </p>
            <p className="font-semibold lg:text-xl mt-2">
              That means we can flexibly incorporate any changes you might have.
            </p>
          </div>
        </div>
        <div className="">
          <DotLottieReact
            src="https://lottie.host/f453ec9b-ec89-4720-be68-d8ed98085033/q5ujeVEm9x.lottie"
            loop
            autoplay
            width="200%"
            height="200%"
          />
        </div>
      </div>
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
      <div className="p-8 grid lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-3xl lg:text-5xl font-bold lg:text-start text-center">
            We're coding magicians
          </p>
          <p className="lg:text-xl font-semibold mt-2 lg:text-start text-center">
            You imagine it, we build it
          </p>
        </div>
        <div className="overflow-x-scroll no-scrollbar">
          <MyCodeBlock code={code} language={"js"} />
        </div>
      </div>
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
      <Footer />
    </div>
  );
}
