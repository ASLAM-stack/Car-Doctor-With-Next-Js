 
import React from 'react';
import "./slide.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const Slide = ({id,index,next,prev,title,description }) => {
    return (
        <div id={id} className="carousel-item relative w-full slideBG  bg-no-repeat !grow " style={{backgroundImage:`linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%),url(/assets/images/homeCarousel/${index+1}.webp)
        `}}>
        <div className='w-full  !grow flex items-center
'>
  <div className='text-white md:w-[530px] w-full space-y-4 flex flex-col md:px-14 px-5 1grow'>
    <h1 className='md:text-6xl font-bold text-5xl'>
      {title}
    </h1>
    <p className='text-lg'>
      {description}
    </p>
    <div className='gap-5 flex flex-col md:flex-row flex-wrap'>
      <button className='btn btn-primary text-white'>Discover More</button>
      <button className='btn btn-outline  text-white  backdrop-blur-sm hover:outline-blue-300'>Latest Project</button>
    </div>
  </div>
</div>
        <div className="absolute  md:right-20 right-8 md:bottom-20 bottom-10 flex     gap-5 ">
          <a href={prev}className="btn btn-circle text-white bg-[#ffffff1A] backdrop-blur-sm"><FaArrowLeft /></a>
          <a href={next}className="btn btn-circle btn-primary text-white"><FaArrowRight/></a>
        </div>
      </div>
    );
};

export default Slide;