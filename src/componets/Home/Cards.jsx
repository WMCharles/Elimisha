import React from 'react'
import '../../styles/Home/Cards.css'
export default function Cards() {
  return (
    <div className="about">
        <div>
            <p><span className="icon"><i className="fa-solid fa-circle-play"></i></span></p>
            <h3>100K+ Online Courses</h3>
            <p>Learn skills that matter, 100,000 online courses</p>
        </div>
        <div>
            <p><span className="icon"><i className="fa-solid fa-user-large"></i></span></p>
            <h3>Expert Mentor and Teacher</h3>
            <p>Very Experienced Mentor and Teacher</p>
        </div>
        <div>
            <p><span className="icon"><i className="fa-solid fa-clock"></i></span></p>
            <h3>Lifetime Access</h3>
            <p>Free website until satisfied</p>
        </div>
    </div>
  )
}
