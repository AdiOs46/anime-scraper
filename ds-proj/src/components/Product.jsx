import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({ data }) {

  const navigate = useNavigate()

  const handleReadMore = (product) => {
    console.log(product)
    navigate('/Information', {state: { product: product }})
  }

  return (
    <div className="mx-auto grid grid-cols-4 w-full max-w-7xl items-center space-y-4 px-2 py-10 md:gap-6 md:space-y-0 ml-[7vw]">
      {data.map((product, i) => (
        <div
          key={i}
          className="relative aspect-[16/9] w-[18vw]  rounded-md md:aspect-auto md:h-[400px]"
        >
          <img
            src={product.image}
            alt={product.title}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white text-center p-2">{product.title}</h1>
            <p className="mt-2 text-sm text-gray-300">
              Rating: {product.rating}
            </p>
            <button onClick={() => handleReadMore(product)} className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Read More &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}


export default Product
