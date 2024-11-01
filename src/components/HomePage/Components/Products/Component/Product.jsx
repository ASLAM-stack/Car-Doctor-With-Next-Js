import Image from 'next/image';
import React from 'react';

const Product = ({item,index}) => {
    const {rate,title,price} = item;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
     <Image src={`/assets/images/products/${index + 1}.png`} width={500} height={500} alt={title}/>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;