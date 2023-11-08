import React from 'react'
import {Footer,Blog,Possiblity,Feature,WhatGPT3,Header} from './container';
import {CTA,Brand,Navbar} from './components'
import './App.css'
function App() {
  return (
    <div className="app">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Feature/>
      <Possiblity/>
      <CTA/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default App
