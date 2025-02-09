import React from "react";
import {
    FaUserGraduate,
    FaGlobeAmericas,
    FaHotel,
    FaDollarSign,
    FaHandsHelping,
    FaBookOpen,
} from "react-icons/fa";

function WhyCampusSafari() {
    const data = [
        { icon: <FaUserGraduate className="duration-500 ease-in-out" />, title: "13+ Years of Expertise" },
        { icon: <FaGlobeAmericas className="duration-500 ease-in-out" />, title: "Expert Guides & Mentors" },
        { icon: <FaBookOpen className="duration-500 ease-in-out" />, title: "Fun & Educational Trips" },
        { icon: <FaHotel className="duration-500 ease-in-out" />, title: "Safe & Secure Accommodation" },
        { icon: <FaDollarSign className="duration-500 ease-in-out" />, title: "Affordable Student Packages" },
        { icon: <FaHandsHelping className="duration-500 ease-in-out" />, title: "24/7 Support & Assistance" },
    ];

    return (
        <div className="w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 py-10 xl:py-20">
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#49545A]">
                Why Choose <span className="text-[#00A5CF]">My Campus Safari?</span>
            </h1>

            {/* Auto-Scrolling Container */}
            <div className="w-full overflow-hidden mt-10 lg:mt-20 relative">
                <div className="flex gap-6 md:gap-12 lg:gap-16 items-center carousel h-[300px]">
                    {[...data, ...data, ...data, ...data].map((item, index) => ( // Double array for infinite loop
                        <div
                            key={index}
                            className="min-w-[200px] md:min-w-[250px] lg:min-w-[300px] flex flex-col justify-center items-center text-center"
                        >
                            <div className="text-6xl h-20 flex justify-center items-center md:hover:text-[#00A5CF] transition-transform duration-500 ease-in-out hover:scale-110">
                                {item.icon}
                            </div>
                            <h1 className="text-lg xl:text-2xl font-bold text-[#00A5CF] mt-5">
                                {item.title}
                            </h1>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tailwind & Keyframes Fix */}
            <style>
                {`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                
                .carousel {
                    display: flex;
                    width: max-content;
                    animation: scroll 15s linear infinite;
                    animation-fill-mode: forwards;
                }

                .carousel:hover {
                    animation-play-state: paused; /* Pauses smoothly at the current position */
                }
                `}
            </style>
        </div>
    );
}

export default WhyCampusSafari;
