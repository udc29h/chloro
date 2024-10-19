"use client";

import React from 'react';
import LeftContent from './LeftContent';
import RightCarousel from './RightContent';

const HeroSection = () => {
  return (
    <div className="bg-darkgreen text-white flex flex-col md:flex-row " style={{height:"100vh"}}>
      <div className="w-full md:w-1/2 p-8">
        <LeftContent />
      </div>
      <div className="w-full md:w-1/2">
        <RightCarousel/>
      </div>
    </div>
  );
};

export default HeroSection;