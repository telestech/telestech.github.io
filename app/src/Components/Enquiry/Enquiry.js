import { useState, useRef } from "react";
import { SiInstagram, SiLinkedin, SiGithub } from "react-icons/si";
import emailjs from '@emailjs/browser';
import MediaQuery from 'react-responsive'
import { useTheme } from "../Theme/Theme";
import names from "../../webresources/names.json";

export function EnquirySection() {
    const { isDarkMode } = useTheme();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [country, setCountry] = useState("");
    const [requirement, setRequirement] = useState("");
    const [comments, setComments] = useState("");

    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        let verified = formVerification(event.target);

        if (!verified) {
            document.getElementById("fill-all-text").style.display = "block";
            return;
        } else {
            document.getElementById("submit").style.display = "none";
            document.getElementById("fill-all-text").style.display = "none";
            document.getElementById("receiving").style.display = "block";
            emailjs
            .sendForm('web-form-Teles', 'web-form-template', form.current)
            .then(
                (res) => {
                    document.getElementById("form").style.display = "none";
                    document.getElementById("thank-you").style.display = "flex";
    
                    console.log(res);
                },
                (error) => {
                    document.getElementById("form").style.display = "none";
                    document.getElementById("error").style.display = "flex";
    
                    console.log(error);
                },
            );
        }

    }

    return (
        <div id="enquiry" className="relative h-screen w-full overflow-hidden flex flex-col lg:flex-row justify-around items-center">
            <div id="form" className="relative w-full h-[50%] lg:h-full flex flex-col justify-center items-center gap-[2vmin] border-transparent border-[4vmin]">
                <p className={`text-[8vmin] ${ isDarkMode ? "text-white" : "text-black"} font-serif font-bold text-center`}>
                    Message Us
                </p>
                <form ref={form} id="enquiry-form" action="/" className="w-full h-auto flex flex-col justify-center items-start text-center gap-[2vh]"
                      onSubmit={handleSubmit}>
                    <div className={`w-full border-[2px] px-[2vmin] py-[1vmin] rounded-lg
                                ${ isDarkMode ? "text-white border-white" : "text-black border-black"} text-[2vmin] flex flex-row justify-end items-center gap-[2vmin]`}>
                        <p className="text-nowrap">Name <span className="text-red-500">*</span></p>
                        <div className={`border-[1px] ${ isDarkMode ? "border-white" : "border-black"} w-[1px] h-full`}></div>
                        <input id="name" name="name" type="text" maxLength={128} rows={1}
                            className="w-[75%] focus:outline-none focus:ring-0 bg-transparent"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={`w-full border-[2px] px-[2vmin] py-[1vmin] rounded-lg
                                ${ isDarkMode ? "text-white border-white" : "text-black border-black"} text-[2vmin] flex flex-row justify-end items-center gap-[2vmin]`}>
                        <p className="text-nowrap">Email <span className="text-red-500">*</span></p>
                        <div className={`border-[1px] ${ isDarkMode ? "border-white" : "border-black"} w-[1px] h-full`}></div>
                        <input id="email" name="email" type="text" maxLength={128} rows={1}
                            className="w-[75%] focus:outline-none focus:ring-0 bg-transparent"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={`w-full border-[2px] px-[2vmin] py-[1vmin] rounded-lg
                                ${ isDarkMode ? "text-white border-white" : "text-black border-black"} text-[2vmin] flex flex-row justify-end items-center gap-[2vmin]`}>
                        <p className="text-nowrap">Company Name</p>
                        <div className={`border-[1px] ${ isDarkMode ? "border-white" : "border-black"} w-[1px] h-full`}></div>
                        <input id="company-name" name="company-name" type="text" maxLength={128} rows={1}
                            className="w-[75%] focus:outline-none focus:ring-0 bg-transparent"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)} />
                    </div>
                    <div className={`w-full border-[2px] px-[2vmin] py-[1vmin] rounded-lg
                                ${ isDarkMode ? "text-white border-white" : "text-black border-black"} text-[2vmin] flex flex-row justify-end items-center gap-[2vmin]`}>
                        <p className="text-nowrap">Country <span className="text-red-500">*</span></p>
                        <div className={`border-[1px] ${ isDarkMode ? "border-white" : "border-black"} w-[1px] h-full`}></div>
                        <input id="country" name="country" type="text" maxLength={128} rows={1}
                            className="w-[75%] focus:outline-none focus:ring-0 bg-transparent"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className={`w-full border-[2px] px-[2vmin] py-[1vmin] rounded-lg
                                ${ isDarkMode ? "text-white border-white" : "text-black border-black"} text-[2vmin] flex flex-row justify-end items-center gap-[2vmin]`}>
                        <p className="text-nowrap">Requirement <span className="text-red-500">*</span></p>
                        <div className={`border-[1px] ${ isDarkMode ? "border-white" : "border-black"} w-[1px] h-full`}></div>
                        <select id="requirement" name="requirement"
                                className="w-[75%] focus:outline-none focus:ring-0 bg-transparent text-black"
                                value={requirement}
                                onChange={(e) => setRequirement(e.target.value)}>
                            <option value="" disabled hidden></option>
                            <option value="Custom Software Development">Custom Software Development</option>
                            <option value="Custom Website Development">Custom Website Development</option>
                            <option value="Custom App Production">Custom App Production</option>
                            <option value="AI/ML Development">AI/ML Development</option>
                            <option value="IT Consultation">IT Consultation</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className={`w-full border-[2px] px-[2vmin] py-[1vmin] rounded-lg
                                ${ isDarkMode ? "text-white border-white" : "text-black border-black"} text-[2vmin] flex flex-col justify-start items-start gap-[2vmin]`}>
                        <p>Comments</p>
                        <textarea id="comments" name="comments" maxLength={512} rows={4}
                           className="w-full h-auto rounded-lg text-[2vmin]
                                      focus:outline-none focus:ring-0 text-start resize-none bg-transparent"
                           value={comments}
                           onChange={(e) => setComments(e.target.value)}></textarea>
                    </div>
                    <div className="w-full">
                        <input className={`border-[2px] rounded-md px-[2vmin] py-[1vmin] cursor-pointer duration-200 text-[2vmin]
                                        ${isDarkMode ? "text-white border-white hover:bg-white hover:text-logodarkyellow" : "text-black border-black hover:bg-black hover:text-white"}`}
                                        id="submit" name="submit" type="submit" value="Submit"></input>
                    </div>
                    <p id="fill-all-text" className={`hidden w-full text-[3vmin] ${isDarkMode ? "text-white" : "text-black"} font-bold text-center`}>Please fill all the fields with <span className="text-red-500">*</span> !</p>
                    <p id="receiving" className={`hidden w-full text-[3vmin] ${isDarkMode ? "text-white" : "text-black"} font-bold text-center`}>Receiving your message...</p>
                </form>
            </div>
            <div id="thank-you" className="relative w-full h-[50%] hidden lg:h-full flex-col justify-center items-center gap-[2vmin] border-transparent border-[4vmin]">
                <p className={`font-serif ${isDarkMode ? "text-white" : "text-black"} text-[12vmin]`}>Thank you!</p>
                <p className={`w-[80%] ${isDarkMode ? "text-white" : "text-black"} text-[4vmin] text-center`}>Thank you for reaching out to us! We will reply to you within 3 business days.</p>
                <p className={`w-[80%] ${isDarkMode ? "text-white" : "text-black"} text-[4vmin] text-center`}>Meanwhile, check out our other services, or follow us at the links to the right.</p>
            </div>
            <div id="error" className="relative w-full h-[50%] hidden lg:h-full flex-col justify-center items-center gap-[2vmin] border-transparent border-[4vmin]">
                <p className={`font-serif ${isDarkMode ? "text-white" : "text-black"} text-[12vmin]`}>Oops...</p>
                <p className={`w-[80%] ${isDarkMode ? "text-white" : "text-black"} text-[4vmin] text-center`}>Something happened while processing your request.</p>
                <p className={`w-[80%] ${isDarkMode ? "text-white" : "text-black"} text-[4vmin] text-center`}>Please reload the page to try again, or contact us directly with the email to the right.</p>
            </div>
            <div className={`relative w-full h-auto p-[5vmin] lg:h-full lg:m-0 flex flex-col justify-center items-center gap-[1vh] border-transparent border-[4vmin]
                        ${isDarkMode ? "text-logoyellow" : "text-white"}`}>
                <img className={`absolute top-0 left-0 w-full h-full ${isDarkMode ? "brightness-[0.25] saturate-0" : "brightness-75"}`}
                src="/resources/240_F_723820135_tcfTiQlaVjadRhGdI5XlLdvOmUeZmwmY.jpg" alt="Background" />
                <p className="text-[8vmin] font-serif font-bold text-center z-10">
                    Contact Us
                </p>
                <MediaQuery minWidth={1000} className="flex justify-center items-center">
                    <img className="w-auto h-[50%] z-10" src={isDarkMode ? "/resources/just_the_T[1].png" : "/resources/WHITE_LOGO_WITHOUT_TAGLINE[1].png"} alt='Company Logo' />
                </MediaQuery>
                <p className="text-[3vmin] z-10">Email: contact@telestech.com</p>
                <div className="w-auto h-[5vmin] grid grid-cols-3 gap-x-[2vmin] z-10 p-[1vmin]
                                *:text-[4vmin]">
                    <a href={names.links.instagram} target="_blank" rel="noreferrer">
                        <SiInstagram />
                    </a>
                    <a href={names.links.github} target="_blank" rel="noreferrer">
                        <SiGithub />
                    </a>
                    <a href={names.links.linkedin} target="_blank" rel="noreferrer">
                        <SiLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}

/**
 * Verifies if the form required fields are filled.
 * @param {*} form 
 * @returns 
 */
function formVerification(form) {
    if (form.name.value === "" ||
        form.email.value === "" ||
        form.country.value === "" ||
        form.requirement.value === ""
    ) {
        return false;
    } else {
        return true;
    }
}