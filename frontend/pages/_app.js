import React from 'react'
import '../styles/globals.css'
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {

  return <><NavBar
    title="Manzil Art"
    firstLink="Home"
    secondLink="About"
    thirdLink="Products"
    fourthLink="Contact Us"
    buttonText="Sign Up"
    imgLink="/manzillogo.PNG"

  />
    <Component {...pageProps} /></>
}

export default MyApp
