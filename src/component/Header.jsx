import React from "react";
import cover from "./images/cover.png";
import logo12 from "./images/logo12.svg";
import cover2 from "./images/cover2.png"

const Header = () => {
  return (
    <header className="relative [@media(max-width:1010px)]:h-[1032px]">
      <img className="absolute mt-6 ml-6" src={logo12} alt="Logo" />
      <img className="w-full h-full object-cover [@media(max-width:481px)]:hidden" src={cover} alt="cover" />
       <img className="hidden w-full h-full object-cover [@media(max-width:481px)]:block" src={cover2} alt="cover" />

      <section className="flex flex-col items-center absolute left-1/2 bottom-[32px] -translate-x-1/2 text-white text-center space-y-4 px-4 w-full max-w-[90%]">
        <h2
          className="text-[#CAAB72] text-[40px] [@media(max-width:1010px)]:text-[32px] [@media(max-width:731px)]:text-[24px]"
        >
          celebrate SPORTSbook 300% bonus
        </h2>
        <p
          className="whitespace-pre-line text-[24px] [@media(max-width:1010px)]:text-[20px] [@media(max-width:731px)]:text-[16px]"
          
        >
          Welcome to World Cup
          {"\n"}get special bonus of 300%
          {"\n"}deposit 100 get 300
          {"\n"}easy deposit, fast withdrawal, guaranteed pay
        </p>
        <button className="flex  justify-center items-center bg-[#CAAB72] px-[72px] py-[20px] rounded-full text-black [@media(max-width:731px)]:w-[200px] h-[48px]">
          CLAIM NOW
        </button>
        <span className="text-[12px] text-[#A7A9B0]">terms & conditions</span>
      </section>
    </header>
  );
};

export default Header;


// [@media(max-width:768px)]: