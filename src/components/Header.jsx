import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo'>
            <Link to='/'>
            <h1>NOVATION</h1>
            </Link>
        </div>
        <ul className='menu'>
            <li>Əsas</li>
            <li>Kateqoriya</li>
            <li>Bloq</li>
            <li>Əlaqə</li>
        </ul>
        <div className='buttons'>
            <Link to='/signIn'>  <button>Daxil Ol</button></Link>
          
          <Link to='/'><button>Çıx</button></Link>
            
        </div>
    </div>
  )
}

export default Header