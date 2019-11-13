import React from 'react'
import styled from 'styled-components'
import { rotate } from '../_animations'
import { PropsComponent } from './base/PropsComponent'
import spinnerLight from '../images/spinners/spinner_light.svg'
import spinnerBlue from '../images/spinners/spinner_blue.svg'
import { Center } from './Center'

const LoaderInner = styled.img`
  width: ${props => props.size || '50px'};
  height: ${props => props.size || '50px'};
  border: none;

  animation: ${rotate} 1.5s cubic-bezier(0.875, 0.135, 0.15, 0.825) infinite;
`

export class Loader extends PropsComponent {
  render() {
    if (this.props.inline) {
      return (
        <LoaderInner
          {...this.props}
          src={this.props.light ? spinnerLight : spinnerBlue}
        />
      )
    } else {
      return (
        <Center>
          <LoaderInner
            {...this.props}
            src={this.props.light ? spinnerLight : spinnerBlue}
          />
        </Center>
      )
    }
  }
}
