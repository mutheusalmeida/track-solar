import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 0 54px;
  background-color: ${({ theme }) => theme.colors.cyan};
`

export const Slider = styled.View`
  gap: 24px;
`
