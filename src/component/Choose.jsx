import React from "react";
import secure1 from "./images/secure1.png";
import mask from "./images/mask.png";
import mask1 from "./images/mask1.png";
import feature from "./images/Feature.png";

const Choose = () => {
  return (
    <section className="flex flex-col items-center gap-y-[40px]">
      <h3>Why choose us?</h3>
      <section className="flex gap-x-[16px]">
         <article className="flex flex-col gap-y-[16px] items-center px-[12px]">
        <img src={secure1} alt="secure" />
       <article className="flex flex-col items-center gap-y-[6px]"> <span>safe & secure gaming</span>
        <span className="text-center whitespace-pre-line"> Praesent facilisis massa vitae sapien
          {"\n"}rutrum, a posuere. Etiam sollicitudin 
          {"\n"}neque ac malesuada.
          </span></article>
      </article>
       <article className="flex flex-col gap-y-[16px] items-center px-[12px]">
        <img src={mask} alt="mask" />
        <article className="flex flex-col items-center gap-y-[6px]">  <span>variety of games</span>
        <span className="text-center whitespace-pre-line"> Lorem ipsum dolor sit amet, consectetur 
          {"\n"}adipiscing elit. Fusce ullamcorper
          {"\n"}vulputate magna.
          </span></article>
      </article>
       <article className="flex flex-col gap-y-[16px] items-center px-[12px]">
        <img src={mask1} alt="mask1" />
       <article className="flex flex-col items-center gap-y-[6px]">   <span>fast & better experience</span>
        <span className="text-center whitespace-pre-line">Nullam porta at orci non molestie. 
          {"\n"}Aenean vel diam erat. Nullam dignissim
          {"\n"}lorem pulvinar dui finibus ultrices.
          </span></article>
      </article>
        <article className="flex flex-col gap-y-[16px] items-center px-[12px]">
        <img src={feature} alt="feature" />
        <article className="flex flex-col items-center gap-y-[6px] ">  <span>improved look & feel</span>
        <span className="text-center whitespace-pre-line">Lorem ipsum dolor sit amet, consectetur 
          {"\n"}adipiscing elit. Fusce ullamcorper 
          {"\n"}vulputate magna.
          </span></article>
      </article>
      </section>
    </section>
  );
};

export default Choose;
