import { Link } from "react-router-dom";
import {FaFacebook, FaLinkedin , FaGithub} from 'react-icons/fa'
import logo from "../../assets/home/final-logo.png"

const Footer = () => {
    return (
        <div>
        <footer className="footer items-center p-4 bg-[#ffffff75] text-black border-t-2 border-cyan-500">
            <div className="text-center flex flex-row justify-between items-center md:flex-col md:justify-center">
                <img className="h-[150px]" src={logo} alt="" />
                <p className="font-semibold text-slate-500">Ensure the quality of food with <br /> affordable price</p>
            </div> 
            <div className="grid-flow-col justify-self-center gap-4 md:place-self-center md:justify-self-end">
                <Link className="text-3xl text-blue-800" to={`https://www.facebook.com/rocking.habib`}> <FaFacebook></FaFacebook></Link>
                <Link className="text-3xl text-black" to={`https://www.github.com/habibb2r`}><FaGithub></FaGithub></Link>
                <Link className="text-3xl text-purple-500" to={`https://www.linkedin.com/in/habibb2r/`}> <FaLinkedin></FaLinkedin></Link>
            </div>
        </footer>
        <footer className="footer footer-center p-4 bg-white text-slate-500">
            <div>
                <p>Copyright © 2023 - All right reserved by <Link className="font-semibold" to={'www.facebook.com/rocking.habib'}>Habib</Link></p>
            </div>
            </footer>
        </div>
    );
};

export default Footer;