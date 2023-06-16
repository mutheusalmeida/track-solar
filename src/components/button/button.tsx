import { ReactNode } from 'react'
import { Text } from '@/styles'
import { useTheme } from 'styled-components/native'
import ArrowIcon from '@/assets/arrow-icon'
import { TouchableOpacityProps } from 'react-native'

import * as S from './style'

export type ButtonProps = {
  children: ReactNode
  backgroundColor?: string
  borderColor?: string
  borderRadius?: number
  height?: number
  width?: number
} & Omit<TouchableOpacityProps, 'activeOpacity'>

export const Button = ({
  backgroundColor,
  borderColor,
  borderRadius,
  height,
  width,
  children,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()

  return (
    <S.Button
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      height={height}
      width={width}
      {...rest}
    >
      <Text color={theme.colors.cyan300}>{children}</Text>

      <S.IconWrapper>
        <ArrowIcon color={theme.colors.cyan300} width={24} height={16} />
      </S.IconWrapper>
    </S.Button>
  )
}
