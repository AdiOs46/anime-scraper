import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './pages/Home'
import Information from './pages/Information'
import Statistics from './pages/Statistics'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Information" element={<Information />} />
        <Route path="/Statistics" element={<Statistics />}/>
      </Routes>
    </Router>
  )
}

export default App