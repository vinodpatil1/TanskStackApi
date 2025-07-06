import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <>
    <div className="header w-full py-3 bg-blue-500">
        <div className="container">
            <div className="row flex justify-between">
                <div className="logo">
                    <h2 className='text-2xl text-white'>Tanstck Query react</h2>
                </div>
                <div className="navbar">
                    <ul className='flex gap-10'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><NavLink to="/fetchOldData">FetchOldData</NavLink></li>
                        <li><NavLink to="/fetchRquerydata">FetchRquerydata</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Header