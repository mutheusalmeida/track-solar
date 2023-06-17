import { BaseButtonType } from 'components'
import styled from 'styled-components/native'

type ButtonType = BaseButtonType

export const Button = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.75,
}))<ButtonType>`
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.yellow};
  border-radius: ${({ borderRadius }) => borderRadius || 10}px;
  height: ${({ height }) => height || 54}px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const IconWrapper = styled.View`
  position: absolute;
  right: 16px;
  transform: scaleX(-1) rotate(-40deg);
`
