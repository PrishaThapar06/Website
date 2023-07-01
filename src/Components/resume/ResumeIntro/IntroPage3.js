import React from 'react';
import "./IntroPage3.css"
import {AiOutlineSearch} from 'react-icons/ai'
const IntroPage3 = () => {
  return (
    <>
      <div
        className="backgroundcolor bg-blue-700"
      >
        <div className="relative md:top-[20%] top-[30%]">
          <p className='font-extrabold text-3xl text-center text-white'>Build Your Resume</p>
          <p className=" text-center text-white text-lg mt-2 font-semibold">Resume builder helps to build your resume on top of other candidates</p>
        </div>
        <div className='relative md:top-[40%] top-[50%] space-x-5 w-[30%] mx-auto'>
        <button type="button" class="text-blue-700 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
    Build Resume
    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
<button type="button" class="text-blue-700 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center">
    Enhance Resume
    <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
        </div>
      </div>
    </>
  );
};

export default IntroPage3;