export default function Navbar() {
    return (
        <div className="top-0 sticky bg-black h-[10vh] w-full inline-flex">
            <img className="h-full w-auto relative" src="/resources/logo without tagline.png" alt="Company Logo"/>
            <div className="h-full w-[50%] relative grid grid-cols-5 
                         *:text-white *:flex *:justify-center *:items-center *:text-[2.5vmin]
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

            <a href="/home#form" className="absolute right-[2vmin] top-[2vmin] w-[10vw] h-[calc(100%-4vmin)] rounded-full bg-[#debc6b]
                                            flex flex-row justify-center items-center text-[2.5vmin] font-bold text-black duration-200 hover:bg-white">
                <p>Contact Us</p>
            </a>
        </div>
    );
}