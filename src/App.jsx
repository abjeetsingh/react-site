import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card.jsx"
import data from  "./assets/data.js"
function App() {
  
  const Cards = data.map( item => {return( 
    <Card 
        img={ "/assets/"  + item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
   )} )
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <section className="card-list">
      {Cards}
      </section>
    </>
  )
}

export default App
