import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import JobDetails from './pages/JobDetails'
import ApplyForm from './pages/ApplyForm'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/job/:id" element={<JobDetails />} />
         <Route path="/apply/:id" element={<ApplyForm />} />
      </Routes>
    </div>
  )
}

export default App