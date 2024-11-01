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
            <Headig heading={'Popular Products'} title={'Browse Our Products'} discription={"the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." }/>
            {/* Products Card Section */}
            <div>
                {
                    products.map((item,index) => <Product key={item.id} item={item} index={index}/>)
                }
            </div>
            
        </div>
    );
};

export default Products;