// import React from 'react'

// export const NavBar = (props) => {
//     return (

//     )
// }

import React from "react";
import Link from "next/link";

export default function NavBar(props) {
  return (
    <>
      <React.StrictMode>
        <div>
          <header className="text-slate-200 bg-violet-400 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img
                  src={props.imgLink}
                  alt="logo"
                  className="w-11 h-11 text-white rounded-full"
                />
                <span className="ml-3 text-xl">{props.title}</span>
              </a>
              <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <Link href="/">
                  <a className="mr-5 hover:text-gray-900">{props.firstLink}</a>
                </Link>
                <Link href="/about">
                  <a className="mr-5 hover:text-gray-900">{props.secondLink}</a>
                </Link>
                <Link href="/products">
                  <a className="mr-5 hover:text-gray-900">{props.thirdLink}</a>
                </Link>
                <Link href="/contact">
                  <a className="mr-5 hover:text-gray-900">{props.fourthLink}</a>
                </Link>
              </nav>
              <button className="inline-flex items-center bg-purple-800 border-0 py-2 px-4 md:py-1 md:px-2 focus:outline-none hover:bg-purple-300 rounded text-base mt-4 md:mt-0 text-neutral-50">
                {props.buttonText}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </header>
        </div>
      </React.StrictMode>
    </>
  );
}
