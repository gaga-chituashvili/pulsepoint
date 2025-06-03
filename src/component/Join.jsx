import React from "react";
import user from "./images/user.svg"
import pay from "./images/pay.svg"
import play from "./images/play.svg"
import west from "./images/west.svg"

const Join = () => {
  return (
    <section className="h-[120px] bg-[#1A202C] flex justify-between px-[111px] py-[28px]">
      <article className="flex gap-x-[16px]">
        <img src={user} alt="user" />
        <article className="flex flex-col">
            <span className="text-[20px] font-bold text-[#CAAB72]">JOIN US</span>
            <span className="text-[14px] text-[#A7A9B0]">It’s quick and easy</span>
        </article>
      </article>
      <img className="w-[24px]" src={west} alt="west" />
       <article className="flex gap-x-[16px]">
         <img src={pay} alt="user" />
          <article className="flex flex-col">
            <span className="text-[20px] font-bold text-[#CAAB72]">Deposit</span>
            <span className="text-[14px] text-[#A7A9B0]">Secure with 2-5min deposit time!</span>
        </article>
       </article>
        <img className="w-[24px]" src={west} alt="west" />
        <article className="flex gap-x-[16px]">
             <img src={play} alt="user" />
              <article className="flex flex-col">
            <span className="text-[20px] font-bold text-[#CAAB72]">PLay</span>
            <span className="text-[14px] text-[#A7A9B0]">Start your winning journey!</span>
        </article>
        </article>
    </section>
  );
};

export default Join;
