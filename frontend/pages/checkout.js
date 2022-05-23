import React, { useEffect, useState } from "react";

const Checkout = ({ cart }) => {
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    console.log(cart);
    let myTotal = 0;
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + cart[index][1];
    }
    setSubtotal(myTotal);
    // subtotal = subtotal;
  }, []);

  return (
    <div>
      <div className="container flex flex-col items-center">
        <h1 className="text-3xl text-center m-8">Cart</h1>
        <div className=" text-2xl">
          {cart.length
            ? `Your cart details are as follows`
            : `Your Cart Is Empty!`}
        </div>
        <div>
          <ul className="list-decimal  ">
            {cart.map((item) => {
              return (
                <li key={Math.random()}>
                  {item[0]} with a price of ₹{item[1]}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="">Subtotal: ₹{subtotal}</div>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="phone"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col">
        <button className="shake-vertical text-white mt-10 bg-indigo-500 mx-12 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg w-1/3">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Checkout;
