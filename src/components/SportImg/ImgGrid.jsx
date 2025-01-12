import React from 'react';
import collage from '../../assets/card/collage.png';


const LayoutComponent = () => {
  const handleClick = () => {
    window.open('https://drive.google.com/drive/folders/1MCCLzUoGVHSlExPcJw2qt33a0bqxLcHn', '_blank');

  };

  return (
    // <div onClick={handleClick} className="relative bg-black max-w-screen-xl h-[500px] mx-auto grid grid-cols-[repeat(30,_30px)] grid-rows-[repeat(30,_30px)] gap-2.5 ">
   
     
      
    //   <div className="col-span-5 row-span-8 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/148182/pexels-photo-148182.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-6 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146080/pexels-photo-146080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-4 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/145985/pexels-photo-145985.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-3 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146069/pexels-photo-146069.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-5 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1217595/pexels-photo-1217595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-5 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146290/pexels-photo-146290.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-4 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/851940/pexels-photo-851940.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-3 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/148119/pexels-photo-148119.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-3 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146102/pexels-photo-146102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-11 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/145902/pexels-photo-145902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-6 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146230/pexels-photo-146230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-6 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146227/pexels-photo-146227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-3 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146102/pexels-photo-146102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-11 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/145902/pexels-photo-145902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-3 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146102/pexels-photo-146102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-11 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/145902/pexels-photo-145902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-6 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146230/pexels-photo-146230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-6 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146227/pexels-photo-146227.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-3 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/146102/pexels-photo-146102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>
    //   <div className="col-span-5 row-span-11 bg-black bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/145902/pexels-photo-145902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940')" }}></div>            
    // </div>
<div onClick={handleClick} className="mx-auto px-20 relative">
  <img style={{ width: '100vw', height: '100vh', border: '7px solid white' }} className="blur-sm" src={collage} />
  
  <div className="absolute inset-0 flex justify-center items-center">
    {/* <GlowingText fs='90px' text="Euphoria 2024" /> */}
    <p 
  style={{ 
    textShadow: '10px 10px 20px #230f3d', 
    WebkitTextStroke: '2px white' // This will add a white border around the text
  }} 
  className="text-[#8d4495] font-bold text-[104px] tracking-[0.1em] fon hover:cursor-pointer"
>
  Euphoria 2024
</p>
  </div>
</div>

  );
};

export default LayoutComponent;
