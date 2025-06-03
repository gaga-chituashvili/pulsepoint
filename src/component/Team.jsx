import React from 'react'
import laliga from "./images/laliga.svg"
import afc from "./images/afc.svg"
import cristal from "./images/cristal.svg"
import city from "./images/city.svg"
import tot from "./images/tot.svg"

const Team = () => {
  return (
      <section className='flex gap-x-[40px] px-[24px] py-[32px]'>
            <article className='flex gap-x-[8px] items-center'>
                <img className='w-[40px]' src={laliga} alt="laliga" />
                <article className='flex flex-col'>
                    <span className='text-[#FFFFFF]'>Official Regional Partner</span>
                    <span className='text-[#FFFFFF]'>2020 - 2024</span>
                </article>
            </article>
             <article className='flex gap-x-[8px] items-center'>
                  <img className='w-[40px]' src={afc} alt="afc" />
                   <article className='flex flex-col'>
                    <span className='text-[#90949C]'>AFC Bournemouth</span>
                    <span className='text-[#90949C]'>2016 - 2020</span>
                </article>
             </article>
              <article className='flex gap-x-[8px] items-center'>
                  <img className='w-[40px]' src={cristal} alt="cristal" />
                   <article className='flex flex-col'>
                    <span className='text-[#90949C]'>Crystal Palace</span>
                    <span className='text-[#90949C]'>2015 - 2017</span>
                </article>
              </article>
               <article className='flex gap-x-[8px] items-center'>
                  <img className='w-[40px]' src={city} alt="city" />
                   <article className='flex flex-col'>
                    <span className='text-[#90949C]'>Manchester City</span>
                    <span className='text-[#90949C]'>2011 - 2012</span>
                </article>
               </article>
                <article className='flex gap-x-[8px] items-center'> 
                      <img className='w-[40px]' src={tot} alt="tot" />
                       <article className='flex flex-col'>
                    <span className='text-[#90949C]'>Tottemham Hotspurs</span>
                    <span className='text-[#90949C]'>2006 - 2010</span>
                </article>
                </article>
        </section>
  )
}

export default Team