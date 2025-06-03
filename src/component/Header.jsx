import React from "react";
import cover from "./images/cover.png";
import logo1 from "./images/logo1.png";

const Header = () => {
  return (
   <header
  className="w-screen h-screen p-[24px] relative bg-no-repeat bg-cover bg-center"
  style={{ backgroundImage: `url(${cover})` }}
>
      <img className="" src={logo1} alt="Logo" />
      <section className=" flex flex-col items-center absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 text-white text-center space-y-6">
        <h2 className="text-[40px] text-[#CAAB72]">
          celebrate SPORTSbook 300% bonus
        </h2>
        <p className="text-center whitespace-pre-line">
          Welcome to World Cup
          {"\n"}get special bonus of 300%
          {"\n"}deposit 100 get 300
          {"\n"}easy deposit, fast withdrawal, guaranteed pay
        </p>
        <button className="bg-[#CAAB72] px-[72px] py-[20px] rounded-full text-black">
          CLAIM NOW
        </button>
        <span className="text-[12px] text-[#A7A9B0]">terms & conditions</span>
      </section>
    </header>
  );
};

export default Header;
