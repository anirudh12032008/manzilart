import React from 'react'

const Products = (props) => {
    return (
        <div className='container mx-auto px-4 py-2'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {props.products.data.map((item) => {
                            return (


                                <div className="xl:w-1/4 md:w-1/2 p-4">
                                    <div className="bg-gray-100 p-6 rounded-lg">
                                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content" />
                                        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                                        <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
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