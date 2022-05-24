import React, { Component } from 'react'

class Logo extends Component {
  render() {
    return (
      <img src={this.props.src} width={this.props.width} height={this.props.height} className={this.props.className} alt=""></img>
    )
  }
}
export default Logo