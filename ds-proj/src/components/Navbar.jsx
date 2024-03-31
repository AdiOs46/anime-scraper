'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Statistics',
    href: '/Statistics',
  }
]

function Navbar({onSearch}) {

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
              <li key={item.name}>
                <a
                  href={item.href}
                  className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                  <span>
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </span>
                </a>
              </li>
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