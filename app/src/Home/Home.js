import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

export default function Home() {
    return (
        <div className="bg-blue-400 overflow-x-hidden">
            <Navbar />
            {titlePage()}
            <Footer />
        </div>
    );
}

function titlePage() {
    return (
        <div className="h-screen w-screen">
            <div className="absolute w-auto h-auto"></div>
        </div>
    )
}