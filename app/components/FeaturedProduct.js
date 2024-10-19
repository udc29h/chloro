// components/FeaturedProduct.js
'use client'; // For Next.js app directory

import { useState, useEffect, useRef } from 'react';

const images = [
  '/FeaturedProducts/antiwrinkle.jpg',
  '/FeaturedProducts/brownglass.jpg',
  '/FeaturedProducts/topviewcoco.jpg',
];

const FeaturedProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 (because of clone logic)
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = images.length;
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  // Create clones for seamless effect
  const clonedSlides = [
    images[totalSlides - 1], // Clone of the last slide at the start
    ...images,
    images[0], // Clone of the first slide at the end
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset position when reaching cloned slides
  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentIndex === clonedSlides.length - 1) {
      // If at the end clone, jump to the real first slide
      setCurrentIndex(1);
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-100%)`; // Jump to the first real slide
    } else if (currentIndex === 0) {
      // If at the start clone, jump to the real last slide
      setCurrentIndex(totalSlides);
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-${totalSlides * 100}%)`; // Jump to last real slide
    }
  };

  // Update transform whenever the index changes
  useEffect(() => {
    if (!isTransitioning) return;
    carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
    carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  // Autoplay logic
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      handleNext();
    }, 3000); // Every 3 seconds

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-green-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold font-cormorant mb-4">Featured Product</h2>
          <p className="text-lg opacity-25 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
          </p>
          <button className="bg-white text-green-900 px-6 py-2 rounded-full font-medium hover:bg-green-800 hover:text-white transition">
            Shop Now
          </button>
        </div>

        {/* Carousel Section */}
        <div className="md:w-2/3 relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTransitionEnd={handleTransitionEnd}
          >
            {clonedSlides.map((image, index) => (
              <div key={index} className="min-w-full">
                <img
                  src={image}
                  alt={`Product ${index}`}
                  className="w-full h-80 object-cover rounded-full"
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}


          {/* Pagination Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index + 1 === currentIndex ? 'bg-white' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
