import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='container d_flex'>
            <div className='logo'>
                <img src='' alt='' />
            </div>

            <div className='navLink'>
                <ul className='link f_flex uppercase'>
                    <li><a href='#home'>home</a></li>
                    <li><a href='#portfolio'>portfolio</a></li>
                    <li><a href='#contact'>contact</a></li>
                    <li><a href='#resume'>resume</a></li>
                </ul>
                <button className='toggle'>
                <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header