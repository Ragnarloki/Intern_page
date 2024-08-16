import React from 'react';
import background from "../../assets/images/background.png"
import girl from "../../assets/images/Girl.png"
import Group4 from "../../assets/images/Group 4.png"

import "./homepage.css"
const Hero = () => {
  return (
    <section className="bg-[#D4CAAA] md:p-8 p-2 font-times">
     {/* <div className='background_image w-full md:rounded[40px] h-[450px] '>
     <div className='flex'>
       <div className='p-1 md:p-5  '>
         <h1 className='text-xl md:text-4xl text-[#F5CF6B] m-5 md:m-10 '><span className='tex-3xl md:text-6xl'>Altruisty</span> help you to Take your carrier to next level by Join Our Exciting Internship Journey</h1>
         <p className='text-white text-sm m-5 md:m-10 md:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
        
        
        <div className='flex md:hidden'>
          <button className='bg-[#F5CF6B]   text-[#17212E] h-10 w-40 rounded-md  mx-5'>Apply Now</button>
          <img src={Group4} className='h-7 w-36 mx-10' alt="" />
          
          
        </div>
        
        
        <div className=' hidden md:block'>
          <div className='flex'>
          <button className='bg-[#F5CF6B]   text-[#17212E] h-10 w-28 rounded-md  mx-10'>Apply Now</button>
          <img src={Group4} className='h-8 w-24 mt-1' alt="" />
          <p className='text-white mx-5 mt-2 '>Rolled up on by more 
          than 1000 students</p>
         
          </div>
          
          
        </div>
       </div>
       <div className='flex justify-center h-full  align-middle mt-10 w-[900px]'>
        <img src={girl} alt="" className='md:w-72 hidden md:block' />
       </div>
      </div>
      </div> */}

      <div className="flex flex-col md:flex-row justify-between items-center background_image  p-6 rounded-lg shadow-lg">
      <div className="text-left  p-4">
        <h1 className="text-2xl md:text-5xl font-bold text-[#F5CF6B] leading-tight">
          Altruisty <span className='text-[#F5CF6B]'>help you to Take your carrier to next level</span> by Join Our Exciting Internship Journey
        </h1>
        <p className="text-white text-md md:text-lg my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
        </p>
        <div className='flex'>
        <button className="bg-[#F5CF6B] text-[#17212E] font-semibold py-2 px-4 rounded-lg shadow-md mt-4 hover:bg-yellow-500">
          Apply Now
        </button>
        <div className='hidden md:block ml-3'>
        <div className="flex items-center ml-4  mt-4">
            <img src={Group4} alt="" />
          <span className="text-white ml-4">Rolled up by more than 1000 students</span>
        </div>
        </div>
        </div>
        <div className=' md:hidden'>
        <div className="flex items-center  mt-4">
            <img src={Group4} alt="" />
          <span className="text-white ml-2">Rolled up by more than 1000 students</span>
        </div>
        </div>
      </div>
      <div className="">
        <img className="h-[300px] w-[250px] md:h-full md:w-full rounded-lg shadow-lg" src={girl} alt="Student" /> 
        {/* Replace with your image URL */}
      </div>
    </div>
    </section>
  );
};

export default Hero;
