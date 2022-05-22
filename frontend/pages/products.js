import React from 'react'
import Link from "next/link";
import { motion } from 'framer-motion';


const Products = (props) => {
    return (
        <div className='container mx-auto px-4 py-2'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 md:py-24 mx-auto">
                    <div className="flex flex-wrap w-full md:mb-20">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    x: "60vw",
                                    scale: 0.6,
                                    opacity: 0,
                                },
                                visible: {
                                    x: "0",
                                    scale: 1,
                                    opacity: 1,
                                    transition: {
                                        delay: 0.7,
                                        duration: 0.5,
                                    },
                                },
                            }}
                        >
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">ManzilArt</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="flex flex-wrap flex-row -m-4 ">
                        {props.products.data.map((item) => {
                            return (
                                <div key={item.attributes.slug} className=" xl:w-1/3 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <img className=" rounded w-full object-cover object-center mb-6" src={item.attributes.image.data && "http://localhost:1337" + item.attributes.image.data.attributes.formats.medium.url} alt="content" />
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{"₹ " + item.attributes.price}</h2>
                                        <p className="leading-relaxed text-base">{item.attributes.description}</p>
                                        <Link href={`/product/${item.attributes.slug}`}><button className="inline-flex items-center bg-purple-800 border-0 py-2 px-4 md:py-1 md:px-2 focus:outline-none hover:bg-purple-300 rounded text-base mt-4 my-2 mx-50% text-neutral-50">Buy Now</button></Link>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section></div>
    )
}

export async function getServerSideProps(context) {

    let headers = {
        Authorization: "Bearer 0497cb70b764f4e631c904c47fcb53dc96a6d3af657d9c967d03ff1782f6fe0cd1bb4e68c8d34b3e3b069954334e3af287a6c9ecefb30aff36cf09552136f814001d47f7ce568ddbef38cac52cf86574e9ac9a38157bcd64b0b8e7c83215d495cab4888f0dd7e3aad87c4bd07df21958823830a1a7658eb2e3868dcd705285e3"
    }
    let a = await fetch("http://localhost:1337/api/products?populate=*", { headers: headers })
    let products = await a.json()
    return {
        props: { products: products }, // will be passed to the page component as props
    }
}

export default Products