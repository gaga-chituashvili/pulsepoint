import React from "react";
import laliga from "./images/laliga.svg";
import afc from "./images/afc.svg";
import cristal from "./images/cristal.svg";
import city from "./images/city.svg";
import tot from "./images/tot.svg";

const Team = () => {
  return (
    <section className="flex gap-x-[40px] px-[24px] py-[32px] [@media(max-width:1010px)]:justify-center [@media(max-width:1010px)]:gap-x-[30px] [@media(max-width:801px)]:px-[14px] [@media(max-width:731px)]:flex-wrap gap-y-[24px]">
      <article className="flex gap-x-[8px] items-center [@media(max-width:1010px)]:flex-col gap-y-[8px]">
        <img className="w-[40px]" src={laliga} alt="laliga" />
        <article className="flex flex-col [@media(max-width:1010px)]:justify-center items-center">
          <span className="text-[#FFFFFF] text-[12px]">Official Regional Partner</span>
          <span className="text-[#FFFFFF] text-[12px]">2020 - 2024</span>
        </article>
      </article>
      <article className="flex gap-x-[8px] items-center [@media(max-width:1010px)]:flex-col gap-y-[8px]">
        <img className="w-[40px]" src={afc} alt="afc" />
        <article className="flex flex-col [@media(max-width:1010px)]:justify-center items-center">
          <span className="text-[#90949C] text-[12px]">AFC Bournemouth</span>
          <span className="text-[#90949C] text-[12px]">2016 - 2020</span>
        </article>
      </article>
      <article className="flex gap-x-[8px] items-center [@media(max-width:1010px)]:flex-col gap-y-[8px]">
        <img className="w-[40px]" src={cristal} alt="cristal" />
        <article className="flex flex-col [@media(max-width:1010px)]:justify-center items-center">
          <span className="text-[#90949C] text-[12px]">Crystal Palace</span>
          <span className="text-[#90949C] text-[12px]">2015 - 2017</span>
        </article>
      </article>
      <article className="flex gap-x-[8px] items-center [@media(max-width:1010px)]:flex-col gap-y-[8px]">
        <img className="w-[40px]" src={city} alt="city" />
        <article className="flex flex-col [@media(max-width:1010px)]:justify-center items-center">
          <span className="text-[#90949C] text-[12px]">Manchester City</span>
          <span className="text-[#90949C] text-[12px]">2011 - 2012</span>
        </article>
      </article>
      <article className="flex gap-x-[8px] items-center [@media(max-width:1010px)]:flex-col gap-y-[8px]">
        <img className="w-[40px]" src={tot} alt="tot" />
        <article className="flex flex-col [@media(max-width:1010px)]:justify-center items-center">
          <span className="text-[#90949C] text-[12px]">Tottemham Hotspurs</span>
          <span className="text-[#90949C] text-[12px]">2006 - 2010</span>
        </article>
      </article>
    </section>
  );
};

export default Team;
