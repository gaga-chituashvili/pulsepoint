import React from "react";
import sport1 from "./images/Sports1.png";
import sport2 from "./images/Sports2.png";
import sport3 from "./images/Sports3.png";
import sport4 from "./images/Sports4.png";

const Gaiming = () => {
  return (
    <section className="flex flex-col items-center mt-[40px] gap-y-[48px]">
      <article className="flex flex-col items-center gap-y-[20px]">
        <h3 className="text-[24px] text-[#222939] [@media(max-width:1312px)]:text-[20px]">YOUR GAMING DESTINATION</h3>
        <div className="w-[32px] h-[4px] bg-[#CAAB72]" />
      </article>
      <section className="flex flex-wrap gap-[16px] justify-center">
        <article className="relative">
          <img className="[@media(max-width:1312px)]:w-[364px]" src={sport1} alt="sport1" />
          <button className="absolute bottom-10 left-10 text-[#222939]   rounded-full bg-[#CAAB72] px-[32px] py-[16px] [@media(max-width:1312px)]:hidden">
            go now
          </button>
        </article>
        <article className="relative">
          <img className="[@media(max-width:1312px)]:w-[364px]" src={sport2} alt="sport2" />
          <button className="absolute bottom-10 left-10 text-[#222939]  rounded-full bg-[#CAAB72]  px-[32px] py-[16px] [@media(max-width:1312px)]:hidden">
            go now
          </button>
        </article>
        <article className="relative">
          <img className="[@media(max-width:1312px)]:w-[364px]" src={sport3} alt="sport3" />
          <button className="absolute bottom-10 left-10 text-[#222939]  rounded-full bg-[#CAAB72]  px-[32px] py-[16px] [@media(max-width:1312px)]:hidden">
            go now
          </button>
        </article>
        <article className="relative">
          <img className="[@media(max-width:1312px)]:w-[364px]" src={sport4} alt="sport4" />
          <button className="absolute bottom-10 left-10 text-[#222939] rounded-full bg-[#CAAB72]  px-[32px] py-[16px] [@media(max-width:1312px)]:hidden">
            go now
          </button>
        </article>
      </section>
    </section>
  );
};

export default Gaiming;
