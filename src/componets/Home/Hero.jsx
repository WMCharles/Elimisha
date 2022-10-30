import React from 'react'
import educator from '../../images/educator.svg'
import '../../styles/Home/Hero.css'

export default function Hero() {
  return (
    <div>
        <div className='hero-section'>
            <div className='scholarship-content'>
                <h2 id="h2"><span className="title">Scholarships </span>For Every Bright Student</h2>
                <p>
                    Scholarships are gifts. They don't need to be repaid. There are thousands of them, offered by schools, employers, 
                    individuals, private companies, nonprofits, communities, religious groups, and professional and professional and social organizations.
                </p>
                <p id="search"><a href="#">Scholarships</a></p>
            </div>
            <div>
                <img src={educator} alt="educator" />
            </div>
        </div>
    </div>
  )
}
