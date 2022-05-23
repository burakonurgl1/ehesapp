import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className='footerMain'>
          <div className='footerRow'>
                <div className='footerCell'>
                    <h6>Footer Yazı</h6>
                    <p>Footer İçerik</p>
                </div>
                <div className='footerCell'>
                    <h6>Footer Yazı</h6>
                    <p>Footer İçerik</p>
                </div>
                <div className='footerCell'>
                    <h6>Footer Yazı</h6>
                    <p>Footer İçerik</p>
                </div>
                <div className='hr'></div>      
          </div>
          
          <div className='footerBottomText'>
            Footer Alt Yazı
          </div>
          <div className='footerBottom'>
              <p>Copyright Ehesapp 2022</p>
          </div>
      </div>
    )
  }
}
