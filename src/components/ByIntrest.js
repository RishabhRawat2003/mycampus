import React, { useState, useEffect } from "react";
import { byIntrest } from "../utils/Constants"; // Importing data
import { Link } from "react-router-dom";

const ByIntrest = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to a specific slide
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === byIntrest.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(slideInterval); // Cleanup on unmount
    }, [currentIndex]); // Restart interval when slide changes

    return (
        <div className="px-5 md:px-10 py-3 pb-8">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide pt-2 lg:px-10 xl:px-20 xl:text-4xl" >
                Best Selling Tours
            </h1>

            <div className="relative w-full lg:px-10 mx-auto mt-6 overflow-hidden xl:px-20">
                {/* Slide Container */}
                <div className="relative w-full h-[530px] md:h-[300px] xl:h-[400px] overflow-hidden rounded-xl bg-[#DBF3FA]">
                    {byIntrest.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-auto flex flex-col md:flex-row-reverse transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={item.image} // Assuming 'image' is the key for the image URL
                                alt={item.title}
                                className="w-full h-60 object-cover rounded-lg md:h-[300px] md:w-[50%] xl:h-[400px]"
                            />
                            <div className="w-full h-auto flex flex-col p-3 md:w-[50%] lg:p-5 xl:p-14">
                                <h1 className="text-lg font-semibold lg:text-xl xl:text-3xl">{item.name}</h1>
                                <h3 className="text-sm lg:text-base xl:text-xl xl:my-2"><span className="font-semibold">Duration: </span>{item.duration}</h3>
                                <h3 className="font-semibold lg:text-lg xl:text-xl xl:font-bold">Highlights</h3>
                                <ul className="list-inside list-disc text-sm mt-2 lg:mt-4 xl:text-lg">
                                    {
                                        item.details.map((detail, index) => (
                                            <li key={index}>{detail}</li>
                                        ))
                                    }
                                </ul>
                                <h3 className="text-sm my-3 font-semibold lg:text-lg xl:my-4 xl:text-xl"><span className="font-bold">Price: </span>Starting at <span className="text-red-500">{item.price}</span> per Student</h3>
                                <div className="w-full h-auto flex items-center gap-6">
                                    <button className="bg-[#00A5CF] px-5 py-1.5 rounded-lg xl:py-2 xl:px-8">BOOK NOW</button>
                                    <Link to="/itinery" className="bg-[#E80909] px-5 py-1.5 rounded-lg xl:py-2 xl:px-8">VIEW ITINERARY</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Bullet Indicators */}
            <div className="flex gap-2 mt-4 justify-center items-center xl:mt-6">
                {byIntrest.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-5 h-5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-blue-500" : "bg-gray-400"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ByIntrest;
