'use client';
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FloatingDockContainer } from './FloatingDockContainer';

const Hero = () => {
  return (
    <div className="w-full pb-1 pt-8">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.2] 
      bg-dot-black/[0.2] absolute top-0 left-0  flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div className="w-full absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-5 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <img
            src="/profile3.jpg"
            className="rounded-full w-56 h-56 object-cover grayscale"
            alt="Harriet's personal headshot"
          />
        </div>
      </div>
      <TextGenerateEffect
        words="Hi, I'm Harriet"
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
      />
      <div className="flex justify-center relative my-5 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="text-center md:tracking-wider mb-1 text-sm md:text-lg lg:text-xl dark:text-white">
            An Experienced JavaScript Software Engineer with a passion in
            frontend development who enjoys reading, dancing, swimming, rope
            skipping, watching sitcoms, riding bikes and spending time with
            family and friends when not coding!
          </p>
        </div>
      </div>
      <div className="flex justify-center relative my-5 z-10 h-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <FloatingDockContainer />
        </div>
      </div>
    </div>
  );
};

export default Hero;
