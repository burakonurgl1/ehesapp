import React, { Component } from 'react'
import MenuButton from '../../components/MenuButton/MenuButton'
import Logo from '../../components/Logo/Logo'


export default class Navbar extends Component {
  render() {
    return (
      <div className='Navbar'>
          <div className='navbar-left'> 
            <Logo src="https://web.ehesapp.com/assets/images/logo.png"></Logo>
          </div>
          <div className='navbar-right'>
            <MenuButton className="navbarLink" href="#" buttonName="Anasayfa"></MenuButton>
            <MenuButton className="navbarLink" href="#" buttonName="Hakkımızda"></MenuButton>
            <MenuButton className="navbarLink" href="#" buttonName="İletişim"></MenuButton>
            <MenuButton className="navbarLink navbarSonLink" href="#" buttonName="Yardım"></MenuButton>
          </div>
          
      </div>
    )
  }
}
