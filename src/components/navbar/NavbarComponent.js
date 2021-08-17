import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

function NavbarComponent() {
    return (
        <>
          <nav className="navbar">

                
             <Link to="/" className="navlogo">Lord_film</Link>
                
          <div className="navbar-link">

            <Link to="/" className="nvlink">Home</Link>

            <Link to="/" className="nvlink">About</Link>

          </div>

          </nav>  
        </>
    )
}

export default NavbarComponent;
