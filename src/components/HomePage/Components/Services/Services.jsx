import Headig from '@/components/shared/Headig';
import React from 'react';
import { services } from '@/lib/servicces';
import Service_Card from './Component/Service_Card';
const Services = () => {
    return (
        <div className='md:mt-52 mt-10'>
            <Headig heading={'Service'} title={'Our Service Area'} discription={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}/>
            <div className='container   mt-16 grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center justify-items-center mx-auto p-2 
            '>
                 {
                    services.map(item => <Service_Card key={item.id} item={item}/>)
                 }
            </div>
        </div>
    );
};

export default Services;