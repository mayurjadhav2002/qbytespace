import React from 'react'
import "./Navbar.css"
import { Route, Routes, Link } from "react-router-dom"
import Home from '../../Home';
import Login from '../Admin/Login';
function Navbar() {
  return (
    <div className='shadow-sm'>
   
    <div className="mx-auto z-50 bg-white flex shadow-sm items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <button    type="button"
        className=" flex appearance-none p-1 text-gray-500 md:hidden justify-center items-center gap-2 rounded-md border border-transparent font-semibold "
        data-hs-overlay="#hs-overlay-example">
          <svg className="h-6 w-6" fill="currentcolor" viewBox="0 0 256 256">
            <line
              x1={40}
              y1={128}
              x2={216}
              y2={128}
              fill="none"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={40}
              y1={64}
              x2={216}
              y2={64}
              fill="none"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
            <line
              x1={40}
              y1={192}
              x2={216}
              y2={192}
              fill="none"
              stroke="currentcolor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={24}
            />
          </svg>
        </button>
        <Link to="/" >
        <span className='font-semibold text-justify bold text-2xl'>      QbyteSpace

        </span>
        </Link>
      </div>
      <nav className="hidden items-center space-x-2 text-sm font-medium text-gray-800 md:flex">
        <Link to="/software-discounts"
          className="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
        >
          Software Coupons
        </Link>
        <Link to="/blogs"
          className="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
        >
          Internships + Courses
        </Link>
        <Link to="/software-discounts"
          className="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
        >
          Careers
        </Link>
        <Link to="/ai-tools"
        className="rounded bg-white px-3 py-2 transition hover:bg-gray-100"
      >
        AI tools
      </Link>
   
        <div class="dropdown">
        <Link
        className="rounded dropbtn bg-white px-3 py-2 transition hover:bg-gray-100 "
      >
      More \/
      </Link>
        <div class="dropdown-content rounded-lg shadow-lg mt-1">
       <Link to="/" className='hover:bg-gray-100 rounded-lg mx-1 mt-1'>Udemy Coupons</Link>
       <Link to="/" className='hover:bg-gray-100 rounded-lg mx-1'>Book Finder</Link>

       <Link to="/" className='hover:bg-gray-100 rounded-lg mx-1 mb-1'>udemy Coupons</Link>

        </div>
      </div>
      </nav>
      <nav className="flex items-center space-x-1 text-sm font-medium text-gray-800">
        <Link to="/login"
          className="hidden rounded bg-white px-3 py-2 transition hover:bg-purple-100 sm:inline"
        >
          Login
        </Link>
        <Link to="/signup"
          className="rounded q-btn px-3 py-2 text-white transition hover:bg-rose-700"
        >
          Sign Up
        </Link>
      </nav>
      <div
    id="hs-overlay-example"
    className="hs-overlay hs-overlay-open:translate-x-0 hidden -translate-x-full fixed top-0 left-0 transition-all duration-300 transform h-full max-w-xs w-full w-full z-[60] bg-white border-r dark:bg-gray-800 dark:border-gray-700 hidden"
    tabIndex={-1}
  >
    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
    
      <button
        type="button"
        className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white text-sm dark:text-gray-500 dark:hover:text-gray-400 dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
        data-hs-overlay="#hs-overlay-example"
      >
        <span className="sr-only">Close modal</span>
        <svg
          className="w-3.5 h-3.5"
          width={8}
          height={8}
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
    <div className="p-4">
    <div className="py-4 overflow-y-auto">
    <ul className="space-y-2 font-medium">
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
          <span className="ml-3">Software Coupons</span>
        </a>
      </li>
     
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Interships + Courses</span>
          <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
            NEw
          </span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Career Blog</span>
        
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">AI tools</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">More</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
              clipRule="evenodd"
            />
          </svg>
          <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
        </a>
      </li>
    </ul>
  </div>
    </div>
  </div>
    </div>


    </div>
    
  )
}

export default Navbar
