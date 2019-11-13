import React, { Component } from 'react'
import { Title } from './Title'
import { Description } from './Description'
import { FlexCol } from './FlexCol'
import { spacing } from '../_styling'
import { Label } from './Label'
import { Btn } from './Btn'
import { FlexRow } from './FlexRow'
import styled from 'styled-components'
import { fadeIn, slideUp } from '../_animations'

const DialogBackground = styled.div`
  display: flex;
  overflow-y: scroll;
  background: rgba(17, 19, 24, 0.5);
  animation: ${fadeIn} 0.2s ease-in-out;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: ${spacing.LARGE};
`

const ContentWrapper = styled.div`
  box-sizing: border-box;
  margin: auto;
  background-color: white;
  width: 640px;
  border-radius: 8px;
  animation: ${fadeIn} 0.2s ease-in-out, ${slideUp} 0.4s ease-in-out;
`

/**
 * Example verbose:
<Dialog
  showing
  loading
  actionRequired
  title="Hello"
  description="You are being presented a Dialog!"
  text="Isn't it wonderful, to be able to cover the screen, in order to force the user to react to some question that the developer feels like asking?"
  textCancel="CANCEL"
  onCancel={() => {
    alert('Cancel!')
  }}
  textNegative="DELETE"
  onNegative={() => {
    alert('Delete!')
  }}
  textPositive="SAVE"
  onPositive={() => {
    alert('Save!')
  }}
>
  <TheRestOfMyComponents />
</Dialog>


 * Example concise:
<Dialog {...this.state.dialog} />


 * Example Component.state object:
state = {
  dialog: {
    showing: true,
    loading: false,
    actionRequired: true,
    title: 'Hello',
    description: 'You are being presented a Dialog!',
    text: 'Isnt it wonderful, to be able to cover the screen ...',
    textCancel: 'CANCEL',
    onCancel: () => {
      alert('Cancel!')
    },
    textNegative: 'DELETE',
    onNegative: () => {
      alert('Delete!')
    },
    textPositive: 'SAVE',
    onPositive: () => {
      alert('Save!')
    }
  }
}
 */
export class Dialog extends Component {
  setBodyOverflow = hidden => {
    if (hidden) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  componentDidMount() {
    if (this.props.showing) {
      this.setBodyOverflow(true)
    }
    this.contentNode = React.createRef()
  }

  componentWillUnmount() {
    this.setBodyOverflow(false)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showing !== this.props.showing) {
      this.setBodyOverflow(this.props.showing)
    }
  }

  render() {
    if (!this.props.showing) {
      return null
    }
    return (
      <DialogBackground
        onClick={
          this.props.onClick ||
          (this.props.onCancel && !this.props.actionRequired
            ? e => {
                if (this.contentNode.current.contains(e.target)) {
                  return
                }

                this.props.onCancel(e)
              }
            : undefined)
        }
      >
        <ContentWrapper
          style={{ padding: spacing.LARGER, ...this.props.style }}
          ref={this.contentNode}
        >
          <FlexCol>
            {this.props.title && (
              <Title style={{ marginBottom: spacing.MEDIUM }}>
                {this.props.title}
              </Title>
            )}
            {this.props.description && (
              <Description style={{ marginBottom: spacing.SMALL }}>
                {this.props.description}
              </Description>
            )}
            {this.props.text && (
              <Label
                style={{
                  marginBottom: this.props.children ? spacing.SMALL : '0',
                  padding: spacing.SMALLER,
                  border: '1px solid #949eb6',
                  borderRadius: '8px',
                  fontSize: '18px'
                }}
              >
                {this.props.text}
              </Label>
            )}
            {this.props.children}
            {this.props.renderChildren && this.props.renderChildren(this.props)}
            {(this.props.onCancel ||
              this.props.onNegative ||
              this.props.onPositive) && (
              <FlexRow
                style={{
                  marginTop: spacing.LARGEST,
                  justifyContent: 'flex-end'
                }}
              >
                {this.props.onCancel && this.props.textCancel && (
                  <Btn
                    disabled={this.props.loading}
                    onClick={this.props.onCancel}
                    style={{
                      marginRight:
                        (this.props.onNegative && this.props.textNegative) ||
                        (this.props.onPositive && this.props.textPositive)
                          ? spacing.SMALL
                          : '0'
                    }}
                  >
                    {this.props.textCancel}
                  </Btn>
                )}
                {this.props.onNegative && this.props.textNegative && (
                  <Btn
                    negative
                    disabled={this.props.actionRequired || this.props.loading}
                    onClick={this.props.onNegative}
                    style={{
                      marginRight:
                        this.props.onPositive && this.props.textPositive
                          ? spacing.SMALL
                          : '0'
                    }}
                  >
                    {this.props.textNegative}
                  </Btn>
                )}
                {this.props.onPositive && this.props.textPositive && (
                  <Btn
                    positive
                    disabled={this.props.actionRequired || this.props.loading}
                    onClick={this.props.onPositive}
                  >
                    {this.props.textPositive}
                  </Btn>
                )}
              </FlexRow>
            )}
          </FlexCol>
        </ContentWrapper>
      </DialogBackground>
    )
  }
}
