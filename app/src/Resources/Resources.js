import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import names from "../webresources/names.json";
import { useTheme } from "../Components/Theme/Theme";

const blogList = [
    "Why Balatro deserves GOTY more than that weird game with the monkey",
    "Top 10 reasons I deserve more marks for SOFT2412",
    "\"Skibidi Toilet is an acceptable placeholder\" - said brainrotten developer",
    "Developer didn't get paid enough, removed company's website"
];

export default function Resources() {
    const { isDarkMode } = useTheme();

    useEffect(() => {
        document.title = 'TelesTech - Our Resources';
    }, []);

    return (
        <div className={`${isDarkMode ? "bg-black" : "bg-white"} overflow-x-hidden`}>
            <Navbar />
            <div className="h-20 bg-black"></div> {/* Padding for scrollbar */}
            {TitleSection()}
            {BlogsSection()}
            {FileSection()}
            <Footer />
        </div>
    );
}

function TitleSection() {
    const { isDarkMode } = useTheme();

    return (
        <div id="title" className="relative w-full h-[70vh]">
            <img
                className={`absolute w-full h-full ${isDarkMode ? "brightness-[0.25] saturate-0" : "brightness-75"} object-cover`}
                src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg"
                alt="About Us Background"
            />
            <div className={`absolute inset-0 flex flex-col justify-center items-center text-center ${isDarkMode ? "text-logoyellow" : "text-white"} px-6`}>
                <h1 className="text-[2.5rem] md:text-[4rem] font-serif font-bold mb-4">
                    {names.resources.title}
                </h1>
                <h2 className="w-[75%] text-[1.5rem] md:text-[2rem] font-serif mb-4">
                    {names.resources.subtitle}
                </h2>
            </div>
        </div>
    )
}

function BlogsSection() {
    const { isDarkMode } = useTheme();

    return (
        <div id="blogs" className="relative h-screen w-full">
            <div className={`absolute w-full h-1/2 top-0 left-0 border-transparent border-[4vmin]
                            flex flex-col text-center justify-center items-center gap-[5%] ${isDarkMode ? "text-logoyellow" : "text-white"}`}>
                <img className={`absolute w-full h-full ${isDarkMode ? "brightness-50 saturate-0" : "brightness-75"}`}
                     src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg" alt="background" />
                <p className="w-[80%] text-[8vmin] z-10 font-serif font-bold">{names.resources.blogTitle}</p>
                <p className="w-[60%] text-[3vmin] z-10">
                    {names.resources.blogSubtitle}
                </p>
            </div>
            <div className="absolute w-full h-1/2 bottom-0 left-0 inline-flex style-scrollbar border-x-[4vmin] gap-[2vw] overflow-x-auto overflow-y-hidden
                         border-transparent border-[2vw] pb-4">
                {blogList.map((value, idx) => BlogSummary(value))}
            </div>
        </div>
    );
}

function BlogSummary(blogName) {
    return (
        <div key={blogName} className="relative flex-none w-[45%] h-full lg:group overflow-hidden">
            <img className="w-full h-full brightness-[0.25] duration-200 lg:group-hover:scale-150" src="/resources/240_F_311597945_LuOQuFfk5wGWP4r9eUMpSmBdYES58lsK.jpg" alt="Software Development" />
            <p className="absolute top-[2vmin] left-[2vmin] w-[80%] text-white text-[4vmin] font-serif font-bold">{blogName}</p>
            <a href="/" className="absolute bottom-[2vmin] right-[2vmin] text-white text-[3vmin]
                                   italic underline underline-offset-4 duration-200 lg:hover:text-logoyellow">See More →</a>
        </div>
    );
}

function FileSection() {
    const { isDarkMode } = useTheme();

    return (
        <div id="files" className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center
                                    border-[4vmin] border-transparent">
            <div className={`text-[8vmin] ${isDarkMode ? "text-logoyellow" : "text-logodarkyellow"} font-serif font-bold`}>Our Template Files</div>
            <div className="w-[75%] h-[70%] block overflow-auto style-scrollbar
                            p-[2vmin] border-[2px] rounded-md border-enquirygray">
                {FileDisplay()}
            </div>
        </div>
    );
}

function FileDisplay() {
    const { isDarkMode } = useTheme();

    return (
        <div className="relative w-full h-[25%] border-[2px] rounded-md border-enquirygray my-[1vmin]">
            <p className={`absolute top-[1vmin] left-[2vmin] text-[4vmin] ${isDarkMode ? "text-logoyellow" : "text-logodarkyellow"}`}>Company Logo</p>
            <div className="absolute bottom-[1vmin] right-[2vmin] flex flex-row justify-end items-center gap-[2vmin]">
                <a className={`${isDarkMode ? "text-white" : "text-black"} text-[3vmin]`} href="/resources/just_the_T[1].png" target="_blank">View</a>
                <a className={`${isDarkMode ? "text-white" : "text-black"} text-[3vmin]`} href="/resources/just_the_T[1].png" download>Download</a>
            </div>
        </div>
    );
}