import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Home() {
    return (
        <div className="bg-blue-400 overflow-x-hidden">
            <Navbar />
            {titlePage()}
            {titlePage()}
            {titlePage()}
            <Footer />
        </div>
    );
}

function titlePage() {
    return (
        <div className="h-screen w-screen">

        </div>
    )
}