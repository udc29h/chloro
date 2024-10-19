import React from 'react';

const LeftContent = () => {
  return (
    <div className="flex flex-col justify-center h-full relative">
      {/* Whole new world section */}
      <div className="relative mb-8">
        {/* Line 2 image circling the "whole new" text */}
        <img
          src="/assets/lines2.png"
          alt="decorative underline"
          className="absolute  left-10 w-full max-w-xs z-0"  // Adjust positioning
        />
        <h1 className="font-cormorant text-4xl md:text-6xl font-light leading-tight relative z-10">
         A whole <span className="italic">new</span>
        </h1>
      </div>

      <h1 className="font-cormorant text-4xl md:text-6xl font-light leading-tight relative z-10">
          world, a whole <br />
        </h1>

      {/* World new look section */}
      <div className="relative mb-8">
        {/* Line 1 image circling the "new look" text */}
      
        <h1 className="text-4xl md:text-6xl font-light leading-tight relative z-10 font-cormorant">new look</h1>
        <img
          src="/assets/lines1.png"
          alt="decorative underline"
          className="absolute top-14 left-0 w-60 max-w-xs z-0"  // Adjust positioning
        />
      </div>

      {/* Paragraph text */}
      <p className="mb-8 pr-20 text-white font-sans font-extralight opacity-30">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar 
        dapibus leo.
      </p>

      {/* Button */}
      <button className="bg-white text-green-900 px-6 py-3 rounded-full w-fit hover:bg-green-100 transition duration-300">
        DISCOVER MORE
      </button>
    </div>
  );
};

export default LeftContent;
