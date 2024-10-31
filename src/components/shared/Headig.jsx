import React from 'react';

const Headig = ({heading,title,discription}) => {
    return (
        <div className='text-center flex flex-col justify-center items-center space-y-3'>
            <h1 className='text-primary  text-xl font-bold'>{heading}</h1>
            <h1 className='text-[#151515] text-3xl md:text-[45px] font-bold'>{title}</h1>
            <p className='text-[#737373] text-base md:w-[700px] text-center'>{discription}</p>
        </div>
    );
};

export default Headig;