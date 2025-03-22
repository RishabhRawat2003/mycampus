import React, { useEffect } from 'react'
import HomeInageContent from './HomeInageContent'
import ContantImageContent from './ContantImageContent'
import { TiMessages } from "react-icons/ti";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <div className='bg-gray-50'>
                <div className="relative">
                    <div className="absolute  bottom-[250px] sm:left-[%] sm:bottom-[200px] md:left-[%] lg:left-[10%] xl:left-[22%] md:bottom-[450px] lg:bottom-[500px]
                    xl:bottom-[250px] z-20 text-white">
                        <div>
                            <ContantImageContent />
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center min-h-screen bg-gray-50 py-16'>
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 sm:py-10  xl:py-16">
                        <div className='col-span-1 md:col-span-4'>
                            <div>
                                <ContactDetails />
                            </div>
                        </div>
                        <div className='border rounded-xl col-span-1 md:col-span-6'>
                            <ContactForm />
                        </div>
                    </div> */}
                    <ContactForm />

                </div>

                <div className="bg-[#f0f8fa] py-10 lg:py-20 mb-10 px-5 md:px-20">
                    <div className="max-w-6xl mx-auto flex flex-col items-center gap-6 text-center">

                        {/* Noida Office */}
                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-[#1d2d5a] lg:text-3xl">Noida</h2>
                            <h3 className="font-semibold text-[#1d2d5a]">Corporate Office</h3>
                            <p className="flex items-start gap-2 text-gray-600">
                                📍 A24, First Floor, A Block, Sector 63, Noida
                            </p>
                            <p className="flex items-center gap-2 text-gray-600">
                                📞 +91 9289166556 , +91 9711414123
                            </p>
                            <p className="flex items-center gap-2 text-gray-600">
                                📧 Info@mycampussafari.com
                            </p>
                        </div>

                        {/* WhatsApp Chat Button */}
                        <a
                            href="https://wa.me/919289166556"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                        >
                            <FaWhatsapp className="text-2xl" />
                            Chat with us
                        </a>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactUs

