import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footerMain'>
        <div className="container">
          <div className="row">
            <div className="col-sm footerText">
              <h6>Footer Başlık</h6>
              <p>Deneme Footer Yazı</p>
            </div>
            <div className="col-sm footerText">
              <h6>Footer Başlık</h6>
              <p>Deneme Footer Yazı</p>
            </div>
            <div className="col-sm footerText">
              <h6>Footer Başlık</h6>
              <p>Deneme Footer Yazı</p>
            </div>
          </div>
          <div className='hr'></div>
          <div className='footerTextBottom'>
            <p>Copyright Ehesapp 2022</p>
          </div>
        </div>

      </div>
      
    )
  }
}
