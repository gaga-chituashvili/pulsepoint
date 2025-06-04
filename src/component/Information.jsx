import React from "react";

const Information = () => {
  return (
    <section className="flex flex-col gap-y-[48px] px-[24px] mt-[64px]">
      <article className="flex flex-col items-center gap-y-[20px]">
        <h3 className="text-[24px] text-[#222939] [@media(max-width:1010px)]:text-[20px]">Start your journey now</h3>
        <div className="w-[32px] h-[4px] bg-[#CAAB72]" />
      </article>
      <article className="flex flex-col gap-y-[40px]">
        <article className="flex flex-col text-center gap-y-[16px]">
          <p className="text-[#4E5461] text-[14px] [@media(max-width:1010px)]:text-[12px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            semper pharetra condimentum. Cras pulvinar risus dignissim augue
            egestas eleifend. Sed euismod erat pulvinar ex blandit accumsan. Sed
            cursus eleifend quam, vitae auctor sapien accumsan sed. Cras nunc
            orci, pretium eu metus aliquet, ultricies maximus felis. Maecenas eu
            tellus vitae elit ultricies scelerisque. Vivamus eget mi hendrerit,
            efficitur justo eget, molestie velit. Aenean a eros nec libero
            egestas fermentum sed in metus.
          </p>
        </article>
        <article className="flex flex-col text-center gap-y-[16px]">
          <span className="text-[20px] text-[#4E5461] [@media(max-width:1010px)]:text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
          <p className="text-[#4E5461] text-[14px] [@media(max-width:1010px)]:text-[12px]">
            Aliquam eget lobortis velit, eget eleifend justo. In ac pellentesque
            risus, nec tristique dui. Vestibulum eget turpis sed magna feugiat
            pulvinar ac ac nunc. Proin molestie facilisis dolor at accumsan.
            Quisque rhoncus nulla at lacus consequat egestas. Nunc semper nisi
            ipsum, in pretium magna tempus non. Praesent commodo molestie ipsum
            sed aliquam. Curabitur lobortis odio vel lectus lacinia, eu finibus
            risus malesuada. Ut non luctus metus, nec luctus metus. Aliquam
            porttitor tincidunt diam a cursus. Nunc sit amet augue vitae tellus
            euismod porta. Vestibulum vestibulum suscipit dictum. Pellentesque
            ornare, sapien ac vulputate viverra, erat neque hendrerit odio, sed
            molestie dolor dui a sem. Sed consequat quis nibh non aliquet.
            Quisque et cursus neque. Nunc luctus hendrerit gravida.
          </p>
        </article>
        <article className="flex flex-col text-center gap-y-[16px]">
          <span className="text-[20px] text-[#4E5461] [@media(max-width:1010px)]:text-[16px]">
            Maecenas eu tellus vitae scelerisque
          </span>
          <p className="text-[#4E5461] text-[14px] [@media(max-width:1010px)]:text-[12px]">
            Donec eget dui posuere, molestie elit nec, venenatis augue. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Sed ac
            consequat nisl. Integer pellentesque bibendum eros vel finibus. Nunc
            ultrices est et quam scelerisque, in faucibus augue volutpat. Nunc
            vel metus ac purus scelerisque fermentum sit amet faucibus diam.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vestibulum leo nulla, euismod eu sagittis
            vitae, mattis ac libero. Duis vestibulum viverra neque, id aliquam
            mauris euismod imperdiet. Nam a ligula fringilla, auctor ante a,
            commodo lacus. Maecenas consequat nulla egestas, interdum purus vel,
            fermentum ipsum. Integer quis felis id sem semper tincidunt.
          </p>
        </article>
      </article>
    </section>
  );
};

export default Information;
