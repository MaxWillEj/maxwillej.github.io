import React from 'react'
import styled from 'styled-components'
import { Loader } from './Loader'
import { StateComponent } from './base/StateComponent'
import { Image } from './Image'
import { colors } from '../_styling'

const getColor = props => {
  if (props.loading) {
    return 'transparent'
  } else if (props.simple && props.negative) {
    return colors.RED
  } else if (props.simple) {
    return colors.BLUE
  } else if (props.secondary) {
    if (props.negative) {
      return '#EF604A'
    } else if (props.positive) {
      return '#5CDC83'
    } else {
      return '#009ECE'
    }
  } else {
    return '#fff'
  }
}

const getHoverColor = props => {
  if (props.loading) {
    return 'transparent'
  } else if (props.simple && props.negative) {
    return colors.RED_DARK
  } else if (props.simple) {
    return colors.BLUE_DARK
  } else if (props.disabled) {
    return getColor(props)
  } else {
    return '#fff'
  }
}

const getBackgroundColor = props => {
  if (props.simple) {
    return 'transparent'
  } else if (props.loading) {
    return getHoverBackgroundColor(props)
  } else if (props.secondary) {
    return 'transparent'
  } else {
    if (props.negative) {
      return '#EF604A'
    } else if (props.positive) {
      return '#5CDC83'
    } else if (props.primary) {
      return '#009ECE'
    } else {
      return '#1a2749'
    }
  }
}

const getHoverBackgroundColor = props => {
  if (props.simple) {
    return 'transparent'
  } else if (!props.loading && props.disabled) {
    return getBackgroundColor(props)
  } else if (props.secondary) {
    if (props.negative) {
      return '#EF604A'
    } else if (props.positive) {
      return '#5CDC83'
    } else {
      return '#009ECE'
    }
  } else {
    if (props.negative) {
      return '#BE422F'
    } else if (props.positive) {
      return '#36B95E'
    } else if (props.primary) {
      return '#057091'
    }

    return '#535F7F'
  }
}

const getHoverBorderColor = props => {
  if (props.disabled) {
    return getBorderColor(props)
  } else {
    return getHoverBackgroundColor(props)
  }
}

const getBorderColor = props => {
  if (props.secondary) {
    if (props.negative) {
      return '#EF604A'
    } else if (props.positive) {
      return '#5CDC83'
    } else {
      return '#009ECE'
    }
  } else {
    return getBackgroundColor(props)
  }
}

const getHeight = props => {
  if (props.smaller) {
    return '32px'
  } else if (props.small) {
    return '38px'
  } else {
    return '44px'
  }
}

const BtnInner = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: ${props => (props.disabled || props.loading ? 'default' : 'pointer')};
  outline: none;
  user-select: none;
  background-color: ${getBackgroundColor};
  background-position: center;
  color: ${getColor};
  letter-spacing: 0.12em;
  font-size: ${props =>
    props.smaller ? '12px' : props.small ? '13px' : '14px'};
  font-family: Montserrat;
  font-weight: 500;
  border: 1px solid ${getBorderColor};
  height: ${getHeight};
  padding: ${props =>
    props.simple
      ? '0'
      : props.smaller
      ? '0 12px'
      : props.small
      ? '0 20px'
      : '0 24px'};
  border-radius: 25px;
  transition: background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    border-color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  opacity: ${props => (!props.loading && props.disabled ? '0.5' : '1')};
  text-decoration: ${props => (props.simple ? 'underline' : 'none')};

  &:hover {
    background: ${getHoverBackgroundColor}
      radial-gradient(circle, transparent 1%, ${getHoverBackgroundColor} 1%)
      center / 15000%;
    border: 1px solid ${getHoverBorderColor};
    color: ${getHoverColor};
    transition: background 0.6s cubic-bezier(0.25, 0.1, 0.25, 1),
      color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
      border-color 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.1);
    background-size: 100%;
    transition: background 0s;
  }
`

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;

  img {
    margin-right: 12px;
  }
`

export class Btn extends StateComponent {
  state = { loading: false, hovering: false }

  renderIcon = () => {
    const { icon, hoverIcon } = this.props
    return (
      <IconWrapper>
        <Image src={this.state.hovering ? hoverIcon || icon : icon} />
      </IconWrapper>
    )
  }

  render() {
    const isLoading = this.props.loading || this.state.loading
    const loaderSize = this.props.smaller ? 16 : this.props.small ? 18 : 24
    const halfLoaderSize = loaderSize / 2.0
    return (
      <BtnInner
        type="button"
        {...this.props}
        loading={isLoading ? 1 : 0}
        onClick={async e => {
          if (
            !this.props.loading &&
            !this.state.loading &&
            !this.props.disabled &&
            this.props.onClick
          ) {
            this.setState({ loading: true })
            try {
              await this.props.onClick(e)
            } catch (err) {
              if (process.env.NODE_ENV !== 'production') {
                console.error('Btn onClick error:', err)
              }
            }
            if (!this._unmounted) {
              this.setState({ loading: false })
            }
          }
        }}
        onMouseEnter={() => this.setState({ hovering: true })}
        onMouseLeave={() => this.setState({ hovering: false })}
      >
        {this.props.icon && this.renderIcon()}
        {this.props.children}
        {isLoading && (
          <Loader
            inline
            light={!this.props.simple}
            size={loaderSize + 'px'}
            style={{
              position: 'absolute',
              left: `calc(50% - ${halfLoaderSize}px)`,
              top: `calc(50% - ${halfLoaderSize}px)`
            }}
          />
        )}
      </BtnInner>
    )
  }
}
