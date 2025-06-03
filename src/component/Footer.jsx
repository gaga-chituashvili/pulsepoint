import React from 'react'
import down from "./images/down.svg"
import Team from './Team'
import {NavLink} from "react-router-dom"
import ga from "./images/ga.svg"
import itech from "./images/itech.svg"
import plus from "./images/+18.svg"

const Footer = () => {
  return (
    <footer className=' bg-[#222939] mt-[80px] px-[24px] py-[32px]'>
        <div className='h-[60px] bg-[#383E4D] flex justify-between items-center px-[16px] py-[20px]'>
            <span className='text-[14px] text-[#FFFFFF]'>welcome bonus Terms & Conditions</span>
            <img className='w-[8px]' src={down} alt="down" />
        </div>
       <Team/>
       <section className='flex justify-between items-center py-[7px]'>
        <article className='flex gap-x-[4px]'>
            <span className='text-[#90949C] text-[12px]'>We are committed to supporting</span>
         <NavLink className="underline underline-offset-8 text-[#90949C] text-[12px]">Responsible Gambling</NavLink>
        </article>
        <article className='flex gap-x-[16px] items-center'>
            <img src={ga} alt="ga" />
            <img src={itech} alt="itech" />
            <img src={plus} alt="plus" />
            <span className='text-[#90949C] text-[12px]'>LoremLogo.com 2025</span>
        </article>
       </section>
       <section className='flex flex-col gap-y-[8px] mt-[24px]'>
        <span className='text-[12px] text-[#90949C]'>Terms and Conditions apply. Please refer to the promotions page for more details.</span>
        <span className='text-[12px] text-[#90949C]'>LoremLogo.com uses certain browser cookies to ensure you receive the best gaming experience. By accessing and continuing to use the site you accept the use of these cookies. For information on our use of cookies and how to prevent them please refer to terms of use</span>
       </section>
    </footer>
  )
}

export default Footer