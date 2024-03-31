import { useLocation } from 'react-router-dom'
import React from 'react'
import { Star, ChevronDown } from 'lucide-react'

function Information() {
    const location = useLocation()
    const product = location.state.product
    console.log(product)

    // use the product object
    return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            className="h-64 w-[5vw] rounded object-contain lg:h-96 lg:w-1/2"
            src={product.image}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500">Anime</h2>
            <h1 className="my-4 text-3xl font-semibold text-white whitespace-nowrap overflow-ellipsis">{product.title}</h1>
            <div className="flex items-center justify-between">
              <span className="title-font text-xl font-bold text-white">Rating: {product.rating}</span>
            </div>
            <div className="my-4 flex items-center">
                <span className="flex items-center space-x-1">
                    <span className="ml-3 inline-text text-xs font-semibold">
                    <p className="mt-2 text-center text-sm text-white"> 
                        Genres: {product.genres.join(', ')}
                    </p>
                    </span>
                </span>
            </div>

            <p className="leading-relaxed text-justify"> {product.synopsis} </p>

            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Information