import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Itinery = () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    },[])

    return (
        <>
            <div className="p-5 md:p-10">
                <div>
                    <h1 className='text-2xl font-bold'>GOA BEACH GATEWAY</h1>
                </div>

                <div className="flex gap-3 mt-5">
                    <Link to={'/itinery'} className="bg-red-600 p-2 rounded-md text-sm md:text-base text-white">VIEW ITINERARY</Link>
                    <button className="bg-primarycolor text-white p-2 rounded-md text-sm md:text-base">TRIP HIGHLIGHTS</button>
                </div>

                <div className='mt-10'>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                        <div className="md:col-span-4">
                            <img className="h-96 rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1718721809995-0303399cccd2?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                        <div className="md:col-span-4 space-y-3">
                            <h1 className="text-2xl text-gray-600"><strong>Duration:</strong> 3 Days 4 Nights</h1>
                            <h1 className="text-2xl text-gray-600"><strong>Best Time:</strong> June, July, August</h1>
                            <h1 className="text-2xl text-gray-600"><strong>Region:</strong> South India</h1>
                            <h1 className="text-2xl text-gray-600"><strong>Price:</strong> INR 1736</h1>
                        </div>

                    </div>

                </div>

                <div className="mt-3">
                    <h1 className="text-2xl md:text-3xl font-bold">Overview</h1>

                    <h1 className="text-lg md:text-xl font-bold mt-2">
                        Sun, Sand, and Sea - Discover the Ultimate Beach Experience!
                    </h1>

                    <p className="text-base md:text-xl mt-2">
                        Goa, known for its beautiful beaches, vibrant nightlife, and rich culture, offers a perfect escape for students, families, and corporate groups looking to unwind and explore. From its laid-back beach vibe to adrenaline-pumping water sports, Goa is the ultimate destination for relaxation and adventure.
                    </p>
                </div>


                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                        <div className="md:col-span-6 space-y-3">
                            <h1 className="text-2xl font-bold">Day 01</h1>
                            <h1 className="text-2xl">Arrival in Goa - Explore North Goa Beaches</h1>
                            <h1 className="text-xl">
                                Drive: 45 minutes
                                <br />
                                Time: 03 hrs
                                <br />
                                Arrive at God's Dabolim Airport and transfer to your hotel.
                                Once you settle in, head out to explore North Goa beaches, including Baga, Anjuna, and Candolim. These beaches are famous for their vibrant nightlife, beach clubs, and adventure sports. Enjoy a relaxing day lounging on the beach, trying water sports like parasailing or jet-skiing, or shopping at the local markets.
                                Evening: Enjoy dinner at a beachside shack with live music and delicious Goan cuisine.
                            </h1>
                        </div>

                        <div className="md:col-span-6">
                            <img className="h-96 rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1718721809995-0303399cccd2?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                    </div>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                        <div className="md:col-span-6 space-y-3">
                            <h1 className="text-2xl font-bold py-2">Day 02</h1>
                            <img className="h-96 rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1718721809995-0303399cccd2?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                        <div className="md:col-span-6 space-y-3">
                            <h1 className="text-2xl mt-8">Arrival in Goa - Explore North Goa Beaches</h1>
                            <h1 className="text-xl">
                                Drive: 45 minutes
                                <br />
                                Time: 03 hrs
                                <br />
                                Arrive at God's Dabolim Airport and transfer to your hotel.
                                Once you settle in, head out to explore North Goa beaches, including Baga, Anjuna, and Candolim. These beaches are famous for their vibrant nightlife, beach clubs, and adventure sports. Enjoy a relaxing day lounging on the beach, trying water sports like parasailing or jet-skiing, or shopping at the local markets.
                                Evening: Enjoy dinner at a beachside shack with live music and delicious Goan cuisine.
                            </h1>
                        </div>

                    </div>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                        <div className="md:col-span-6 space-y-3">
                            <h1 className="text-2xl font-bold">Day 03</h1>
                            <h1 className="text-2xl">Arrival in Goa - Explore North Goa Beaches</h1>
                            <h1 className="text-xl">
                                Drive: 45 minutes
                                <br />
                                Time: 03 hrs
                                <br />
                                Arrive at God's Dabolim Airport and transfer to your hotel.
                                Once you settle in, head out to explore North Goa beaches, including Baga, Anjuna, and Candolim. These beaches are famous for their vibrant nightlife, beach clubs, and adventure sports. Enjoy a relaxing day lounging on the beach, trying water sports like parasailing or jet-skiing, or shopping at the local markets.
                                Evening: Enjoy dinner at a beachside shack with live music and delicious Goan cuisine.
                            </h1>
                        </div>

                        <div className="md:col-span-6">
                            <img className="h-96 rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1718721809995-0303399cccd2?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                    </div>
                </div>


                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                        <div className="md:col-span-6 space-y-3">
                            <h1 className="text-2xl font-bold py-2">Day 04</h1>
                            <img className="h-96 rounded-xl w-full object-cover" src="https://images.unsplash.com/photo-1718721809995-0303399cccd2?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                        <div className="md:col-span-6 space-y-3">
                            <h1 className="text-2xl mt-8">Arrival in Goa - Explore North Goa Beaches</h1>
                            <h1 className="text-xl">
                                Drive: 45 minutes
                                <br />
                                Time: 03 hrs
                                <br />
                                Arrive at God's Dabolim Airport and transfer to your hotel.
                                Once you settle in, head out to explore North Goa beaches, including Baga, Anjuna, and Candolim. These beaches are famous for their vibrant nightlife, beach clubs, and adventure sports. Enjoy a relaxing day lounging on the beach, trying water sports like parasailing or jet-skiing, or shopping at the local markets.
                                Evening: Enjoy dinner at a beachside shack with live music and delicious Goan cuisine.
                            </h1>
                        </div>

                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="text-2xl font-bold">Trip Highlights</h1>

                    <h1 className="text-lg md:text-2xl mt-4">
                        <strong>• Vibrant Beaches:</strong> <br />
                        Explore the best of God's beaches, from bustling North Goa to the serene South Goa.<br />

                        <strong>• Adventure & Water Sports:</strong> <br />
                        Engage in thrilling water sports, including parasailing, scuba diving, and dolphin watching.<br />

                        <strong>• Cultural and Historical Exploration:</strong> <br />
                        Discover Goa's rich Portuguese heritage, visit historic churches, forts, and spice plantations.<br />

                        <strong>• Local Cuisine:</strong> <br />
                        Enjoy authentic Goan seafood and traditional dishes like Xacuti, Bebinca, and Feni.
                    </h1>
                </div>

            </div>


        </>
    )
}

export default Itinery
