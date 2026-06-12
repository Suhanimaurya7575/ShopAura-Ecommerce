import React from 'react'
import Hero from "../assets/components/Hero";
import LatestCollection from '../assets/components/LatestCollection';
import BestSeller from '../assets/components/BestSeller';
import OurPolicy from '../assets/components/OurPolicy';
import NewsLetterBox from '../assets/components/NewsLetterBox';

const Home = () => {
  return (
    <div>
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>
        <NewsLetterBox/>
    </div>
  )
}

export default Home