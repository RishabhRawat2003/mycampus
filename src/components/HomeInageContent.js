import React, { useEffect, useState } from 'react';
import Video from '../Images/campus.mp4'

const RollingNumber = ({ targetNumber, duration, stepTime }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        const totalSteps = duration / stepTime;
        const stepValue = targetNumber / totalSteps;

        const interval = setInterval(() => {
            setCurrentNumber(prevNumber => {
                if (prevNumber >= targetNumber) {
                    clearInterval(interval);
                    return targetNumber;
                }
                return Math.min(prevNumber + stepValue, targetNumber);
            });
        }, stepTime);

        return () => clearInterval(interval);
    }, [targetNumber, duration, stepTime]);

    return <h1 className="text-5xl font-bold font-montserrat">{Math.floor(currentNumber)}+</h1>
};

const HomeInageContent = () => {
    return (
        <>
            <div className='relative w-screen h-screen bg-gray-300'>
                <video className='w-full h-full object-cover' autoPlay loop muted>
                    <source src={Video} type="video/mp4" />
                </video>
                <div className="absolute bottom-0 px-6 text-white sm:px-10 md:px-14 py-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold w-full md:w-6/12">
                        Discover Your Next <span className="text-primarycolor">Adventure</span> With Us
                    </h1>
                    <h3 className="my-4 text-lg sm:text-xl md:text-2xl font-medium w-full md:w-[60%] text-gray-300">
                        Affordable travel experiences for students and young explorers.
                    </h3>

                    <div className="py-4 flex flex-col sm:flex-row gap-4">
                        <button className="py-2 px-6 text-white bg-white bg-opacity-35 text-lg md:text-xl rounded font-medium">
                            Find Your Trip
                        </button>
                        <button className="py-2 px-6 text-white bg-primarycolor text-lg md:text-xl rounded font-medium">
                            Learn more
                        </button>
                    </div>

                    <div className='hidden sm:flex gap-2 mt-10 flex-col sm:flex-row'>
                        <div className='border-[1px] border-gray-400 p-2 w-full sm:w-[160px] bg-white bg-opacity-35'>
                            <p>Reviews</p>
                            <h1 className='text-4xl font-bold'><RollingNumber targetNumber={1984} duration={5000} stepTime={20} /></h1>
                        </div>
                        <div className='border-[1px] border-gray-400 p-2 w-full sm:w-[140px] bg-white bg-opacity-35'>
                            <p>Destination</p>
                            <h1 className='text-4xl font-bold'><RollingNumber targetNumber={45} duration={5000} stepTime={10} /></h1>
                        </div>
                        <div className='border-[1px] border-gray-400 p-2 bg-white bg-opacity-35'>
                            <p>Satisfied Travellers</p>
                            <h1 className='text-4xl font-bold'><RollingNumber targetNumber={10000} duration={5000} stepTime={20} /></h1>
                        </div>
                        <div className='border-[1px] border-gray-400 p-2 bg-white bg-opacity-35'>
                            <p>Experience</p>
                            <h1 className='text-4xl font-bold flex items-center'><RollingNumber targetNumber={4} duration={1000} stepTime={5} /> Years</h1>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default HomeInageContent;
