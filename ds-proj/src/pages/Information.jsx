import { useLocation } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'

function Information() {
  const location = useLocation()
  const product = location.state.product
  const [isExpanded, setIsExpanded] = useState(false);

  return (
  <>
  <section className="w-full overflow-hidden">
    <div className="mx-auto mt-[10vh] max-w-5xl px-5 py-24">

      <div className="flex flex-col items-center mb-10">
        <h1 className="text-4xl font-semibold text-white pl-0">
          {product.title}
        </h1>
        <div className="flex w-full title-font text-2xl font-semibold text-white justify-center">
            Rating: {product.rating}
        </div>
      </div>

      <div className="flex items-start lg:w-4/5 mx-auto">
        <img className="h-64 w-[5vw] rounded object-contain lg:h-96 lg:w-1/3 lg:mr-10"
          src={product.image}
        />
        <div className="mt-6 w-full lg:mt-0 lg:w-2/3 lg:pl-10">
          <p className="leading-relaxed font-semibold text-justify mt-2 text-white"> 
            Genres: {product.genres ? product.genres.join(', ') : 'N/A'}
          </p>
          <br />
          <p>
             Synopsis: {isExpanded ? product.synopsis : `${product.synopsis.substring(0, 400)}...`}
          </p>
          <p className="text-blue-500 hover:text-blue-700" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </p>
        </div>
      </div>
    </div>
    <div className="mt-10 mb-20">
      <div className="flex justify-center">
        <iframe className='border-0'
          width="560" 
          height="315" 
          src={`${product.trailer}?autoplay=1&mute=1`}
          title="Trailer" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
  </>
    )
}

export default Information