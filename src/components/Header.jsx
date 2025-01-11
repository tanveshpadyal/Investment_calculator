import React from "react";
import money from "../assets/icl.png";

const Header = () => {
  return (
    <>
      <header className="w-full flex justify-center items-center  flex-col p-1">
        <h1 className=" text-2xl font-bold md:text-4xl ">
          React Investment Calculator
        </h1>
        <img src={money} alt={"money"} className="w-24 md:w-44" />
      </header>
    </>
  );
};

export default Header;
