'use client'
import React, {useState} from 'react'
import { ChevronDown } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Genres',
    href: '/Statistics',
  }
]

function Navbar({onSearch, onGenreSelect, genres}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSearch = event => {
    onSearch(event.target.value)
  }

  return (
    <div className="absolute w-[100vw] bg-white top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span className="font-bold text-black">AniTrack</span>
        </div>
        <div className="hidden lg:block">
          <ul className="ml-12 inline-flex space-x-8">

          {menuItems.map((item) => (
              item.name === 'Genres' ? (
                <li key={item.name}>
                  <a onClick={toggleDropdown} className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                    {item.name}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </a>
                  {isOpen && (
                    <ul className="absolute bg-white border border-gray-200 mt-2 rounded-md shadow-lg z-50  grid grid-cols-6 gap-">
                      {genres.map((genre) => (
                        <li key={genre}>
                          <a onClick={() => onGenreSelect(genre)} className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">
                            {genre}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={item.name}>
                  <a href={item.href} className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              )
            ))}
          </ul>
        </div>
        <div className="flex grow justify-end">
          <input
            onChange={handleSearch}
            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-black text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar