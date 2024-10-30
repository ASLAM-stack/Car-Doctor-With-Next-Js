"use client"
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

 

const Navber = () => {
    const navItems=[
        {
            title:'Home',
            path:'/'
        },
        {
            title:'About',
            path:'/about'
        },
        {
            title:'Services',
            path:'/services'
        },
        {
            title:'Blog',
            path:'/blog'
        },
        {
            title:'Contact',
            path:'/contact'
        },
    ]
    const [screen,setScreen] = useState(0)
    useEffect(()=>{
      const handleResize = () => setScreen(window.innerWidth);

    // Set the initial screen size
    handleResize();

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
    },[screen])
    
    return (
        <div className="navbar bg-base-100  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
               {
                navItems?.map(item => <Link className="text-base font-semibold hover:bg-none hover:text-primary transition duration-300 p-1  glass-effect" href={item.path} key={item.path}>{item.title}</Link>)
               }
            </ul>
          </div>
           <Link href='/'>
           <Image src="/assets/logo.svg" alt="Car Doctor" height={60} width={80}/>
           </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="gap-5 menu-horizontal hover:bg-none px-1">
          {
                navItems?.map(item => <li className="text-base font-semibold hover:bg-none hover:text-primary transition duration-300 p-2 border-b-2 border-primary rounded-lg skew-x-6 hover:-skew-x-6 shadow  " key={item.path}><Link  href={item.path}  >{item.title}</Link></li>)
               }
          </ul>
        </div>
        <div className="navbar-end">
            <div className="flex gap-1 md:gap-3 md:mr-4 mr-1 items-center">
            <AiOutlineShopping  className="text-xl text-[#444444]"/>
            <IoIosSearch className="text-xl text-[#444444]"/>
            
            </div>
          <a className="btn btn-primary btn-outline  hover:bg-primary hover:!text-white btn-sm md:btn-md ">
            {
              screen < 350 ?<FaRegCalendarAlt className="text-lg text-primary hover:text-white"/> : ' Appointment '
            }
           </a>
        </div>
      </div>
    );
};

export default Navber;