import React from 'react';
import Image from 'next/image';

const BeautyLanding = () => {
  return (
    <div className="relative w-full min-h-screen bg-[#FFF5F5] flex items-center justify-center p-4">
      <div className="flex w-full max-w-7xl mx-auto items-center">
        {/* Left column with image and semi-circle */}
        <div className="w-1/4 relative">
          <div className="aspect-[3/4] rounded-t-full overflow-hidden bg-gray-300 relative">
            <Image src="/images/jar.jpg" alt="Beauty 1" layout="fill" objectFit="cover"/>
          </div>
          <div className="absolute -top-10 -left-10 w-1/2 h-1/2 text-green-600">
            <svg
              viewBox="0 0 100 50"
              className="w-full h-full"
              style={{ transform: 'rotate(180deg) rotateZ(-200deg)' }}
            >
              <path d="M0,50 A50,50 0 0,1 100,50" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Center column with text content */}
        <div className="w-1/2 px-8 text-center">
          <h2 className="text-sm text-green-700 mb-4">Alive every moment</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-green-900 mb-4">
            Beauty is all about <span className="relative inline-block">
              <h1  className="text-4xl md:text-5xl font-serif text-green-900 mb-4">you.</h1>
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q50 20 100 10" fill="none" stroke="#4CAF50" strokeWidth="4"/>
              </svg>
            </span>
          </h1>
          <p className="text-green-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis sed sapien in pretium. Donec tincidunt, quam.
          </p>
        </div>

        {/* Right column with image and semi-circle */}
        <div className="w-1/4 relative">
          <div className="aspect-[3/4] rounded-t-full overflow-hidden bg-gray-300 relative">
            <Image src="/images/flowerwomen.jpg" alt="Beauty 2" layout="fill" objectFit="cover"/>
          </div>
          <div className="absolute -bottom-10 -right-10 w-1/2 h-1/2 text-green-900">
            <svg
              viewBox="0 0 100 50"
              className="w-full h-full"
              style={{ transform: 'rotate(180deg) rotateZ(-45deg)' }}
            >
              <path d="M0,50 A50,50 0 0,1 100,50" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyLanding;