import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../../styles/NavBar/NavBar.css'
export default function NavBar() {
  return (
    <div>
        <div class="navbar">
            <nav>
                <input type="checkbox" name="" id="check"/>
                <label for="check" class="checkbtn"><i class="fas fa-bars"></i></label>
                <label class="logo">Elimisha</label>
                <div class="nav-menu">
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
