import React, { useEffect, useState } from 'react';
import HomeInageContent from './HomeInageContent';
import { BLACKIMAGE, PACKAGE } from '../utils/Constants';
import PackageContent from './PackageContent';
import BestDestination from './BestDestination';
import ByIntrest from './ByIntrest';
import AboutAmazing from './AboutAmazing';
import TrendingDestination from './TrendingDestination';
import InterNationalHolidayPack from './InterNationalHolidayPack';
import LatestTravel from './LatestTravel';
import ChooseUs from './ChooseUs';
import WhyCampusSafari from './WhyCampusSafari';

const Home = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <>
            <div className="relative">
                <div className='overflow-hidden'>
                    <HomeInageContent />
                </div>
            </div>

            <div className="">
                <PackageContent />
            </div>

            <div className="px-4 sm:px-6 md:px-8 lg:px-10">
                <BestDestination />
            </div>

            <div className="">
                <ByIntrest />
            </div>

            <div className="">
                <WhyCampusSafari />
            </div>

            <div className="">
                {/* <TrendingDestination /> */}
            </div>

            <div className="">
                {/* <InterNationalHolidayPack /> */}
            </div>

            <div className="">
                {/* <AboutAmazing /> */}
            </div>
            <div className="">
                <LatestTravel />
            </div>
            <div className="">
                <ChooseUs />
            </div>

        </>

    );
};

export default Home;


