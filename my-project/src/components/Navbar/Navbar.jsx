import React  from 'react';
import "./Navbar.css"
import ResponsiveMenu from './ResponsiveMenu.jsx';
import { NavbarMenu } from "../../mockData/data.js";


import { MdMenu } from "react-icons/md";

const Navbar = () => {
    const [open,setOpen]= React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-center items-center py-8">
          {/* Logo section */}
        
          {/* Menu section */}
          <div className="hidden md:block">
            <ul className="flex items-centergap-6 text-slate-100 gap-5">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id} className=' border-gray-950 bg-pink-700 rounded-full '>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 text-slate-100 hover:text-pink-600 font-semibold "
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
         
          {/* Mobile hamburger Menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl"/>
          </div>
        </div>
      </nav>
      {/*Mobile Slidebar section */}
      <ResponsiveMenu  open = {open}/>
    </>
  );
};

export default Navbar;
