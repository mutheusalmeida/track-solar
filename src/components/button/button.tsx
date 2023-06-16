import { ReactNode } from 'react'
import { Text } from '@/styles'
import { useTheme } from 'styled-components/native'
import ArrowIcon from '@/assets/arrow-icon'

import * as S from './style'

type ButtonProps = {
  children: ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  const theme = useTheme()

  return (
    <S.Button>
      <Text color={theme.colors.cyan300}>{children}</Text>

      <S.IconWrapper>
        <ArrowIcon color={theme.colors.cyan300} width={24} height={16} />
      </S.IconWrapper>
    </S.Button>
  )
}
