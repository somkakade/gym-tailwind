import FooterLogo from "../../../src/assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-100 py-10">
                <div className="container py-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                        {/* Card No 1 */}
                        <div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <img src={FooterLogo} alt="" className="w-20" />
                                </div>
                                <div>
                                    <div className="flex gap-5 text-2xl">
                                        <FaInstagram />
                                        <FaFacebook />
                                        <FaLinkedin />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Card No 2 */}
                        <div>
                            <p>Contact us: +91 123456789</p>
                        </div>
                        <div>
                            <ul className="flex items-center gap-4 text-xl font-semibold">
                                <li><a href="">services</a></li>
                                <li><a href="">about</a></li>
                                <li><a href="">join</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer