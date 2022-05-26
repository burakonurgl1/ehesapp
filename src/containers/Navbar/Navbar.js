import React, { Component } from 'react'
import MenuButton from '../../components/MenuButton/MenuButton'
import Logo from '../../components/Logo/Logo'

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.gizleGoster = this.gizleGoster.bind(this);
  }
  gizleGoster(){
      console.log("asd");
      var secilenID = document.getElementById("collapse");
      if (secilenID.style.display === "none") {
          secilenID.style.display = "";
      } else {
          secilenID.style.display = "none";
      }
  }
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#anasayfa">
        <Logo src="https://web.ehesapp.com/assets/images/logo.png"></Logo>
        </a>
        <button className="navbar-toggler" type="button" onClick={this.gizleGoster} data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menu navbarText">
            <MenuButton className="navbarLink" href="#" buttonName="Anasayfa"></MenuButton>
            <MenuButton className="navbarLink" href="#" buttonName="Hakkımızda"></MenuButton>
            <MenuButton className="navbarLink" href="#" buttonName="İletişim"></MenuButton>
            <MenuButton className="navbarLink navbarSonLink" href="#" buttonName="Yardım"></MenuButton>
        </div>
      </nav>
      
    )
  }
}
