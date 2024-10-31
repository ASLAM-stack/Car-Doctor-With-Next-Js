import Image from 'next/image';
import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

const Service_Card = ({item}) => {
    const {title,img,price} = item;
    return (
        <div className="card bg-base-100 w-full shadow-xl grid grid-rows-subgrid row-span-2">
  <figure className="px-6 pt-6">
    <Image width={500} height={300} 
      src={img}
      alt={title}
      className="rounded-xl"  />
  </figure>
  <div className="card-body ">
    <h2 className="card-title font-bold text-[#444]">{title}</h2>
    <div className="card-actions items-center">
       <p className='text-[#FF3811] text-xl'>Price: ${price}</p>
       <IoMdArrowForward className='text-[#FF3811] text-xl'/>
    </div>
  </div>
</div>
    );
};

export default Service_Card;