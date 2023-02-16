import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <>
       <button style={this.props.style} onClick={this.props.fun}>{this.props.title}{this.props.icon}</button> 
      </>
    )
  }
}
