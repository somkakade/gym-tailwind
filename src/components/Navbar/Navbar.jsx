
import Logo from "../../../src/assets/logo.png";
import { FaPhone } from "react-icons/fa6";
import Darkmode from "./Darkmode";
const Navbar = () => {
    return (
        <>
            <nav>
                <div className='shadow-md w-full px-2'>
                    <div className="container">
                        <div className='flex justify-between items-center'>
                            <div>
                                <p className="flex items-center font-semibold"><FaPhone  className="text-primary pr-1 font-bold group-hover:scale-50 animate-pulse"/>+919999999999</p>
                            </div>
                            <div>
                                <img src={Logo} alt="" className="w-16 cursor-pointer" />
                            </div>
                            <div>
                                <ul className="hidden md:flex items-center gap-10 font-semibold uppercase">
                                    <li><a href="" className="hover:text-primary duration-500">Service</a></li>
                                    <li><a href="" className="hover:text-primary duration-500">about</a></li>
                                    <li><a href="" className="hover:text-primary duration-500">join</a></li>
                                    <li><a href="" className="hover:text-primary duration-500"></a><Darkmode/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar