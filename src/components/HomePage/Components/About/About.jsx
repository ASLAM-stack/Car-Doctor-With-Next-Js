import React from 'react';

const About = () => {
    return (
        <div className='md:mt-52 mt-16 container mx-auto  '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-full  max-h-max'>
                <div className='about_img w-full  justify-center max-h-max p-2 md:p-0 order-2 md:order-1'>
                    <div className='md:relative md:h-[450px] h-[800px]'>
                    <div className='lg:w-2/4 w-full md:h-4/5 h-[400px]  bg-[url(/assets/images/about_us/person.jpg)] bg-cover mb-5 md:mb-0  rounded-xl'></div>
                    <div className='lg:w-1/2 w-full  h-[332px] bg-[url(/assets/images/about_us/parts.jpg)] bg-cover bg-center   md:absolute md:bottom-0 md:right-10
                    md:border-white md:border-8 rounded-lg'>
                    </div>
                    

                    </div>
                </div>
                <div className='space-y-5 order-1 md:order-1 px-2 md-px-0'>
                    <h1 className='text-xl font-bold text-primary'>About Us</h1>
                    <h1 className='text-5xl font-bold text-[#151515]'>We are qualified <br /> & of experience in <br /> this field</h1>
                    <p className='text-base text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <p className='text-base text-[#737373]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <button className='btn btn-primary text-white'>Get More Info</button>
                </div>

            </div>
        </div>
    );
};

export default About;