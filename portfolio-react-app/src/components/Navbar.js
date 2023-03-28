import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo1.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-500 cursor-pointer'>
      <div>
        <p>Connor Bodin</p>
      </div>

      {/* menu */}
      <ul className='hidden md:flex m-5 p-5'>
        <li  className='p-2'>
          <Link to='home' className='hover:text-gray-300 duration-200' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li  className='p-2'>
          <Link to='about' className='hover:text-gray-300 duration-200' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li  className='p-2'>
          <Link to='skills' className='hover:text-gray-300 duration-200' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li  className='p-2'>
          <Link to='work' className='hover:text-gray-300 duration-200' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li  className='p-2' >
          <Link to='contact' className='hover:text-gray-300 duration-200' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-3'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/connor-bodin-00/'
            >
              Linkedin <FaLinkedin className="pr-1" size={35} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/connorbodin'
            >
              Github <FaGithub className="pr-1" size={35}  />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:connor.e.bodin@gmail.com'
            >
              Email <HiOutlineMail className="pr-1" size={35}  />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://docs.google.com/document/d/1J5wkGsf9Pnzj2VQu-Vwbzi73i3v-BFoAsD5j32qs_cQ/edit?usp=sharing'
            >
              Resume <BsFillPersonLinesFill className="pr-1" size={35}  />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;