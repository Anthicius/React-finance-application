import React from 'react'
import logo from '../assets/investment-calculator-logo.png'

const Header = () => {
  return (
    <header id='header'>
        <div><img src={logo} alt="money bag icon"/></div>
        <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header