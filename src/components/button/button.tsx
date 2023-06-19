import { Text } from '@/styles'
import { useTheme } from 'styled-components/native'
import type { BaseButtonType } from 'components'
import { ArrowIcon } from '@/assets/arrow-icon'

import * as S from './style'

type ButtonProps = { isLoading?: boolean } & BaseButtonType

export const Button = ({
  backgroundColor,
  borderColor,
  borderRadius,
  height,
  width,
  children,
  isLoading,
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
      disabled={isLoading}
      {...rest}
    >
      <Text color={theme.colors.cyan300}>{children}</Text>

      <S.IconWrapper>
        <ArrowIcon color={theme.colors.cyan300} width={24} height={16} />
      </S.IconWrapper>
    </S.Button>
  )
}
