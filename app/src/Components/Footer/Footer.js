import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
    return (
        <div className="relative bg-black h-[50vh] w-full inline-flex">
            {/* Top Left Corner: Quick links */}
            <div className="absolute top-0 left-0 p-[1vmin]
                            flex flex-col justify-between items-start gap-[1vmin]
                            *:text-white text-[3vmin]">
                <a href="/home">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/process">Process</a>
                <a href="/projects">Projects</a>
                <a href="/services">Services</a>
            </div>

            {/* Bottom Left Corner: Copyright, Certificates, ToC, etc. */}
            <div className="absolute bottom-0 left-0
                            flex flex-col justify-between items-start">
                <div className="w-auto h-auto pl-[1vmin]
                                text-footergray text-[2.5vmin]">
                    <p>© 2024 TelesTech LLC</p>
                </div>
                <div className="w-auto h-auto flex flex-row gap-[1vmin] pl-[1vmin]
                                text-footergray text-[2.5vmin]">
                    <a href="/">Terms and Conditions</a>
                    <p>|</p>
                    <a href="/">Privacy Notice</a>
                    <p>|</p>
                    <a href="/">Cookies Preferences</a>
                </div>
                {/* <div className="w-auto h-[10vh] flex flex-row gap-[1vmin] p-[1vmin] justify-start items-start
                                *:h-full *:w-auto">
                    <img src="/resources/iso-9001-certified-logo-AC594FAD01-seeklogo.com.png" alt="ISO 9001 Certified" />
                    <img src="/resources/ISO-27001-Certification-Novolyze.png" alt="ISO 27001 Certified" />
                </div> */}
            </div>

            {/* Top Right Corner: Partners */}
            {/* <div className="absolute top-[1vmin] right-[1vmin] w-auto h-[10%] flex flex-col justify-between items-center
                           *:object-fill *:max-h-full">
                <img src="/resources/Startup-India-Logo1-02.webp" alt="#startupindia" />
            </div> */}

            {/* Bottom Right Corner: Social Medias */}
            <div className="absolute bottom-[1vmin] right-[1vmin] w-auto flex flex-col justify-center items-end">
                <p className="text-[2.5vmin] text-footergray z-10">Mobile: +611 2345 67 89</p>
                <p className="text-[2.5vmin] text-footergray z-10">Email: vinit@telestech.com</p>
                <div className="w-auto h-[5vmin] grid grid-cols-3 gap-x-[2vmin] mt-[2vmin]
                                *:text-[4vmin] *:text-white">
                    <a href="/">
                        <SiInstagram />
                    </a>
                    <a href="/">
                        <SiGithub />
                    </a>
                    <a href="/">
                        <SiLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}