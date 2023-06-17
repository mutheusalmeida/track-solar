import { TransparentBtn } from '@/styles'
import { useTheme } from 'styled-components/native'
import { ArrowIcon } from '@/assets/arrow-icon'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import * as S from './style'

export const StackHeader = (props: NativeStackHeaderProps) => {
  const theme = useTheme()

  return (
    <S.Container>
      {props.back ? (
        <TransparentBtn onPress={() => props.navigation.goBack()}>
          <ArrowIcon color={theme.colors.white} />
        </TransparentBtn>
      ) : null}
    </S.Container>
  )
}
