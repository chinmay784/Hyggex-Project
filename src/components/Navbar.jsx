import React from "react";
import logo from '../images/Logo.svg'
import login from "../images/login.svg"

const Navbar = () => {
    return (
        <>
            <div>
                <header className="text-gray-600 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <img src={logo} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" />
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-gray-900">Home</a>
                            <a className="mr-5 hover:text-gray-900">FlashClad</a>
                            <a className="mr-5 hover:text-gray-900">Contact</a>
                            <a className="mr-5 hover:text-gray-900">FAQ</a>
                        </nav>
                        <button className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                            <img src={login} className=" w-24" />
                        </button>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Navbar;