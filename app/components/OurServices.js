import React from 'react';
import Image from 'next/image';

const ServiceCard = ({ image, title, description, titleColor }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-full aspect-square rounded-t-full overflow-hidden mb-4">
      <div className="w-full h-full transform transition-transform duration-1100 hover:scale-125">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
    </div>
    <div className="z-10 bg-white rounded-2xl pt-8 pb-6 px-6 text-center font-cormorant -mt-16 w-11/12 shadow-lg">
      <h3 className={`text-3xl font-semibold mb-2 ${titleColor}`}>{title}</h3>
      <p className="text-gray-600 mb-4 font-sans">{description}</p>
      <a href="#" className="text-green-600 font-semibold font-sans  inline-flex items-center">
        LEARN MORE
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  </div>
);

const OurService = () => {
  const services = [
    {
      image: "/images/facescrub.jpg",
      title: "Face Scrub",
      description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit.",
      titleColor: "text-green-900"
    },
    {
      image: "/images/facemassage.jpg",
      title: "Face Massage",
      description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit.",
      titleColor: "text-green-900"
    },
    {
      image: "/images/bodymassage.jpg",
      title: "Body Massage",
      description: "Lorem ipsum dolor sit amet, cctetur adipiscing elit.",
      titleColor: "text-green-900"
    },
    {
        image:"/images/closeup.jpg",
        title:"Clean up",
        description:"Lorem ispsum dolor sit amet , cdtetur asidiedl elti.",
        titleColor: "text-green-900"
    },
    {
        image:"/images/pedicure.jpg",
        title:"Pedicure",
        description:"Lorem ispsum dolor sit amet , cdtetur asidiedl elti.",
        titleColor: "text-green-900"
    },
    {
        image:"/images/faceclean.jpg",
        title:"Face cleanser",
        description:"Lorem ispsum dolor sit amet , cdtetur asidiedl elti.",
        titleColor: "text-green-900"
    }
  ];

  return (
    <section className="py-16 px-4 bg-[#FFF5F5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-green-800 text-center mb-4">Our Service</h2>
        <p className="text-center text-green-700 max-w-3xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;