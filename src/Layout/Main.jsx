import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import Marquee from "react-fast-marquee";


const Main = () => {
    return (
        <div>
            <Marquee className="my-10 text-2xl">
                <h1 className="text-red-600 font-bold">Important Notice : This Website is in developing mode now...!! Be Patients for few moments</h1>
                <h1 className="text-red-600 font-bold"></h1>
            </Marquee>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;