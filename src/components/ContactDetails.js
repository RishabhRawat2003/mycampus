import React from 'react'
import { FaEarthAmericas } from 'react-icons/fa6'
import { MdCall } from 'react-icons/md'
import { TiMessages } from 'react-icons/ti'

const ContactDetails = () => {
    return (
        <div className="p-5 flex flex-col justify-center md:justify-center md:items-center gap-5 border rounded-xl bg-white">
            <div>
                <h1 className='font-medium text-gray-700 flex items-center gap-2'>
                    <TiMessages /> Chat on us
                </h1>
                <p className='text-sm text-gray-500 ms-6'>Our friendly team is here to help.</p>
                <p className='text-sm text-gray-500 ms-6'>@mail.address</p>
            </div>
            <div>
                <h1 className='font-medium text-gray-700 flex items-center gap-2'>
                    <FaEarthAmericas /> Visit us
                </h1>
                <p className='text-sm text-gray-500 ms-6'>Come and say hello at our office HQ.</p>
                <p className='text-sm text-gray-500 ms-6'>Here is the location.address.</p>
            </div>
            <div>
                <h1 className='font-medium text-gray-700 flex items-center gap-2'>
                    <MdCall /> Call us
                </h1>
                <p className='text-sm text-gray-500 ms-6'>Our friendly team is here to help.</p>
                <p className='text-sm text-gray-500 ms-6'>@mail.address</p>
            </div>
        </div>
    )
}

export default ContactDetails
