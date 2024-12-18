import React, { useState, useEffect } from "react";

export default function Navbar() {
    // This whole part is to hide the navbar when the user scrolls down, and show the navbar when the user scrolls up
    // From here
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setVisible(false);
        }else {
            setVisible(true);
        }

        setPrevScrollPos(currentScrollPos);
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })
    // To here

    return (
        <div className={`fixed top-0 bg-black h-20 w-full inline-flex z-50 duration-300 ${visible ? 'translate-y-[0]' : 'translate-y-[-20vh]'}`}>
            <a href="/" className="h-full w-auto">
                <img className="h-full w-full relative p-4 px-6" src="/resources/just_the_T[1].png" alt="Company Logo"/>
            </a>
            <div className="h-full w-[55%] relative grid grid-cols-6 
                         *:text-white *:flex *:justify-center *:items-center *:text-[1.5vw]
                         hover:*:bg-white hover:*:text-black *:duration-200">
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
                <a href="/resources">
                    <p>Resources</p>
                </a>
            </div>

            <a href="/home#enquiry" className="absolute right-[1rem] top-[1rem] w-[10vw] h-[calc(100%-2rem)] rounded-full bg-[#debc6b]
                                            flex flex-row justify-center items-center text-[1.25vw] font-bold text-black duration-200 hover:bg-white">
                <p>Contact Us</p>
            </a>
        </div>
    );
}