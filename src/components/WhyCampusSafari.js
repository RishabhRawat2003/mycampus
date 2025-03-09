import React from "react";
import {
    FaUserGraduate,
    FaGlobeAmericas,
    FaHotel,
    FaDollarSign,
    FaHandsHelping,
    FaBookOpen,
    FaMapMarkedAlt,
    FaUsers,
    FaCalendarAlt,
    FaShieldAlt,
    FaSmile,
    FaBus,
} from "react-icons/fa";

function WhyCampusSafari() {
    const data = [
        { icon: <FaUserGraduate className="text-6xl" />, title: "13+ Years of Expertise" },
        { icon: <FaGlobeAmericas className="text-6xl" />, title: "Expert Guides & Mentors" },
        { icon: <FaBookOpen className="text-6xl" />, title: "Fun & Educational Trips" },
        { icon: <FaHotel className="text-6xl" />, title: "Safe & Secure Accommodation" },
        { icon: <FaDollarSign className="text-6xl" />, title: "Affordable Student Packages" },
        { icon: <FaHandsHelping className="text-6xl" />, title: "24/7 Support & Assistance" },
        { icon: <FaMapMarkedAlt className="text-6xl" />, title: "Customized Itineraries" },
        { icon: <FaUsers className="text-6xl" />, title: "Group Discounts" },
        { icon: <FaCalendarAlt className="text-6xl" />, title: "Flexible Scheduling" },
        { icon: <FaShieldAlt className="text-6xl" />, title: "Safety First Approach" },
        { icon: <FaSmile className="text-6xl" />, title: "Memorable Experiences" },
        { icon: <FaBus className="text-6xl" />, title: "Comfortable Travel" },
    ];

    return (
        <div className="w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 py-10 xl:py-20 bg-gray-50">
            {/* Heading */}
            <h1 className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#49545A]">
                Why Choose <span className="text-[#00A5CF]">Campus Safari?</span>
            </h1>

            {/* Auto-Scrolling Rows */}
            <div className="w-full overflow-hidden mt-10 lg:mt-20 relative space-y-8">
                {/* First Row (Left to Right) */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-6 md:gap-12 lg:gap-16 items-center carousel-left h-[200px]">
                        {[...data, ...data].map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[200px] md:min-w-[250px] lg:min-w-[300px] flex flex-col justify-center items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-6xl h-20 flex justify-center items-center text-[#00A5CF] hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h1 className="text-lg xl:text-xl font-bold text-[#49545A] mt-5">
                                    {item.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row (Right to Left) */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-6 md:gap-12 lg:gap-16 items-center carousel-right h-[200px]">
                        {[...data, ...data].reverse().map((item, index) => (
                            <div
                                key={index}
                                className="min-w-[200px] md:min-w-[250px] lg:min-w-[300px] flex flex-col justify-center items-center text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-6xl h-20 flex justify-center items-center text-[#00A5CF] hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h1 className="text-lg xl:text-xl font-bold text-[#49545A] mt-5">
                                    {item.title}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tailwind & Keyframes Fix */}
            <style>
                {`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                .carousel-left {
                    display: flex;
                    width: max-content;
                    animation: scrollLeft 20s linear infinite;
                }

                .carousel-right {
                    display: flex;
                    width: max-content;
                    animation: scrollRight 20s linear infinite;
                }

                .carousel-left:hover, .carousel-right:hover {
                    animation-play-state: paused;
                }
                `}
            </style>
        </div>
    );
}

export default WhyCampusSafari;