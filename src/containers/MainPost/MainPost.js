import React, { Component } from 'react'
import './MainPost.css'
class MainPost extends Component {
  render() {
    return (
      <div className='postMain'>
          <img src='https://images03.nicepage.com/c461c07a441a5d220e8feb1a/6f2c39f11d865e0fa0a86acf/business-people-sitting-office-desk-working-project_1098-17930.jpg?version='></img>
          <h4 className='postBaslik'>{this.props.postBaslik}</h4>
          <div className='postAciklama'>
            {this.props.postAciklama}
          </div><br></br>
          <a href="#" className='postButton'>Yorumları Oku</a>
      </div>
    )
  }
}
export default MainPost;