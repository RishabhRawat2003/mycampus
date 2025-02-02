import React from 'react'

const ContactForm = () => {
    return (
        <div className='p-8'>
            <h1 className='text-2xl md:text-3xl font-medium text-gray-600'>
                Have a Destination in Mind? We've Got the Expertise. Let's Explore Together!
            </h1>
            <p className='text-sm text-gray-600 my-2'>Tell us more about yourself and what you've got in mind.</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 py-2 mt-3'>
                <div>
                    <label htmlFor="" className='text-sm text-gray-600'>First Name</label>
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-200 border-gray-300 focus:border-black focus:outline-none px-2 text-sm rounded-md"
                        placeholder='Enter First Name'
                    />
                </div>

                <div>
                    <label htmlFor="" className='text-sm text-gray-600'>Last Name</label>
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-200 border-gray-300 focus:border-black focus:outline-none px-2 text-sm rounded-md"
                        placeholder='Enter Last Name'
                    />
                </div>
            </div>

            <div className='py-2'>
                <div>
                    <label htmlFor="" className='text-sm text-gray-600'>Email</label>
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-200 border-gray-300 focus:border-black focus:outline-none px-2 text-sm rounded-md"
                        placeholder='Enter Email Address'
                    />
                </div>
            </div>
            <label htmlFor="" className='text-sm text-gray-600'>Phone number</label>
            <div className="flex flex-wrap gap-4">

                <div className="w-full sm:w-auto flex-1 md:flex-none md:w-2/12">
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-200 border border-gray-300 text-center focus:border-black focus:outline-none text-sm rounded-md"
                        placeholder="+91 ˅"
                    />
                </div>

                <div className="w-full sm:w-auto flex-1 md:flex-none md:w-9/12 ">
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-200 border border-gray-300 focus:border-black focus:outline-none text-sm rounded-md"
                        placeholder="1234567890"
                    />
                </div>
            </div>


            <div className='py-2 mt-2'>
                <div>
                    <label htmlFor="" className='text-sm text-gray-600'>Message</label>
                    <input
                        type="text"
                        className="w-full p-2 bg-gray-200 border-gray-300 focus:border-black focus:outline-none px-2 text-sm rounded-md h-20"
                        placeholder='Enter Content'
                    />
                </div>

                <div className='my-4'>
                    <button className='bg-gray-600 w-full text-white p-2 rounded-lg'>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
