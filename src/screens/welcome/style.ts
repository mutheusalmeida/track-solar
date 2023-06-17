import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0 54px;
  background-color: ${({ theme }) => theme.colors.cyan300};
`

export const Content = styled.View`
  gap: 74px;
  align-items: center;
`

export const ButtonWrapper = styled.View`
  align-self: stretch;
  align-items: center;
  gap: 24px;
  padding: 0 16px;
`
