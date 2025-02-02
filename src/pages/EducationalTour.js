import React from 'react'
import ContantImageContent from '../components/ContantImageContent'
import ContactForm from '../components/ContactForm'
import ContactDetails from '../components/ContactDetails'
import { Link } from 'react-router-dom'

const EducationalTour = () => {
    return (
        <>
            <div className="relative">
                <div className="absolute left-[%] bottom-[250px] sm:left-[10%] sm:bottom-[200px] md:left-[22%] md:bottom-[250px] z-20 text-white">
                    <div>
                        <ContantImageContent />
                    </div>
                </div>
            </div>

            <div className="p-5 md:p-10">
                <div>
                    <h1 className='text-2xl font-bold '>Educational Tours</h1>

                    <h1 className='text-xl font-semibold'>
                        10 Years of Expertise in Curating Life-Changing Educational Excursions
                    </h1>
                    <p>
                        We have extended our l0years of expertise in organizing educational tours by crafting tailor-made excursions for schools, universities, and institutions who are keen on educational trips abroad to India, Nepal, Bhutan, Sri Lanka, and the Maldives.
                        Our educational tours provide a unique opportunity for students to experience different cultures, engage in hands-on learning, and develop life skills such as leadership, teamwork, self-confidence, and the ability to reflect on their own beliefs, attitudes, and priorities in life. These transformative experiences help students become more aware of the world around them and their place within it.
                    </p>
                </div>

                <div className="relative mt-10">
                    <img
                        className="h-[30rem] md:h-[26rem] rounded-2xl w-full object-cover"
                        src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=2882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />

                    <div className="absolute top-0 left-0 w-full h-full grid grid-cols-1 md:grid-cols-12 p-6 bg-black/40 text-white">
                        <div className="m-3 col-span-1 md:col-span-4 flex justify-center md:block">
                            <img
                                className="rounded-xl w-32 md:w-full"
                                src="https://images.unsplash.com/photo-1484766280341-87861644c80d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="fr"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-8 m-3">
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold">Goa Beach Getaway</h1>
                                <h1 className="text-lg md:text-xl"><strong>Duration:</strong> 4 Days / 3 Nights</h1>
                                <strong className="text-lg md:text-xl mb-2 block">Highlights:</strong>
                            </div>
                            <h1 className="text-sm md:text-base">
                                • Beach parties, water sports, and sunset cruises.<br />
                                • Visit to historical sites like Fort Aguada and Basilica of Bom Jesus.<br />
                                • Group bonfire and music nights.<br />
                            </h1>
                            <div className="mt-3">
                                <h1 className="text-lg md:text-2xl">
                                    <strong>Price:</strong> Starting at <span className="text-red-500">₹ 6,499</span> per student
                                </h1>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <button className="bg-primarycolor p-2 rounded-md text-sm md:text-base">BOOK NOW</button>
                                <Link to={'/itinery'} className="bg-red-600 p-2 rounded-md text-sm md:text-base" onClick={() => { window.scroll(0, 0) }}>VIEW ITINERARY</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mt-10">
                    <img
                        className="h-[30rem] md:h-[26rem] rounded-2xl w-full object-cover"
                        src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=2882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />

                    <div className="absolute top-0 left-0 w-full h-full grid grid-cols-1 md:grid-cols-12 p-6 bg-black/40 text-white">
                        <div className="m-3 col-span-1 md:col-span-4 flex justify-center md:block">
                            <img
                                className="rounded-xl w-32 md:w-full"
                                src="https://images.unsplash.com/photo-1484766280341-87861644c80d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="fr"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-8 m-3">
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold">Goa Beach Getaway</h1>
                                <h1 className="text-lg md:text-xl"><strong>Duration:</strong> 4 Days / 3 Nights</h1>
                                <strong className="text-lg md:text-xl mb-2 block">Highlights:</strong>
                            </div>
                            <h1 className="text-sm md:text-base">
                                • Beach parties, water sports, and sunset cruises.<br />
                                • Visit to historical sites like Fort Aguada and Basilica of Bom Jesus.<br />
                                • Group bonfire and music nights.<br />
                            </h1>
                            <div className="mt-3">
                                <h1 className="text-lg md:text-2xl">
                                    <strong>Price:</strong> Starting at <span className="text-red-500">₹ 6,499</span> per student
                                </h1>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <button className="bg-primarycolor p-2 rounded-md text-sm md:text-base">BOOK NOW</button>
                                <Link to={'/itinery'} className="bg-red-600 p-2 rounded-md text-sm md:text-base" onClick={() => { window.scroll(0, 0) }}>VIEW ITINERARY</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative mt-10">
                    <img
                        className="h-[30rem] md:h-[26rem] rounded-2xl w-full object-cover"
                        src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=2882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />

                    <div className="absolute top-0 left-0 w-full h-full grid grid-cols-1 md:grid-cols-12 p-6 bg-black/40 text-white">
                        <div className="m-3 col-span-1 md:col-span-4 flex justify-center md:block">
                            <img
                                className="rounded-xl w-32 md:w-full"
                                src="https://images.unsplash.com/photo-1484766280341-87861644c80d?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="fr"
                            />
                        </div>
                        <div className="col-span-1 md:col-span-8 m-3">
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold">Goa Beach Getaway</h1>
                                <h1 className="text-lg md:text-xl"><strong>Duration:</strong> 4 Days / 3 Nights</h1>
                                <strong className="text-lg md:text-xl mb-2 block">Highlights:</strong>
                            </div>
                            <h1 className="text-sm md:text-base">
                                • Beach parties, water sports, and sunset cruises.<br />
                                • Visit to historical sites like Fort Aguada and Basilica of Bom Jesus.<br />
                                • Group bonfire and music nights.<br />
                            </h1>
                            <div className="mt-3">
                                <h1 className="text-lg md:text-2xl">
                                    <strong>Price:</strong> Starting at <span className="text-red-500">₹ 6,499</span> per student
                                </h1>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <button className="bg-primarycolor p-2 rounded-md text-sm md:text-base">BOOK NOW</button>
                                <Link to={'/itinery'} className="bg-red-600 p-2 rounded-md text-sm md:text-base" onClick={() => { window.scroll(0, 0) }}>VIEW ITINERARY</Link>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className='flex justify-center items-center min-h-screen bg-gray-50'>
                    <div className='grid grid-cols-1 md:grid-cols-12 px-6 md:px-32 gap-8 md:gap-16 py-12'>
                        <div className='col-span-1 md:col-span-4'>
                            <div>
                                <ContactDetails />
                            </div>
                        </div>
                        <div className='border rounded-xl col-span-1 md:col-span-6'>
                            <ContactForm />
                        </div>
                    </div>
                </div> */}
                <>
                    <div className='bg-gray-50'>
                        <div className="relative">
                            <div className="absolute left-[%] bottom-[250px] sm:left-[10%] sm:bottom-[200px] md:left-[22%] md:bottom-[250px] z-20 text-white">
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


            </div>
        </>
    )
}

export default EducationalTour
