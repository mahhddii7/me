"use client";

import { useState } from "react";
import { lazy } from 'react';
const SectionOne = lazy(() => import('./components/sectionOne/index'));
const SectionTwo = lazy(() => import('./components/SectionTwo/index'));
const SectionTheree = lazy(() => import('./components/SectionTheree/index'));
const SectionFour = lazy(() => import('./components/SectionFour/index'));
import Loading from "./Layout/Loading";
import Header from "./Layout/Header";
import TextReveal from "../@/components/magicui/text-reveal";

function App() {
  const [load, setLoad] = useState(false)

  setTimeout(() => {
    setLoad(true)
  }, 4000);

  return !load ? <Loading /> : (<>
    <Header />
    <div className="dark">
      <SectionOne />
      <SectionTwo />
      <div className=" z-30 flex min-h-[16rem] items-center justify-center bg-white dark:bg-black pointer-events-none">
        <TextReveal className={`style-text text-5xl`} text="Well, let's see what companies we worked with ... " />
      </div>
      <SectionTheree />
      <div className="relative h-[350px] pointer-events-auto">
        <svg id="svg" className=" absolute w-full h-full top-0 left-1/2 -translate-x-1/2 z-30">
          <path className=" fill-none stroke-[#fff] stroke-2" id="path" d={`M50,200 Q 400,200 ${(window.innerWidth - 50)},200`} />
        </svg>
      </div>
      <SectionFour />
    </div>
  </>)


}

export default App
