import React, { Component } from 'react'

export class Title extends Component {
  render() {
    // TODO Add default style for text
    return (
      <p
        {...this.props}
        style={{
          margin: '0',
          padding: '0',
          fontSize: '34px',
          fontFamily: 'Playfair Display',
          fontWeight: '700',
          letterSpacing: '0.07em',
          color: '#3f4658',
          ...this.props.style
        }}
      />
    )
  }
}
