import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

interface Image {
  name: string;
  imgs: string[];
}

interface ImageSliderProps {
  images: Image[];
}

export const Slider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className='size-full'>
      <div className="relative size-full overflow-hidden">
        {/* Cambiar contendor por un 'Link' y agregar url de serie */}
        <div
          className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
          style={{
            //desplazamiento de las imagenes
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full sm:h-[90%] flex sm:justify-center flex-shrink-0">
              <picture className='w-full flex relative'>
                <img
                  src={image.imgs[0]}
                  alt={`Slide ${index}`}
                  loading='lazy'
                  className="w-full h-full object-cover flex sm:hidden"
                  style={{
                    // Imagen con degradado en parte inferior
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
                  }}
                />
                <img
                  src={image.imgs[1]}
                  alt={`Slide ${index}`}
                  loading='lazy'
                  className="w-full h-full object-cover hidden sm:flex"
                  style={{
                    // Imagen con degradado en parte inferior
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
                  }}
                />
                <span className='absolute sm:hidden flex justify-center w-full bottom-6'>
                  <h1 className='text-3xl text-white font-bold text-center truncate'>
                    {images[currentIndex].name}
                  </h1>
                </span>
              </picture>
              <span className='absolute hidden sm:flex justify-center w-full bottom-4'>
                <h1 className='text-3xl text-white font-bold text-center duration-300 truncate'>
                  {images[currentIndex].name}
                </h1>
              </span>
            </div>
          ))}
        </div>

        {/* Cambiar Icono de los botones */}
        <button
          onClick={handlePrevClick}
          className="absolute flex  h-full items-center top-0 left-0 bg-gradient-to-r from-st/50 to-transparent text-white px-4"
        >
          <IoIosArrowBack className='text-5xl sm:text-transparent' />
        </button>

        <button
          onClick={handleNextClick}
          className="absolute flex h-full items-center top-0 right-0 bg-gradient-to-l from-st/50 to-transparent text-white px-4"
        >
          <IoIosArrowForward className='text-5xl sm:text-transparent' />
        </button>
          <div className='absolute w-full  flex items-center justify-center bottom-0'>
          <ul className=' w-full max-w-[600px] flex items-center h-4 justify-center sm:justify-evenly sm:px-10 gap-4'>
          {images.map((_, i) => (
            <li key={i}
              onClick={() => setCurrentIndex(i)}
              className={currentIndex === i ? ' w-4 h-4 sm:w-full sm:h-1.5 bg-gradient-to-br from-nd to-rd rounded-full duration-300' : 'w-2 h-2 sm:w-full sm:h-1.5 bg-gradient-to-b from-zinc-300/75 to-transparent rounded-full cursor-pointer duration-300'}
            >
            </li>
          ))}
        </ul>
          </div>
      </div>
    </section>
  );
};
