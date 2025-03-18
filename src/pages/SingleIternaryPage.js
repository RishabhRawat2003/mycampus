import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

function SingleIternaryPage() {
    const [packageData, setPackageData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const { id } = useParams();

    const fetchPackage = async () => {
        try {
            const response = await axios.post(`${apiUrl}/api/v1/package/get-single-package/${id}`);
            setPackageData(response.data.package);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchPackage();
    }, [id]);

    const handleNextImage = () => {
        setCurrentImageIndex(prev =>
            (prev + 1) % (packageData.images?.length || 1)
        );
    };

    const handlePrevImage = () => {
        setCurrentImageIndex(prev =>
            (prev - 1 + (packageData.images?.length || 1)) % (packageData.images?.length || 1)
        );
    };

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-gray-600">
            Loading...
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-red-500">
            Error: {error}
        </div>
    );

    if (!packageData) return (
        <div className="min-h-screen flex items-center justify-center text-xl font-semibold text-gray-600">
            Package not found
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
            {/* Package Header */}
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                {packageData.packageName}
            </h1>

            {/* Image Gallery */}
            {packageData.images?.length > 0 && (
                <div className="relative mb-8">
                    <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-xl shadow-lg">
                        <img
                            src={packageData.images[currentImageIndex]}
                            alt={`Package view ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Image Controls */}
                    <div className="absolute top-1/2 left-4 -translate-y-1/2">
                        <button
                            onClick={handlePrevImage}
                            className="bg-white/80 hover:bg-white/90 text-gray-800 p-2 px-4 rounded-full shadow-md transition-all"
                        >
                            &lt;
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2">
                        <button
                            onClick={handleNextImage}
                            className="bg-white/80 hover:bg-white/90 text-gray-800 p-2 px-4 rounded-full shadow-md transition-all"
                        >
                            &gt;
                        </button>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                        {currentImageIndex + 1} / {packageData.images.length}
                    </div>
                </div>
            )}

            {/* Package Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                {packageData.price && (
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-blue-600">Price</h3>
                        <p className="text-2xl font-bold text-green-500 mt-1 mb-6">
                            You can also customize your Package
                        </p>
                        <Link
                        to={'/contactus'}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                )}

                {packageData.duration && (
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-green-600">Duration</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                            {packageData.duration}
                        </p>
                    </div>
                )}

                {packageData.state && (
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-purple-600">State</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                            {packageData.state}
                        </p>
                    </div>
                )}

                {packageData.theme && (
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="text-sm font-medium text-orange-600">Theme</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">
                            {packageData.theme}
                        </p>
                    </div>
                )}
            </div>

            {/* Itinerary Schedule */}
            {packageData.schedule?.length > 0 && (
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Daily Schedule</h2>
                    <div className="space-y-6">
                        {packageData.schedule.map((day, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                    Day {index + 1}: {day.day}
                                </h3>
                                <div className="space-y-4">
                                    {day.activities?.map((activity, aIndex) => (
                                        <div key={aIndex} className="border-l-4 border-blue-500 pl-4">
                                            {activity.time && (
                                                <p className="text-sm font-medium text-gray-500">
                                                    {activity.time}
                                                </p>
                                            )}
                                            {activity.title && (
                                                <h4 className="text-lg font-semibold text-gray-800 mt-1">
                                                    {activity.title}
                                                </h4>
                                            )}
                                            {activity.details && (
                                                <p className="text-gray-600 mt-1">
                                                    {activity.details}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Bonus Activities */}
            {packageData.bonusActivities?.length > 0 && (
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Bonus Activities</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {packageData.bonusActivities.map((activity, index) => (
                            <li key={index} className="text-gray-700 text-lg">
                                {activity}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Book Now Button */}
            <div className="mt-8">
                <Link
                    to={'/contactus'}
                    state={{ packageName: packageData.packageName }}
                    className="bg-primarycolor text-white py-3 px-6 md:px-20 rounded-full font-semibold shadow-md hover:bg-blue-500 transition duration-300"

                >
                    Book Now
                </Link>
            </div>
        </div>
    );
}

export default SingleIternaryPage;