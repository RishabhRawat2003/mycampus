import React from 'react'
import CorparateImageContent from './CorparateImageContent';
import { CORPORATE_CULTURE_IMAGE, CORPORATEIMAGE, DESTINAITONIMAGE, destinations, destinationsByRegion } from '../utils/Constants';
import ChooseUs from './ChooseUs';
import PackageImageContent from './PackageImageContent';

const Packages = () => {
    return (
        <>

            <div className="relative">
                <div className="absolute left-0 bottom-[180px] z-20 text-white">
                    <div>
                        <PackageImageContent />
                    </div>
                </div>
            </div>
            <div className="p-5 md:p-10">
                <h1 className="text-xl md:text-3xl font-bold text-gray-700 tracking-wide text-center md:text-left">
                    Historical & Culture Tour
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-4 mt-3">
                    <div className="relative pe-4">
                        <img
                            className="w-full rounded-xl  h-[300px] md:h-[500px] object-cover"
                            src={DESTINAITONIMAGE}
                            alt=""
                        />
                        <div className="absolute inset-0 ps-5 pt-3 md:ps-9 md:pt-5 top-[70%] md:top-72">
                            <h1 className="text-white text-lg md:text-2xl font-semibold w-40 md:w-64">
                                Corporate Leadership Retreat-Goa
                            </h1>
                            <p className="text-white text-sm md:text-base">20+ Packages</p>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                            {destinationsByRegion && destinationsByRegion?.map((data, index) => (
                                <div key={index} className="relative pe-4">
                                    <img
                                        className="w-full h-36 md:h-[240px] object-cover"
                                        src={data?.image}
                                        alt=""
                                    />
                                    <div className="absolute inset-0 p-2 md:p-3 top-20 md:top-36">
                                        <h1 className="text-white text-sm md:text-md font-bold w-24 md:w-40">
                                            {data?.name}
                                        </h1>
                                        <p className="text-white text-xs md:text-sm">20{data?.packages}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                <div className="">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wide mb-5 text-center md:text-left mt-10 md:mt-10">
                        Our Popular  Tour Packages
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-5 lg:gap-0 justify-center">
                        {destinations.map((destination, index) => (
                            <div
                                key={index}
                                className="relative w-full h-[300px] sm:w-[240px] overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t flex flex-col justify-end text-white p-4">
                                    <h2 className="text-md font-semibold mb-1">{destination.name}</h2>
                                    <p className="text-sm">{destination.packages}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* cultural and heritage Tour */}

                <div className="mt-5">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-700 tracking-wide  text-center md:text-left">
                        Adventure & Nature Trip
                    </h1>
                    <div className="flex gap-4 flex-wrap justify-between md:justify-between">
                        {CORPORATEIMAGE.map((elm, index) => {
                            return (
                                <div
                                    key={index}
                                    className="w-full sm:w-[300px] md:w-[300px] border border-gray-300 rounded-b-lg mr-0 sm:mr-3 mt-3 flex flex-col"
                                >
                                    <img
                                        src={elm}
                                        alt=""
                                        className="w-full h-[200px] rounded-b-lg object-cover"
                                    />
                                    <div className="flex-grow flex flex-col justify-between p-2">
                                        <h1 className="font-semibold w-52 text-md sm:text-md">
                                            Spiritual Heritage of Varanasi
                                        </h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                {/* indias cultural and history */}
                <div className="mt-10 ">
                    <div className="text-4xl font-bold py-6 w-[800px]">
                        <h1 className="text-3xl sm:text-4xl  font-semibold text-gray-700 tracking-wide">Discover India's Wild Side with Our Exclusive Wildlife Tour Packages</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                        <div className="h-[300px] sm:h-[400px] lg:h-[720px] w-full lg:w-[45%]">
                            <img
                                src={CORPORATE_CULTURE_IMAGE}
                                alt="Amazing India"
                                className="h-full w-full object-cover shadow-lg"
                            />
                        </div>

                        <div className="lg:w-[50%]">
                            <p className="text-gray-600 text-md md:text-md sm:text-xl font-normal leading-relaxed tracking-wider">
                                Some of the most remarkable species in the world may be found in India, which has a variety of ecosystems, from large meadows and marshes to rough mountains and deep forests.
                                You will experience an amazing voyage into this dynamic natural world with our India Wildlife Tour Packages, where you will see famous animals like the Asiatic lion, Bengal tiger, one-horned rhinoceros, and large elephants in their native environments. Every program, from exhilarating safaris to tranquil birding excursions, is made to provide a distinctive and engaging wildlife experience.

                                Under the guidance of seasoned naturalists, our excursions not only highlight India's biodiversity but also encourage environmentally conscious travel, guaranteeing that every trip respects and preserves the environment. Whether you love the outdoors, wildlife photography, or
                            </p>
                        </div>
                    </div>
                </div>


            </div>
            {/* coose us */}
            <ChooseUs />
        </>
    )
}

export default Packages
