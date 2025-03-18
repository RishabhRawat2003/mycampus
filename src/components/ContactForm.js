import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;

const ContactForm = () => {
    const location = useLocation();
    const packageName = location.state?.packageName || "";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        iAmA: "",
        instituteName: "",
        totalPassengers: "",
        destination: "",
        programDuration: "",
        cityDeparture: "",
        minBudget: "",
        maxBudget: "",
        travelDate: "",
        departureDate: "",
        contactPreference: "",
        callTime: "",
        specificCallTime: "", // New field for specific time
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(packageName);

    useEffect(() => {
        if (!packageName) fetchPackages();
    }, [packageName]);

    const fetchPackages = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/v1/package/get-packages`);
            setPackages(response.data.packages);
        } catch (err) {
            setError("Failed to fetch packages");
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        try {
            const payload = { ...formData, packageName: selectedPackage };
            const response = await axios.post(`${apiUrl}/api/v1/admin/contact-admin`, payload);
            setSuccess(response.data.message);
            alert(response.data.message);
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                iAmA: "",
                instituteName: "",
                totalPassengers: "",
                destination: "",
                programDuration: "",
                cityDeparture: "",
                minBudget: "",
                maxBudget: "",
                travelDate: "",
                departureDate: "",
                contactPreference: "",
                callTime: "",
                specificCallTime: "", // Reset specific time
            });
        } catch (err) {
            setError(err.response?.data?.error || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 md:p-12 max-w-4xl mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center mb-4">
                Have a Destination in Mind? Let's Explore Together!
            </h1>
            <p className="text-sm text-gray-600 text-center mb-6">
                Tell us more about yourself and what you've got in mind.
            </p>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {success && <p className="text-green-500 text-sm text-center">{success}</p>}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                    <label className="text-sm text-gray-600">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Enter your name"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="text-sm text-gray-600">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>

                {/* I am a */}
                <div>
                    <label className="text-sm text-gray-600">I am a</label>
                    <select
                        name="iAmA"
                        value={formData.iAmA}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        required
                    >
                        <option value="">Select...</option>
                        <option value="Student">Student</option>
                        <option value="Educator">Educator</option>
                        <option value="Parent">Parent</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                {/* Institute Name */}
                <div>
                    <label className="text-sm text-gray-600">Institute Name</label>
                    <input
                        type="text"
                        name="instituteName"
                        value={formData.instituteName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Enter institute name"
                    />
                </div>

                {/* Total Passengers */}
                <div>
                    <label className="text-sm text-gray-600">Total Passengers</label>
                    <input
                        type="number"
                        name="totalPassengers"
                        value={formData.totalPassengers}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Enter total passengers"
                        min="1"
                        required
                    />
                </div>

                {/* Destination */}
                <div>
                    <label className="text-sm text-gray-600">Destination</label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Enter destination"
                        required
                    />
                </div>

                {/* Program Duration */}
                <div>
                    <label className="text-sm text-gray-600">Program Duration</label>
                    <select
                        name="programDuration"
                        value={formData.programDuration}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        required
                    >
                        <option value="">Select duration</option>
                        <option value="1 week">1 Week</option>
                        <option value="2 weeks">2 Weeks</option>
                        <option value="3 weeks">3 Weeks</option>
                        <option value="4 weeks">4 Weeks</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* City of Departure */}
                <div>
                    <label className="text-sm text-gray-600">City of Departure</label>
                    <input
                        type="text"
                        name="cityDeparture"
                        value={formData.cityDeparture}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Enter city of departure"
                        required
                    />
                </div>

                {/* Min Budget */}
                <div>
                    <label className="text-sm text-gray-600">Min Budget (₹)</label>
                    <input
                        type="number"
                        name="minBudget"
                        value={formData.minBudget}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Enter min budget"
                        required
                    />
                </div>

                {/* Max Budget */}
                <div>
                    <label className="text-sm text-gray-600">Max Budget (₹)</label>
                    <input
                        type="number"
                        name="maxBudget"
                        value={formData.maxBudget}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        placeholder="Enter max budget"
                        required
                    />
                </div>

                {/* Travel Date */}
                <div>
                    <label className="text-sm text-gray-600">Travel Date</label>
                    <input
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        required
                    />
                </div>

                {/* Departure Date */}
                <div>
                    <label className="text-sm text-gray-600">Departure Date</label>
                    <input
                        type="date"
                        name="departureDate"
                        value={formData.departureDate}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        required
                    />
                </div>

                {/* Contact Preference */}
                <div>
                    <label className="text-sm text-gray-600">How would you like to be contacted?</label>
                    <select
                        name="contactPreference"
                        value={formData.contactPreference}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        required
                    >
                        <option value="">Select preference</option>
                        <option value="Phone">Phone</option>
                        <option value="Email">Email</option>
                    </select>
                </div>

                {/* Call Time */}
                <div>
                    <label className="text-sm text-gray-600">When can we call?</label>
                    <select
                        name="callTime"
                        value={formData.callTime}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100"
                        required
                    >
                        <option value="">Select time</option>
                        <option value="Working Hours">Working Hours</option>
                        <option value="Specific Time">Specific Time</option>
                    </select>
                </div>

                {/* Specific Call Time (Conditional) */}
                {formData.callTime === "Specific Time" && (
                    <div className="col-span-1 md:col-span-2">
                        <label className="text-sm text-gray-600">Specific Call Time</label>
                        <input
                            type="time"
                            name="specificCallTime"
                            value={formData.specificCallTime}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-md bg-gray-100"
                            required
                        />
                    </div>
                )}
                {/* Message */}
                <div className="col-span-1 md:col-span-2">
                    <label className="text-sm text-gray-600">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded-md bg-gray-100 resize-none h-20"
                        placeholder="Enter your message"
                    />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                        disabled={loading}
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;