import React from 'react'
import { blogsData } from '../utils/Constants'

function Blogs() {
    return (
        <div className='w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 py-10'>
            <h1 className='text-center font-bold text-xl text-[#49545A] md:text-3xl xl:text-5xl'>
                Our Latest Blog
            </h1>
            <div className='w-full h-auto grid grid-cols-1 sm:grid-cols-2 cursor-pointer lg:grid-cols-3 gap-4 lg:gap-8 my-8'>
                {
                    blogsData.slice(1).map((item, index) => (
                        <div key={index} className='w-full h-auto flex flex-col shadow-md border md:hover:shadow-2xl duration-500 ease-in-out rounded-xl overflow-hidden'>
                            <div className='w-full h-40 lg:h-80'>
                                <img src={item.image} alt="blog image" className='w-full h-full object-cover' />
                            </div>
                            <div className='p-3 w-full h-auto flex flex-col gap-3 lg:p-5'>
                                <h1 className='text-lg font-semibold lg:text-xl'>{item.title}</h1>
                                <p className='w-full h-auto text-[#49545A] text-sm lg:text-base'>{item.description.substring(0,300)}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
            <div className='w-full h-auto flex flex-col my-6 gap-8 xl:gap-14'>
                <h1 className='text-center font-bold text-xl text-[#49545A] md:text-3xl xl:text-5xl'>
                    {blogsData[0].title}
                </h1>
                <div className='w-full h-auto flex flex-col sm:flex-row md:gap-6 lg:gap-10 xl:px-10'>
                    <div className='w-full h-60 rounded-xl overflow-hidden sm:h-auto'>
                        <img src={blogsData[0].image} alt="blog image" className='w-full h-full object-cover' />
                    </div>
                    <div className='p-3 w-full h-auto flex flex-col gap-3 lg:p-5'>
                        <p className='w-full h-auto text-[#49545A] text-base md:text-lg xl:text-xl'>{blogsData[0].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs