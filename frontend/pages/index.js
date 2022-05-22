import Head from "next/head";
import Image from "next/image";
import React, { Component } from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.6,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.7,
              duration: 0.6,
            },
          },
        }}
      >
        <div className="flex items-center mx-auto">
          <Carousel>
            <div>
              <img src="/img1.jpg" alt="image1" />
            </div>
            <div>
              <img src="/img2.jpg" alt="image2" />
            </div>
            <div>
              <img src="/img3.jpg" alt="image3" />
            </div>
          </Carousel>
        </div>
      </motion.div>
    </>
  );
}
