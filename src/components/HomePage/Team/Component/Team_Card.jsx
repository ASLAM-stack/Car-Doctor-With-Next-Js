import Image from 'next/image';
import React from 'react';

const Team_Card = ({item,index}) => {
  const {name,position,specialization,experience} = item;
    return (
        <div className="card w-full  md:w-96 shadow-xl ">
  <figure className="px-5 pt-5">
     <Image className='rounded-lg' src={`/assets/images/team/${index+1}.jpg`} alt={name} height={314} width={300}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{experience}</p>
    <p>{specialization}</p>
    <div className="card-actions">
       
    </div>
  </div>
</div>
    );
};

export default Team_Card;