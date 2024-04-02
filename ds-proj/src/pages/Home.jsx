import React, { useState } from 'react'
import Product from '../components/Product'
import Navbar from '../components/Navbar'
import jsonData from '../../../top_anime_data.json'

function Home() {
  const [products, setProducts] = useState(jsonData)
  const [selectedGenre, setSelectedGenre] = useState('')

  const genres = jsonData.map(product => product.genres)
    .reduce((a, b) => a.concat(b), [])
    .filter((item, index, self) => self.indexOf(item) === index)

  const onSearch = (searchInput) => {
    const filteredProducts = jsonData.filter(product => 
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  const onGenreSelect = (genre) => {
    setSelectedGenre(genre)
  }

  const filteredProducts = selectedGenre 
    ? products.filter(product => product.genres.includes(selectedGenre))
    : products

  return (
    <>
      <Navbar onSearch={onSearch} onGenreSelect={onGenreSelect} genres={genres}/>
      <br />
      <h1 className='text-lg'>Chosen Shows: </h1>
      <Product data={filteredProducts}/>
    </>
  )
}

export default Home