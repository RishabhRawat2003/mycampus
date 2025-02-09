import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HOMEIMAGE, ABOUTIMAGE, PACKAGEIMAGE, CONTACTIMAGE, SCHOOLIAMGE, CORPARATEIMAGE, COLLAGEPACKAGE, EDUCATIONALTOUR, ITINERY } from '../utils/Constants';
import { IoSearch } from "react-icons/io5";
import Logo from '../Images/Logo.png'
import { jwtDecode } from 'jwt-decode';

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [user, setUser] = useState({})
    const [profileDropdown, setProfileDropdown] = useState(false);
    const dropdownRef = useRef(null); // To detect clicks outside

    // Function to close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setProfileDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const [search, setSearch] = useState(false)

    const handleSearch = () => {
        setSearch(!search)
    }

    const getBackgroundImage = (pathname) => {
        switch (pathname) {
            case '/aboutus':
                return ABOUTIMAGE;
            case '/packages':
                return PACKAGEIMAGE;
            case '/contactus':
                return CONTACTIMAGE;
            case '/school-packages':
                return SCHOOLIAMGE;
            case '/blogs':
                return COLLAGEPACKAGE;
            case '/corporate-packages':
                return CORPARATEIMAGE;
            case '/collage-packages':
                return COLLAGEPACKAGE;
            case '/educational-tour':
                return EDUCATIONALTOUR;
            case '/itinery':
                return ITINERY;
            case '/login':
                return null;
            default:
                return null;
        }
    };

    const currentBackgroundImage = getBackgroundImage(location.pathname);;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    function checkUser() {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setUser(decoded)
        }
    }

    function handleLogout() {
        localStorage.removeItem('token');
        window.location.reload();
        setUser({})
    }

    useEffect(() => {
        checkUser()
    }, [location, currentBackgroundImage])
    if (location.pathname == "/login" || location.pathname == "/register" || location.pathname == "/reset-password") return null
    return (
        <div
            className={`relative w-full ${location.pathname === "/" ? "" : currentBackgroundImage ? "h-screen" : "h-auto"
                } ${location.pathname === "/" ? "" : "sm:h-3/4 md:h-[60vh] lg:h-[75vh]"}`}
            style={
                location.pathname === "/"
                    ? {} // No height or background styles when on the home page
                    : {
                        backgroundImage: currentBackgroundImage
                            ? `url(${currentBackgroundImage})`
                            : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        opacity: 1,
                        height: currentBackgroundImage ? "90vh" : "auto",
                        minHeight: location.pathname === "/login" ? "auto" : "50vh",
                    }
            }
        >
            {/* Navbar */}
            <div className="absolute top-0 left-0 right-0 px-4 sm:px-6 md:px-10 bg-white py-4 flex items-center z-30 justify-between  md:gap-16">
                {/* Logo */}

                <div>
                    <img src={Logo} alt="logo" className="w-24" />
                </div>
                <div>
                    {/* Links */}
                    <ul className="hidden xl:flex gap-4 lg:gap-7">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/aboutus", label: "About Us" },
                            { path: "/school-packages", label: "School Program" },
                            { path: "/blogs", label: "Blogs" },
                            // { path: "/collage-packages", label: "Collage Packages" },
                            // { path: "/corporate-packages", label: "Corporate Packages" },
                            { path: "/contactus", label: "Contact Us" },
                        ].map(({ path, label }) => (
                            <li key={path}>
                                <Link
                                    to={path}
                                    className={`${location.pathname === path ? "text-blue-500" : "text-black"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                {/* Right Section */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative flex items-center">
                        <div className="w-[150px] hidden sm:block">
                            {search && (
                                <input
                                    type="text"
                                    className="w-full p-[2px] border-gray-300 focus:border-black focus:outline-none px-1 text-sm rounded-sm"
                                />
                            )}
                        </div>
                        <IoSearch
                            className={`${search
                                ? "size-5 cursor-pointer absolute right-1 z-10 text-black"
                                : "text-white size-5 cursor-pointer absolute right-0 z-10"
                                }`}
                            onClick={handleSearch}
                        />
                    </div>

                    {/* Login Button */}

                    {/* Profile Image */}
                    <div className="relative">
                        {/* Profile Image */}
                        {
                            user.email && (
                                <img
                                    onClick={() => setProfileDropdown(!profileDropdown)}
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                    src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="profile"
                                />
                            )
                        }
                        {/* Dropdown Menu */}
                        {profileDropdown && user.email && (
                            <div
                                ref={dropdownRef}
                                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border"
                            >
                                <div className='w-full py-2 px-4 gap-1 h-auto justify-center items-center flex flex-col'>
                                    <img
                                        className="w-10 h-10 rounded-full cursor-pointer"
                                        src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="profile"
                                    />
                                    <span className='font-semibold'>{user.name}</span>
                                    <span className=''>{user.email}</span>
                                </div>
                                <ul className="py-2 text-gray-700">
                                    <li onClick={handleLogout} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="xl:hidden">
                        <button onClick={toggleMenu} className=" focus:outline-none">
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div>
                        {
                            !user.email && (
                                <Link
                                    to={"/login"}
                                    className="hidden sm:block bg-primarycolor p-1 text-white rounded-md px-3"
                                >
                                    Log In
                                </Link>
                            )
                        }
                    </div>
                </div>

            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-20 left-0 right-0 bg-black bg-opacity-90 z-40 xl:hidden">
                    <ul className="flex flex-col gap-4 py-4 px-6">
                        {[
                            { path: "/", label: "Home" },
                            { path: "/aboutus", label: "About Us" },
                            { path: "/school-packages", label: "School Packages" },
                            { path: "/collage-packages", label: "Collage Packages" },
                            { path: "/corporate-packages", label: "Corporate Packages" },
                            { path: "/contactus", label: "Contact Us" },
                            { path: "/login", label: "Login" },
                        ].map(({ path, label }) => (
                            <li key={path}>
                                {label === "Login" && user?.email
                                    ? null  // Hide "Login" if user is logged in
                                    : (
                                        <Link
                                            to={path}
                                            className={`${location.pathname === path ? "text-gray-500" : "text-white"}`}
                                            onClick={toggleMenu}
                                        >
                                            {label}
                                        </Link>
                                    )
                                }
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>

    );
};

export default Navbar;
