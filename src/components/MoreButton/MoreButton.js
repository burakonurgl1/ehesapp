import React, { Component } from 'react'
import './MoreButton.css';

class MoreButton extends Component {
  render() {
    return (
      <button onClick={()=> this.handleClick()} className='dahaFazla'>Daha Fazla</button>
    )
  }
}
export default MoreButton;