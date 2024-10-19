import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';


// Import images
import hero1 from './hero1.jpeg';
import hero2 from './hero2.jpeg';
import hero3 from './hero3.jpg';

// Original images to display in the carousel
const originalImages = [
  { src: hero1, alt: 'Woman in bathrobe' },
  { src: hero2, alt: 'Hands applying cream' },
  { src: hero3, alt: 'Product showcase' },
];

const DualImageCarousel = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    // Create circular array: [...original, ...original, ...original]
    setImages([...originalImages, ...originalImages, ...originalImages]);
  }, []);

  const resetToRealSlide = (index) => {
    setTimeout(() => {
      setIsTransitioning(false);
      setCurrentIndex(index);
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.transform = `translateX(-${index * 50}%)`;
    }, 700);
  };

  const handleNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      setIsTransitioning(true);
      if (nextIndex >= originalImages.length * 2) {
        resetToRealSlide(originalImages.length);
        return nextIndex;
      }
      return nextIndex;
    });
  }, []);

  const handlePrevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1;
      setIsTransitioning(true);
      if (nextIndex < 0) {
        resetToRealSlide(originalImages.length - 1);
        return nextIndex;
      }
      return nextIndex;
    });
  }, []);

  const startAutoplay = useCallback(() => {
    autoplayRef.current = setInterval(handleNextSlide, 4000);
  }, [handleNextSlide]);

  const stopAutoplay = () => {
    clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay]);

  useEffect(() => {
    if (isTransitioning) {
      carouselRef.current.style.transition = 'transform 0.7s ease-out';
    } else {
      carouselRef.current.style.transition = 'none';
    }
  }, [isTransitioning]);

  return (
    <div className="relative flex justify-start items-end h-full">

      <div
        className="absolute w-full max-w-6xl mx-auto py-24 right-4 overflow-hidden h-full"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div
          ref={carouselRef}
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * 50}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-1/2 flex-shrink-0 h-full px-2">
              <div className="relative w-full h-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-green-900 rounded-t-full"
                  style={{ height: '95%' }}
                ></div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-full"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 95%)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DualImageCarousel;