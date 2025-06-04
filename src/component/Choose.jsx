import React from "react";
import secure1 from "./images/secure1.png";
import mask from "./images/mask.png";
import mask1 from "./images/mask1.png";
import feature from "./images/Feature.png";

const Choose = () => {
  return (
    <section className="flex flex-col items-center gap-y-[40px] mt-[64px] bg-[#FFFFFF]">
      <article className="flex flex-col items-center gap-y-[20px]">
        <h3 className="text-[24px] text-[#222939] [@media(max-width:1010px)]:text-[20px] [@media(max-width:731px)]:text-[16px]">Why choose us?</h3>
        <div className="w-[32px] h-[4px] bg-[#CAAB72]" />
      </article>
      <section className="flex gap-x-[16px] [@media(max-width:1010px)]:flex-wrap justify-center">
        <article className="flex flex-col gap-y-[16px] items-center px-[12px]">
          <img src={secure1} alt="secure" />
          <article className="flex flex-col items-center gap-y-[6px]">
            {" "}
            <span className="text-[16px] [@media(max-width:1010px)]:text-[14px]">safe & secure gaming</span>
            <span className="text-[16px] text-center whitespace-pre-line [@media(max-width:1010px)]:text-[14px]">
              {" "}
              Praesent facilisis massa vitae sapien
              {"\n"}rutrum, a posuere. Etiam sollicitudin
              {"\n"}neque ac malesuada.
            </span>
          </article>
        </article>
        <article className="flex flex-col gap-y-[16px] items-center px-[12px]">
          <img src={mask} alt="mask" />
          <article className="flex flex-col items-center gap-y-[6px]">
            {" "}
            <span className="text-[16px] [@media(max-width:1010px)]:text-[14px]">variety of games</span>
            <span className="text-[16px] text-center whitespace-pre-line [@media(max-width:1010px)]:text-[14px]">
              {" "}
              Lorem ipsum dolor sit amet, consectetur
              {"\n"}adipiscing elit. Fusce ullamcorper
              {"\n"}vulputate magna.
            </span>
          </article>
        </article>
        <article className="flex flex-col gap-y-[16px] items-center px-[12px]">
          <img src={mask1} alt="mask1" />
          <article className="flex flex-col items-center gap-y-[6px]">
            {" "}
            <span className="text-[16px] [@media(max-width:1010px)]:text-[14px]">fast & better experience</span>
            <span className="text-[16px] text-center whitespace-pre-line [@media(max-width:1010px)]:text-[14px]">
              Nullam porta at orci non molestie.
              {"\n"}Aenean vel diam erat. Nullam dignissim
              {"\n"}lorem pulvinar dui finibus ultrices.
            </span>
          </article>
        </article>
        <article className="flex flex-col gap-y-[16px] items-center px-[12px]">
          <img src={feature} alt="feature" />
          <article className="flex flex-col items-center gap-y-[6px] ">
            {" "}
            <span className="text-[16px] [@media(max-width:1010px)]:text-[14px]">improved look & feel</span>
            <span className="text-[16px] text-center whitespace-pre-line [@media(max-width:1010px)]:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur
              {"\n"}adipiscing elit. Fusce ullamcorper
              {"\n"}vulputate magna.
            </span>
          </article>
        </article>
      </section>
    </section>
  );
};

export default Choose;
