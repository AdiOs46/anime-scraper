import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Information from './pages/Information'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Information" element={<Information />} />
      </Routes>
    </Router>
  )
}

export default App