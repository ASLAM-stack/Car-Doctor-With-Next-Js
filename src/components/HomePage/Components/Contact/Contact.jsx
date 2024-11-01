import React from 'react';
import Contact_item from './Component/Contact_item';

const Contact = () => {
    const items = [
        {
            id: 1,
            icon:'/assets/icons/001-timetable.png',
            title:'We are open monday-friday',
            details:'7:00 am - 9:00 pm'
        },
        {
            id: 2,
            icon:'/assets/icons/Group 34.png',
            title:'Have a question?',
            details:'+2546 251 2658'
        },
        {
            id: 3,
            icon:'/assets/icons/Group 35.png',
            title:'Need a repair? our address',
            details:'Liza Street, New York'
        }
    ]
    return (
        <div className='bg-black h-[250px] flex items-center justify-around flex-wrap rounded-lg mt-28
        '>
          {
            items.map(item => <Contact_item key={item.id} item={item}/>)
          }
        </div>
    );
};

export default Contact;