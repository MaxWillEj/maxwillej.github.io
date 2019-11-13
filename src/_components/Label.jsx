import styled from 'styled-components'

export const Label = styled.pre`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #3f4658;
  white-space: pre-wrap;
  text-overflow: ${props => (props.truncate ? 'ellipsis' : 'clip')};
  overflow: ${props => (props.truncate ? 'hidden' : 'visible')};
`
