import React from 'react'
import '../../styles/Home/Home.css'
import Cards from './Cards'
import Hero from './Hero'

export default function Home() {
  return (
    <div className='container'>
      <Hero/>
      <Cards/>
    </div>
  )
}
