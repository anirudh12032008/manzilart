import React from 'react'
import '../styles/globals.css'
import NavBar from "../components/NavBar";
import { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css';

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:1337'





function MyApp({ Component, pageProps }) {

  useEffect(() => {
    console.log("I am using useEffect");
  }, [])

  const [cart, setCart] = useState([])
  const [reloadKey, setReloadKey] = useState(1)
  const reloadNavBar = () => {
    setReloadKey(Math.random())
  }
  const addToCart = (item, qty, price) => {
    console.log("Added To Cart")
    let newCart = cart
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price])
    }
    console.log("Added To Cart", newCart)
    setCart(newCart)
    setReloadKey(Math.random())
  }
  const removeFromCart = (item, qty) => {
    let newCart = cart
    newCart.push(item)
    setCart(newCart)
  }
  const clearCart = (item) => {
    setCart([])
  }

  return <><NavBar
    title="Manzil Art"
    firstLink="Home"
    secondLink="About"
    thirdLink="Products"
    fourthLink="Contact Us"
    buttonText="Sign Up"
    imgLink="/manzillogo.PNG"
    cart={cart}
    key={reloadKey}
  />

    {/* {console.log(cart)} */}
    <Component cart={cart} reloadNavBar={reloadNavBar} removeFromCart={removeFromCart} addToCart={addToCart} clearCart={clearCart} {...pageProps} />
    <Footer
      companyName="Manzil Art"
      companyDescription="Your Company Description"
      imgLink="/manzillogo.PNG"
      reloadNavBar={reloadNavBar} /></>
}

export default MyApp
