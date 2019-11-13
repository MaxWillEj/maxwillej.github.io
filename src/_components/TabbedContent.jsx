import React from 'react'
import styled from 'styled-components'
import { FlexRow } from './FlexRow'
import { Image } from './Image'
import { StateComponent } from './base/StateComponent'
import { Label } from './Label'
import { fonts } from '../_styling/fonts'

const breakpointMobile = '1024px'

const Tab = styled.div`
  flex: 1;
  padding: 26px 0 20px;
  border-radius: 14px 14px 0 0;
  background: ${props => (props.active ? '#fff' : 'transparent')};
  cursor: pointer;
  box-shadow: ${props =>
    props.active ? '0 -5px 54px rgba(171,210,217,0.3)' : 'none'};
  position: relative;
  user-select: none;

  /* Mask that hides the lower part of the shadow and straightens out the content corners */
  &::after {
    content: '';
    display: ${props => (props.active ? 'block' : 'none')};
    width: 100%;
    height: 14px;
    background: #fff;
    position: absolute;
    bottom: -14px;
  }

  @media (max-width: ${breakpointMobile}) {
    padding: 12px 0 8px;

    img {
      width: 26px;
      height: 26px;
    }

    .tab-label {
      display: none;
    }
  }
`

const Content = styled(FlexRow)`
  background: #fff;
  padding: 20px 20px;
  border-radius: 14px;
  box-shadow: 0 8px 54px rgba(171, 210, 217, 0.5);
`

export class TabbedContent extends StateComponent {
  state = {
    currentTab: 0
  }

  renderTab = (item, index) => {
    return (
      <Tab
        key={item.title}
        active={this.state.currentTab === index}
        onClick={() => this.op.state('currentTab', index)}
      >
        <Image src={item.icon} size="44px" />
        <Label
          className="tab-label"
          style={{
            marginTop: '4px',
            font: `500 13px ${fonts.MAIN}`,
            color: '#666E83'
          }}
        >
          {item.title}
        </Label>
      </Tab>
    )
  }

  render() {
    const { items } = this.props

    return (
      <div style={this.props.style}>
        <FlexRow>{items.map(this.renderTab)}</FlexRow>
        <Content>{items[this.state.currentTab].content}</Content>
      </div>
    )
  }
}
