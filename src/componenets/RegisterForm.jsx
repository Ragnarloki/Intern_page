import React from 'react';
import logo from "../assets/images/logo.png"
const RegisterForm = () => {
  return (
    <div >
      <div className='flex justify-between '>
        <div className='m-6 text-xl font-times font-bold'>
           <h1 >
           {" <  "} &nbsp;back
           </h1>
        </div>
         <div>
          <img src={logo} alt="" className='h-20 mr-3' />
         </div>
      </div>
    <div className="min-h-screen p-8  font-bold font-times  text-[#1C2540] flex items-center justify-center bg-[#D4CAAA]">
      <div className="bg-white p-8  rounded-md shadow-lg  w-full md:w-[660px]">
        <h2 className="text-center text-xl font-semibold mb-6">Registration Form</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2">Name</label>
            <input type="text" className="w-full p-2 border border-gray-300 bg-[#1C2540] text-white rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Email</label>
            <input type="email" className="w-full p-2 border border-gray-300 bg-[#1C2540] text-white rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Address</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md h-20 bg-[#1C2540] text-white"></textarea>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Country</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
            </div>
            <div>
              <label className="block mb-2">City</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Country code</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
            </div>
            <div>
              <label className="block mb-2">Phone no</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Domain</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Graduating year</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">College/University</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Why we Need To Hire You</label>
            <textarea className="w-full p-2 border border-gray-300 rounded-md h-20 bg-[#1C2540] text-white"></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Skills</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Department</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
            </div>
            <div>
              <label className="block mb-2">Year</label>
              <input type="text" className="w-full bg-[#1C2540] text-white p-2 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">LinkedIn Profile</label>
              <input type="text" className="w-full p-2 border border-gray-300 bg-[#1C2540] text-white rounded-md" />
            </div>
            <div>
              <label className="block mb-2">GitHub URL</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Duration</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md bg-[#1C2540] text-white" />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Resume Upload</label>
            <input type="file" className="w-full p-2 border  border-gray-300 rounded-md bg-[#1C2540] text-white" />
          </div>
          <button className="w-full bg-[#17212E] text-white hover:bg-[#F5CF6B] hover:text-[#17212E] p-2 rounded-md mt-4">Register</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default RegisterForm;
