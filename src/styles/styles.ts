import { TextProps } from 'react-native'
import styled from 'styled-components/native'

type TextType = {
  color?: string
  fontFamily?: string
  fontSize?: number
  lineHeight?: number
  textAlign?: 'center' | 'right' | 'left'
} & TextProps

export const Text = styled.Text<TextType>`
  font-size: ${({ fontSize, theme }) => fontSize || theme.fontSize.md22}px;
  line-height: ${({ fontSize, theme, lineHeight }) =>
    lineHeight || 1.5 * (fontSize || theme.fontSize.md22)}px;
  font-family: ${({ fontFamily, theme }) =>
    fontFamily || theme.fontFamily.DMSansRegular};
  color: ${({ color, theme }) => color || theme.colors.white};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`

export const TransparentBtn = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.6,
}))``
