import React, { useState, useEffect } from "react";
import { BLACKIMAGE, LEFTIMAGE, PACKAGE } from "../utils/Constants";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const PackageContent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const CARDS_PER_VIEW = 3;
    const AUTO_SLIDE_INTERVAL = 3000; // Auto-slide every 3 seconds

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + CARDS_PER_VIEW < PACKAGE.length ? prevIndex + 1 : 0
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : PACKAGE.length - CARDS_PER_VIEW
        );
    };

    useEffect(() => {
        const interval = setInterval(handleNext, AUTO_SLIDE_INTERVAL);
        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]); // Re-run when currentIndex changes

    const totalSteps = PACKAGE.length - CARDS_PER_VIEW + 1;
    const progressPercentage = ((currentIndex + 1) / totalSteps) * 100;

    return (
        <div className="mt-4 flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 bg-gray-50">
            <img
                className="w-full sm:w-10/12 md:w-3/12 lg:w-3/12 xl:w-4/12
                h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[39vh] xl:h-[90vh] hidden lg:block object-cover"
                src={LEFTIMAGE}
                alt="Black Placeholder"
            />

            <div className="w-full">
                <div className="m-8">
                    <h2 className="text-3xl w-[90%] sm:text-4xl md:text-5xl font-semibold text-gray-500">
                        We'll help you plan an
                    </h2>
                    <h1 className="text-3xl w-[90%] sm:text-4xl md:text-5xl font-semibold text-gray-500 py-3">
                        unforgettable
                        <span className="text-primarycolor"> India holiday</span>
                    </h1>

                    <h2 className="text-xl text-gray-500 w-[90%]">
                        Let us organize a perfect India experience for you.
                    </h2>
                </div>

                <div className="relative w-full scroll-smooth">
                    <div className="flex gap-9 lg:gap-5 justify-evenly overflow-hidden px-4 lg:px-0 py-5 scroll-smooth">
                        {PACKAGE.slice(currentIndex, currentIndex + CARDS_PER_VIEW).map((data, index) => (
                            <div key={index} className="bg-white shadow-md rounded-md relative overflow-visible flex-shrink-0 w-[90%] sm:w-[45%] lg:w-52">
                                <div className="p-4 text-gray-700 h-40 lg:h-[210px] relative z-10">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h1 className="text-lg lg:text-xl text-gray-600 font-medium">{data.name}</h1>
                                            <h2 className="text-sm lg:text-base text-gray-500">{data.package}</h2>
                                        </div>
                                        <div>
                                            <img src={data?.image} alt="" className="w-6 h-6 lg:w-7 lg:h-7 object-cover" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -left-4 sm:-left-6 lg:-left-8 top-16 lg:top-[85px] transform z-20">
                                    <img src={data?.image} alt="" className="w-32 h-20 sm:w-40 sm:h-24 lg:w-52 lg:h-28 object-cover rounded" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center mt-32">
                        <div className="absolute flex w-full lg:w-96 bottom-0 top-40 sm:top-[60%] lg:top-60 justify-center items-center px-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className={`bg-white text-black px-3 sm:px-4 py-2 rounded-md ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                <FaArrowLeftLong />
                            </button>

                            <div className="flex-1 mx-3 sm:mx-4 relative">
                                <div className="absolute inset-0 bg-gray-200 rounded-full h-2">
                                    <div
                                        className="absolute top-0 left-0 h-full bg-primarycolor rounded-lg transition-all"
                                        style={{ width: `${progressPercentage}%` }}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={handleNext}
                                disabled={currentIndex + CARDS_PER_VIEW >= PACKAGE.length}
                                className={`bg-white text-black px-3 sm:px-4 py-2 rounded-md ${currentIndex + CARDS_PER_VIEW >= PACKAGE.length ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageContent;
