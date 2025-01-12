import React from 'react';
import collage from '../../assets/card/collage.png';

const LayoutComponent = () => {
  const handleClick = () => {
    window.open('https://drive.google.com/drive/folders/1MCCLzUoGVHSlExPcJw2qt33a0bqxLcHn', '_blank');
  };

  return (
    <div onClick={handleClick} className="mx-auto px-4 sm:px-8 lg:px-20 relative">
      <img 
  style={{ border: '7px solid white' }} 
  className="blur-sm w-[100vw] h-[50vh] sm:w-full sm:h-auto max-w-full h-auto" 
  src={collage} 
  alt="Collage"
/>

      
      <div className="absolute inset-0 flex justify-center items-center">
        <p
          style={{ 
            textShadow: '10px 10px 20px #230f3d', 
            WebkitTextStroke: '2px white' 
          }}
          className="text-[#8d4495] font-bold text-[35px] sm:text-[70px] md:text-[80px] lg:text-[104px] tracking-[0.1em] fon hover:cursor-pointer"
        >
          Euphoria 2024
        </p>
      </div>
    </div>
  );
};

export default LayoutComponent;
