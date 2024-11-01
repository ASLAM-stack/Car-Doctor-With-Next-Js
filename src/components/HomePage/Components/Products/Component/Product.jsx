import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import Image from 'next/image';
import React from 'react';

const Product = ({item,index}) => {
    const {rate,title,price} = item;
    return (
        <div className="card bg-base-100 w-full md:w-80 shadow-xl ">
  <figure className="mx-8 mt-10  flex justify-center items-center bg-[#F3F3F3] h-[180px] rounded-xl">
     <Image className='' src={`/assets/images/products/${index + 1}.png`} width={153} height={156} alt={title}/>
  </figure>
  <div className="card-body items-center text-center">
  <Rating style={{ maxWidth: 150 }} value={rate} readOnly={true} />
    <h2 className="card-title">{title}</h2>
    <p>Price: ${price}</p>
  </div>
</div>
    );
};

export default Product;