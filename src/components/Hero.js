/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import mainImg from '../images/main4.jpg'
const Hero = () => {
  return (
    <div className="hero flex items-center bg-green-500" id="home">
      <div className="hero-content absolute z-1 top-50 left-60 items-center">
        <h1 className="font-serif text-7xl font-semibold text-white text-center pb-10">CONTINUE EXPLORING</h1>
        <p className="font-serif text-white text-2xl pb-10 text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          architecto enim blanditiis sunt maxime debitis quibusdam reprehenderit,
          deleniti ipsam. Aspernatur, sed. Non nesciunt dignissimos excepturi,
          repellat est autem recusandae odit!
        </p>
        <button className="font-medium text-xl text-cyan-400 rounded-lg  border-2 border-white-400 px-4 py-3 m-auto hover:bg-cyan hover:border-white hover:border-2 hover:rounded-lg block">EXPLORE TOURS</button>
      </div>
      <img src={mainImg} className="relative h-full w-full opacity-50"/>
    </div>
  );
};

export default Hero;
