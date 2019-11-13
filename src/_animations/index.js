import { keyframes } from 'styled-components'

export const flash = keyframes`
  0% { background-color: #5CDC83; }
  100% { background-color: transparent; }
`

export const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`

export const slideUp = keyframes`
  0% { transform: translateY(10px); }
  100% { transform: translateY(0); }
`

export const slideDown = keyframes`
  0% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`

export const bounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
  }
  50% {
    transform: scale(1.0);
  }
`

export const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3) translate3d(0,0,0);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.1);
  }
  80% {
    opacity: 1;
    transform: scale(0.89);
  }
  100% {
    opacity: 1;
    transform: scale(1) translate3d(0,0,0);
  }
`

export const rotate = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`

export const shake = keyframes`
  10%, 90% { transform: translate3d(-2px, 0, 0); }
  20%, 80% { transform: translate3d(4px, 0, 0); }
  30%, 50%, 70% { transform: translate3d(-8px, 0, 0); }
  40%, 60% { transform: translate3d(8px, 0, 0); }
`