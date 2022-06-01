// import React from 'react'

// export const NavBar = (props) => {
//     return (

//     )
// }

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Script from "next/script";
import Head from "next/head";

export default function NavBar(props, reloadNavBar) {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          rel="stylesheet"
        />
      </Head>
      <React.StrictMode>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              y: "10px",
              scale: 1,

              opacity: 0.7,
            },
            visible: {
              y: "0",
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0,
                duration: 0.6,
              },
            },
          }}
        >
          <div>
            <header className="text-black lemon-yellow body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                  <img
                    src={props.imgLink}
                    alt="logo"
                    className="w-11 h-11 text-white rounded-full"
                  />
                  <span className="ml-3 text-xl ">{props.title}</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                  <Link href="/">
                    <a
                      onClick={reloadNavBar}
                      className="mr-5 hover:text-gray-900 font1"
                    >
                      {props.firstLink}
                    </a>
                  </Link>
                  <Link href="/about">
                    <a
                      onClick={reloadNavBar}
                      className="mr-5 hover:text-gray-900 font1"
                    >
                      {props.secondLink}
                    </a>
                  </Link>
                  <Link href="/products">
                    <a
                      onClick={reloadNavBar}
                      className="mr-5 hover:text-gray-900 font1"
                    >
                      {props.thirdLink}
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a
                      onClick={reloadNavBar}
                      className="mr-5 hover:text-gray-900 font1"
                    >
                      {props.fourthLink}
                    </a>
                  </Link>
                  <Link href="/checkout">
                    <a
                      onClick={reloadNavBar}
                      className="mr-5 hover:text-gray-900 font1"
                    >
                      Cart({props.cart.length})
                    </a>
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
        </motion.div>
      </React.StrictMode>
      <div>
        {/* <div className=" bg-violet-500 flex items-center justify-between border-b border-gray-400 py-5">
        <a href="/">
          <img className="mx-10" src="manzillogo.PNG" alt="logo" />
        </a>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
      
            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> // toggle class based on isNavOpen state
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/about">About</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li className="border-b border-gray-400 my-8 uppercase">
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </section>
      
          <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      `}</style>
      </div> */}
      </div>
    </>
  );
}
