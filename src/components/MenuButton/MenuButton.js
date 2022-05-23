import React, { Component } from 'react'

export default class MenuButton extends Component {
  render() {
    return (
        <a href={this.props.href} className={this.props.className}>{this.props.buttonName}</a>
    )
  }
}
