import './App.css'
import React from 'react'
import { useState } from 'react'
import Product from './components/Product'
import Navbar from './components/Navbar'
import jsonData from '../top_anime_data.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = React.useState(jsonData)

  const onSearch = (searchInput) => {
    const filteredProducts = jsonData.filter(product => 
      product.title.toLowerCase().includes(searchInput.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  return (
    <>
      <Navbar onSearch={onSearch}/>
      <br />
      <h1 className='text-lg'>Top Shows of All Time: </h1>
      <Product data={products}/>
    </>
  )
}

export default App
