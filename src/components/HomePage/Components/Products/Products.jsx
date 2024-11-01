import Headig from '@/components/shared/Headig';
import React from 'react';
import Product from './Component/Product';

const Products = () => {
    const products = [
        {
            id:1,
            rate: 5,
            title:"Car Break",
            price:20,
        },
        {
            id:2,
            rate: 5,
            title:"Car Suspension",
            price:20,
        },
        {
            id:3,
            rate: 5,
            title:"Car Air Filter",
            price:20,
        },
        {
            id:4,
            rate: 5,
            title:"Car Batteries",
            price:20,
        },
        {
            id:5,
            rate: 5,
            title:"Car Tyre",
            price:20,
        },
        {
            id:6,
            rate: 5,
            title:"Car Engine Plug",
            price:20,
        },
    ]
    return (
        <div className='mt-28'>
            <Headig heading={'Popular Products'} title={'Browse Our Products'} discription={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." }/>
            {/* Products Card Section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center justify-items-center md:p-0 px-2 mt-12'>
                {
                    products.map((item,index) => <Product key={item.id} item={item} index={index}/>)
                }
            </div>
            <div className='text-center mt-12'>
                <button className='btn btn-outline btn-primary hover:!text-white'>More Products</button>
            </div>
            
        </div>
    );
};

export default Products;