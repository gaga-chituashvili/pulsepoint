import React from "react";
import Join1 from "./images/join.png";
import deposit from "./images/deposit.png";
import play from "./images/play.png";
import west from "./images/west.svg";

const Join = () => {
  return (
    <section className="h-[120px] bg-[#1A202C] flex justify-between px-[111px] py-[28px]">
      <img className="object-contain cursor-pointer" src={Join1} />
      <img className="w-[24px]" src={west} alt="" />
      <img className="object-contain cursor-pointer" src={deposit} />
      <img className="w-[24px]" src={west} alt="" />
      <img className="object-contain cursor-pointer" src={play} />
    </section>
  );
};

export default Join;
