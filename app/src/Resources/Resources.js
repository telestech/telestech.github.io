import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const blogList = [
    "Why Balatro deserves GOTY more than that weird game with the monkey",
    "Top 10 reasons I deserve more marks for SOFT2412",
    "\"Skibidi Toilet is an acceptable placeholder\" - said brainrotten developer",
    "Developer didn't get paid enough, removed company's website"
];

export default function Resources() {
    return (
        <div className="bg-white overflow-x-hidden">
            <Navbar />
            <div className="h-20"></div> {/* Padding for scrollbar */}
            {TitleSection()}
            {BlogsSection()}
            {FileSection()}
            <Footer />
        </div>
    );
}

function TitleSection() {
    return (
        <div id="title" className="relative h-screen w-full flex flex-col lg:flex-row justify-center items-center">
            <div className="relative w-full h-full
                            flex flex-col justify-center items-center gap-[3vh]">
                <p className="font-serif text-logodarkyellow text-[12vmin]">Our Resources</p>
                <p className="w-[80%] text-logodarkyellow text-[4vmin] text-center">From blogs, templates to relating files, you can find them all here.</p>
            </div>
            <div className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <img src="/resources/just_the_T[1].png" className="absolute w-full h-auto p-[20%]" alt="Company Logo" />
                </div>
            </div>
        </div>
    )
}

function BlogsSection() {
    return (
        <div id="blogs" className="relative h-screen w-full">
            <div className="absolute w-full h-1/2 top-0 left-0 border-white border-[4vmin]
                            flex flex-col text-center justify-center items-center gap-[5%]">
                <img className="absolute w-full h-full brightness-75"
                     src="/resources/240_F_885937882_GqcwdIttrGepx8ESiItGBG44tOvopC4K.jpg" alt="background" />
                <p className="w-[80%] text-[8vmin] text-white z-10 font-serif font-bold">Our Blogs</p>
                <p className="w-[60%] text-[3vmin] text-white z-10">
                    Ea voluptate id dolore non exercitation voluptate irure pariatur cillum.
                    Deserunt ut Lorem ad sunt duis Lorem consequat proident.
                    Elit cillum pariatur consequat quis aliqua sint proident occaecat nostrud sunt.
                </p>
            </div>
            <div className="absolute w-full h-1/2 bottom-0 left-0 inline-flex style-scrollbar border-x-[4vmin] gap-[2vw] overflow-x-auto overflow-y-hidden
                         border-white border-[2vw] pb-4">
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
    return (
        <div id="files" className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center
                                    border-[4vmin] border-transparent">
            <div className="text-[8vmin] text-logodarkyellow font-serif font-bold">Our Template Files</div>
            <div className="w-[50%] h-[70%] block overflow-auto style-scrollbar
                            p-[2vmin] border-[2px] rounded-md border-enquirygray">
                {FileDisplay()}
                {FileDisplay()}
                {FileDisplay()}
                {FileDisplay()}
                {FileDisplay()}
                {FileDisplay()}
                {FileDisplay()}
                {FileDisplay()}
            </div>
        </div>
    );
}

function FileDisplay() {
    return (
        <div className="relative w-full h-[25%] border-[2px] rounded-md border-enquirygray my-[1vmin]">
            <p className="absolute top-[1vmin] left-[2vmin] text-[4vmin] text-logodarkyellow">Company Logo</p>
            <div className="absolute bottom-[1vmin] right-[2vmin] flex flex-row justify-end items-center gap-[2vmin]">
                <a className="text-black text-[3vmin]" href="/resources/just_the_T[1].png" target="_blank">View</a>
                <a className="text-black text-[3vmin]" href="/resources/just_the_T[1].png" download>Download</a>
            </div>
        </div>
    );
}