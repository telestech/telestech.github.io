export default function Navbar() {
    return (
        <div className="fixed top-0 bg-black h-20 w-full inline-flex z-50">
            <img className="h-full w-auto relative" src="/resources/logo without tagline.png" alt="Company Logo"/>
            <div className="h-full w-[55%] relative grid grid-cols-5 
                         *:text-white *:flex *:justify-center *:items-center *:text-[1.5vw]
                         hover:*:bg-white hover:*:text-black *:duration-200">
                <a href="/home">
                    <p>Home</p>
                </a>
                <a href="/about-us">
                    <p>About Us</p>
                </a>
                <a href="/process">
                    <p>Process</p>
                </a>
                <a href="/projects">
                    <p>Projects</p>
                </a>
                <a href="/services">
                    <p>Services</p>
                </a>
            </div>

            <a href="/home#form" className="absolute right-[1rem] top-[1rem] w-[10vw] h-[calc(100%-2rem)] rounded-full bg-[#debc6b]
                                            flex flex-row justify-center items-center text-[1.25vw] font-bold text-black duration-200 hover:bg-white">
                <p>Contact Us</p>
            </a>
        </div>
    );
}