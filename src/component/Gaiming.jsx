import React from "react";
import sport1 from "./images/Sports1.png";
import sport2 from "./images/Sports2.png";
import sport3 from "./images/Sports3.png";
import sport4 from "./images/Sports4.png";

const Gaiming = () => {
  return (
    <section className="flex flex-col items-center mt-[40px] gap-y-[48px]">
      <h3 className="text-[24px]">YOUR GAMING DESTINATION</h3>
      <section className="flex flex-wrap gap-[16px] justify-center">
        <article className="relative">
          <img src={sport1} alt="sport1" />
          <button className="absolute bottom-10 left-10 text-[#222939]   rounded-full bg-[#CAAB72] px-[32px] py-[16px]">
            go now
          </button>
        </article>
        <article className="relative">
          <img src={sport2} alt="sport2" />
          <button className="absolute bottom-10 left-10 text-[#222939]  rounded-full bg-[#CAAB72]  px-[32px] py-[16px]">
            go now
          </button>
        </article>
        <article className="relative">
          <img src={sport3} alt="sport3" />
          <button className="absolute bottom-10 left-10 text-[#222939]  rounded-full bg-[#CAAB72]  px-[32px] py-[16px]">
            go now
          </button>
        </article>
        <article className="relative">
          <img src={sport4} alt="sport4" />
          <button className="absolute bottom-10 left-10 text-[#222939] rounded-full bg-[#CAAB72]  px-[32px] py-[16px]">
            go now
          </button>
        </article>
      </section>
    </section>
  );
};

export default Gaiming;
