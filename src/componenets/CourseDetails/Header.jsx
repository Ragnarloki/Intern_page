import React, { useState } from 'react';
import logo from "../../assets/images/logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white font-times text-lg font-bold">
      <nav className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex  items-center">
          <h1>{"<"} &nbsp; Back</h1>
          </div>
          <div>
          <img src={logo} alt="" className='h-16 '/>
         </div>
      </div>
      </nav>
    </header>
  );
};

export default Header;
