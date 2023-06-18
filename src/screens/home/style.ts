import { Text } from '@/styles'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  gap: 44px;
  padding: 72px 16px 54px;
  background-color: ${({ theme }) => theme.colors.cyan300};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const User = styled.View``

export const Content = styled.View`
  gap: 24px;
  flex: 1;
  justify-content: space-between;
`

export const BenefitsSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
`

export const BenefitsItem = styled.View`
  align-items: center;
  width: max-content;
  gap: 10px;
`

export const TotalSection = styled.View`
  gap: 16px;
`

export const TotalWrapper = styled.View`
  width: max-content;
  flex-direction: row;
  gap: 10px;
`

export const Unit = styled(Text)`
  margin-top: 13px;
`
