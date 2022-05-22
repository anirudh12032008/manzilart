import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:1337";

function Slug({ product, addToCart }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 1.5,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.7,
              duration: 0.5,
            },
          },
        }}
      >
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={
                  product.attributes.image.data &&
                  `${API_URL}${product.attributes.image.data.attributes.formats.medium.url}`
                }
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  MANZIL ART
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.attributes.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                  <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="text-gray-500">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>

                <div className="animationbox">
                  <p className="leading-relaxed">
                    {product.attributes.description}
                  </p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ₹​ {product.attributes.price}
                    </span>
                    <div className="flex mx-5">
                      <button
                        onClick={() => {
                          addToCart(slug, 1, product.attributes.price);
                        }}
                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2 mx-2 focus:outline-none hover:bg-indigo-600 rounded"
                      >
                        Add to cart
                      </button>
                      <button
                        onClick={() => {
                          router.push("/checkout");
                        }}
                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-2 mx-2 focus:outline-none hover:bg-indigo-600 rounded"
                      >
                        Check Out
                      </button>
                    </div>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export async function getServerSideProps(context) {
  //   console.log(context.query.slug);
  // let headers = {
  //   Authorization:
  //     "Bearer 0497cb70b764f4e631c904c47fcb53dc96a6d3af657d9c967d03ff1782f6fe0cd1bb4e68c8d34b3e3b069954334e3af287a6c9ecefb30aff36cf09552136f814001d47f7ce568ddbef38cac52cf86574e9ac9a38157bcd64b0b8e7c83215d495cab4888f0dd7e3aad87c4bd07df21958823830a1a7658eb2e3868dcd705285e3",
  // };
  let apiFetchUrl = `${API_URL}/api/products?filters[slug]=${context.query.slug}&populate=*`;
  // console.log(apiFetchUrl);
  let a = await fetch(apiFetchUrl, {
    headers: {
      Authorization: `bearer 0497cb70b764f4e631c904c47fcb53dc96a6d3af657d9c967d03ff1782f6fe0cd1bb4e68c8d34b3e3b069954334e3af287a6c9ecefb30aff36cf09552136f814001d47f7ce568ddbef38cac52cf86574e9ac9a38157bcd64b0b8e7c83215d495cab4888f0dd7e3aad87c4bd07df21958823830a1a7658eb2e3868dcd705285e3`,
    },
  });
  let product = await a.json();
  return {
    props: { product: product.data[0] }, // will be passed to the page component as props
  };
}

export default Slug;
