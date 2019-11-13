import styled from 'styled-components'

export const Center = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props =>
    props.width ? props.width : props.size ? props.size : 'auto'};
  height: ${props =>
    props.height ? props.height : props.size ? props.size : 'auto'};
`
