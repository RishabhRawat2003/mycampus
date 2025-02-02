import React from 'react'
import Icon1 from '../Images/safari1.png'
import Icon2 from '../Images/safari2.png'
import Icon4 from '../Images/safari4.png'


function WhyCampusSafari() {
    const data = [
        {
            icon: Icon1,
            title: "13 years of expertis",
        },
        {
            icon: Icon2,
            title: "Expert Guides",
        },
        {
            icon: Icon1,
            title: "On tour Action Plane",
        },
        {
            icon: Icon4,
            title: "Safe Accommodation",
        }
    ]
    return (
        <div className='w-full h-auto flex flex-col px-5 md:px-10 lg:px-20 py-10 xl:py-20'>
            <h1 className='text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#49545A]'>
                Why Campus Safari
            </h1>
            <div className='w-full h-auto flex flex-wrap justify-center items-center gap-6 mt-10 lg:mt-20'>
                {
                    data.map((item, index) => (
                        <div key={index} className='w-full md:w-1/2 lg:w-[300px] flex flex-col justify-center items-center'>
                            <div className='w-20 h-20 xl:w-32 xl:h-32 flex justify-center items-center'>
                                <img src={item.icon} alt={item.title} className='w-full h-full' />
                            </div>
                            <h1 className='text-center text-lg xl:text-2xl font-bold text-[#00A5CF] mt-5'>
                                {item.title}
                            </h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhyCampusSafari