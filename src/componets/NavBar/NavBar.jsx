import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../styles/NavBar/NavBar.css'
export default function NavBar() {
  return (
    <div>
        <div className="navbar">
            <nav>
                <input type="checkbox" name="" id="check"/>
                <label htmlFor="check" className="checkbtn"><i className="fas fa-bars"></i></label>
                <label className="logo">Elimisha</label>
                <div className="nav-menu">
                    <Link to="/">Home</Link>
                    <Link to="/scholarships">Scholarships</Link>
                    <Link to="/about">About</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav>
        </div>
        <Outlet/>
    </div>
  )
}
