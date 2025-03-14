import React, { useEffect } from 'react'
import HomeInageContent from './HomeInageContent'
import ContantImageContent from './ContantImageContent'
import { TiMessages } from "react-icons/ti";
import { FaEarthAmericas } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';

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
                <div className='flex justify-center items-center min-h-screen bg-gray-50'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-8 sm:py-10  xl:py-16">
                        <div className='col-span-1 md:col-span-4'>
                            <div>
                                <ContactDetails />
                            </div>
                        </div>
                        <div className='border rounded-xl col-span-1 md:col-span-6'>
                            <ContactForm />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContactUs

