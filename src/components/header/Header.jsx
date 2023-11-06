// #region load dependencies
import React from "react";
// #endregion

const Header = ({ title, desc }) => {

  return (
    <div class=" bg-[#000000] w-screen h-32 flex flex-col justify-center">
      <div class="mx-[56px] md:mx-28 lg:mx-28 xl:mx-48">
        <p class="text-[#E1FF3C] text-2xl">{title}</p>
        <p class="text-[#FFF]">{desc}</p>
      </div>
    </div>
  );
};

export default Header;
