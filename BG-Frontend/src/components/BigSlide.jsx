import { useState } from 'react';
import imagewithBG from '../assets/imagewithBG.jpg';
import imagewithoutBG from '../assets/imagewithoutBG.png';

const BigSlide = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-2xl md:text-3xl pb-1 lg:text-4xl font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Remove Background with High <br /> Quality and Accuracy
      </h1>
      <div className="image-container mx-auto rounded-xl border-2 border-white">
        {/* no Background Image */}
        <img
          className="image-before"
          src={imagewithoutBG}
          alt="Image without background"
        />
        {/*  Background Image */}
        <div className="image-compare-overlay">
          <img
            className="image-after"
            src={imagewithBG}
            alt="Image with background"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}
          />
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="slider"
        />
        
        <div 
          className="slider-line"
          style={{ left: `${sliderPosition}%` }}
        />
      </div>
    </div>
  );
};

export default BigSlide;
