import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

type ButtonType = {
  backgroundColor?: string
  borderColor?: string
  borderRadius?: number
  height?: number
  width?: number
} & TouchableOpacityProps

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))<ButtonType>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.yellow};
  border-radius: ${({ borderRadius }) => `${borderRadius || 10}px`};
  height: ${({ height }) => `${height || 54}px`};
  max-width: 100%;
  width: ${({ width }) => `${width || 328}px`};
  align-items: center;
  justify-content: center;
  position: relative;
`

export const IconWrapper = styled.View`
  position: absolute;
  right: 16px;
  transform: scaleX(-1) rotate(-45deg);
`
