import Image from 'next/image';
import React from 'react';

const Contact_item = ({item}) => {
    const {title,details,icon} = item;
    return (
        <div className='contact_item flex items-center gap-3 text-white w-[280px]'>
        {/* contact icon */}
        <div className='icon w-[42px] h-[42px]'>
            <Image src={icon} width={42} height={42} alt={title}/>
        </div>
        {/* Details contact info  */}
        <div className='details'>
            <h1 className='text-base font-medium'>{title}</h1>
            <p className='text-[20px] font-bold'>{details}</p>
        </div>
    </div>
    );
};

export default Contact_item;