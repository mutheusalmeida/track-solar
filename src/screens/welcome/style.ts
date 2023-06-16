import { Text } from '@/styles'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0 54px;
  background-color: ${({ theme }) => theme.colors.cyan};
`

export const Title = styled(Text)`
  width: 308px;
`

export const Content = styled.View`
  gap: 74px;
  align-items: center;
`

export const Slider = styled.View`
  gap: 44px;
  padding: 0 16px;
`
