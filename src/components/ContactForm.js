import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

const ContactForm = () => {
    const location = useLocation();
    const packageName = location.state?.packageName || '';

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(packageName);

    useEffect(() => {
        if (!packageName) {
            fetchPackages();
        }
    }, [packageName]);

    const fetchPackages = async () => {
        try {
            const response = await axios.get(`${apiUrl}/api/v1/package/get-packages`);
            setPackages(response.data.packages);
        } catch (err) {
            setError('Failed to fetch packages');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10}$/;
        if (!formData.name.trim()) return 'Name is required';
        if (!emailRegex.test(formData.email)) return 'Invalid email address';
        if (!phoneRegex.test(formData.phone)) return 'Phone number must be 10 digits';
        if (!selectedPackage) return 'Please select a package';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post(`${apiUrl}/api/v1/admin/contact-admin`, {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                packageName: selectedPackage,
                message: formData.message
            });
            setSuccess(response.data.message);
            alert(response.data.message);
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            setError(err.response?.data?.error || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='p-8'>
            <h1 className='text-2xl md:text-3xl font-medium text-gray-600'>
                Have a Destination in Mind? We've Got the Expertise. Let's Explore Together!
            </h1>
            <p className='text-sm text-gray-600 my-2'>Tell us more about yourself and what you've got in mind.</p>

            {error && <p className='text-red-500 text-sm'>{error}</p>}
            {success && <p className='text-green-500 text-sm'>{success}</p>}

            <form onSubmit={handleSubmit}>
                <div className='py-2'>
                    <label className='text-sm text-gray-600'>Full Name</label>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='w-full p-2 bg-gray-200 border-gray-300 focus:border-black focus:outline-none text-sm rounded-md'
                        placeholder='Enter Full Name'
                        required
                    />
                </div>

                <div className='py-2'>
                    <label className='text-sm text-gray-600'>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='w-full p-2 bg-gray-200 border-gray-300 focus:border-black focus:outline-none text-sm rounded-md'
                        placeholder='Enter Email Address'
                        required
                    />
                </div>

                <label className='text-sm text-gray-600'>Phone Number</label>
                <div className='flex flex-wrap gap-4'>
                    <div className='w-full sm:w-auto flex-1 md:flex-none md:w-2/12'>
                        <input
                            type='text'
                            value='+91'
                            className='w-full p-2 bg-gray-200 border-gray-300 text-center focus:border-black focus:outline-none text-sm rounded-md'
                            disabled
                        />
                    </div>
                    <div className='w-full sm:w-auto flex-1 md:flex-none md:w-9/12'>
                        <input
                            type='text'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            className='w-full p-2 bg-gray-200 border-gray-300 focus:border-black focus:outline-none text-sm rounded-md'
                            placeholder='1234567890'
                            required
                        />
                    </div>
                </div>

                <div className='py-2'>
                    <label className='text-sm text-gray-600'>Package Name</label>
                    {packageName ? (
                        <input
                            type='text'
                            value={selectedPackage}
                            className='w-full p-2 bg-gray-200 border-gray-300 focus:border-black focus:outline-none text-sm rounded-md'
                            disabled
                        />
                    ) : (
                        <select
                            className='w-full p-2 bg-gray-200 border-gray-300 focus:border-black focus:outline-none text-sm rounded-md'
                            value={selectedPackage}
                            onChange={(e) => setSelectedPackage(e.target.value)}
                            required
                        >
                            <option value=''>Select a Package</option>
                            {packages.map((pkg) => (
                                <option key={pkg._id} value={pkg.packageName}>
                                    {pkg.packageName}
                                </option>
                            ))}
                        </select>
                    )}
                </div>

                <div className='py-2 mt-2'>
                    <label className='text-sm text-gray-600'>Message</label>
                    <textarea
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        className='w-full p-2 bg-gray-200 resize-none border-gray-300 focus:border-black focus:outline-none text-sm rounded-md h-20'
                        placeholder='Enter Content'
                    />
                </div>

                <div className='my-4'>
                    <button
                        type='submit'
                        className='bg-gray-600 w-full text-white p-2 rounded-lg'
                        disabled={loading}
                    >
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
