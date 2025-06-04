import React from "react";
import user from "./images/user.svg";
import pay from "./images/pay.svg";
import play from "./images/play.svg";
import west from "./images/west.svg";
import down1 from "./images/down1.svg";

const Join = () => {
  return (
    <section className="h-[120px] bg-[#1A202C] flex justify-between px-[111px] py-[28px] [@media(max-width:1109px)]:px-[53px] [@media(max-width:731px)]:flex-col [@media(max-width:731px)]:h-[552px] items-center [@media(max-width:731px)]:px-0">
      
      <article className="flex gap-x-[16px] items-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-xl">
        <img className="w-[64px] [@media(max-width:1010px)]:w-[48px]" src={user} alt="user" />
        <article className="flex flex-col">
          <span className="text-[20px] font-bold text-[#CAAB72] [@media(max-width:1010px)]:text-[16px]">JOIN US</span>
          <span className="text-[14px] text-[#A7A9B0] block [@media(max-width:1010px)]:hidden">
            It’s quick and easy
          </span>
          <span className="text-[14px] text-[#A7A9B0] hidden [@media(max-width:1010px)]:block">
            Quick & Easy
          </span>
        </article>
      </article>

      <img className="w-[24px] [@media(max-width:731px)]:hidden" src={west} alt="west" />
      <img className="hidden w-[24px] [@media(max-width:731px)]:block" src={down1} alt="down" />

      <article className="flex gap-x-[16px] items-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-xl">
        <img className="w-[64px]" src={pay} alt="pay" />
        <article className="flex flex-col">
          <span className="text-[20px] font-bold text-[#CAAB72] [@media(max-width:1010px)]:text-[16px]">Deposit</span>
          <span className="text-[14px] text-[#A7A9B0] block [@media(max-width:1010px)]:hidden">
            Secure with 2-5min deposit time!
          </span>
          <span className="text-[14px] text-[#A7A9B0] hidden [@media(max-width:1010px)]:block">
            Safe & Secure
          </span>
        </article>
      </article>

      <img className="w-[24px] [@media(max-width:731px)]:hidden" src={west} alt="west" />
      <img className="hidden w-[24px] [@media(max-width:731px)]:block" src={down1} alt="down" />

      <article className="flex gap-x-[16px] items-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-xl">
        <img className="w-[64px]" src={play} alt="play" />
        <article className="flex flex-col">
          <span className="text-[20px] font-bold text-[#CAAB72] [@media(max-width:1010px)]:text-[16px]">Play</span>
          <span className="text-[14px] text-[#A7A9B0] block [@media(max-width:1010px)]:hidden">
            Start your winning journey!
          </span>
          <span className="text-[14px] text-[#A7A9B0] hidden [@media(max-width:1010px)]:block">
            Start Winning
          </span>
        </article>
      </article>
    </section>
  );
};

export default Join;
